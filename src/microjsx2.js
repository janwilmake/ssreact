(function (window) {
  function JSXCompiler(code, replaceFunc = "React.createElement") {
    if (!(this instanceof JSXCompiler)) {
      return new JSXCompiler(code, replaceFunc);
    }

    this.code = code;
    this.replaceFunc = replaceFunc;
    this.pos = 0;
    this.output = "";
    this.length = code.length;
  }

  JSXCompiler.prototype = {
    isWhitespace(char) {
      return /\s/.test(char);
    },

    isValidIdentifierChar(char) {
      return /[$\w-]/.test(char);
    },

    peek(offset = 0) {
      return this.code[this.pos + offset];
    },

    advance() {
      if (this.pos < this.length) {
        this.output += this.code[this.pos];
      }
      return this.code[this.pos++];
    },

    // New method to properly handle UTF-16 surrogate pairs for emojis
    getNextCodePoint() {
      const first = this.code.charCodeAt(this.pos);
      // Check if this is a high surrogate
      if (first >= 0xd800 && first <= 0xdbff && this.pos + 1 < this.length) {
        const second = this.code.charCodeAt(this.pos + 1);
        // Check if next char is a low surrogate
        if (second >= 0xdc00 && second <= 0xdfff) {
          // Advance twice for surrogate pair
          this.pos += 2;
          // Combine surrogate pair
          return String.fromCodePoint(
            ((first - 0xd800) << 10) + (second - 0xdc00) + 0x10000,
          );
        }
      }
      // Single character
      this.pos++;
      return String.fromCodePoint(first);
    },

    encodeString(str) {
      let result = "";
      let i = 0;
      while (i < str.length) {
        const char = str[i];
        if (char === '"' || char === "\\") {
          result += "\\" + char;
          i++;
          continue;
        }

        // Handle surrogate pairs for emojis
        const code = str.codePointAt(i);
        if (code > 0xffff) {
          result += str.slice(i, i + 2);
          i += 2;
        } else {
          result += char;
          i++;
        }
      }
      return result;
    },

    skipWhitespace() {
      while (this.pos < this.length && this.isWhitespace(this.peek())) {
        this.advance();
      }
    },

    parseIdentifier() {
      let identifier = "";
      while (
        this.pos < this.length &&
        this.isValidIdentifierChar(this.peek())
      ) {
        identifier += this.advance();
      }
      return identifier;
    },

    parseString(delimiter) {
      let str = "";
      this.advance(); // Skip opening quote
      while (this.pos < this.length) {
        if (this.peek() === delimiter && this.peek(-1) !== "\\") break;

        // Handle escape sequences
        if (this.peek() === "\\") {
          str += this.advance(); // Keep the backslash
          if (this.pos < this.length) {
            str += this.advance(); // Keep the escaped character
          }
          continue;
        }

        // Handle potential emoji or other Unicode characters
        const code = this.code.codePointAt(this.pos);
        if (code > 0xffff) {
          // This is a surrogate pair (emoji or other special character)
          str += this.code.slice(this.pos, this.pos + 2);
          this.pos += 2;
        } else {
          str += this.advance();
        }
      }
      this.advance(); // Skip closing quote
      return str;
    },

    parseJSExpression() {
      let depth = 1;
      let expr = "";
      while (this.pos < this.length && depth > 0) {
        const char = this.peek();
        if (char === "{") depth++;
        if (char === "}") depth--;
        if (depth > 0) {
          // Handle potential emoji in expressions
          const code = this.code.codePointAt(this.pos);
          if (code > 0xffff) {
            expr += this.code.slice(this.pos, this.pos + 2);
            this.pos += 2;
          } else {
            expr += this.advance();
          }
        }
      }
      return expr;
    },

    parseTagAttributes() {
      const attrs = [];

      while (this.pos < this.length) {
        this.skipWhitespace();
        if (this.peek() === ">" || this.peek() === "/" || this.peek() === "{")
          break;

        const attrName = this.parseIdentifier();
        if (!attrName) break;

        let attrValue;

        this.skipWhitespace();
        if (this.peek() === "=") {
          this.advance(); // Skip =
          this.skipWhitespace();

          if (this.peek() === "{") {
            this.advance(); // Skip opening {
            attrValue = this.parseJSExpression();
            this.advance(); // Skip closing }
            attrs.push(`"${attrName}": ${attrValue}`);
          } else if (this.peek() === '"' || this.peek() === "'") {
            const quote = this.peek();
            attrValue = this.parseString(quote);
            attrs.push(`"${attrName}": "${this.encodeString(attrValue)}"`);
          }
        } else {
          attrs.push(`"${attrName}": true`);
        }
      }

      return `{${attrs.join(", ")}}`;
    },

    parseTag() {
      this.advance(); // Skip <
      const tagName = this.parseIdentifier();
      const isComponent = tagName[0] === tagName[0].toUpperCase();

      let output = `${this.replaceFunc}(${
        isComponent ? tagName : `"${tagName}"`
      }`;

      this.skipWhitespace();
      const attrs = this.parseTagAttributes();
      output += `, ${attrs}`;

      if (this.peek() === "/") {
        this.advance();
        this.advance(); // Skip />
        output += `, null)`;
      } else {
        this.advance(); // Skip >
        const children = [];

        while (this.pos < this.length) {
          if (this.peek() === "<" && this.peek(1) === "/") {
            break;
          }

          if (this.peek() === "{") {
            this.advance(); // Skip {
            const expr = this.parseJSExpression();
            this.advance(); // Skip }
            if (expr.trim()) {
              children.push(expr);
            }
          } else if (this.peek() === "<") {
            children.push(this.parseTag());
          } else {
            let text = "";
            while (
              this.pos < this.length &&
              this.peek() !== "<" &&
              this.peek() !== "{"
            ) {
              // Handle potential emoji in text content
              const code = this.code.codePointAt(this.pos);
              if (code > 0xffff) {
                text += this.code.slice(this.pos, this.pos + 2);
                this.pos += 2;
              } else {
                text += this.advance();
              }
            }
            if (text.trim()) {
              children.push(`"${this.encodeString(text.trim())}"`);
            }
          }
        }

        // Skip closing tag
        this.pos += tagName.length + 3; // </tagName>

        if (children.length === 0) {
          output += `, null)`;
        } else if (children.length === 1) {
          output += `, ${children[0]})`;
        } else {
          output += `, [${children.join(", ")}])`;
        }
      }

      return output;
    },

    compile() {
      let output = "";
      while (this.pos < this.length) {
        if (this.peek() === "<") {
          output += this.parseTag();
        } else {
          // Handle potential emoji in non-tag content
          const code = this.code.codePointAt(this.pos);
          if (code > 0xffff) {
            output += this.code.slice(this.pos, this.pos + 2);
            this.pos += 2;
          } else {
            output += this.advance();
          }
        }
      }
      return output;
    },
  };

  function compile(code, replaceFunc) {
    return new JSXCompiler(code, replaceFunc).compile();
  }

  if (typeof module !== "undefined") {
    module.exports = compile;
  } else {
    window.compileJSX = compile;
  }
})(typeof self !== "undefined" ? self : this);
