!function(n,l){"object"==typeof exports&&"undefined"!=typeof module?l(exports):"function"==typeof define&&define.amd?define(["exports"],l):l((n||self).preact={})}(this,function(n){var l,u,t,i,e,r,o,f,c,s,a,h,p,y="http://www.w3.org/2000/svg",v="http://www.w3.org/1999/xhtml",d=void 0,w={},_=[],g=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,m=Array.isArray;function b(n,l){for(var u in l)n[u]=l[u];return n}function k(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function x(n,u,t){var i,e,r,o={};for(r in u)"key"==r?i=u[r]:"ref"==r?e=u[r]:o[r]=u[r];if(arguments.length>2&&(o.children=arguments.length>3?l.call(arguments,2):t),"function"==typeof n&&null!=n.defaultProps)for(r in n.defaultProps)o[r]===d&&(o[r]=n.defaultProps[r]);return S(n,o,i,e,null)}function S(n,l,i,e,r){var o={type:n,props:l,key:i,ref:e,__k:null,__:null,__b:0,__e:null,__c:null,constructor:d,__v:null==r?++t:r,__i:-1,__u:0};return null==r&&null!=u.vnode&&u.vnode(o),o}function C(n){return n.children}function M(n,l){this.props=n,this.context=l}function P(n,l){if(null==l)return n.__?P(n.__,n.__i+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?P(n):null}function T(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return T(n)}}function $(n){(!n.__d&&(n.__d=!0)&&e.push(n)&&!I.__r++||r!==u.debounceRendering)&&((r=u.debounceRendering)||o)(I)}function I(){var n,l,t,i,r,o,c,s;for(e.sort(f);n=e.shift();)n.__d&&(l=e.length,i=void 0,o=(r=(t=n).__v).__e,c=[],s=[],t.__P&&((i=b({},r)).__v=r.__v+1,u.vnode&&u.vnode(i),N(t.__P,i,r,t.__n,t.__P.namespaceURI,32&r.__u?[o]:null,c,null==o?P(r):o,!!(32&r.__u),s),i.__v=r.__v,i.__.__k[i.__i]=i,V(c,i,s),i.__e!=o&&T(i)),e.length>l&&e.sort(f));I.__r=0}function A(n,l,u,t,i,e,r,o,f,c,s){var a,h,p,y,v,g,m=t&&t.__k||_,b=l.length;for(f=H(u,l,m,f,b),a=0;a<b;a++)null!=(p=u.__k[a])&&(h=-1===p.__i?w:m[p.__i]||w,p.__i=a,g=N(n,p,h,i,e,r,o,f,c,s),y=p.__e,p.ref&&h.ref!=p.ref&&(h.ref&&B(h.ref,null,p),s.push(p.ref,p.__c||y,p)),null==v&&null!=y&&(v=y),4&p.__u||h.__k===p.__k?f=L(p,f,n):"function"==typeof p.type&&g!==d?f=g:y&&(f=y.nextSibling),p.__u&=-7);return u.__e=v,f}function H(n,l,u,t,i){var e,r,o,f,c,s=u.length,a=s,h=0;for(n.__k=new Array(i),e=0;e<i;e++)null!=(r=l[e])&&"boolean"!=typeof r&&"function"!=typeof r?(f=e+h,(r=n.__k[e]="string"==typeof r||"number"==typeof r||"bigint"==typeof r||r.constructor==String?S(null,r,null,null,null):m(r)?S(C,{children:r},null,null,null):r.constructor===d&&r.__b>0?S(r.type,r.props,r.key,r.ref?r.ref:null,r.__v):r).__=n,r.__b=n.__b+1,o=null,-1!==(c=r.__i=j(r,u,f,a))&&(a--,(o=u[c])&&(o.__u|=2)),null==o||null===o.__v?(-1==c&&h--,"function"!=typeof r.type&&(r.__u|=4)):c!=f&&(c==f-1?h--:c==f+1?h++:(c>f?h--:h++,r.__u|=4))):n.__k[e]=null;if(a)for(e=0;e<s;e++)null!=(o=u[e])&&0==(2&o.__u)&&(o.__e==t&&(t=P(o)),D(o,o));return t}function L(n,l,u){var t,i;if("function"==typeof n.type){for(t=n.__k,i=0;t&&i<t.length;i++)t[i]&&(t[i].__=n,l=L(t[i],l,u));return l}n.__e!=l&&(l&&n.type&&!u.contains(l)&&(l=P(n)),u.insertBefore(n.__e,l||null),l=n.__e);do{l=l&&l.nextSibling}while(null!=l&&8==l.nodeType);return l}function j(n,l,u,t){var i,e,r=n.key,o=n.type,f=l[u];if(null===f||f&&r==f.key&&o===f.type&&0==(2&f.__u))return u;if(t>(null!=f&&0==(2&f.__u)?1:0))for(i=u-1,e=u+1;i>=0||e<l.length;){if(i>=0){if((f=l[i])&&0==(2&f.__u)&&r==f.key&&o===f.type)return i;i--}if(e<l.length){if((f=l[e])&&0==(2&f.__u)&&r==f.key&&o===f.type)return e;e++}}return-1}function F(n,l,u){"-"==l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||g.test(l)?u:u+"px"}function O(n,l,u,t,i){var e;n:if("style"==l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof t&&(n.style.cssText=t=""),t)for(l in t)u&&l in u||F(n.style,l,"");if(u)for(l in u)t&&u[l]===t[l]||F(n.style,l,u[l])}else if("o"==l[0]&&"n"==l[1])e=l!=(l=l.replace(c,"$1")),l=l.toLowerCase()in n||"onFocusOut"==l||"onFocusIn"==l?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+e]=u,u?t?u.u=t.u:(u.u=s,n.addEventListener(l,e?h:a,e)):n.removeEventListener(l,e?h:a,e);else{if(i==y)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=l&&"height"!=l&&"href"!=l&&"list"!=l&&"form"!=l&&"tabIndex"!=l&&"download"!=l&&"rowSpan"!=l&&"colSpan"!=l&&"role"!=l&&"popover"!=l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&"-"!=l[4]?n.removeAttribute(l):n.setAttribute(l,"popover"==l&&1==u?"":u))}}function z(n){return function(l){if(this.l){var t=this.l[l.type+n];if(null==l.t)l.t=s++;else if(l.t<t.u)return;return t(u.event?u.event(l):l)}}}function N(n,l,t,i,e,r,o,f,c,s){var a,h,p,y,v,w,_,g,x,S,P,T,$,I,H,L,j,F=l.type;if(l.constructor!==d)return null;128&t.__u&&(c=!!(32&t.__u),r=[f=l.__e=t.__e]),(a=u.__b)&&a(l);n:if("function"==typeof F)try{if(g=l.props,x="prototype"in F&&F.prototype.render,S=(a=F.contextType)&&i[a.__c],P=a?S?S.props.value:a.__:i,t.__c?_=(h=l.__c=t.__c).__=h.__E:(x?l.__c=h=new F(g,P):(l.__c=h=new M(g,P),h.constructor=F,h.render=E),S&&S.sub(h),h.props=g,h.state||(h.state={}),h.context=P,h.__n=i,p=h.__d=!0,h.__h=[],h._sb=[]),x&&null==h.__s&&(h.__s=h.state),x&&null!=F.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=b({},h.__s)),b(h.__s,F.getDerivedStateFromProps(g,h.__s))),y=h.props,v=h.state,h.__v=l,p)x&&null==F.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),x&&null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(x&&null==F.getDerivedStateFromProps&&g!==y&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(g,P),!h.__e&&(null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(g,h.__s,P)||l.__v==t.__v)){for(l.__v!=t.__v&&(h.props=g,h.state=h.__s,h.__d=!1),l.__e=t.__e,l.__k=t.__k,l.__k.some(function(n){n&&(n.__=l)}),T=0;T<h._sb.length;T++)h.__h.push(h._sb[T]);h._sb=[],h.__h.length&&o.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(g,h.__s,P),x&&null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(y,v,w)})}if(h.context=P,h.props=g,h.__P=n,h.__e=!1,$=u.__r,I=0,x){for(h.state=h.__s,h.__d=!1,$&&$(l),a=h.render(h.props,h.state,h.context),H=0;H<h._sb.length;H++)h.__h.push(h._sb[H]);h._sb=[]}else do{h.__d=!1,$&&$(l),a=h.render(h.props,h.state,h.context),h.state=h.__s}while(h.__d&&++I<25);h.state=h.__s,null!=h.getChildContext&&(i=b(b({},i),h.getChildContext())),x&&!p&&null!=h.getSnapshotBeforeUpdate&&(w=h.getSnapshotBeforeUpdate(y,v)),f=A(n,m(L=null!=a&&a.type===C&&null==a.key?a.props.children:a)?L:[L],l,t,i,e,r,o,f,c,s),h.base=l.__e,l.__u&=-161,h.__h.length&&o.push(h),_&&(h.__E=h.__=null)}catch(n){if(l.__v=null,c||null!=r)if(n.then){for(l.__u|=c?160:128;f&&8==f.nodeType&&f.nextSibling;)f=f.nextSibling;r[r.indexOf(f)]=null,l.__e=f}else for(j=r.length;j--;)k(r[j]);else l.__e=t.__e,l.__k=t.__k;u.__e(n,l,t)}else null==r&&l.__v==t.__v?(l.__k=t.__k,l.__e=t.__e):f=l.__e=q(t.__e,l,t,i,e,r,o,c,s);return(a=u.diffed)&&a(l),128&l.__u?void 0:f}function V(n,l,t){for(var i=0;i<t.length;i++)B(t[i],t[++i],t[++i]);u.__c&&u.__c(l,n),n.some(function(l){try{n=l.__h,l.__h=[],n.some(function(n){n.call(l)})}catch(n){u.__e(n,l.__v)}})}function q(n,t,i,e,r,o,f,c,s){var a,h,p,_,g,b,x,S=i.props,C=t.props,M=t.type;if("svg"==M?r=y:"math"==M?r="http://www.w3.org/1998/Math/MathML":r||(r=v),null!=o)for(a=0;a<o.length;a++)if((g=o[a])&&"setAttribute"in g==!!M&&(M?g.localName==M:3==g.nodeType)){n=g,o[a]=null;break}if(null==n){if(null==M)return document.createTextNode(C);n=document.createElementNS(r,M,C.is&&C),c&&(u.__m&&u.__m(t,o),c=!1),o=null}if(null===M)S===C||c&&n.data===C||(n.data=C);else{if(o=o&&l.call(n.childNodes),S=i.props||w,!c&&null!=o)for(S={},a=0;a<n.attributes.length;a++)S[(g=n.attributes[a]).name]=g.value;for(a in S)if(g=S[a],"children"==a);else if("dangerouslySetInnerHTML"==a)p=g;else if(!(a in C)){if("value"==a&&"defaultValue"in C||"checked"==a&&"defaultChecked"in C)continue;O(n,a,null,g,r)}for(a in C)g=C[a],"children"==a?_=g:"dangerouslySetInnerHTML"==a?h=g:"value"==a?b=g:"checked"==a?x=g:c&&"function"!=typeof g||S[a]===g||O(n,a,g,S[a],r);if(h)c||p&&(h.__html===p.__html||h.__html===n.innerHTML)||(n.innerHTML=h.__html),t.__k=[];else if(p&&(n.innerHTML=""),A(n,m(_)?_:[_],t,i,e,"foreignObject"==M?v:r,o,f,o?o[0]:i.__k&&P(i,0),c,s),null!=o)for(a=o.length;a--;)k(o[a]);c||(a="value","progress"==M&&null==b?n.removeAttribute("value"):b!==d&&(b!==n[a]||"progress"==M&&!b||"option"==M&&b!==S[a])&&O(n,a,b,S[a],r),a="checked",x!==d&&x!==n[a]&&O(n,a,x,S[a],r))}return n}function B(n,l,t){try{if("function"==typeof n){var i="function"==typeof n.__u;i&&n.__u(),i&&null==l||(n.__u=n(l))}else n.current=l}catch(n){u.__e(n,t)}}function D(n,l,t){var i,e;if(u.unmount&&u.unmount(n),(i=n.ref)&&(i.current&&i.current!==n.__e||B(i,null,l)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(n){u.__e(n,l)}i.base=i.__P=null}if(i=n.__k)for(e=0;e<i.length;e++)i[e]&&D(i[e],l,t||"function"!=typeof n.type);t||k(n.__e),n.__c=n.__=n.__e=d}function E(n,l,u){return this.constructor(n,u)}function G(n,t,i){var e,r,o,f;t==document&&(t=document.documentElement),u.__&&u.__(n,t),r=(e="function"==typeof i)?null:i&&i.__k||t.__k,o=[],f=[],N(t,n=(!e&&i||t).__k=x(C,null,[n]),r||w,w,t.namespaceURI,!e&&i?[i]:r?null:t.firstChild?l.call(t.childNodes):null,o,!e&&i?i:r?r.__e:t.firstChild,e,f),V(o,n,f)}l=_.slice,u={__e:function(n,l,u,t){for(var i,e,r;l=l.__;)if((i=l.__c)&&!i.__)try{if((e=i.constructor)&&null!=e.getDerivedStateFromError&&(i.setState(e.getDerivedStateFromError(n)),r=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,t||{}),r=i.__d),r)return i.__E=i}catch(l){n=l}throw n}},t=0,i=function(n){return null!=n&&n.constructor==d},M.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=b({},this.state),"function"==typeof n&&(n=n(b({},u),this.props)),n&&b(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),$(this))},M.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),$(this))},M.prototype.render=C,e=[],o="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f=function(n,l){return n.__v.__b-l.__v.__b},I.__r=0,c=/(PointerCapture)$|Capture$/i,s=0,a=z(!1),h=z(!0),p=0,n.Component=M,n.Fragment=C,n.cloneElement=function(n,u,t){var i,e,r,o,f=b({},n.props);for(r in n.type&&n.type.defaultProps&&(o=n.type.defaultProps),u)"key"==r?i=u[r]:"ref"==r?e=u[r]:f[r]=u[r]===d&&o!==d?o[r]:u[r];return arguments.length>2&&(f.children=arguments.length>3?l.call(arguments,2):t),S(n.type,f,i||n.key,e||n.ref,null)},n.createContext=function(n,l){var u={__c:l="__cC"+p++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,t;return this.getChildContext||(u=new Set,(t={})[l]=this,this.getChildContext=function(){return t},this.componentWillUnmount=function(){u=null},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.forEach(function(n){n.__e=!0,$(n)})},this.sub=function(n){u.add(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u&&u.delete(n),l&&l.call(n)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u},n.createElement=x,n.createRef=function(){return{current:null}},n.h=x,n.hydrate=function n(l,u){G(l,u,n)},n.isValidElement=i,n.options=u,n.render=G,n.toChildArray=function n(l,u){return u=u||[],null==l||"boolean"==typeof l||(m(l)?l.some(function(l){n(l,u)}):u.push(l)),u}});
//# sourceMappingURL=preact.umd.js.map


!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("preact")):"function"==typeof define&&define.amd?define(["exports","preact"],t):t((n||self).preactHooks={},n.preact)}(this,function(n,t){var u,r,i,o,f=0,c=[],e=t.options,a=e.__b,v=e.__r,l=e.diffed,d=e.__c,s=e.unmount,p=e.__;function h(n,t){e.__h&&e.__h(r,n,f||t),f=0;var u=r.__H||(r.__H={__:[],__h:[]});return n>=u.__.length&&u.__.push({}),u.__[n]}function y(n){return f=1,m(j,n)}function m(n,t,i){var o=h(u++,2);if(o.t=n,!o.__c&&(o.__=[i?i(t):j(void 0,t),function(n){var t=o.__N?o.__N[0]:o.__[0],u=o.t(t,n);t!==u&&(o.__N=[u,o.__[1]],o.__c.setState({}))}],o.__c=r,!r.u)){var f=function(n,t,u){if(!o.__c.__H)return!0;var r=o.__c.__H.__.filter(function(n){return!!n.__c});if(r.every(function(n){return!n.__N}))return!c||c.call(this,n,t,u);var i=o.__c.props!==n;return r.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=!0)}}),c&&c.call(this,n,t,u)||i};r.u=!0;var c=r.shouldComponentUpdate,e=r.componentWillUpdate;r.componentWillUpdate=function(n,t,u){if(this.__e){var r=c;c=void 0,f(n,t,u),c=r}e&&e.call(this,n,t,u)},r.shouldComponentUpdate=f}return o.__N||o.__}function T(n,t){var i=h(u++,4);!e.__s&&g(i.__H,t)&&(i.__=n,i.i=t,r.__h.push(i))}function _(n,t){var r=h(u++,7);return g(r.__H,t)&&(r.__=n(),r.__H=t,r.__h=n),r.__}function b(){for(var n;n=c.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(A),n.__H.__h.forEach(F),n.__H.__h=[]}catch(t){n.__H.__h=[],e.__e(t,n.__v)}}e.__b=function(n){r=null,a&&a(n)},e.__=function(n,t){n&&t.__k&&t.__k.__m&&(n.__m=t.__k.__m),p&&p(n,t)},e.__r=function(n){v&&v(n),u=0;var t=(r=n.__c).__H;t&&(i===r?(t.__h=[],r.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.i=n.__N=void 0})):(t.__h.forEach(A),t.__h.forEach(F),t.__h=[],u=0)),i=r},e.diffed=function(n){l&&l(n);var t=n.__c;t&&t.__H&&(t.__H.__h.length&&(1!==c.push(t)&&o===e.requestAnimationFrame||((o=e.requestAnimationFrame)||x)(b)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.i=void 0})),i=r=null},e.__c=function(n,t){t.some(function(n){try{n.__h.forEach(A),n.__h=n.__h.filter(function(n){return!n.__||F(n)})}catch(u){t.some(function(n){n.__h&&(n.__h=[])}),t=[],e.__e(u,n.__v)}}),d&&d(n,t)},e.unmount=function(n){s&&s(n);var t,u=n.__c;u&&u.__H&&(u.__H.__.forEach(function(n){try{A(n)}catch(n){t=n}}),u.__H=void 0,t&&e.__e(t,u.__v))};var q="function"==typeof requestAnimationFrame;function x(n){var t,u=function(){clearTimeout(r),q&&cancelAnimationFrame(t),setTimeout(n)},r=setTimeout(u,100);q&&(t=requestAnimationFrame(u))}function A(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t}function F(n){var t=r;n.__c=n.__(),r=t}function g(n,t){return!n||n.length!==t.length||t.some(function(t,u){return t!==n[u]})}function j(n,t){return"function"==typeof t?t(n):t}n.useCallback=function(n,t){return f=8,_(function(){return n},t)},n.useContext=function(n){var t=r.context[n.__c],i=h(u++,9);return i.c=n,t?(null==i.__&&(i.__=!0,t.sub(r)),t.props.value):n.__},n.useDebugValue=function(n,t){e.useDebugValue&&e.useDebugValue(t?t(n):n)},n.useEffect=function(n,t){var i=h(u++,3);!e.__s&&g(i.__H,t)&&(i.__=n,i.i=t,r.__H.__h.push(i))},n.useErrorBoundary=function(n){var t=h(u++,10),i=y();return t.__=n,r.componentDidCatch||(r.componentDidCatch=function(n,u){t.__&&t.__(n,u),i[1](n)}),[i[0],function(){i[1](void 0)}]},n.useId=function(){var n=h(u++,11);if(!n.__){for(var t=r.__v;null!==t&&!t.__m&&null!==t.__;)t=t.__;var i=t.__m||(t.__m=[0,0]);n.__="P"+i[0]+"-"+i[1]++}return n.__},n.useImperativeHandle=function(n,t,u){f=6,T(function(){return"function"==typeof n?(n(t()),function(){return n(null)}):n?(n.current=t(),function(){return n.current=null}):void 0},null==u?u:u.concat(n))},n.useLayoutEffect=T,n.useMemo=_,n.useReducer=m,n.useRef=function(n){return f=5,_(function(){return{current:n}},[])},n.useState=y});
//# sourceMappingURL=hooks.umd.js.map


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
    // NB: removed trim here to prevent spaces from not showing up before variable names
    return escape(str.replace(/&nbsp;/g, " "));
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


(function (global) {
  // Set up React global
  global.React = {
    ...preact,
    useState: preactHooks.useState,
    useEffect: preactHooks.useEffect,
    useRef: preactHooks.useRef,
    useCallback: preactHooks.useCallback,
    useMemo: preactHooks.useMemo,
  };

  // Process JSX scripts
  function processScripts() {
    const scripts = document.querySelectorAll('script[type="text/babel"]');
    scripts.forEach((script) => {
      try {
        const compiledCode = CompileJSX(script.textContent, "React.h");
        const newScript = document.createElement("script");
        newScript.textContent = compiledCode;
        script.parentNode.replaceChild(newScript, script);
      } catch (error) {
        console.error("Error compiling JSX:", error);
      }
    });
  }

  // Mount components
  function mountComponents() {
    const components = document.querySelectorAll('[id^="ssreact."]');
    components.forEach((element) => {
      const componentName = element.id.split(".")[1];
      const Component = global[componentName];
      if (typeof Component === "function") {
        React.render(React.h(Component), element);
      } else {
        console.warn(
          `Component "${componentName}" not found for element with id "${element.id}"`,
        );
      }
    });
  }

  // Initialize when DOM is ready
  document.addEventListener("DOMContentLoaded", () => {
    processScripts();
    mountComponents();
  });
})(typeof self !== "undefined" ? self : this);
