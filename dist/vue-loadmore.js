!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vueLoadMore=e():t.vueLoadMore=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(n){if(o[n])return o[n].exports;var s=o[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var o={};return e.m=t,e.c=o,e.d=function(t,o,n){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=1)}([function(t,e,o){"use strict";e.a={name:"vueLoadMore",components:{},computed:{},props:{option:{type:Object}},methods:{touchStart:function(t){this.touch_start_y=t.targetTouches[0].clientY,this.touch_start_x=t.targetTouches[0].clientX,this.domBody=document.getElementsByClassName("vue-scroll-body")[0],this.startScrollTop=this.domBody.scrollTop},touchMove:function(t){this.offsetHeight=this.domBody.offsetHeight,this.scrollTop=this.domBody.scrollTop,this.scrollHeight=this.domBody.scrollHeight;var e=t.targetTouches[0].clientY;if(this.touch_start_y-e<0&&0===this.scrollTop&&(this.gap=Math.abs(this.touch_start_y-e+this.startScrollTop),this.pull_down=!0,this.gap>=100?(this.style="top: "+this.gap+"px;",this.loading_show=1):this.style="top: "+this.gap+"px;"),this.touch_start_y-e>0&&this.scrollTop===this.scrollHeight-this.offsetHeight){var o=this.startScrollTop-this.scrollHeight+this.offsetHeight;this.gap=Math.abs(this.touch_start_y-e+o),this.pull_up=!0,this.gap>=100?(this.style="top: -"+this.gap+"px;",this.bottom_loading_show=1):this.style="top: -"+this.gap+"px;"}},startLoading:function(){this.$emit("startLoading",!0)},startRefresh:function(){this.$emit("startRefresh",!0)},loadingFinish:function(){this.loading_show=0,this.bottom_loading_show=0,this.style="top: 0px;  transition: all 0.5s ease-in-out"},touchEnd:function(){this.pull_down&&(this.gap>=100?this.startRefresh():this.style="top: 0px;  transition: all 0.2s ease-in-out",this.pull_down=!1),this.pull_up&&(this.gap>=100&&this.pull_up?this.startLoading():this.style="top: 0px;  transition: all 0.2s ease-in-out",this.pull_up=!1)}},data:function(){return{touch_start_y:0,touch_start_x:0,startScrollTop:0,gap:0,style:"",loading_show:0,offsetHeight:0,scrollTop:0,scrollHeight:0,domBody:{},load:0,refresh:0,bottom_loading_show:0,pull_down:!1,pull_up:!1,optionDefault:{refresh_message:"快松手",loading_message:"别拉了",refresh_img:"http://www.elysianaries.top/statics/loading.gif",loading_img:"http://www.elysianaries.top/statics/loading.gif"}}},mounted:function(){}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(2),s={install:function(t,e){t.component(n.a.name,n.a)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(s),e.default=n.a},function(t,e,o){"use strict";function n(t){o(3)}var s=o(0),i=o(9),r=o(8),a=n,l=r(s.a,i.a,!1,a,"data-v-53c3039b",null);e.a=l.exports},function(t,e,o){var n=o(4);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o(6)("42b76745",n,!0,{})},function(t,e,o){e=t.exports=o(5)(!1),e.push([t.i,"#load-more-vue[data-v-53c3039b]{position:absolute;height:100%;width:100%;background-color:#f5f5f5}.wrap[data-v-53c3039b]{position:relative;height:100%;width:100%;margin:0 auto;overflow:hidden}.wrap .vue-scroll-body[data-v-53c3039b]{position:absolute;top:0;width:100%;height:100%;overflow:auto}.wrap .loading[data-v-53c3039b]{position:absolute;text-align:center;width:100%;top:50px;color:#000}.wrap .loading img[data-v-53c3039b]{width:5rem}.wrap .bottom-loading[data-v-53c3039b]{position:absolute;bottom:50px;text-align:center;width:100%;color:#000}.wrap .bottom-loading img[data-v-53c3039b]{width:5rem}",""])},function(t,e){function o(t,e){var o=t[1]||"",s=t[3];if(!s)return o;if(e&&"function"==typeof btoa){var i=n(s);return[o].concat(s.sources.map(function(t){return"/*# sourceURL="+s.sourceRoot+t+" */"})).concat([i]).join("\n")}return[o].join("\n")}function n(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=o(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},s=0;s<this.length;s++){var i=this[s][0];"number"==typeof i&&(n[i]=!0)}for(s=0;s<t.length;s++){var r=t[s];"number"==typeof r[0]&&n[r[0]]||(o&&!r[2]?r[2]=o:o&&(r[2]="("+r[2]+") and ("+o+")"),e.push(r))}},e}},function(t,e,o){function n(t){for(var e=0;e<t.length;e++){var o=t[e],n=c[o.id];if(n){n.refs++;for(var s=0;s<n.parts.length;s++)n.parts[s](o.parts[s]);for(;s<o.parts.length;s++)n.parts.push(i(o.parts[s]));n.parts.length>o.parts.length&&(n.parts.length=o.parts.length)}else{for(var r=[],s=0;s<o.parts.length;s++)r.push(i(o.parts[s]));c[o.id]={id:o.id,refs:1,parts:r}}}}function s(){var t=document.createElement("style");return t.type="text/css",d.appendChild(t),t}function i(t){var e,o,n=document.querySelector("style["+v+'~="'+t.id+'"]');if(n){if(f)return g;n.parentNode.removeChild(n)}if(_){var i=h++;n=p||(p=s()),e=r.bind(null,n,i,!1),o=r.bind(null,n,i,!0)}else n=s(),e=a.bind(null,n),o=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else o()}}function r(t,e,o,n){var s=o?"":n.css;if(t.styleSheet)t.styleSheet.cssText=y(e,s);else{var i=document.createTextNode(s),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(i,r[e]):t.appendChild(i)}}function a(t,e){var o=e.css,n=e.media,s=e.sourceMap;if(n&&t.setAttribute("media",n),m.ssrId&&t.setAttribute(v,e.id),s&&(o+="\n/*# sourceURL="+s.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=o(7),c={},d=l&&(document.head||document.getElementsByTagName("head")[0]),p=null,h=0,f=!1,g=function(){},m=null,v="data-vue-ssr-id",_="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,o,s){f=o,m=s||{};var i=u(t,e);return n(i),function(e){for(var o=[],s=0;s<i.length;s++){var r=i[s],a=c[r.id];a.refs--,o.push(a)}e?(i=u(t,e),n(i)):i=[];for(var s=0;s<o.length;s++){var a=o[s];if(0===a.refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete c[a.id]}}}};var y=function(){var t=[];return function(e,o){return t[e]=o,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var o=[],n={},s=0;s<e.length;s++){var i=e[s],r=i[0],a=i[1],l=i[2],u=i[3],c={id:t+":"+s,css:a,media:l,sourceMap:u};n[r]?n[r].parts.push(c):o.push(n[r]={id:r,parts:[c]})}return o}},function(t,e){t.exports=function(t,e,o,n,s,i){var r,a=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(r=t,a=t.default);var u="function"==typeof a?a.options:a;e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),o&&(u.functional=!0),s&&(u._scopeId=s);var c;if(i?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},u._ssrRegister=c):n&&(c=n),c){var d=u.functional,p=d?u.render:u.beforeCreate;d?(u._injectStyles=c,u.render=function(t,e){return c.call(e),p(t,e)}):u.beforeCreate=p?[].concat(p,c):[c]}return{esModule:r,exports:a,options:u}}},function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"load-more-vue"}},[o("div",{staticClass:"wrap"},[t.loading_show?o("div",{staticClass:"loading"},[t.pull_down?o("span",{staticClass:"refresh-mes"},[t._v(t._s(t.option.refresh_message||t.optionDefault.refresh_message))]):o("img",{staticClass:"refresh-img",attrs:{src:t.option.refresh_img||t.optionDefault.refresh_img}})]):t._e(),t.bottom_loading_show?o("div",{staticClass:"bottom-loading"},[t.pull_up?o("span",{staticClass:"loading-mes"},[t._v(t._s(t.option.loading_message||t.optionDefault.loading_message))]):o("img",{staticClass:"loading-img",attrs:{src:t.option.loading_img||t.optionDefault.loading_img}})]):t._e(),o("div",{staticClass:"vue-scroll-body",style:t.style,on:{touchstart:t.touchStart,touchmove:t.touchMove,touchend:t.touchEnd}},[t._t("default")],2)])])},s=[],i={render:n,staticRenderFns:s};e.a=i}])});
//# sourceMappingURL=vue-loadmore.js.map