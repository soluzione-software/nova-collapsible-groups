!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=n.n(r);Nova.booting(function(e){e.component("resources-group",o.a)})},function(e,t,n){var r=n(3)(n(4),n(5),!1,null,null,null);e.exports=r.exports},function(e,t){e.exports=function(e,t,n,r,o,s){var u,i=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(u=e,i=e.default);var d,a="function"==typeof i?i.options:i;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns,a._compiled=!0),n&&(a.functional=!0),o&&(a._scopeId=o),s?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},a._ssrRegister=d):r&&(d=r),d){var p=a.functional,f=p?a.render:a.beforeCreate;p?(a._injectStyles=d,a.render=function(e,t){return d.call(t),f(e,t)}):a.beforeCreate=f?[].concat(f,d):[d]}return{esModule:u,exports:i,options:a}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{groupsCount:{type:Number,required:!0}},data:function(){return{expanded:!1}}}},function(e,t){e.exports={render:function(){var e=this,t=this.$createElement;return(this._self._c||t)("div",[this._t("group",null,{expanded:this.expanded,toggle:function(){return e.expanded=!e.expanded}}),this._v(" "),this.expanded||1===this.groupsCount?this._t("default"):this._e()],2)},staticRenderFns:[]}}]);