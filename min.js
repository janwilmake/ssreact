!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t||self).preact={})}(this,(function(t){var e,n,i,_,o,r,s,u,c,l=65536,h=1<<17,p={},a=[],f=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,d=Array.isArray;function v(t,e){for(var n in e)t[n]=e[n];return t}function y(t){var e=t.parentNode;e&&e.removeChild(t)}function m(t,n,i){var _,o,r,s={};for(r in n)"key"==r?_=n[r]:"ref"==r?o=n[r]:s[r]=n[r];if(arguments.length>2&&(s.children=arguments.length>3?e.call(arguments,2):i),"function"==typeof t&&null!=t.defaultProps)for(r in t.defaultProps)void 0===s[r]&&(s[r]=t.defaultProps[r]);return k(t,s,_,o,null)}function k(t,e,_,o,r){var s={type:t,props:e,key:_,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==r?++i:r,__i:-1,__u:0};return null==r&&null!=n.vnode&&n.vnode(s),s}function g(t){return t.children}function T(t,e){this.props=t,this.context=e}function b(t,e){if(null==e)return t.__?b(t.__,t.__i+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?b(t):null}function x(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return x(t)}}function C(t){(!t.__d&&(t.__d=!0)&&o.push(t)&&!K.__r++||r!==n.debounceRendering)&&((r=n.debounceRendering)||s)(K)}function K(){var t,e,i,_,r,s,c,l,h;for(o.sort(u);t=o.shift();)t.__d&&(e=o.length,_=void 0,s=(r=(i=t).__v).__e,l=[],h=[],(c=i.__P)&&((_=v({},r)).__v=r.__v+1,n.vnode&&n.vnode(_),L(c,_,r,i.__n,void 0!==c.ownerSVGElement,32&r.__u?[s]:null,l,null==s?b(r):s,!!(32&r.__u),h),_.__.__k[_.__i]=_,U(l,_,h),_.__e!=s&&x(_)),o.length>e&&o.sort(u));K.__r=0}function E(t,e,n,i,_,o,r,s,u,c,h){var f,d,v,y,m,k=i&&i.__k||a,g=e.length;for(n.__d=u,S(n,e,k),u=n.__d,f=0;f<g;f++)null!=(v=n.__k[f])&&"boolean"!=typeof v&&"function"!=typeof v&&(d=-1===v.__i?p:k[v.__i]||p,v.__i=f,L(t,v,d,_,o,r,s,u,c,h),y=v.__e,v.ref&&d.ref!=v.ref&&(d.ref&&M(d.ref,null,v),h.push(v.ref,v.__c||y,v)),null==m&&null!=y&&(m=y),v.__u&l||d.__k===v.__k?u=H(v,u,t):"function"==typeof v.type&&void 0!==v.__d?u=v.__d:y&&(u=y.nextSibling),v.__d=void 0,v.__u&=-196609);n.__d=u,n.__e=m}function S(t,e,n){var i,_,o,r,s,u=e.length,c=n.length,p=c,a=0;for(t.__k=[],i=0;i<u;i++)null!=(_=t.__k[i]=null==(_=e[i])||"boolean"==typeof _||"function"==typeof _?null:"string"==typeof _||"number"==typeof _||"bigint"==typeof _||_.constructor==String?k(null,_,null,null,_):d(_)?k(g,{children:_},null,null,null):void 0===_.constructor&&_.__b>0?k(_.type,_.props,_.key,_.ref?_.ref:null,_.__v):_)?(_.__=t,_.__b=t.__b+1,s=w(_,n,r=i+a,p),_.__i=s,o=null,-1!==s&&(p--,(o=n[s])&&(o.__u|=h)),null==o||null===o.__v?(-1==s&&a--,"function"!=typeof _.type&&(_.__u|=l)):s!==r&&(s===r+1?a++:s>r?p>u-r?a+=s-r:a--:a=s<r&&s==r-1?s-r:0,s!==i+a&&(_.__u|=l))):(o=n[i])&&null==o.key&&o.__e&&(o.__e==t.__d&&(t.__d=b(o)),A(o,o,!1),n[i]=null,p--);if(p)for(i=0;i<c;i++)null!=(o=n[i])&&0==(o.__u&h)&&(o.__e==t.__d&&(t.__d=b(o)),A(o,o))}function H(t,e,n){var i,_;if("function"==typeof t.type){for(i=t.__k,_=0;i&&_<i.length;_++)i[_]&&(i[_].__=t,e=H(i[_],e,n));return e}return t.__e!=e&&(n.insertBefore(t.__e,e||null),e=t.__e),e&&e.nextSibling}function w(t,e,n,i){var _=t.key,o=t.type,r=n-1,s=n+1,u=e[n];if(null===u||u&&_==u.key&&o===u.type)return n;if(i>(null!=u&&0==(u.__u&h)?1:0))for(;r>=0||s<e.length;){if(r>=0){if((u=e[r])&&0==(u.__u&h)&&_==u.key&&o===u.type)return r;r--}if(s<e.length){if((u=e[s])&&0==(u.__u&h)&&_==u.key&&o===u.type)return s;s++}}return-1}function P(t,e,n){"-"===e[0]?t.setProperty(e,null==n?"":n):t[e]=null==n?"":"number"!=typeof n||f.test(e)?n:n+"px"}function N(t,e,n,i,_){var o;t:if("style"===e)if("string"==typeof n)t.style.cssText=n;else{if("string"==typeof i&&(t.style.cssText=i=""),i)for(e in i)n&&e in n||P(t.style,e,"");if(n)for(e in n)i&&n[e]===i[e]||P(t.style,e,n[e])}else if("o"===e[0]&&"n"===e[1])o=e!==(e=e.replace(/(PointerCapture)$|Capture$/,"$1")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+o]=n,n?i?n.u=i.u:(n.u=Date.now(),t.addEventListener(e,o?F:R,o)):t.removeEventListener(e,o?F:R,o);else{if(_)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==e&&"height"!==e&&"href"!==e&&"list"!==e&&"form"!==e&&"tabIndex"!==e&&"download"!==e&&"rowSpan"!==e&&"colSpan"!==e&&"role"!==e&&e in t)try{t[e]=null==n?"":n;break t}catch(t){}"function"==typeof n||(null==n||!1===n&&"-"!==e[4]?t.removeAttribute(e):t.setAttribute(e,n))}}function R(t){var e=this.l[t.type+!1];if(t.t){if(t.t<=e.u)return}else t.t=Date.now();return e(n.event?n.event(t):t)}function F(t){return this.l[t.type+!0](n.event?n.event(t):t)}function L(t,e,i,_,o,r,s,u,c,l){var h,p,a,f,y,m,k,b,x,C,K,S,H,w,P,N=e.type;if(void 0!==e.constructor)return null;128&i.__u&&(c=!!(32&i.__u),r=[u=e.__e=i.__e]),(h=n.__b)&&h(e);t:if("function"==typeof N)try{if(b=e.props,x=(h=N.contextType)&&_[h.__c],C=h?x?x.props.value:h.__:_,i.__c?k=(p=e.__c=i.__c).__=p.__E:("prototype"in N&&N.prototype.render?e.__c=p=new N(b,C):(e.__c=p=new T(b,C),p.constructor=N,p.render=B),x&&x.sub(p),p.props=b,p.state||(p.state={}),p.context=C,p.__n=_,a=p.__d=!0,p.__h=[],p._sb=[]),null==p.__s&&(p.__s=p.state),null!=N.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=v({},p.__s)),v(p.__s,N.getDerivedStateFromProps(b,p.__s))),f=p.props,y=p.state,p.__v=e,a)null==N.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==N.getDerivedStateFromProps&&b!==f&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(b,C),!p.__e&&(null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(b,p.__s,C)||e.__v===i.__v)){for(e.__v!==i.__v&&(p.props=b,p.state=p.__s,p.__d=!1),e.__e=i.__e,e.__k=i.__k,e.__k.forEach((function(t){t&&(t.__=e)})),K=0;K<p._sb.length;K++)p.__h.push(p._sb[K]);p._sb=[],p.__h.length&&s.push(p);break t}null!=p.componentWillUpdate&&p.componentWillUpdate(b,p.__s,C),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(f,y,m)}))}if(p.context=C,p.props=b,p.__P=t,p.__e=!1,S=n.__r,H=0,"prototype"in N&&N.prototype.render){for(p.state=p.__s,p.__d=!1,S&&S(e),h=p.render(p.props,p.state,p.context),w=0;w<p._sb.length;w++)p.__h.push(p._sb[w]);p._sb=[]}else do{p.__d=!1,S&&S(e),h=p.render(p.props,p.state,p.context),p.state=p.__s}while(p.__d&&++H<25);p.state=p.__s,null!=p.getChildContext&&(_=v(v({},_),p.getChildContext())),a||null==p.getSnapshotBeforeUpdate||(m=p.getSnapshotBeforeUpdate(f,y)),E(t,d(P=null!=h&&h.type===g&&null==h.key?h.props.children:h)?P:[P],e,i,_,o,r,s,u,c,l),p.base=e.__e,e.__u&=-161,p.__h.length&&s.push(p),k&&(p.__E=p.__=null)}catch(t){e.__v=null,c||null!=r?(e.__e=u,e.__u|=c?160:32,r[r.indexOf(u)]=null):(e.__e=i.__e,e.__k=i.__k),n.__e(t,e,i)}else null==r&&e.__v===i.__v?(e.__k=i.__k,e.__e=i.__e):e.__e=D(i.__e,e,i,_,o,r,s,c,l);(h=n.diffed)&&h(e)}function U(t,e,i){e.__d=void 0;for(var _=0;_<i.length;_++)M(i[_],i[++_],i[++_]);n.__c&&n.__c(e,t),t.some((function(e){try{t=e.__h,e.__h=[],t.some((function(t){t.call(e)}))}catch(t){n.__e(t,e.__v)}}))}function D(t,n,i,_,o,r,s,u,c){var l,h,a,f,v,m,k,g=i.props,T=n.props,x=n.type;if("svg"===x&&(o=!0),null!=r)for(l=0;l<r.length;l++)if((v=r[l])&&"setAttribute"in v==!!x&&(x?v.localName===x:3===v.nodeType)){t=v,r[l]=null;break}if(null==t){if(null===x)return document.createTextNode(T);t=o?document.createElementNS("http://www.w3.org/2000/svg",x):document.createElement(x,T.is&&T),r=null,u=!1}if(null===x)g===T||u&&t.data===T||(t.data=T);else{if(r=r&&e.call(t.childNodes),g=i.props||p,!u&&null!=r)for(g={},l=0;l<t.attributes.length;l++)g[(v=t.attributes[l]).name]=v.value;for(l in g)v=g[l],"children"==l||("dangerouslySetInnerHTML"==l?a=v:"key"===l||l in T||N(t,l,null,v,o));for(l in T)v=T[l],"children"==l?f=v:"dangerouslySetInnerHTML"==l?h=v:"value"==l?m=v:"checked"==l?k=v:"key"===l||u&&"function"!=typeof v||g[l]===v||N(t,l,v,g[l],o);if(h)u||a&&(h.__html===a.__html||h.__html===t.innerHTML)||(t.innerHTML=h.__html),n.__k=[];else if(a&&(t.innerHTML=""),E(t,d(f)?f:[f],n,i,_,o&&"foreignObject"!==x,r,s,r?r[0]:i.__k&&b(i,0),u,c),null!=r)for(l=r.length;l--;)null!=r[l]&&y(r[l]);u||(l="value",void 0!==m&&(m!==t[l]||"progress"===x&&!m||"option"===x&&m!==g[l])&&N(t,l,m,g[l],!1),l="checked",void 0!==k&&k!==t[l]&&N(t,l,k,g[l],!1))}return t}function M(t,e,i){try{"function"==typeof t?t(e):t.current=e}catch(t){n.__e(t,i)}}function A(t,e,i){var _,o;if(n.unmount&&n.unmount(t),(_=t.ref)&&(_.current&&_.current!==t.__e||M(_,null,e)),null!=(_=t.__c)){if(_.componentWillUnmount)try{_.componentWillUnmount()}catch(t){n.__e(t,e)}_.base=_.__P=null,t.__c=void 0}if(_=t.__k)for(o=0;o<_.length;o++)_[o]&&A(_[o],e,i||"function"!=typeof t.type);i||null==t.__e||y(t.__e),t.__=t.__e=t.__d=void 0}function B(t,e,n){return this.constructor(t,n)}function V(t,i,_){var o,r,s,u;n.__&&n.__(t,i),r=(o="function"==typeof _)?null:_&&_.__k||i.__k,s=[],u=[],L(i,t=(!o&&_||i).__k=m(g,null,[t]),r||p,p,void 0!==i.ownerSVGElement,!o&&_?[_]:r?null:i.firstChild?e.call(i.childNodes):null,s,!o&&_?_:r?r.__e:i.firstChild,o,u),U(s,t,u)}e=a.slice,n={__e:function(t,e,n,i){for(var _,o,r;e=e.__;)if((_=e.__c)&&!_.__)try{if((o=_.constructor)&&null!=o.getDerivedStateFromError&&(_.setState(o.getDerivedStateFromError(t)),r=_.__d),null!=_.componentDidCatch&&(_.componentDidCatch(t,i||{}),r=_.__d),r)return _.__E=_}catch(e){t=e}throw t}},i=0,_=function(t){return null!=t&&null==t.constructor},T.prototype.setState=function(t,e){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=v({},this.state),"function"==typeof t&&(t=t(v({},n),this.props)),t&&v(n,t),null!=t&&this.__v&&(e&&this._sb.push(e),C(this))},T.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),C(this))},T.prototype.render=g,o=[],s="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,u=function(t,e){return t.__v.__b-e.__v.__b},K.__r=0,c=0,t.Component=T,t.Fragment=g,t.cloneElement=function(t,n,i){var _,o,r,s,u=v({},t.props);for(r in t.type&&t.type.defaultProps&&(s=t.type.defaultProps),n)"key"==r?_=n[r]:"ref"==r?o=n[r]:u[r]=void 0===n[r]&&void 0!==s?s[r]:n[r];return arguments.length>2&&(u.children=arguments.length>3?e.call(arguments,2):i),k(t.type,u,_||t.key,o||t.ref,null)},t.createContext=function(t,e){var n={__c:e="__cC"+c++,__:t,Consumer:function(t,e){return t.children(e)},Provider:function(t){var n,i;return this.getChildContext||(n=[],(i={})[e]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(t){this.props.value!==t.value&&n.some((function(t){t.__e=!0,C(t)}))},this.sub=function(t){n.push(t);var e=t.componentWillUnmount;t.componentWillUnmount=function(){n.splice(n.indexOf(t),1),e&&e.call(t)}}),t.children}};return n.Provider.__=n.Consumer.contextType=n},t.createElement=m,t.createRef=function(){return{current:null}},t.h=m,t.hydrate=function t(e,n){V(e,n,t)},t.isValidElement=_,t.options=n,t.render=V,t.toChildArray=function t(e,n){return n=n||[],null==e||"boolean"==typeof e||(d(e)?e.some((function(e){t(e,n)})):n.push(e)),n}})),function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("preact")):"function"==typeof define&&define.amd?define(["exports","preact"],e):e((t||self).preactHooks={},t.preact)}(this,(function(t,e){var n,i,_,o,r=0,s=[],u=[],c=e.options.__b,l=e.options.__r,h=e.options.diffed,p=e.options.__c,a=e.options.unmount;function f(t,n){e.options.__h&&e.options.__h(i,t,r||n),r=0;var _=i.__H||(i.__H={__:[],__h:[]});return t>=_.__.length&&_.__.push({__V:u}),_.__[t]}function d(t){return r=1,v(K,t)}function v(t,e,_){var o=f(n++,2);if(o.t=t,!o.__c&&(o.__=[_?_(e):K(void 0,e),function(t){var e=o.__N?o.__N[0]:o.__[0],n=o.t(e,t);e!==n&&(o.__N=[n,o.__[1]],o.__c.setState({}))}],o.__c=i,!i.u)){var r=function(t,e,n){if(!o.__c.__H)return!0;var i=o.__c.__H.__.filter((function(t){return t.__c}));if(i.every((function(t){return!t.__N})))return!s||s.call(this,t,e,n);var _=!1;return i.forEach((function(t){if(t.__N){var e=t.__[0];t.__=t.__N,t.__N=void 0,e!==t.__[0]&&(_=!0)}})),!(!_&&o.__c.props===t)&&(!s||s.call(this,t,e,n))};i.u=!0;var s=i.shouldComponentUpdate,u=i.componentWillUpdate;i.componentWillUpdate=function(t,e,n){if(this.__e){var i=s;s=void 0,r(t,e,n),s=i}u&&u.call(this,t,e,n)},i.shouldComponentUpdate=r}return o.__N||o.__}function y(t,_){var o=f(n++,4);!e.options.__s&&C(o.__H,_)&&(o.__=t,o.i=_,i.__h.push(o))}function m(t,e){var i=f(n++,7);return C(i.__H,e)?(i.__V=t(),i.i=e,i.__h=t,i.__V):i.__}function k(){for(var t;t=s.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(b),t.__H.__h.forEach(x),t.__H.__h=[]}catch(n){t.__H.__h=[],e.options.__e(n,t.__v)}}e.options.__b=function(t){i=null,c&&c(t)},e.options.__r=function(t){l&&l(t),n=0;var e=(i=t.__c).__H;e&&(_===i?(e.__h=[],i.__h=[],e.__.forEach((function(t){t.__N&&(t.__=t.__N),t.__V=u,t.__N=t.i=void 0}))):(e.__h.forEach(b),e.__h.forEach(x),e.__h=[],n=0)),_=i},e.options.diffed=function(t){h&&h(t);var n=t.__c;n&&n.__H&&(n.__H.__h.length&&(1!==s.push(n)&&o===e.options.requestAnimationFrame||((o=e.options.requestAnimationFrame)||T)(k)),n.__H.__.forEach((function(t){t.i&&(t.__H=t.i),t.__V!==u&&(t.__=t.__V),t.i=void 0,t.__V=u}))),_=i=null},e.options.__c=function(t,n){n.some((function(t){try{t.__h.forEach(b),t.__h=t.__h.filter((function(t){return!t.__||x(t)}))}catch(i){n.some((function(t){t.__h&&(t.__h=[])})),n=[],e.options.__e(i,t.__v)}})),p&&p(t,n)},e.options.unmount=function(t){a&&a(t);var n,i=t.__c;i&&i.__H&&(i.__H.__.forEach((function(t){try{b(t)}catch(t){n=t}})),i.__H=void 0,n&&e.options.__e(n,i.__v))};var g="function"==typeof requestAnimationFrame;function T(t){var e,n=function(){clearTimeout(i),g&&cancelAnimationFrame(e),setTimeout(t)},i=setTimeout(n,100);g&&(e=requestAnimationFrame(n))}function b(t){var e=i,n=t.__c;"function"==typeof n&&(t.__c=void 0,n()),i=e}function x(t){var e=i;t.__c=t.__(),i=e}function C(t,e){return!t||t.length!==e.length||e.some((function(e,n){return e!==t[n]}))}function K(t,e){return"function"==typeof e?e(t):e}t.useCallback=function(t,e){return r=8,m((function(){return t}),e)},t.useContext=function(t){var e=i.context[t.__c],_=f(n++,9);return _.c=t,e?(null==_.__&&(_.__=!0,e.sub(i)),e.props.value):t.__},t.useDebugValue=function(t,n){e.options.useDebugValue&&e.options.useDebugValue(n?n(t):t)},t.useEffect=function(t,_){var o=f(n++,3);!e.options.__s&&C(o.__H,_)&&(o.__=t,o.i=_,i.__H.__h.push(o))},t.useErrorBoundary=function(t){var e=f(n++,10),_=d();return e.__=t,i.componentDidCatch||(i.componentDidCatch=function(t,n){e.__&&e.__(t,n),_[1](t)}),[_[0],function(){_[1](void 0)}]},t.useId=function(){var t=f(n++,11);if(!t.__){for(var e=i.__v;null!==e&&!e.__m&&null!==e.__;)e=e.__;var _=e.__m||(e.__m=[0,0]);t.__="P"+_[0]+"-"+_[1]++}return t.__},t.useImperativeHandle=function(t,e,n){r=6,y((function(){return"function"==typeof t?(t(e()),function(){return t(null)}):t?(t.current=e(),function(){return t.current=null}):void 0}),null==n?n:n.concat(t))},t.useLayoutEffect=y,t.useMemo=m,t.useReducer=v,t.useRef=function(t){return r=5,m((function(){return{current:t}}),[])},t.useState=d})),function(t){function e(t,e){this.out="",this.d=t,this.i=0,this.eof=t.length,this.token={type:"TK_START"},this.cache={token:{type:void 0,data:void 0},prev:{type:void 0,data:void 0},i:void 0,oi:void 0},this.prev=void 0,this.write=!0,this.replace=e}function n(t){return" "===t||"\t"===t||"\n"===t}function i(t){return(t=t.charCodeAt(0))>=65&&t<=90||t>=97&&t<=122}function _(t){for(var e="",n=0,i=t.length;n<i;n++)"'"===t[n]&&(e+="\\"),e+=t[n];return e}function o(t){console.log(t),process.exit()}function r(t,n){var i=new e(t,n);return i.run(),i.out}e.prototype.is_valid_char=function(){var t=this.d[this.i];return void 0!==t&&(i(t)||function(t){return(t=t.charCodeAt(0))>=48&&t<=57}(t)||"-"===t||"_"===t||"$"===t)},e.prototype.restore=function(){this.token.type=this.cache.token.type,this.token.data=this.cache.token.data,this.prev.type=this.cache.prev.type,this.prev.data=this.cache.prev.data,this.i=this.cache.i},e.prototype.save=function(){this.cache.token.type=this.token.type,this.cache.token.data=this.token.data,this.cache.prev.type=this.prev.type,this.cache.prev.data=this.prev.data,this.cache.i=this.i},e.prototype.inc=function(){if(this.write){var t=this.i++;return this.out+=this.d[t],t}return this.i++},e.prototype.emit=function(t){this.out+=t},e.prototype.parse_identifier=function(){for(var t="";this.is_valid_char();)t+=this.d[this.inc()];return t},e.prototype.parse_string=function(t){for(var e="";this.i<this.eof&&(this.d[this.i]!==t||this.d[this.i]===t&&"\\"===this.d[this.i-1]);)e+=this.d[this.inc()];return this.inc(),e},e.prototype.next=function(){var t=this.d,e={"<":"TK_LT",">":"TK_GT","=":"TK_EQ","{":"TK_LB","}":"TK_RB",")":"TK_RP","]":"TK_RBR"};for(this.prev=this.token;this.i<this.eof;){var _=t[this.i];switch(_){case"<":case">":case"=":case"{":case"}":case")":case"]":return this.inc(),void(this.token={type:e[_],data:_});case'"':case"'":case"`":if(this.i>=this.eof)break;return this.inc(),void(this.token={type:"TK_STR",data:this.parse_string(_)});case"/":if(this.i>=this.eof)break;var o=t[this.inc()+1];if("/"===o){for(;this.i<this.eof&&"\n"!==t[this.i];)this.inc();this.inc(),this.token={type:"TK_COM"}}else if("*"===o){for(;this.i<this.eof-1&&("*"!==t[this.i]||"/"!==t[this.i+1]););this.inc(),this.token={type:"TK_COM"}}else this.token={type:"TK_FS"};return;default:if(i(_)||"-"===_||"_"===_||"$"===_)return void(this.token={type:"TK_NM",data:this.parse_identifier()});if(!n(_))return this.inc(),void(this.token={data:_,type:"TK_SYS"});this.inc()}}this.token={type:"TK_EOF"}},e.prototype.accept=function(t){return this.token.type===t&&(this.next(),!0)},e.prototype.expect=function(t){this.token.type===t?this.next():o("Unexpected token: "+this.token.type+", Expected: "+t)},e.prototype.tag_body=function(t){if(this.emit(", "),"TK_LB"===this.token.type&&(this.emit("("),this.write=!0),this.accept("TK_LB"))this.jsexpr(),this.emit(")"),this.tag_body(t);else if(this.accept("TK_LT"))this.save(),this.accept("TK_FS")?(this.restore(),this.out=this.out.slice(0,-2)):(this.parse_tag(!0),this.tag_body(t));else{for(var e=this.token.data;"{"!==this.d[this.i]&&"<"!==this.d[this.i]&&this.i<this.eof;)"\n"!==this.d[this.i]?e+=this.d[this.inc()]:this.inc();this.next(),this.emit("'"+(_(e.trim().replace(/&nbsp;/g," "))+"'")),this.i<this.eof-1&&this.tag_body(t)}},e.prototype.tag_close=function(t){this.accept("TK_FS")||(this.expect("TK_GT"),this.tag_body(t),this.expect("TK_FS"),this.expect("TK_NM"),this.prev.data!==t&&o("Expected closing tag for "+t)),this.expect("TK_GT")},e.prototype.jsexpr=function(){!1===this.node_list(!0)?o("Expected }"):this.expect("TK_RB")},e.prototype.params=function(t){if("TK_FS"!==this.token.type&&"TK_GT"!==this.token.type){if(t?this.emit("{"):this.emit(", "),this.accept("TK_NM")){var e=this.prev.data,n=void 0;this.emit("'"+e+"': "),this.accept("TK_EQ")?("TK_LB"===this.token.type&&(this.emit("("),this.write=!0),this.accept("TK_STR")?n="'"+_(this.prev.data)+"'":this.accept("TK_LB")?(this.jsexpr(),this.emit(")")):o("Unexpected token: "+this.token.data||this.token.type)):n=!0,n&&this.emit(n),this.params()}}else t?this.emit("null"):this.emit("}")},e.prototype.parse_tag=function(t){this.expect("TK_NM");var e,n=this.prev.data;this.emit(this.replace+"("+(((e=n[0])===e.toUpperCase()?n:"'"+n+"'")+", ")),this.params(!0),this.tag_close(n),this.emit(")"),t||this.token.data&&"<"!==this.token.data&&"{"!==this.token.data&&("return"===this.token.data&&this.emit("\n"),this.emit(this.token.data))},e.prototype.possible_tag=function(){"TK_LT"===this.token.type&&void 0!==this.prev?"TK_NM"===this.prev.type&&"return"!==this.prev.data||"TK_RP"===this.prev.type||"TK_RBR"===this.prev.type?this.next():(this.out=this.out.slice(0,-1),this.write=!1,this.next(),this.parse_tag(),this.write=!0):this.next()},e.prototype.node_list=function(t){if(t){if("TK_RB"===this.token.type)return this.out=this.out.slice(0,-1),this.write=!1,this.emit("undefined"),!0;for(var e=-1;"TK_EOF"!==this.token.type;){if("TK_LB"===this.token.type&&e--,"TK_RB"===this.token.type&&e++,0===e)return this.out=this.out.slice(0,-1),this.write=!1,!0;this.possible_tag()}return!1}for(;"TK_EOF"!==this.token.type;)this.possible_tag();return!0},e.prototype.root=function(t){this.node_list(!1)},e.prototype.run=function(){this.next(),this.root()},"undefined"==typeof module?t.CompileJSX=r:module.exports=r}(this),function(t){const e={React:preact,useState:preactHooks.useState,useEffect:preactHooks.useEffect,useRef:preactHooks.useRef,useCallback:preactHooks.useCallback,useMemo:preactHooks.useMemo,h:preact.h,Fragment:preact.Fragment};function n(){document.querySelectorAll('[id^="ssreact."]').forEach((e=>{const n=e.id.split(".")[1],i=t[n];"function"==typeof i?preact.render(preact.h(i),e):console.warn(`Component "${n}" not found for element with id "${e.id}"`)}))}t.SimpleReact={...e,mount:n},document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll('script[type="text/babel"]').forEach((t=>{const e=CompileJSX(t.textContent,"h"),n=document.createElement("script");n.textContent=e,t.parentNode.replaceChild(n,t)})),n()}))}("undefined"!=typeof self?self:this);