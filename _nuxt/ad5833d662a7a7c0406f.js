(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{125:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=125},140:function(t,e,n){"use strict";var r=n(43);n.n(r).a},141:function(t,e,n){"use strict";var r=n(44);n.n(r).a},142:function(t,e,n){},143:function(t,e,n){},144:function(t,e,n){"use strict";var r=n(45);n.n(r).a},149:function(t,e,n){var r={"./index.js":150};function o(t){var e=i(t);return n(e)}function i(t){var e=r[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}o.keys=function(){return Object.keys(r)},o.resolve=i,t.exports=o,o.id=149},150:function(t,e,n){"use strict";n.r(e),n.d(e,"strict",function(){return o});var r=n(32),o=!1;e.default=function(){return new r.a.Store({state:function(){return{counter:0,isActive:!1,isStoned:!0,isStylin:!1,showMobileNav:!1}},mutations:{increment:function(t){t.counter++},toggle:function(t){t.isActive=!t.isActive},gethigh:function(t){t.isStoned=!t.isStoned},toggleNav:function(t){t.showMobileNav=!t.showMobileNav},isStylin:function(t){t.isStylin=!t.isStylin}}})}},169:function(t,e,n){"use strict";n.r(e);n(65),n(36),n(37);var r=n(23),o=n.n(r),i=(n(30),n(54),n(107),n(6)),a=n.n(i),s=(n(77),n(78),n(81),n(22),n(42),n(82),n(112),n(124),n(0)),u=(n(61),n(125)),c=u.keys();function l(t){var e=u(t);return e.default||e}var p={},f=!0,d=!1,h=void 0;try{for(var v,m=c[Symbol.iterator]();!(f=(v=m.next()).done);f=!0){var x=v.value;p[x.replace(/^\.\//,"").replace(/\.(js|mjs)$/,"")]=l(x)}}catch(t){d=!0,h=t}finally{try{f||null==m.return||m.return()}finally{if(d)throw h}}var y=p,g=(n(87),n(126),n(127),n(129),n(131),n(132),n(135),n(24)),w=n.n(g),b=function(){return{}};function _(t){return t.then(function(t){return t.default||t})}function C(t,e){var n=t.options.data||b;!e&&t.options.hasAsyncData||(t.options.hasAsyncData=!0,t.options.data=function(){var r=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),w()({},r,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data))}function k(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=s.a.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function $(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function E(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).reduce(function(r,o){return t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r},[])}))}function R(t){return Promise.all(E(t,function(){var t=a()(regeneratorRuntime.mark(function t(e,n,r,o){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return r.components[o]=k(e),t.abrupt("return",r.components[o]);case 6:case"end":return t.stop()}},t,this)}));return function(e,n,r,o){return t.apply(this,arguments)}}()))}function S(t){return T.apply(this,arguments)}function T(){return(T=a()(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R(e);case 2:return t.abrupt("return",w()({},e,{meta:$(e).map(function(t){return t.options.meta||{}})}));case 3:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function j(t,e){return O.apply(this,arguments)}function O(){return(O=a()(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.context||(e.context={isStatic:!0,isDev:!1,isHMR:!1,app:e,store:e.store,payload:n.payload,error:n.error,base:"/",env:{}},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,n,r){if(t){e.context._redirected=!0;var i=o()(n);if("number"==typeof t||"undefined"!==i&&"object"!==i||(r=n||{},n=t,i=o()(n),t=302),"object"===i&&(n=e.router.resolve(n).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n))throw n=z(n,r),window.location.replace(n),new Error("ERR_REDIRECT");e.context.next({path:n,query:r,status:t})}},e.context.nuxtState=window.__NUXT__),e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=9;break}return t.next=8,S(n.route);case 8:e.context.route=t.sent;case 9:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=15;break}return t.next=14,S(n.from);case 14:e.context.from=t.sent;case 15:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function A(t,e){var n;return(n=2===t.length?new Promise(function(n){t(e,function(t,r){t&&e.error(t),n(r=r||{})})}):t(e))&&(n instanceof Promise||"function"==typeof n.then)||(n=Promise.resolve(n)),n}function N(t,e){var n=window.location.pathname;return"hash"===e?window.location.hash.replace(/^#\//,""):(t&&0===n.indexOf(t)&&(n=n.slice(t.length)),decodeURI(n||"/")+window.location.search+window.location.hash)}function q(t,e){return function(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===o()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var o="",i=n||{},a=r||{},s=a.pretty?L:encodeURIComponent,u=0;u<t.length;u++){var c=t[u];if("string"!=typeof c){var l=i[c.name||"pathMatch"],p=void 0;if(null==l){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(Array.isArray(l)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var f=0;f<l.length;f++){if(p=s(l[f]),!e[u].test(p))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===f?c.prefix:c.delimiter)+p}}else{if(p=c.asterisk?encodeURI(l).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):s(l),!e[u].test(p))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+p+'"');o+=c.prefix+p}}else o+=c}return o}}(function(t,e){var n,r=[],o=0,i=0,a="",s=e&&e.delimiter||"/";for(;null!=(n=D.exec(t));){var u=n[0],c=n[1],l=n.index;if(a+=t.slice(i,l),i=l+u.length,c)a+=c[1];else{var p=t[i],f=n[2],d=n[3],h=n[4],v=n[5],m=n[6],x=n[7];a&&(r.push(a),a="");var y=null!=f&&null!=p&&p!==f,g="+"===m||"*"===m,w="?"===m||"*"===m,b=n[2]||s,_=h||v;r.push({name:d||o++,prefix:f||"",delimiter:b,optional:w,repeat:g,partial:y,asterisk:!!x,pattern:_?H(_):x?".*":"[^"+U(b)+"]+?"})}}i<t.length&&(a+=t.substr(i));a&&r.push(a);return r}(t,e))}function M(t,e){var n={},r=w()({},t,e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n}function P(t){var e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(n){e="[".concat(t.constructor.name,"]")}return{message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500}}window.onNuxtReadyCbs=[],window.onNuxtReady=function(t){window.onNuxtReadyCbs.push(t)};var D=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function L(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function U(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function H(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function z(t,e){var n,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):t.startsWith("//")&&(t=t.substring(2));var o,i=t.split("/"),a=(n?n+"://":"//")+i.shift(),s=i.filter(Boolean).join("/");return 2===(i=s.split("#")).length&&(s=i[0],o=i[1]),a+=s?"/"+s:"",e&&"{}"!==JSON.stringify(e)&&(a+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),a+=o?"#"+o:""}var B=n(95),I=n.n(B),J=n(63),F=function(){return _(n.e(2).then(n.bind(null,185)))},K=function(){return _(n.e(5).then(n.bind(null,182)))},Q=function(){return _(n.e(6).then(n.bind(null,184)))},V=function(){return _(n.e(4).then(n.bind(null,186)))},X=function(){return _(n.e(3).then(n.bind(null,183)))};s.a.use(J.a),window.history.scrollRestoration="manual";var G=function(t,e,n){var r=!1;return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new Promise(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})};var W=n(96),Y=n.n(W).a,Z={name:"nuxt-child",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean},render:function(t,e){var n=e.parent,r=e.data,o=e.props;r.nuxtChild=!0;for(var i=n,a=n.$nuxt.nuxt.transitions,s=n.$nuxt.nuxt.defaultTransition,u=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&u++,n=n.$parent;r.nuxtChildDepth=u;var c=a[u]||s,l={};tt.forEach(function(t){void 0!==c[t]&&(l[t]=c[t])});var p={};et.forEach(function(t){"function"==typeof c[t]&&(p[t]=c[t].bind(i))});var f=p.beforeEnter;p.beforeEnter=function(t){if(window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")}),f)return f.call(i,t)};var d=[t("router-view",r)];return o.keepAlive&&(d=[t("keep-alive",{props:o.keepAliveProps},d)]),t("transition",{props:l,on:p},d)}},tt=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],et=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],nt={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}},rt={name:"nuxt-error",props:{error:{type:Object,default:null}},head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}},ot=(n(140),n(9)),it=Object(ot.a)(rt,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[n("div",{staticClass:"error"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[n("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(t.message))]),t._v(" "),404===t.statusCode?n("p",{staticClass:"description"},[n("nuxt-link",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._v(" "),t._m(0)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}],!1,null,null,null);it.options.__file="nuxt-error.vue";var at=it.exports,st={name:"nuxt",props:{nuxtChildKey:String,keepAlive:Boolean},render:function(t){return this.nuxt.err?t("nuxt-error",{props:{error:this.nuxt.err}}):t("nuxt-child",{key:this.routerViewKey,props:this.$props})},beforeCreate:function(){s.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||q(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},components:{NuxtChild:Z,NuxtError:at}},ut={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}},computed:{left:function(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy:function(){this.clear()},methods:{clear:function(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start:function(){var t=this;return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout(function(){return t.startTimer()},this.throttle):this.startTimer(),this},set:function(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get:function(){return this.percent},increase:function(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease:function(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause:function(){return clearInterval(this._timer),this},resume:function(){return this.startTimer(),this},finish:function(){return this.percent=this.reversed?0:100,this.hide(),this},hide:function(){var t=this;return this.clear(),setTimeout(function(){t.show=!1,t.$nextTick(function(){t.percent=0,t.reversed=!1})},500),this},fail:function(){return this.canSucceed=!1,this},startTimer:function(){var t=this;this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval(function(){t.skipTimerCount>0?t.skipTimerCount--:(t.reversed?t.decrease(t._cut):t.increase(t._cut),t.continuous&&(t.percent>=100?(t.skipTimerCount=1,t.reversed=!t.reversed):t.percent<=0&&(t.skipTimerCount=1,t.reversed=!t.reversed)))},100)}},render:function(t){var e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}},ct=(n(141),Object(ot.a)(ut,void 0,void 0,!1,null,null,null));ct.options.__file="nuxt-loading.vue";var lt=ct.exports,pt=(n(142),n(143),n(89),{computed:{navOpen:function(){return this.$store.state.showMobileNav}}}),ft=Object(ot.a)(pt,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{"data-aos":"fade-in","data-aos-duration":"6000"}},[n("nav",{staticClass:"flex items-center justify-between flex-wrap bg-white py-6 px-2 fixed w-full z-10 pin-t"},[n("div",{staticClass:"flex items-center flex-no-shrink text-black mr-6"},[n("nuxt-link",{staticClass:"text-black no-underline hover:text-red-dark hover:no-underline",attrs:{to:"/"}},[n("span",{staticClass:"text-2xl pl-2"},[n("i",{staticClass:"em em-grinning"}),t._v(" DNGR.io")])])],1),t._v(" "),n("div",{staticClass:"block lg:hidden"},[n("button",{staticClass:"flex items-center px-3 py-2 border rounded text-grey border-grey-dark hover:text-white hover:border-gray mr-2",attrs:{id:"nav-toggle"},on:{click:function(e){t.$store.commit("toggleNav")}}},[n("svg",{staticClass:"fill-current h-3 w-3",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[n("title",[t._v("Menu")]),n("path",{attrs:{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"}})])])]),t._v(" "),n("div",{staticClass:"w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block pt-6 lg:pt-0",class:[t.navOpen?"":"hidden"],attrs:{id:"nav-content"}},[n("ul",{staticClass:"list-reset lg:flex justify-end flex-1 items-center"},[n("li",{staticClass:"mr-3"},[n("nuxt-link",{staticClass:"inline-block py-2 px-4 text-black no-underline",attrs:{to:"/"}},[t._v("HOME")])],1),t._v(" "),n("li",{staticClass:"mr-3"},[n("nuxt-link",{staticClass:"inline-block text-grey-dark no-underline hover:text-red-dark hover:text-underline py-2 px-4",attrs:{to:"/about"}},[t._v("ABOUT")])],1),t._v(" "),n("li",{staticClass:"mr-3"},[n("nuxt-link",{staticClass:"inline-block text-grey-dark no-underline hover:text-red-dark hover:text-underline py-2 px-4",attrs:{to:"/posts"}},[t._v("POSTS")])],1),t._v(" "),n("li",{staticClass:"mr-3"},[n("nuxt-link",{staticClass:"inline-block text-grey-dark no-underline hover:text-red-dark hover:text-underline py-2 px-4",attrs:{to:"/style"}},[t._v("STYLE")])],1)])])])])},[],!1,null,null,null);ft.options.__file="Globalnav.vue";var dt=ft.exports,ht={components:{Globalnav:dt}},vt=Object(ot.a)(ht,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("globalnav"),this._v(" "),e("nuxt")],1)},[],!1,null,null,null);vt.options.__file="blog.vue";var mt=vt.exports,xt={components:{Globalnav:dt}},yt=(n(144),Object(ot.a)(xt,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("globalnav"),this._v(" "),e("nuxt")],1)},[],!1,null,null,null));yt.options.__file="default.vue";var gt={_blog:mt,_default:yt.exports},wt={head:{title:"nuxt-static",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"My exceptional Nuxt.js project"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}],style:[],script:[]},render:function(t,e){var n=t("nuxt-loading",{ref:"loading"}),r=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),i=t("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter:function(t){window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")})}}},[o]);return t("div",{domProps:{id:"__nuxt"}},[n,i])},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){s.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){s.a.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){return t&&gt["_"+t]||(t="default"),this.layoutName=t,this.layout=gt["_"+t],this.layout},loadLayout:function(t){return t&&gt["_"+t]||(t="default"),Promise.resolve(gt["_"+t])}},components:{NuxtLoading:lt}},bt=(n(145),n(32));s.a.use(bt.a);var _t=n(149),Ct=_t.keys(),kt={},$t=Ct.find(function(t){return t.includes("./index.")});if($t&&(kt=Ft($t)),"function"!=typeof kt){kt.modules||(kt.modules={});var Et=!0,Rt=!1,St=void 0;try{for(var Tt,jt=Ct[Symbol.iterator]();!(Et=(Tt=jt.next()).done);Et=!0){var Ot=Tt.value,At=Ot.replace(/^\.\//,"").replace(/\.(js|mjs)$/,"");if("index"!==At){var Nt=At.split(/\//);if(At=Nt[Nt.length-1],["state","getters","actions","mutations"].includes(At)){Qt(Kt(kt,Nt,!0),Ot,At)}else{var qt="index"===At;qt&&Nt.pop();var Mt=Kt(kt,Nt),Pt=Ft(Ot);if(Mt[At=Nt.pop()]=Mt[At]||{},qt){var Dt={};if(Mt[At].appends){Dt.appends=Mt[At].appends;var Lt=!0,Ut=!1,Ht=void 0;try{for(var zt,Bt=Mt[At].appends[Symbol.iterator]();!(Lt=(zt=Bt.next()).done);Lt=!0){var It=zt.value;Dt[It]=Mt[At][It]}}catch(t){Ut=!0,Ht=t}finally{try{Lt||null==Bt.return||Bt.return()}finally{if(Ut)throw Ht}}}Mt[At]=Object.assign({},Mt[At],Pt,Dt),Mt[At].namespaced=!0}else Mt[At]=Object.assign({},Pt,Mt[At]),Mt[At].namespaced=!0}}}}catch(t){Rt=!0,St=t}finally{try{Et||null==jt.return||jt.return()}finally{if(Rt)throw St}}}var Jt=kt instanceof Function?kt:function(){return new bt.a.Store(Object.assign({strict:!1},kt,{state:kt.state instanceof Function?kt.state():{}}))};function Ft(t){var e=_t(t),n=e.default||e;if(n.commit)throw new Error("[nuxt] store/"+t.replace("./","")+" should export a method which returns a Vuex instance.");if(n.state&&"function"!=typeof n.state)throw new Error("[nuxt] state should be a function in store/"+t.replace("./",""));return n}function Kt(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(1===e.length)return n?t:t.modules;var r=e.shift();return t.modules[r]=t.modules[r]||{},t.modules[r].namespaced=!0,t.modules[r].modules=t.modules[r].modules||{},Kt(t.modules[r],e,n)}function Qt(t,e,n){var r=_t(e);t.appends=t.appends||[],t.appends.push(n),t[n]=r.default||r}for(var Vt=n(64),Xt=n.n(Vt),Gt={setHeader:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"common",r=!0,o=!1,i=void 0;try{for(var a,s=(Array.isArray(n)?n:[n])[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var u=a.value;if(!e)return void delete this.defaults.headers[u][t];this.defaults.headers[u][t]=e}}catch(t){o=!0,i=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}},setToken:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"common",r=t?(e?e+" ":"")+t:null;this.setHeader("Authorization",r,n)},onRequest:function(t){this.interceptors.request.use(function(e){return t(e)||e})},onResponse:function(t){this.interceptors.response.use(function(e){return t(e)||e})},onRequestError:function(t){this.interceptors.request.use(void 0,function(e){return t(e)||Promise.reject(e)})},onResponseError:function(t){this.interceptors.response.use(void 0,function(e){return t(e)||Promise.reject(e)})},onError:function(t){this.onRequestError(t),this.onResponseError(t)}},Wt=["request","delete","get","head","options","post","put","patch"],Yt=function(){var t=Wt[Zt];Gt["$"+t]=function(){return this[t].apply(this,arguments).then(function(t){return t&&t.data})}},Zt=0;Zt<Wt.length;Zt++)Yt();var te=function(t,e){var n={baseURL:"http://localhost:3000/",headers:{common:{Accept:"application/json, text/plain, */*"},delete:{},get:{},head:{},post:{},put:{},patch:{}}};n.headers.common=t.req&&t.req.headers?Object.assign({},t.req.headers):{},delete n.headers.common.accept,delete n.headers.common.host,delete n.headers.common["cf-ray"],delete n.headers.common["cf-connecting-ip"];var r=Xt.a.create(n);!function(t){for(var e in Gt)t[e]=Gt[e].bind(t)}(r),function(t,e){var n={finish:function(){},start:function(){},fail:function(){},set:function(){}},r=function(){return window.$nuxt&&window.$nuxt.$loading&&window.$nuxt.$loading.set?window.$nuxt.$loading:n},o=0;t.onRequest(function(t){t&&!1===t.progress||o++}),t.onResponse(function(t){t&&t.config&&!1===t.config.progress||--o<=0&&(o=0,r().finish())}),t.onError(function(t){t&&t.config&&!1===t.config.progress||(o--,r().fail(),r().finish())});var i=function(t){if(o){var e=100*t.loaded/(t.total*o);r().set(Math.min(100,e))}};t.defaults.onUploadProgress=i,t.defaults.onDownloadProgress=i}(r),t.$axios=r,e("axios",r)},ee=n(97),ne=n.n(ee),re=function(t){t.app.AOS=new ne.a.init},oe=n(98),ie=n.n(oe);s.a.component("carousel",ie.a),s.a.component(Y.name,Y),s.a.component(Z.name,Z),s.a.component(nt.name,nt),s.a.component(st.name,st),s.a.use(I.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var ae={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};function se(){return(se=a()(regeneratorRuntime.mark(function t(e){var n,r,o,i,a,u,c,l;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new J.a({mode:"history",base:"/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:G,routes:[{path:"/about",component:F,name:"about"},{path:"/posts",component:K,name:"posts"},{path:"/style",component:Q,name:"style"},{path:"/posts/:id",component:V,name:"posts-id"},{path:"/",component:X,name:"index"}],fallback:!1});case 2:return n=t.sent,(r=Jt(e)).$router=n,o=r.registerModule,r.registerModule=function(t,e,n){return o.call(r,t,e,Object.assign({preserveState:!0},n))},i=w()({router:n,store:r,nuxt:{defaultTransition:ae,transitions:[ae],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?Object.assign({},ae,{name:t}):Object.assign({},ae,t):ae}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,i.context._errored=!!t,t=t?P(t):null;var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},wt),r.app=i,a=e?e.next:function(t){return i.router.push(t)},e?u=n.resolve(e.url).route:(c=N(n.options.base),u=n.resolve(c).route),t.next=13,j(i,{route:u,next:a,error:i.nuxt.error.bind(i),store:r,payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 13:if(l=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(void 0===e)throw new Error("inject(key, value) has no value provided");i[t="$"+t]=e,r[t]=i[t];var n="__nuxt_"+t+"_installed__";s.a[n]||(s.a[n]=!0,s.a.use(function(){s.a.prototype.hasOwnProperty(t)||Object.defineProperty(s.a.prototype,t,{get:function(){return this.$root.$options[t]}})}))},window.__NUXT__&&window.__NUXT__.state&&r.replaceState(window.__NUXT__.state),"function"!=typeof te){t.next=18;break}return t.next=18,te(i.context,l);case 18:if("function"!=typeof re){t.next=22;break}return t.next=22,re(i.context,l);case 22:t.next=25;break;case 25:t.next=28;break;case 28:return t.abrupt("return",{app:i,store:r,router:n});case 29:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}var ue,ce,le=[],pe=window.__NUXT__||{};function fe(t,e,n){var r=function(t){var r=function(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,o=new Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];return n.apply(void 0,o)}return n}(t,"transition",e,n)||{};return"string"==typeof r?{name:r}:r};return t.map(function(t){var e=Object.assign({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);Object.keys(o).filter(function(t){return o[t]&&t.toLowerCase().includes("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function de(t,e,n){return he.apply(this,arguments)}function he(){return(he=a()(regeneratorRuntime.mark(function t(e,n,r){var o,i=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!ue.nuxt.err||n.path!==e.path,this._queryChanged=JSON.stringify(e.query)!==JSON.stringify(n.query),this._diffQuery=this._queryChanged?M(e.query,n.query):[],this._pathChanged&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),t.prev=4,t.next=7,R(e);case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return i._diffQuery[t]})})&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),r(),t.next=17;break;case 12:t.prev=12,t.t0=t.catch(4),this.error(t.t0),this.$nuxt.$emit("routeChanged",e,n,error),r(!1);case 17:case"end":return t.stop()}},t,this,[[4,12]])}))).apply(this,arguments)}function ve(t,e){return pe.serverRendered&&e&&C(t,e),t._Ctor=t,t}function me(t,e,n){var r=this,o=[],i=!1;if(void 0!==n&&(o=[],n.middleware&&(o=o.concat(n.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof y[t]&&(i=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),y[t])}),!i)return function t(e,n){return!e.length||n._redirected||n._errored?Promise.resolve():A(e[0],n).then(function(){return t(e.slice(1),n)})}(o,e)}function xe(t,e,n){return ye.apply(this,arguments)}function ye(){return(ye=a()(regeneratorRuntime.mark(function t(e,n,r){var o,i,a,u,c,l,p,f,d,h,v,m,x,y,g,w,b=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return le=e===n?[]:$(n,o=[]).map(function(t,e){return q(n.matched[o[e]].path)(n.params)}),i=!1,a=function(t){n.path===t.path&&b.$loading.finish&&b.$loading.finish(),n.path!==t.path&&b.$loading.pause&&b.$loading.pause(),i||(i=!0,r(t))},t.next=7,j(ue,{route:e,from:n,next:a.bind(this)});case 7:if(this._dateLastError=ue.nuxt.dateErr,this._hadError=!!ue.nuxt.err,(c=$(e,u=[])).length){t.next=25;break}return t.next=14,me.call(this,c,ue.context);case 14:if(!i){t.next=16;break}return t.abrupt("return");case 16:return t.next=18,this.loadLayout("function"==typeof at.layout?at.layout(ue.context):at.layout);case 18:return l=t.sent,t.next=21,me.call(this,c,ue.context,l);case 21:if(!i){t.next=23;break}return t.abrupt("return");case 23:return ue.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 25:return c.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(fe(c,e,n)),t.prev=27,t.next=30,me.call(this,c,ue.context);case 30:if(!i){t.next=32;break}return t.abrupt("return");case 32:if(!ue.context._errored){t.next=34;break}return t.abrupt("return",r());case 34:return"function"==typeof(p=c[0].options.layout)&&(p=p(ue.context)),t.next=38,this.loadLayout(p);case 38:return p=t.sent,t.next=41,me.call(this,c,ue.context,p);case 41:if(!i){t.next=43;break}return t.abrupt("return");case 43:if(!ue.context._errored){t.next=45;break}return t.abrupt("return",r());case 45:f=!0,t.prev=46,d=!0,h=!1,v=void 0,t.prev=50,m=c[Symbol.iterator]();case 52:if(d=(x=m.next()).done){t.next=64;break}if("function"==typeof(y=x.value).options.validate){t.next=56;break}return t.abrupt("continue",61);case 56:return t.next=58,y.options.validate(ue.context);case 58:if(f=t.sent){t.next=61;break}return t.abrupt("break",64);case 61:d=!0,t.next=52;break;case 64:t.next=70;break;case 66:t.prev=66,t.t0=t.catch(50),h=!0,v=t.t0;case 70:t.prev=70,t.prev=71,d||null==m.return||m.return();case 73:if(t.prev=73,!h){t.next=76;break}throw v;case 76:return t.finish(73);case 77:return t.finish(70);case 78:t.next=84;break;case 80:return t.prev=80,t.t1=t.catch(46),this.error({statusCode:t.t1.statusCode||"500",message:t.t1.message}),t.abrupt("return",r());case 84:if(f){t.next=87;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 87:return t.next=89,Promise.all(c.map(function(t,n){if(t._path=q(e.matched[u[n]].path)(e.params),t._dataRefresh=!1,b._pathChanged&&b._queryChanged||t._path!==le[n])t._dataRefresh=!0;else if(!b._pathChanged&&b._queryChanged){var r=t.options.watchQuery;!0===r?t._dataRefresh=!0:Array.isArray(r)&&(t._dataRefresh=r.some(function(t){return b._diffQuery[t]}))}if(!b._hadError&&b._isMounted&&!t._dataRefresh)return Promise.resolve();var o=[],i=t.options.asyncData&&"function"==typeof t.options.asyncData,a=!!t.options.fetch,s=i&&a?30:45;if(i){var c=A(t.options.asyncData,ue.context).then(function(e){C(t,e),b.$loading.increase&&b.$loading.increase(s)});o.push(c)}if(b.$loading.manual=!1===t.options.loading,a){var l=t.options.fetch(ue.context);l&&(l instanceof Promise||"function"==typeof l.then)||(l=Promise.resolve(l)),l.then(function(t){b.$loading.increase&&b.$loading.increase(s)}),o.push(l)}return Promise.all(o)}));case 89:i||(this.$loading.finish&&!this.$loading.manual&&this.$loading.finish(),r()),t.next=106;break;case 92:if(t.prev=92,t.t2=t.catch(27),"ERR_REDIRECT"!==(g=t.t2||{}).message){t.next=97;break}return t.abrupt("return",this.$nuxt.$emit("routeChanged",e,n,g));case 97:return le=[],_=g,s.a.config.errorHandler&&s.a.config.errorHandler(_),"function"==typeof(w=at.layout)&&(w=w(ue.context)),t.next=103,this.loadLayout(w);case 103:this.error(g),this.$nuxt.$emit("routeChanged",e,n,g),r(!1);case 106:case"end":return t.stop()}var _},t,this,[[27,92],[46,80],[50,66,70,78],[71,,73,77]])}))).apply(this,arguments)}function ge(t,e){E(t,function(t,e,n,r){return"object"!==o()(t)||t.options||((t=s.a.extend(t))._Ctor=t,n.components[r]=t),t})}function we(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?at.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(ue.context)),this.setLayout(e)}function be(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||s.a.nextTick(function(){var e=[],r=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))}(t,e),o=$(t,e);r.forEach(function(t,e){if(t&&t.constructor._dataRefresh&&o[e]===t.constructor&&"function"==typeof t.constructor.options.data){var n=t.constructor.options.data.call(t);for(var r in n)s.a.set(t.$data,r,n[r])}}),we.call(n,t)})}function _e(t){window.onNuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),ce.afterEach(function(e,n){s.a.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}function Ce(){return(Ce=a()(regeneratorRuntime.mark(function t(e){var n,r,o,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return ue=e.app,ce=e.router,e.store,t.next=5,Promise.all((c=void 0,c=N((u=ce).options.base,u.options.mode),E(u.match(c),function(){var t=a()(regeneratorRuntime.mark(function t(e,n,r,o,i){var a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return a=ve(k(e),pe.data?pe.data[i]:null),r.components[o]=a,t.abrupt("return",a);case 7:case"end":return t.stop()}},t,this)}));return function(e,n,r,o,i){return t.apply(this,arguments)}}())));case 5:return n=t.sent,r=new s.a(ue),o=pe.layout||"default",t.next=10,r.loadLayout(o);case 10:if(r.setLayout(o),i=function(){r.$mount("#__nuxt"),s.a.nextTick(function(){_e(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(fe(n,ce.currentRoute)),le=ce.currentRoute.matched.map(function(t){return q(t.path)(ce.currentRoute.params)})),r.$loading={},pe.error&&r.error(pe.error),ce.beforeEach(de.bind(r)),ce.beforeEach(xe.bind(r)),ce.afterEach(ge),ce.afterEach(be.bind(r)),!pe.serverRendered){t.next=23;break}return i(),t.abrupt("return");case 23:xe.call(r,ce.currentRoute,ce.currentRoute,function(t){if(!t)return ge(ce.currentRoute,ce.currentRoute),we.call(r,ce.currentRoute),void i();ce.push(t,function(){return i()},function(t){if(!t)return i();console.error(t)})});case 24:case"end":return t.stop()}var u,c},t,this)}))).apply(this,arguments)}Object.assign(s.a.config,{silent:!0,performance:!1}),function(t){return se.apply(this,arguments)}().then(function(t){return Ce.apply(this,arguments)}).catch(function(t){console.error("[nuxt] Error while initializing app",t)})},43:function(t,e,n){},44:function(t,e,n){},45:function(t,e,n){},99:function(t,e,n){t.exports=n(169)}},[[99,7,1,8]]]);