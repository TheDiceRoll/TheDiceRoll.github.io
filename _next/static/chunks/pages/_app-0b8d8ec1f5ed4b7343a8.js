_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,c=void 0!==a&&a;return n||o&&c}},0:function(e,t,n){n("J5xr"),e.exports=n("nOHt")},"20a2":function(e,t,n){e.exports=n("nOHt")},"48fX":function(e,t,n){var r=n("qhzo");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"8Kt/":function(e,t,n){"use strict";var r=n("oI91");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=f,t.default=void 0;var a,c=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),i=(a=n("Xuae"))&&a.__esModule?a:{default:a},u=n("lwAK"),s=n("FYa8"),p=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[c.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(c.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===c.default.Fragment?e.concat(c.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var m=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=c.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,c=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){c=!0;var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,s=m.length;u<s;u++){var p=m[u];if(o.props.hasOwnProperty(p))if("charSet"===p)n.has(p)?a=!1:n.add(p);else{var l=o.props[p],f=r[p]||new Set;"name"===p&&c||!f.has(l)?(f.add(l),r[p]=f):a=!1}}}return a}}()).reverse().map((function(e,n){var a=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var i=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return i["data-href"]=i.href,i.href=void 0,i["data-optimized-fonts"]=!0,c.default.cloneElement(e,i)}return c.default.cloneElement(e,{key:a})}))}function b(e){var t=e.children,n=(0,c.useContext)(u.AmpStateContext),r=(0,c.useContext)(s.HeadManagerContext);return c.default.createElement(i.default,{reduceComponentsToState:h,headManager:r,inAmpMode:(0,p.isInAmpMode)(n)},t)}b.rewind=function(){};var v=b;t.default=v},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},J5xr:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("Q0q4")}])},Q0q4:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("g4pe"),c=n.n(a),i=n("1rMS"),u=n("20a2"),s=n("AeFk");t.default=function(e){var t=e.Component,n=e.pageProps,r=Object(u.useRouter)(),a={"/":"\ud648","/preset":"\uc8fc\uc0ac\uc704 \ud504\ub9ac\uc14b","/custom":"\ucee4\uc2a4\ud140 \uc8fc\uc0ac\uc704"};return Object(s.c)(o.a.Fragment,null,Object(s.c)(c.a,null,Object(s.c)("meta",{charSet:"UTF-8"}),Object(s.c)("meta",{httpEquiv:"X-UA-Compatible",content:"ie=edge"}),Object(s.c)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"}),Object(s.c)("meta",{property:"og:site_name",content:"DiceRoll v".concat(i.a.version)}),Object(s.c)("meta",{property:"og:title",content:"".concat(a[r.pathname]," - DiceRoll v").concat(i.a.version)}),Object(s.c)("meta",{property:"og:type",content:"website"}),Object(s.c)("meta",{property:"og:description",content:"\uc8fc\uc0ac\uc704\uac00 \ud544\uc694\ud560 \ub54c\uc5d0 \ub204\uad6c\ub098 \uac04\ud3b8\ud558\uac8c \uc8fc\uc0ac\uc704\ub97c \uad74\ub9b4 \uc218 \uc788\uac8c\ub054 \ud574\uc8fc\ub294 \uc6f9 \ud504\ub85c\uadf8\ub7a8."}),Object(s.c)("meta",{property:"og:image",content:"https://thediceroll.github.io/assets/images/Dice.png"}),Object(s.c)("meta",{property:"og:url",content:"https://thediceroll.github.io".concat(r.pathname)}),Object(s.c)("meta",{property:"og:locale",content:"ko_KR"}),Object(s.c)("meta",{name:"twitter:card",content:"summary_large_image"}),Object(s.c)("meta",{name:"twitter:site",content:"DiceRoll"}),Object(s.c)("meta",{name:"twitter:creator",content:"@NIHILncunia"}),Object(s.c)("meta",{name:"twitter:title",content:"".concat(a[r.pathname]," - DiceRoll v").concat(i.a.version)}),Object(s.c)("meta",{name:"twitter:description",content:"\uc8fc\uc0ac\uc704\uac00 \ud544\uc694\ud560 \ub54c\uc5d0 \ub204\uad6c\ub098 \uac04\ud3b8\ud558\uac8c \uc8fc\uc0ac\uc704\ub97c \uad74\ub9b4 \uc218 \uc788\uac8c\ub054 \ud574\uc8fc\ub294 \uc6f9 \ud504\ub85c\uadf8\ub7a8."}),Object(s.c)("meta",{name:"twitter:image",content:"https://thediceroll.github.io/assets/images/Dice.png"}),Object(s.c)("meta",{name:"description",content:"\uc8fc\uc0ac\uc704\uac00 \ud544\uc694\ud560 \ub54c\uc5d0 \ub204\uad6c\ub098 \uac04\ud3b8\ud558\uac8c \uc8fc\uc0ac\uc704\ub97c \uad74\ub9b4 \uc218 \uc788\uac8c\ub054 \ud574\uc8fc\ub294 \uc6f9 \ud504\ub85c\uadf8\ub7a8."}),Object(s.c)("meta",{name:"keywords",content:"\uc8fc\uc0ac\uc704, Roll, Dice, \uc8fc\uc0ac\uc704 \uad74\ub9ac\uae30, \ub2e4\uc774\uc2a4"}),Object(s.c)("meta",{name:"author",content:"NIHILncunia"}),Object(s.c)("meta",{name:"generator",content:"VS Code"}),Object(s.c)("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.15.1/css/all.css",integrity:"sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp",crossOrigin:"anonymous"}),Object(s.c)("meta",{name:"robots",content:"All"}),Object(s.c)("meta",{name:"robots",content:"index, follow"}),Object(s.c)("meta",{name:"NaverBot",content:"All"}),Object(s.c)("meta",{name:"NaverBot",content:"index, follow"}),Object(s.c)("meta",{name:"Yeti",content:"All"}),Object(s.c)("meta",{name:"Yeti",content:"index, follow"}),Object(s.c)("meta",{name:"google-site-verification",content:"iIK1QMzAYU9YHlIbkvglYdu5GF4WsxIBaV_geNrPVMI"}),Object(s.c)("link",{rel:"shortcut icon",href:"/assets/icons/icon.ico",type:"image/x-icon"}),Object(s.c)("title",null,a[r.pathname]," - DiceRoll v",i.a.version)),Object(s.c)(t,n))}},T0f4:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},Xuae:function(e,t,n){"use strict";var r=n("mPvQ"),o=n("/GRZ"),a=n("i2R6"),c=(n("qXWd"),n("48fX")),i=n("tCBg"),u=n("T0f4");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var p=n("q1tI"),l=function(e){c(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(p.Component);t.default=l},g4pe:function(e,t,n){e.exports=n("8Kt/")},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},mPvQ:function(e,t,n){var r=n("5fIB"),o=n("rlHP"),a=n("KckH"),c=n("kG2m");e.exports=function(e){return r(e)||o(e)||a(e)||c()}},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},qXWd:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},tCBg:function(e,t,n){var r=n("C+bE"),o=n("qXWd");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}}},[[0,0,2,1,3]]]);