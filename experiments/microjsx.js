/*
 * A tiny JSX compiler
 * Author: Matthew Levenstein
 * License: MIT
 */

(function (window) {
  function Compiler(code, replace) {
    this.out = "";
    this.d = code;
    this.i = 0;
    this.eof = code.length;
    this.token = {
      type: "TK_START",
    };
    this.cache = {
      token: { type: undefined, data: undefined },
      prev: { type: undefined, data: undefined },
      i: undefined,
      oi: undefined,
    };
    this.prev = undefined;
    this.write = true;
    this.replace = replace;
  }

  function is_space(c) {
    return c === " " || c === "\t" || c === "\n";
  }

  function is_numeric(c) {
    c = c.charCodeAt(0);
    return c >= 48 && c <= 57;
  }

  function is_alpha(c) {
    c = c.charCodeAt(0);
    return (c >= 65 && c <= 90) || (c >= 97 && c <= 122);
  }

  function escape(str) {
    var out = "";
    for (var i = 0, l = str.length; i < l; i++) {
      if (str[i] === "'") out += "\\";
      out += str[i];
    }
    return out;
  }

  function prepare(str) {
    return escape(str.trim().replace(/&nbsp;/g, " "));
  }

  function error(e) {
    console.log(e);
    process.exit();
  }

  Compiler.prototype.is_valid_char = function () {
    var c = this.d[this.i];
    return (
      c !== undefined &&
      (is_alpha(c) || is_numeric(c) || c === "-" || c === "_" || c === "$")
    );
  };

  Compiler.prototype.restore = function () {
    this.token.type = this.cache.token.type;
    this.token.data = this.cache.token.data;
    this.prev.type = this.cache.prev.type;
    this.prev.data = this.cache.prev.data;
    this.i = this.cache.i;
  };

  Compiler.prototype.save = function () {
    this.cache.token.type = this.token.type;
    this.cache.token.data = this.token.data;
    this.cache.prev.type = this.prev.type;
    this.cache.prev.data = this.prev.data;
    this.cache.i = this.i;
  };

  Compiler.prototype.inc = function () {
    if (this.write) {
      var i = this.i++;
      this.out += this.d[i];
      return i;
    } else {
      return this.i++;
    }
  };

  Compiler.prototype.emit = function (code) {
    this.out += code;
  };

  Compiler.prototype.parse_identifier = function () {
    var id = "";
    while (this.is_valid_char()) {
      id += this.d[this.inc()];
    }
    return id;
  };

  Compiler.prototype.parse_string = function (del) {
    var str = "";
    while (this.i < this.eof) {
      if (
        this.d[this.i] !== del ||
        (this.d[this.i] === del && this.d[this.i - 1] === "\\")
      )
        str += this.d[this.inc()];
      else break;
    }
    this.inc();
    return str;
  };

  Compiler.prototype.next = function () {
    var _d = this.d;
    var tokens = {
      "<": "TK_LT",
      ">": "TK_GT",
      "=": "TK_EQ",
      "{": "TK_LB",
      "}": "TK_RB",
      ")": "TK_RP",
      "]": "TK_RBR",
    };
    this.prev = this.token;
    while (this.i < this.eof) {
      var c = _d[this.i];
      switch (c) {
        case "<":
        case ">":
        case "=":
        case "{":
        case "}":
        case ")":
        case "]":
          {
            this.inc();
            this.token = {
              type: tokens[c],
              data: c,
            };
          }
          return;
        case '"':
        case "'":
        case "`":
          {
            if (this.i >= this.eof) {
              break;
            }
            this.inc();
            this.token = {
              type: "TK_STR",
              data: this.parse_string(c),
            };
          }
          return;
        case "/":
          {
            if (this.i >= this.eof) {
              break;
            }
            var c1 = _d[this.inc() + 1];
            if (c1 === "/") {
              while (this.i < this.eof && _d[this.i] !== "\n") {
                this.inc();
              }
              this.inc();
              this.token = {
                type: "TK_COM",
              };
            } else if (c1 === "*") {
              while (this.i < this.eof - 1) {
                if (_d[this.i] === "*" && _d[this.i + 1] === "/") break;
              }
              this.inc();
              this.token = {
                type: "TK_COM",
              };
            } else {
              this.token = {
                type: "TK_FS",
              };
            }
          }
          return;
        default: {
          if (is_alpha(c) || c === "-" || c === "_" || c === "$") {
            this.token = {
              type: "TK_NM",
              data: this.parse_identifier(),
            };
            return;
          } else if (is_space(c)) {
            this.inc();
          } else {
            this.inc();
            this.token = {
              data: c,
              type: "TK_SYS",
            };
            return;
          }
        }
      }
    }
    this.token = {
      type: "TK_EOF",
    };
  };

  Compiler.prototype.accept = function (t) {
    if (this.token.type === t) {
      this.next();
      return true;
    } else {
      return false;
    }
  };

  Compiler.prototype.expect = function (t) {
    if (this.token.type === t) {
      this.next();
    } else {
      error("Unexpected token: " + this.token.type + ", Expected: " + t);
    }
  };

  Compiler.prototype.tag_body = function (name) {
    this.emit(", ");
    if (this.token.type === "TK_LB") {
      this.emit("(");
      this.write = true;
    }
    if (this.accept("TK_LB")) {
      this.jsexpr();
      this.emit(")");
      this.tag_body(name);
    } else if (this.accept("TK_LT")) {
      this.save();
      if (!this.accept("TK_FS")) {
        this.parse_tag(true);
        this.tag_body(name);
      } else {
        // the tag body is over
        this.restore();
        this.out = this.out.slice(0, -2);
      }
    } else {
      var inner = this.token.data;
      while (
        this.d[this.i] !== "{" &&
        this.d[this.i] !== "<" &&
        this.i < this.eof
      ) {
        if (this.d[this.i] !== "\n") inner += this.d[this.inc()];
        else this.inc();
      }
      this.next();
      this.emit("'" + prepare(inner) + "'");
      if (this.i < this.eof - 1) this.tag_body(name);
    }
  };

  Compiler.prototype.tag_close = function (name) {
    if (this.accept("TK_FS")) {
      this.expect("TK_GT");
    } else {
      this.expect("TK_GT");
      this.tag_body(name);
      this.expect("TK_FS");
      this.expect("TK_NM");
      if (this.prev.data !== name) {
        error("Expected closing tag for " + name);
      }
      this.expect("TK_GT");
    }
  };

  Compiler.prototype.jsexpr = function () {
    if (this.node_list(true) === false) {
      error("Expected }");
    } else {
      this.expect("TK_RB");
    }
  };

  Compiler.prototype.params = function (first) {
    if (this.token.type === "TK_FS" || this.token.type === "TK_GT") {
      if (!first) this.emit("}");
      else this.emit("null");
      return;
    }
    if (first) {
      this.emit("{");
    } else {
      this.emit(", ");
    }
    if (this.accept("TK_NM")) {
      var k = this.prev.data;
      var v = undefined;
      this.emit("'" + k + "': ");
      if (this.accept("TK_EQ")) {
        if (this.token.type === "TK_LB") {
          this.emit("(");
          this.write = true;
        }
        if (this.accept("TK_STR")) {
          v = "'" + escape(this.prev.data) + "'";
        } else if (this.accept("TK_LB")) {
          this.jsexpr();
          this.emit(")");
        } else {
          error("Unexpected token: " + this.token.data || this.token.type);
        }
      } else {
        v = true;
      }
      if (v) this.emit(v);
      this.params();
    }
  };

  function isUpper(c) {
    return c === c.toUpperCase();
  }

  Compiler.prototype.parse_tag = function (inBody) {
    this.expect("TK_NM");
    var name = this.prev.data;
    this.emit(
      this.replace + "(" + (isUpper(name[0]) ? name : "'" + name + "'") + ", ",
    );
    this.params(true);
    this.tag_close(name);
    this.emit(")");
    // don't do this if it's part of innertext
    if (inBody) {
      return;
    }
    if (this.token.data && this.token.data !== "<" && this.token.data !== "{") {
      if (this.token.data === "return") {
        this.emit("\n");
      }
      this.emit(this.token.data);
    }
  };

  Compiler.prototype.possible_tag = function () {
    if (this.token.type === "TK_LT" && this.prev !== undefined) {
      if (
        !(this.prev.type === "TK_NM" && this.prev.data !== "return") &&
        !(this.prev.type === "TK_RP") &&
        !(this.prev.type === "TK_RBR")
      ) {
        this.out = this.out.slice(0, -1); // remove trailing <
        this.write = false;
        this.next();
        this.parse_tag();
        this.write = true;
      } else {
        this.next();
      }
    } else {
      this.next();
    }
  };

  Compiler.prototype.node_list = function (expr) {
    // if called from within a javascript expression
    if (expr) {
      if (this.token.type === "TK_RB") {
        this.out = this.out.slice(0, -1); // remove trailing }
        this.write = false;
        this.emit("undefined");
        return true;
      }
      var count = -1;
      while (this.token.type !== "TK_EOF") {
        if (this.token.type === "TK_LB") count--;
        if (this.token.type === "TK_RB") count++;
        if (count === 0) {
          this.out = this.out.slice(0, -1); // remove trailing }
          this.write = false;
          return true;
        }
        this.possible_tag();
      }
      return false;
    }
    while (this.token.type !== "TK_EOF") {
      this.possible_tag();
    }
    return true;
  };

  Compiler.prototype.root = function (expr) {
    this.node_list(false);
  };

  Compiler.prototype.run = function () {
    this.next();
    this.root();
  };

  function _compile(code, replace) {
    var compiler = new Compiler(code, replace);
    compiler.run();
    return compiler.out;
  }

  if ("undefined" === typeof module) {
    window.CompileJSX = _compile;
  } else {
    module.exports = _compile;
  }
})(this);
