!function(e,p){"object"==typeof exports&&"object"==typeof module?module.exports=p():"function"==typeof define&&define.amd?define([],p):"object"==typeof exports?exports.VueInfiniteLoading=p():e.VueInfiniteLoading=p()}(this,function(){return function(e){function p(o){if(t[o])return t[o].exports;var n=t[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,p),n.loaded=!0,n.exports}var t={};return p.m=e,p.c=t,p.p="/",p(0)}([function(e,p,t){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(p,"__esModule",{value:!0});var n=t(4),i=o(n);p["default"]=i["default"],"undefined"!=typeof window&&window.Vue&&window.Vue.component("infinite-loading",i["default"])},function(e,p){"use strict";function t(e){return"BODY"===e.tagName?window:["scroll","auto"].indexOf(getComputedStyle(e).overflowY)>-1?e:t(e.parentNode)}function o(e){var p=getComputedStyle(e===window?document.body:e),t=e===window?window.innerHeight:parseInt(p.height,10),o=e===window?document.body.scrollHeight:e.scrollHeight,n=isNaN(e.scrollTop)?e.pageYOffset:e.scrollTop,i=parseInt(p.paddingTop,10),x=parseInt(p.paddingBottom,10);return o-t-n-i-x}Object.defineProperty(p,"__esModule",{value:!0});var n={bubbles:"loading-bubbles",circles:"loading-circles","default":"loading-default",spiral:"loading-spiral",waveDots:"loading-wave-dots"};p["default"]={data:function(){return{scrollParent:null,scrollHandler:null,isLoading:!1,isComplete:!1,isFirstLoad:!0}},computed:{spinnerType:function(){return n[this.spinner]||n["default"]}},props:{distance:{type:Number,"default":100},onInfinite:Function,spinner:String},mounted:function(){var e=this;this.scrollParent=t(this.$el),this.scrollHandler=function(){var e=o(this.scrollParent);!this.isLoading&&e<=this.distance&&(this.isLoading=!0,this.onInfinite&&this.onInfinite.call())}.bind(this),setTimeout(this.scrollHandler,1),this.scrollParent.addEventListener("scroll",this.scrollHandler),this.$on("$InfiniteLoading:loaded",function(){e.isLoading=!1,e.isFirstLoad=!1}),this.$on("$InfiniteLoading:complete",function(){e.isLoading=!1,e.isComplete=!0,e.scrollParent.removeEventListener("scroll",e.scrollHandler)}),this.$on("$InfiniteLoading:reset",function(){e.isLoading=!1,e.isComplete=!1,e.isFirstLoad=!0,e.scrollParent.addEventListener("scroll",e.scrollHandler),setTimeout(e.scrollHandler,1)})},destroyed:function(){this.isComplete||this.scrollParent.removeEventListener("scroll",this.scrollHandler)}}},function(e,p,t){p=e.exports=t(3)(),p.push([e.id,".loading-wave-dots[data-v-34e13b62]{position:relative}.loading-wave-dots[data-v-34e13b62]:before{content:'';position:absolute;top:50%;left:50%;margin-left:-4px;margin-top:-4px;width:8px;height:8px;background-color:#bbb;border-radius:50%;animation:linear loading-wave-dots 2.8s infinite}@keyframes loading-wave-dots{0%{box-shadow:-32px 0 0 #bbb,-16px 0 0 #bbb,16px 0 0 #bbb,32px 0 0 #bbb}5%{box-shadow:-32px -4px 0 #bbb,-16px 0 0 #bbb,16px 0 0 #bbb,32px 0 0 #bbb;transform:translateY(0)}10%{box-shadow:-32px -6px 0 #999,-16px -4px 0 #bbb,16px 0 0 #bbb,32px 0 0 #bbb;transform:translateY(0)}15%{box-shadow:-32px 2px 0 #bbb,-16px -2px 0 #999,16px 4px 0 #bbb,32px 4px 0 #bbb;transform:translateY(-4px);background-color:#bbb}20%{box-shadow:-32px 6px 0 #bbb,-16px 4px 0 #bbb,16px 2px 0 #bbb,32px 6px 0 #bbb;transform:translateY(-6px);background-color:#999}25%{box-shadow:-32px 2px 0 #bbb,-16px 2px 0 #bbb,16px -4px 0 #999,32px -2px 0 #bbb;transform:translateY(-2px);background-color:#bbb}30%{box-shadow:-32px 0 0 #bbb,-16px 0 0 #bbb,16px -2px 0 #bbb,32px -6px 0 #999;transform:translateY(0)}35%{box-shadow:-32px 0 0 #bbb,-16px 0 0 #bbb,16px 0 0 #bbb,32px -2px 0 #bbb}40%{box-shadow:-32px 0 0 #bbb,-16px 0 0 #bbb,16px 0 0 #bbb,32px 0 0 #bbb}to{box-shadow:-32px 0 0 #bbb,-16px 0 0 #bbb,16px 0 0 #bbb,32px 0 0 #bbb}}.loading-circles[data-v-34e13b62]{position:relative}.loading-circles[data-v-34e13b62]:before{content:'';position:absolute;left:50%;top:50%;margin-top:-2.5px;margin-left:-2.5px;width:5px;height:5px;border-radius:50%;animation:linear loading-circles .75s infinite}@keyframes loading-circles{0%{box-shadow:0 -12px 0 #505050,8.52px -8.52px 0 #646464,12px 0 0 #797979,8.52px 8.52px 0 #8d8d8d,0 12px 0 #a2a2a2,-8.52px 8.52px 0 #b6b6b6,-12px 0 0 #cacaca,-8.52px -8.52px 0 #dfdfdf}12.5%{box-shadow:0 -12px 0 #dfdfdf,8.52px -8.52px 0 #505050,12px 0 0 #646464,8.52px 8.52px 0 #797979,0 12px 0 #8d8d8d,-8.52px 8.52px 0 #a2a2a2,-12px 0 0 #b6b6b6,-8.52px -8.52px 0 #cacaca}25%{box-shadow:0 -12px 0 #cacaca,8.52px -8.52px 0 #dfdfdf,12px 0 0 #505050,8.52px 8.52px 0 #646464,0 12px 0 #797979,-8.52px 8.52px 0 #8d8d8d,-12px 0 0 #a2a2a2,-8.52px -8.52px 0 #b6b6b6}37.5%{box-shadow:0 -12px 0 #b6b6b6,8.52px -8.52px 0 #cacaca,12px 0 0 #dfdfdf,8.52px 8.52px 0 #505050,0 12px 0 #646464,-8.52px 8.52px 0 #797979,-12px 0 0 #8d8d8d,-8.52px -8.52px 0 #a2a2a2}50%{box-shadow:0 -12px 0 #a2a2a2,8.52px -8.52px 0 #b6b6b6,12px 0 0 #cacaca,8.52px 8.52px 0 #dfdfdf,0 12px 0 #505050,-8.52px 8.52px 0 #646464,-12px 0 0 #797979,-8.52px -8.52px 0 #8d8d8d}62.5%{box-shadow:0 -12px 0 #8d8d8d,8.52px -8.52px 0 #a2a2a2,12px 0 0 #b6b6b6,8.52px 8.52px 0 #cacaca,0 12px 0 #dfdfdf,-8.52px 8.52px 0 #505050,-12px 0 0 #646464,-8.52px -8.52px 0 #797979}75%{box-shadow:0 -12px 0 #797979,8.52px -8.52px 0 #8d8d8d,12px 0 0 #a2a2a2,8.52px 8.52px 0 #b6b6b6,0 12px 0 #cacaca,-8.52px 8.52px 0 #dfdfdf,-12px 0 0 #505050,-8.52px -8.52px 0 #646464}87.5%{box-shadow:0 -12px 0 #646464,8.52px -8.52px 0 #797979,12px 0 0 #8d8d8d,8.52px 8.52px 0 #a2a2a2,0 12px 0 #b6b6b6,-8.52px 8.52px 0 #cacaca,-12px 0 0 #dfdfdf,-8.52px -8.52px 0 #505050}to{box-shadow:0 -12px 0 #505050,8.52px -8.52px 0 #646464,12px 0 0 #797979,8.52px 8.52px 0 #8d8d8d,0 12px 0 #a2a2a2,-8.52px 8.52px 0 #b6b6b6,-12px 0 0 #cacaca,-8.52px -8.52px 0 #dfdfdf}}.loading-bubbles[data-v-34e13b62]{position:relative}.loading-bubbles[data-v-34e13b62]:before{content:'';position:absolute;left:50%;top:50%;margin-top:-.5px;margin-left:-.5px;width:1px;height:1px;border-radius:50%;animation:linear loading-bubbles .85s infinite}@keyframes loading-bubbles{0%{box-shadow:0 -12px 0 .4px #666,8.52px -8.52px 0 .8px #666,12px 0 0 1.2px #666,8.52px 8.52px 0 1.6px #666,0 12px 0 2px #666,-8.52px 8.52px 0 2.4px #666,-12px 0 0 2.8px #666,-8.52px -8.52px 0 3.2px #666}12.5%{box-shadow:0 -12px 0 3.2px #666,8.52px -8.52px 0 .4px #666,12px 0 0 .8px #666,8.52px 8.52px 0 1.2px #666,0 12px 0 1.6px #666,-8.52px 8.52px 0 2px #666,-12px 0 0 2.4px #666,-8.52px -8.52px 0 2.8px #666}25%{box-shadow:0 -12px 0 2.8px #666,8.52px -8.52px 0 3.2px #666,12px 0 0 .4px #666,8.52px 8.52px 0 .8px #666,0 12px 0 1.2px #666,-8.52px 8.52px 0 1.6px #666,-12px 0 0 2px #666,-8.52px -8.52px 0 2.4px #666}37.5%{box-shadow:0 -12px 0 2.4px #666,8.52px -8.52px 0 2.8px #666,12px 0 0 3.2px #666,8.52px 8.52px 0 .4px #666,0 12px 0 .8px #666,-8.52px 8.52px 0 1.2px #666,-12px 0 0 1.6px #666,-8.52px -8.52px 0 2px #666}50%{box-shadow:0 -12px 0 2px #666,8.52px -8.52px 0 2.4px #666,12px 0 0 2.8px #666,8.52px 8.52px 0 3.2px #666,0 12px 0 .4px #666,-8.52px 8.52px 0 .8px #666,-12px 0 0 1.2px #666,-8.52px -8.52px 0 1.6px #666}62.5%{box-shadow:0 -12px 0 1.6px #666,8.52px -8.52px 0 2px #666,12px 0 0 2.4px #666,8.52px 8.52px 0 2.8px #666,0 12px 0 3.2px #666,-8.52px 8.52px 0 .4px #666,-12px 0 0 .8px #666,-8.52px -8.52px 0 1.2px #666}75%{box-shadow:0 -12px 0 1.2px #666,8.52px -8.52px 0 1.6px #666,12px 0 0 2px #666,8.52px 8.52px 0 2.4px #666,0 12px 0 2.8px #666,-8.52px 8.52px 0 3.2px #666,-12px 0 0 .4px #666,-8.52px -8.52px 0 .8px #666}87.5%{box-shadow:0 -12px 0 .8px #666,8.52px -8.52px 0 1.2px #666,12px 0 0 1.6px #666,8.52px 8.52px 0 2px #666,0 12px 0 2.4px #666,-8.52px 8.52px 0 2.8px #666,-12px 0 0 3.2px #666,-8.52px -8.52px 0 .4px #666}to{box-shadow:0 -12px 0 .4px #666,8.52px -8.52px 0 .8px #666,12px 0 0 1.2px #666,8.52px 8.52px 0 1.6px #666,0 12px 0 2px #666,-8.52px 8.52px 0 2.4px #666,-12px 0 0 2.8px #666,-8.52px -8.52px 0 3.2px #666}}.loading-default[data-v-34e13b62]{position:relative;border:1px solid #999;animation:ease loading-rotating 1.5s infinite}.loading-default[data-v-34e13b62]:before{content:'';position:absolute;display:block;top:0;left:50%;margin-top:-3px;margin-left:-3px;width:6px;height:6px;background-color:#999;border-radius:50%}.loading-spiral[data-v-34e13b62]{border:2px solid #777;border-right-color:transparent;animation:linear loading-rotating .85s infinite}@keyframes loading-rotating{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.infinite-loading-container[data-v-34e13b62]{clear:both;text-align:center}.infinite-loading-container [class^=loading-][data-v-34e13b62]{display:inline-block;margin:15px 0;width:28px;height:28px;font-size:28px;line-height:28px;border-radius:50%}.infinite-status-prompt[data-v-34e13b62]{color:#666;font-size:14px;text-align:center;padding:10px 0}",""])},function(e,p){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],p=0;p<this.length;p++){var t=this[p];t[2]?e.push("@media "+t[2]+"{"+t[1]+"}"):e.push(t[1])}return e.join("")},e.i=function(p,t){"string"==typeof p&&(p=[[null,p,""]]);for(var o={},n=0;n<this.length;n++){var i=this[n][0];"number"==typeof i&&(o[i]=!0)}for(n=0;n<p.length;n++){var x=p[n];"number"==typeof x[0]&&o[x[0]]||(t&&!x[2]?x[2]=t:t&&(x[2]="("+x[2]+") and ("+t+")"),e.push(x))}},e}},function(e,p,t){var o,n;t(7),o=t(1);var i=t(5);n=o=o||{},"object"!=typeof o["default"]&&"function"!=typeof o["default"]||(n=o=o["default"]),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,n._scopeId="data-v-34e13b62",e.exports=o},function(module,exports){module.exports={render:function(){with(this)return _h("div",{directives:[{name:"show",rawName:"v-show",value:isLoading,expression:"isLoading"}],staticClass:"infinite-loading-container"},[_t("spinner",[_h("i",{"class":spinnerType})])," ",_h("div",{directives:[{name:"show",rawName:"v-show",value:!isLoading&&isComplete&&isFirstLoad,expression:"!isLoading && isComplete && isFirstLoad"}],staticClass:"infinite-status-prompt"},[_t("no-results",["No results :("])])," ",_h("div",{directives:[{name:"show",rawName:"v-show",value:!isLoading&&isComplete&&!isFirstLoad,expression:"!isLoading && isComplete && !isFirstLoad"}],staticClass:"infinite-status-prompt"},[_t("no-more",["No more data :)"])])])},staticRenderFns:[]}},function(e,p,t){function o(e,p){for(var t=0;t<e.length;t++){var o=e[t],n=l[o.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](o.parts[i]);for(;i<o.parts.length;i++)n.parts.push(r(o.parts[i],p))}else{for(var x=[],i=0;i<o.parts.length;i++)x.push(r(o.parts[i],p));l[o.id]={id:o.id,refs:1,parts:x}}}}function n(e){for(var p=[],t={},o=0;o<e.length;o++){var n=e[o],i=n[0],x=n[1],a=n[2],r=n[3],s={css:x,media:a,sourceMap:r};t[i]?t[i].parts.push(s):p.push(t[i]={id:i,parts:[s]})}return p}function i(e,p){var t=c(),o=g[g.length-1];if("top"===e.insertAt)o?o.nextSibling?t.insertBefore(p,o.nextSibling):t.appendChild(p):t.insertBefore(p,t.firstChild),g.push(p);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");t.appendChild(p)}}function x(e){e.parentNode.removeChild(e);var p=g.indexOf(e);p>=0&&g.splice(p,1)}function a(e){var p=document.createElement("style");return p.type="text/css",i(e,p),p}function r(e,p){var t,o,n;if(p.singleton){var i=h++;t=u||(u=a(p)),o=s.bind(null,t,i,!1),n=s.bind(null,t,i,!0)}else t=a(p),o=d.bind(null,t),n=function(){x(t)};return o(e),function(p){if(p){if(p.css===e.css&&p.media===e.media&&p.sourceMap===e.sourceMap)return;o(e=p)}else n()}}function s(e,p,t,o){var n=t?"":o.css;if(e.styleSheet)e.styleSheet.cssText=m(p,n);else{var i=document.createTextNode(n),x=e.childNodes;x[p]&&e.removeChild(x[p]),x.length?e.insertBefore(i,x[p]):e.appendChild(i)}}function d(e,p){var t=p.css,o=p.media,n=p.sourceMap;if(o&&e.setAttribute("media",o),n&&(t+="\n/*# sourceURL="+n.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var l={},b=function(e){var p;return function(){return"undefined"==typeof p&&(p=e.apply(this,arguments)),p}},f=b(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),c=b(function(){return document.head||document.getElementsByTagName("head")[0]}),u=null,h=0,g=[];e.exports=function(e,p){p=p||{},"undefined"==typeof p.singleton&&(p.singleton=f()),"undefined"==typeof p.insertAt&&(p.insertAt="bottom");var t=n(e);return o(t,p),function(e){for(var i=[],x=0;x<t.length;x++){var a=t[x],r=l[a.id];r.refs--,i.push(r)}if(e){var s=n(e);o(s,p)}for(var x=0;x<i.length;x++){var r=i[x];if(0===r.refs){for(var d=0;d<r.parts.length;d++)r.parts[d]();delete l[r.id]}}}};var m=function(){var e=[];return function(p,t){return e[p]=t,e.filter(Boolean).join("\n")}}()},function(e,p,t){var o=t(2);"string"==typeof o&&(o=[[e.id,o,""]]);t(6)(o,{});o.locals&&(e.exports=o.locals)}])});