(window.webpackJsonp=window.webpackJsonp||[]).push([[9,1,107],{11:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return u}));var r=n(0),o=n.n(r),i=n(7),a=n(6),c=o.a.shape({body_text:o.a.arrayOf(o.a.string)}),u=o.a.shape({id:o.a.number.isRequired,title:o.a.string.isRequired,path:o.a.string.isRequired,cloudinary_video_url:o.a.string,video_duration_in_minutes:o.a.number,type_of:o.a.oneOf(["podcast_episodes"]),class_name:o.a.oneOf(["PodcastEpisode","User","Article"]),flare_tag:i.a,tag_list:o.a.arrayOf(o.a.string),cached_tag_list_array:o.a.arrayOf(o.a.string),podcast:o.a.shape({slug:o.a.string.isRequired,title:o.a.string.isRequired,image_url:o.a.string.isRequired}),user_id:o.a.string.isRequired,user:o.a.shape({username:o.a.string.isRequired,name:o.a.string.isRequired}),organization:a.a,highlight:c,public_reactions_count:o.a.number,reactions_count:o.a.number,comments_count:o.a.number,reading_time:o.a.number})},113:function(e,t,n){"use strict";n.r(t);var r=n(1),o=(n(99),n(2)),i=n(4),a=n(0),c=n.n(a),u=n(15),s=n(17),l=n(3),d=function(){return Object(r.h)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",className:"crayons-icon",xmlns:"http://www.w3.org/2000/svg"},Object(r.h)("path",{d:"M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0018 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z"}))},f=Object(i.e)((function(e,t){var n=e.searchTerm,o=e.onSubmitSearch;return Object(r.h)("form",{action:"/search",acceptCharset:"UTF-8",method:"get",onSubmit:o,role:"search"},Object(r.h)("input",{name:"utf8",type:"hidden",value:"\u2713"}),Object(r.h)("div",{class:"crayons-fields crayons-fields--horizontal"},Object(r.h)("div",{class:"crayons-field flex-1 relative"},Object(r.h)("input",{ref:t,className:"crayons-header--search-input crayons-textfield",type:"text",name:"q",placeholder:"Search...",autoComplete:"off","aria-label":"Search term",value:n}),Object(r.h)(l.a,{type:"submit",variant:"ghost",contentType:"icon-rounded",icon:d,size:"s",className:"absolute right-2 bottom-0 top-0 m-1","aria-label":"Search"}))))}));function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=O(e);if(t){var o=O(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v(this,n)}}function v(e,t){return!t||"object"!==p(t)&&"function"!==typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}f.propTypes={searchTerm:c.a.string.isRequired,onSubmitSearch:c.a.func.isRequired};var j=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(a,e);var t,n,o,i=m(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e)).enableSearchPageListener=function(){t.enableSearchPageChecker=!0},t.hasKeyModifiers=function(e){return e.altKey||e.ctrlKey||e.metaKey||e.shiftKey},t.submit=function(e){e.preventDefault();var n=t.searchInputRef.current.value,r=t.props.searchTerm;(t.enableSearchPageChecker=!1,Object(u.hasInstantClick)()&&n!==r)&&((0,t.props.setSearchTerm)(n),Object(u.preloadSearchResults)({searchTerm:n}),Object(u.displaySearchResults)({searchTerm:n}))},t.minimizeHeader=function(e){e.preventDefault(),document.body.classList.toggle("zen-mode")},t.focusOnSearchBox=function(e){e.preventDefault(),document.body.classList.remove("zen-mode");var n=t.searchInputRef.current;n.focus(),n.select()},t.enableSearchPageChecker=!0,t.syncSearchUrlWithInput=t.syncSearchUrlWithInput.bind(g(t)),t.searchInputRef=Object(r.createRef)(null),t}return t=a,(n=[{key:"componentWillMount",value:function(){var e=this,t=this.props,n=t.searchTerm,r=t.setSearchTerm;!function t(){e.enableSearchPageChecker&&""!==n&&null===/^http(s)?:\/\/[^/]+\/search/.exec(window.location.href)&&r(""),setTimeout(t,500)}()}},{key:"syncSearchUrlWithInput",value:function(){var e=this.props.setSearchTerm,t=Object(u.getSearchTermFromUrl)(window.location.search);this.searchInputRef.current.value=t,e(t)}},{key:"componentDidMount",value:function(){InstantClick.on("change",this.enableSearchPageListener),window.addEventListener("popstate",this.syncSearchUrlWithInput)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.globalKeysListener),window.removeEventListener("popstate",this.syncSearchUrlWithInput),InstantClick.off&&InstantClick.off("change",this.enableSearchPageListener)}},{key:"render",value:function(e){var t,n=e.searchTerm;return Object(r.h)(r.Fragment,null,Object(r.h)(s.a,{shortcuts:(t={},h(t,"/",this.focusOnSearchBox),h(t,"Digit0",this.minimizeHeader),t)}),Object(r.h)(f,{searchTerm:n,onSubmitSearch:this.submit,ref:this.searchInputRef}))}}])&&y(t.prototype,n),o&&y(t,o),a}(r.Component);function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function C(){var e=w(Object(o.j)((function(){return Object(u.getSearchTermFromUrl)(location.search)})),2),t=e[0],n=e[1],a=w(Object(o.j)(null),2),c=a[0],s=a[1];function l(e){var t=e.detail.querystring,r=Object(u.getSearchTermFromUrl)(t),o=document.getElementById("mobile-search-container");if(c&&o!==c&&Object(i.f)(c),o){var a=o.querySelector("form");a&&o.removeChild(a)}s(o),n(r)}return Object(o.d)((function(){return window.addEventListener("syncSearchForms",l),function(){window.removeEventListener("syncSearchForms",l)}})),Object(r.h)(i.a,null,Object(r.h)(j,{searchTerm:t,setSearchTerm:n}),c&&Object(i.d)(Object(r.h)(j,{searchTerm:t,setSearchTerm:n}),c))}j.propTypes={searchTerm:c.a.string.isRequired,setSearchTerm:c.a.func.isRequired},document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("header-search");Object(r.render)(Object(r.h)(C,null),e)}))},12:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=["headers","body","method","csrfToken"];function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function u(e,t,n,r,o,i,a){try{var c=e[i](a),u=c.value}catch(s){return void n(s)}c.done?t(u):Promise.resolve(u).then(r,o)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){u(i,r,o,a,c,"next",e)}function c(e){u(i,r,o,a,c,"throw",e)}a(void 0)}))}}function l(e){return d.apply(this,arguments)}function d(){return(d=s((function*(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.headers,o=t.body,a=t.method,u=void 0===a?"GET":a,s=t.csrfToken,l=void 0===s?yield getCsrfToken():s,d=c(t,r),f={body:o&&"string"!==typeof o?JSON.stringify(o):o},p=i(i({method:u,headers:i({Accept:"application/json","X-CSRF-Token":l,"Content-Type":"application/json"},n),credentials:"same-origin"},f),d);return fetch(e,p)}))).apply(this,arguments)}},15:function(e,t,n){"use strict";n.r(t),n.d(t,"hasInstantClick",(function(){return a})),n.d(t,"displaySearchResults",(function(){return u})),n.d(t,"getSearchTermFromUrl",(function(){return s})),n.d(t,"preloadSearchResults",(function(){return l})),n.d(t,"fetchSearch",(function(){return d}));var r=n(8);function o(e,t){var n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location.href,n=e.replace(/[[\]]/g,"\\$&"),r=new RegExp("[?&]".concat(n,"(=([^&#]*)|&|#|$)")).exec(t);return r?r[2]?decodeURIComponent(r[2].replace(/\+/g," ")):"":null}(e,t);return n?"&".concat(e,"=").concat(n):""}function i(e){return o("filters",e)}function a(){return"undefined"!==typeof instantClick}function c(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16))}))}function u(e){var t,n=e.searchTerm,r=e.location,a=void 0===r?window.location:r,u=a.origin,s=c(n),l=i(a.href),d=o("sort_by",t=a.href)+o("sort_direction",t);InstantClick.display("".concat(u,"/search?q=").concat(s).concat(l).concat(d))}function s(e){var t,n=new URLSearchParams(e),r=null!==(t=filterXSS(n.get("q")))&&void 0!==t?t:"",o=document.createElement("div");return o.innerHTML=r,null!==o.firstChild?o.firstChild.nodeValue:r}function l(e){var t=e.searchTerm,n=e.location,r=void 0===n?window.location:n,o=c(t.replace(/^[ ]+|[ ]+$/g,"")),a="".concat(r.origin,"/search?q=").concat(o).concat(i(r.href));InstantClick.preload(a)}function d(e,t){var n=function(e){var t=new URLSearchParams;return Object.keys(e).forEach((function(n){var r=e[n];Array.isArray(r)?r.forEach((function(e){t.append("".concat(n,"[]"),e)})):t.append(n,r)})),t.toString()}(t);return Object(r.b)("/search/".concat(e,"?").concat(n)).then((function(e){return e.json()}))}},17:function(e,t,n){"use strict";n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return m}));var r=n(2),o=n(0),i=n.n(o);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}(e,t)||d(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||d(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){if(e){if("string"===typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(e){if(e instanceof HTMLElement===!1)return!1;var t=e.nodeName.toLowerCase(),n=(e.getAttribute("type")||"").toLowerCase();return"select"===t||"textarea"===t||"input"===t&&"submit"!==n&&"reset"!==n&&"checkbox"!==n&&"radio"!==n||e.isContentEditable}var h=function(e,t,n,r){var o=n&&n.length>0?r["".concat(n.join("~"),"~").concat(e.code)]:r["".concat(t).concat(e.code)]||r["".concat(t).concat(e.key.toLowerCase())];return o?(o(e),[]):t||"Shift"===e.key?[]:[].concat(l(n),[e.code])},y={timeout:0};function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=Object(r.j)(e),i=s(o,1),a=i[0],u=Object(r.j)([]),l=s(u,2),d=l[0],f=l[1],b=Object(r.j)(c(c({},y),n)),m=s(b,2),v=m[0],g=m[1];Object(r.d)((function(){var e={};"number"===typeof n.timeout&&(e.timeout=n.timeout),g(c(c({},y),e))}),[n.timeout]),Object(r.d)((function(){if(!(d.length<=0)){var e=window.setTimeout((function(){clearTimeout(e),f([])}),v.timeout);return function(){return clearTimeout(e)}}}),[d.length,v.timeout]),Object(r.d)((function(){if(a&&0!==Object.keys(a).length){var e=function(e){if(!e.defaultPrevented){var t="".concat(e.ctrlKey||e.metaKey?"ctrl+":"").concat(e.altKey?"alt+":"").concat((e.ctrlKey||e.metaKey||e.altKey)&&e.shiftKey?"shift+":"");if(!(e.target instanceof Node&&p(e.target))||t){var n=h(e,t,d,a);f(n)}}};return t.addEventListener("keydown",e),function(){return t.removeEventListener("keydown",e)}}}),[d,a,t])}function m(e){return b(e.shortcuts,e.eventTarget,e.options),null}m.propTypes={shortcuts:i.a.object.isRequired,options:i.a.shape({timeout:i.a.number}),eventTarget:i.a.instanceOf(Element)},m.defaultProps={shortcuts:{},options:{},eventTarget:window}},18:function(e,t,n){"use strict";function r(e){var t=e.element,n=e.offsetTop,r=void 0===n?0:n,o=e.allowPartialVisibility,i=void 0!==o&&o,a=t.getBoundingClientRect(),c=window.innerHeight||document.documentElement.clientHeight,u=window.innerWidth||document.documentElement.clientWidth,s=a.top<=c&&a.top>=r,l=a.right>=0&&a.right<=u,d=a.bottom>=r&&a.bottom<=c,f=a.left<=u&&a.left>=0,p=a.top<=r,h=a.bottom>=c;return i?(s||d||p&&h)&&(f||l):s&&d&&f&&l}n.d(t,"a",(function(){return r}))},19:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return d}));var r=n(18),o=n(22);function i(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){u=!0,i=e},f:function(){try{c||null==n.return||n.return()}finally{if(u)throw i}}}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var c=function(){return Object(o.a)(u)},u=function(){var e,t=i(document.querySelectorAll("[data-repositioning-dropdown]"));try{for(t.s();!(e=t.n()).done;){var n=e.value;n.classList.remove("reverse");var o="block"===n.style.display;o||(n.style.opacity=0,n.style.display="block"),Object(r.a)({element:n})||n.classList.add("reverse"),o||(n.style.removeProperty("display"),n.style.removeProperty("opacity"))}}catch(a){t.e(a)}finally{t.f()}},s='button, [href], input:not([type="hidden"]), select, textarea, [tabindex="0"]',l=function(e){var t,n=e.triggerElementId,r=e.dropdownContentId,o=e.onClose,i=document.getElementById(r);i&&(null===(t=document.getElementById(n))||void 0===t||t.setAttribute("aria-expanded","false"),i.style.removeProperty("display"),null===o||void 0===o||o())},d=function(e){var t=e.triggerElementId,n=e.dropdownContentId,r=e.dropdownContentCloseButtonId,o=e.onClose,i=e.onOpen,a=document.getElementById(t),c=document.getElementById(n);if(a&&c){a.setAttribute("aria-expanded","false"),a.setAttribute("aria-controls",n),a.setAttribute("aria-haspopup","true");var u,d=function(e){var r=e.key;if("Escape"===r)"true"===a.getAttribute("aria-expanded")&&(l({triggerElementId:t,dropdownContentId:n,onClose:p}),a.focus());else if("Tab"===r){(null===c||void 0===c?void 0:c.contains(document.activeElement))||l({triggerElementId:t,dropdownContentId:n,onClose:p})}},f=function(e){var r=e.target;r===a||c.contains(r)||a.contains(r)||(l({triggerElementId:t,dropdownContentId:n,onClose:p}),r.matches(s)||a.focus())},p=function(){null===o||void 0===o||o(),document.removeEventListener("keyup",d),document.removeEventListener("click",f)};if(a.addEventListener("click",(function(){var e;"true"===(null===(e=document.getElementById(t))||void 0===e?void 0:e.getAttribute("aria-expanded"))?l({triggerElementId:t,dropdownContentId:n,onClose:p}):(!function(e){var t,n=e.triggerElementId,r=e.dropdownContentId,o=document.getElementById(r);document.getElementById(n).setAttribute("aria-expanded","true"),o.style.display="block",null===(t=o.querySelector(s))||void 0===t||t.focus()}({triggerElementId:t,dropdownContentId:n}),null===i||void 0===i||i(),document.addEventListener("keyup",d),document.addEventListener("click",f))})),r)null===(u=document.getElementById(r))||void 0===u||u.addEventListener("click",(function(){var e;l({triggerElementId:t,dropdownContentId:n,onClose:p}),null===(e=document.getElementById(t))||void 0===e||e.focus()}));return{closeDropdown:function(){l({triggerElementId:t,dropdownContentId:n,onClose:p})}}}}},20:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(1),o=n(0),i=n.n(o),a=n(5),c=["children","variant","tagName","inverted","contentType","size","className","icon","url","buttonType","disabled","onClick","onMouseOver","onMouseOut","onFocus","onBlur","tabIndex","title"];function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function l(e){var t=e.variant,n=e.className,r=e.contentType,o=e.size,i=e.inverted,a=e.disabled,c="";return t&&t.length>0&&"primary"!==t&&(c+=" crayons-btn--".concat(t)),o&&o.length>0&&"default"!==o&&(c+=" crayons-btn--".concat(o)),r&&r.length>0&&"text"!==r&&(c+=" crayons-btn--".concat(r)),a&&(c+=" crayons-btn--disabled"),i&&(c+=" crayons-btn--inverted"),n&&n.length>0&&(c+=" ".concat(n)),c}var d=function(e){var t=e.children,n=e.variant,o=void 0===n?"primary":n,i=e.tagName,a=void 0===i?"button":i,d=e.inverted,f=e.contentType,p=void 0===f?"text":f,h=e.size,y=void 0===h?"default":h,b=e.className,m=e.icon,v=e.url,g=e.buttonType,O=e.disabled,j=e.onClick,w=e.onMouseOver,S=e.onMouseOut,C=e.onFocus,I=e.onBlur,k=e.tabIndex,T=e.title,R=s(e,c),E=a,P=m,x="button"===a?{type:g,disabled:O}:{href:O?void 0:v};return Object(r.h)(E,u({className:"crayons-btn".concat(l({variant:o,size:y,contentType:p,className:b,icon:m,inverted:d,disabled:"a"===a&&O,children:t})),onClick:j,onMouseOver:w,onMouseOut:S,onFocus:C,onBlur:I,tabIndex:k,title:T},x,R),"text"!==p&&"icon-right"!==p&&P&&Object(r.h)(P,null),("text"===p||"icon-left"===p||"icon-right"===p)&&t,"text"!==p&&"icon-right"===p&&P&&Object(r.h)(P,null))};d.displayName="Button",d.defaultProps={className:void 0,icon:void 0,url:void 0,buttonType:"button",disabled:!1,inverted:!1,onClick:void 0,onMouseOver:void 0,onMouseOut:void 0,onFocus:void 0,onBlur:void 0,tabIndex:void 0,title:void 0},d.propTypes={children:a.c.isRequired,variant:i.a.oneOf(["primary","secondary","outlined","danger","ghost","ghost-brand","ghost-success","ghost-warning","ghost-danger"]).isRequired,contentType:i.a.oneOf(["text","icon-left","icon-right","icon","icon-rounded"]).isRequired,inverted:i.a.bool,tagName:i.a.oneOf(["a","button"]).isRequired,className:i.a.string,icon:i.a.node,url:i.a.string,buttonType:i.a.string,disabled:i.a.bool,size:i.a.oneOf(["default","s","l","xl"]).isRequired,onClick:i.a.func,onMouseOver:i.a.func,onMouseOut:i.a.func,onFocus:i.a.func,onBlur:i.a.func,tabIndex:i.a.number,title:i.a.string}},22:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(29),o=n.n(r);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.time,r=void 0===n?300:n,i=t.config,c=void 0===i?{leading:!1}:i,u=a({},c);return o()(e,r,u)}},25:function(e,t,n){"use strict";var r=n(20);n.d(t,"a",(function(){return r.a}))},3:function(e,t,n){"use strict";n.d(t,"a",(function(){return r.a})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return v})),n.d(t,"f",(function(){return w})),n.d(t,"e",(function(){return S.Modal})),n.d(t,"g",(function(){return C.a}));var r=n(25),o=n(1),i=n(5),a=function(e){var t=e.children;return Object(o.h)("div",{role:"presentation",className:"crayons-btn-group"},t)};a.displayName="ButtonGroup",a.propTypes={children:i.c.isRequired};var c=n(2),u=n(0),s=n.n(u),l=n(9),d=n(19),f=["children","className","triggerButtonId","dropdownContentId","dropdownContentCloseButtonId","onOpen","onClose"];function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function b(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=function(e){var t=e.children,n=e.className,r=e.triggerButtonId,i=e.dropdownContentId,a=e.dropdownContentCloseButtonId,u=e.onOpen,s=void 0===u?function(){}:u,l=e.onClose,y=void 0===l?function(){}:l,m=b(e,f),v=h(Object(c.j)(!1),2),g=v[0],O=v[1];return Object(c.f)((function(){g||(Object(d.b)({triggerElementId:r,dropdownContentId:i,dropdownContentCloseButtonId:a,onOpen:s,onClose:y}),O(!0))}),[i,r,a,g,s,y]),Object(o.h)("div",p({id:i,className:"crayons-dropdown".concat(n&&n.length>0?" ".concat(n):"")},m),t)};m.defaultProps={className:void 0},m.displayName="Dropdown",m.propTypes={children:l.a.isRequired,className:s.a.string,triggerButtonId:s.a.string.isRequired,dropdownContentId:s.a.string.isRequired,dropdownContentCloseButtonId:s.a.string,onOpen:s.a.func,onClose:s.a.func};var v=function(e){var t=e.children,n=e.variant;return Object(o.h)("div",{className:"crayons-field".concat(n&&n.length>0?" crayons-field--".concat(n):"")},t)};v.displayName="FormField",v.defaultProps={variant:void 0},v.propTypes={children:i.c.isRequired,variant:s.a.oneOf(["radio","checkbox"])};var g=["id","value","name","className","checked","onClick"];function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function j(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var w=function(e){var t=e.id,n=e.value,r=e.name,i=e.className,a=e.checked,c=e.onClick,u=j(e,g);return Object(o.h)("input",O({id:t,value:n,name:r,className:"crayons-radio".concat(i&&i.length>0?" ".concat(i):""),checked:a,onClick:c,type:"radio"},u))};w.displayName="RadioButton",w.defaultProps={id:void 0,className:void 0,checked:!1,name:void 0},w.propTypes={id:s.a.string,value:s.a.string.isRequired,className:s.a.string,checked:s.a.bool,name:s.a.string,onClick:s.a.func.isRequired};var S=n(30),C=n(31)},30:function(e,t,n){"use strict";n.r(t),n.d(t,"Modal",(function(){return d}));var r=n(1),o=n(0),i=n.n(o),a=n(33),c=n(5),u=n(3);function s(e){var t=e.size,n=e.className,r="";return t&&t.length>0&&"default"!==t&&(r+=" crayons-modal--".concat(t)),n&&n.length>0&&(r+=" ".concat(n)),r}var l=function(){return Object(r.h)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",className:"crayons-icon",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-labelledby":"714d29e78a3867c79b07f310e075e824"},Object(r.h)("title",{id:"714d29e78a3867c79b07f310e075e824"},"Close"),Object(r.h)("path",{d:"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636l4.95 4.95z"}))},d=function(e){var t=e.children,n=e.size,o=void 0===n?"default":n,i=e.className,c=e.title,d=e.overlay,f=void 0===d||d,p=e.onClose,h=void 0===p?function(){}:p,y=e.closeOnClickOutside,b=void 0!==y&&y,m=e.focusTrapSelector,v=void 0===m?".crayons-modal":m;return Object(r.h)(a.a,{onDeactivate:h,clickOutsideDeactivates:b,selector:v},Object(r.h)("div",{"data-testid":"modal-container",className:"crayons-modal".concat(s({size:o,className:i}))},Object(r.h)("div",{role:"dialog","aria-modal":"true","aria-label":"modal",className:"crayons-modal__box"},c&&Object(r.h)("div",{className:"crayons-modal__box__header"},Object(r.h)("h2",null,c),Object(r.h)(u.a,{icon:l,variant:"ghost",contentType:"icon","aria-label":"Close",onClick:h})),Object(r.h)("div",{className:"crayons-modal__box__body"},t)),f&&Object(r.h)("div",{"data-testid":"modal-overlay",className:"crayons-modal__overlay ".concat(b?"background-clickable":"")})))};d.displayName="Modal",d.propTypes={children:c.c.isRequired,className:i.a.string,title:i.a.string.isRequired,overlay:i.a.bool,onClose:i.a.func,size:i.a.oneOf(["default","s","m"]).isRequired,focusTrapSelector:i.a.string}},31:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(1),o=function(){return Object(r.h)("svg",{className:"crayons-icon crayons-spinner",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(r.h)("path",{d:"M18.364 5.636L16.95 7.05A7 7 0 1019 12h2a9 9 0 11-2.636-6.364z",fill:"currentColor"}))}},33:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(0),o=n.n(r),i=n(1),a=n(2),c=n(40),u=n(5),s=n(17),l=function(e){var t=e.selector,n=e.children,r=e.onDeactivate,o=e.clickOutsideDeactivates,u=void 0!==o&&o,l=Object(a.i)(null),d=Object(a.a)((function(){return r()}),[r]);Object(a.f)((function(){var e=document.location.href,n=new MutationObserver((function(t){var r;t.some((function(){return e!==document.location.href}))&&(null===(r=l.current)||void 0===r||r.deactivate(),n.disconnect())}));return l.current=Object(c.a)(t,{escapeDeactivates:!1,clickOutsideDeactivates:u,onDeactivate:d}),l.current.activate(),n.observe(document.querySelector("body"),{childList:!0}),function(){l.current.deactivate(),n.disconnect()}}),[u,t,d]);var f={escape:r};return Object(i.h)(i.Fragment,null,n,Object(i.h)(s.a,{shortcuts:f}))};l.defaultProps={selector:".crayons-modal",onDeactivate:function(){}},l.propTypes={selector:o.a.string,children:u.c.isRequired,onDeactivate:o.a.func}},5:function(e,t,n){"use strict";n.d(t,"g",(function(){return i})),n.d(t,"c",(function(){return a.a})),n.d(t,"d",(function(){return c.a})),n.d(t,"f",(function(){return u.a})),n.d(t,"b",(function(){return s.b})),n.d(t,"a",(function(){return s.a})),n.d(t,"e",(function(){return l}));var r=n(0),o=n.n(r),i=o.a.shape({id:o.a.string.isRequired,name:o.a.string.isRequired,profile_image_url:o.a.string.isRequired,summary:o.a.string.isRequired}),a=n(9),c=n(6),u=n(7),s=n(11),l=o.a.shape({tags:o.a.arrayOf(o.a.string).isRequired,onClick:o.a.func.isRequired,onKeyPress:o.a.func.isRequired})},6:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),o=n.n(r),i=o.a.shape({id:o.a.number.isRequired,name:o.a.string.isRequired,slug:o.a.string.isRequired,profile_image_90:o.a.string.isRequired})},7:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),o=n.n(r),i=o.a.shape({id:o.a.number.isRequired,name:o.a.string.isRequired,hotness_score:o.a.number.isRequired,points:o.a.number.isRequired,bg_color_hex:o.a.string.isRequired,text_color_hex:o.a.string.isRequired})},8:function(e,t,n){"use strict";function r(e){if(e.ok)return e;try{e.json().then((function(e){throw new Error(e.error)}))}catch(t){throw t instanceof SyntaxError?new Error(e.statusText):t}}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o.a}));var o=n(12)},9:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),o=n.n(r),i=o.a.oneOfType([o.a.arrayOf(o.a.node),o.a.node])}},[[113,49,0,100]]]);
//# sourceMappingURL=Search-c5457387fccde3f0043c.chunk.js.map