(function(t){function n(n){for(var i,a,c=n[0],r=n[1],h=n[2],l=0,g=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&g.push(o[a][0]),o[a]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);f&&f(n);while(g.length)g.shift()();return s.push.apply(s,h||[]),e()}function e(){for(var t,n=0;n<s.length;n++){for(var e=s[n],i=!0,c=1;c<e.length;c++){var r=e[c];0!==o[r]&&(i=!1)}i&&(s.splice(n--,1),t=a(a.s=e[0]))}return t}var i={},o={index:0},s=[];function a(n){if(i[n])return i[n].exports;var e=i[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=t,a.c=i,a.d=function(t,n,e){a.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,n){if(1&n&&(t=a(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)a.d(e,i,function(n){return t[n]}.bind(null,i));return e},a.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(n,"a",n),n},a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},a.p="/vue-sign-canvas/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=n,c=c.slice();for(var h=0;h<c.length;h++)n(c[h]);var f=r;s.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("c31f")},"5e45":function(t,n,e){},c31f:function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var i=e("2b0e"),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("h2",{staticClass:"title"},[t._v("Vue Sign Canvas")]),e("sign-canvas",{ref:"SignCanvas",staticClass:"sign-canvas",attrs:{options:t.options},model:{value:t.value,callback:function(n){t.value=n},expression:"value"}}),t.value?e("img",{staticClass:"view-image",attrs:{src:t.value,width:"150",height:"150"}}):t._e(),e("div",{staticClass:"sign-btns"},[e("span",{attrs:{id:"clear"},on:{click:function(n){return t.canvasClear()}}},[t._v("清空")]),e("span",{attrs:{id:"save"},on:{click:function(n){return t.saveAsImg()}}},[t._v("保存")]),e("span",{attrs:{id:"save"},on:{click:function(n){return t.downloadSignImg()}}},[t._v("下载")])])],1)},s=[],a={data:function(){return{value:null,options:{canvasWidth:350,canvasHeight:370,isSign:!0,isShowBorder:!1}}},methods:{canvasClear:function(){this.$refs.SignCanvas.canvasClear()},saveAsImg:function(){var t=this.$refs.SignCanvas.saveAsImg();alert("image 的base64：".concat(t))},downloadSignImg:function(){this.$refs.SignCanvas.downloadSignImg()}}},c=a,r=(e("e780"),e("2877")),h=Object(r["a"])(c,o,s,!1,null,null,null),f=h.exports,l=(e("8e6e"),e("ac6a"),e("456d"),e("bd86")),g=(e("7f7f"),function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("canvas",{staticClass:"app-sign-canvas",attrs:{id:t.domId}},[t._v("\n    您的浏览器不支持canvas技术,请升级浏览器!\n")])}),u=[],v=(e("6b54"),{name:"SignCanvas",model:{value:"image",event:"confirm"},props:{image:{required:!1,type:[String],default:null},options:{required:!1,type:[Object],default:function(){return null}}},data:function(){return{value:null,domId:"sign-canvas-".concat(Math.random().toString(36).substr(2)),canvas:null,context:null,config:{lastWriteSpeed:1,lastWriteWidth:2,lineCap:"round",lineJoin:"round",canvasWidth:600,canvasHeight:600,isShowBorder:!0,bgColor:"#fcc",borderWidth:1,borderColor:"#ff787f",writeWidth:5,maxWriteWidth:30,minWriteWidth:5,writeColor:"#101010",isSign:!1,imgType:"png"}}},mounted:function(){this.init()},methods:{init:function(){this.canvas=document.getElementById(this.domId),this.context=this.canvas.getContext("2d");var t=this.options;if(t)for(var n in t)this.config[n]=t[n];this.canvasInit(),this.canvasClear()},setLineWidth:function(){var t=(new Date).getTime(),n=t-this.config.lastWriteTime;this.config.lastWriteTime=t;var e=this.config.minWriteWidth+(this.config.maxWriteWidth-this.config.minWriteWidth)*n/30;e<this.config.minWriteWidth?e=this.config.minWriteWidth:e>this.config.maxWriteWidth&&(e=this.config.maxWriteWidth),e=e.toFixed(2),this.config.isSign?this.context.lineWidth=this.config.writeWidth:this.context.lineWidth=this.config.lastWriteWidth=this.config.lastWriteWidth/4*3+e/4},writing:function(t){this.context.beginPath(),this.context.moveTo(this.config.lastPoint.x,this.config.lastPoint.y),this.context.lineTo(t.x,t.y),this.setLineWidth(),this.context.stroke(),this.config.lastPoint=t,this.context.closePath()},writeContextStyle:function(){this.context.beginPath(),this.context.strokeStyle=this.config.writeColor,this.context.lineCap=this.config.lineCap,this.context.lineJoin=this.config.lineJoin},writeBegin:function(t){this.config.isWrite=!0,this.config.lastWriteTime=(new Date).getTime(),this.config.lastPoint=t,this.writeContextStyle()},writeEnd:function(t){this.config.isWrite=!1,this.config.lastPoint=t,this.saveAsImg()},canvasClear:function(){this.context.save(),this.context.strokeStyle=this.config.writeColor,this.context.clearRect(0,0,this.config.canvasWidth,this.config.canvasHeight),this.context.beginPath();var t=this.config.borderWidth/2;this.config.isShowBorder&&(this.context.moveTo(t,t),this.context.lineTo(this.config.canvasWidth-t,t),this.context.lineTo(this.config.canvasWidth-t,this.config.canvasHeight-t),this.context.lineTo(t,this.config.canvasHeight-t),this.context.closePath(),this.context.lineWidth=this.config.borderWidth,this.context.strokeStyle=this.config.borderColor,this.context.stroke()),this.config.isShowBorder&&!this.config.isSign&&(this.context.moveTo(0,0),this.context.lineTo(this.config.canvasWidth,this.config.canvasHeight),this.context.lineTo(this.config.canvasWidth,this.config.canvasHeight/2),this.context.lineTo(this.config.canvasWidth,this.config.canvasHeight/2),this.context.lineTo(0,this.config.canvasHeight/2),this.context.lineTo(0,this.config.canvasHeight),this.context.lineTo(this.config.canvasWidth,0),this.context.lineTo(this.config.canvasWidth/2,0),this.context.lineTo(this.config.canvasWidth/2,this.config.canvasHeight),this.context.stroke()),this.$emit("confirm",null),this.context.restore()},saveAsImg:function(){var t=new Image;return t.src=this.canvas.toDataURL("image/png"),this.$emit("confirm",t.src),t.src},canvasInit:function(){this.canvas.width=this.config.canvasWidth,this.canvas.height=this.config.canvasHeight,this.config.emptyCanvas=this.canvas.toDataURL("image/png"),this.bindEvent()},bindEvent:function(){var t=this;this.canvas.addEventListener("mousedown",(function(n){n&&n.preventDefault()&&n.stopPropagation(),t.writeBegin({x:n.offsetX||n.clientX,y:n.offsetY||n.clientY})})),this.canvas.addEventListener("mousemove",(function(n){n&&n.preventDefault()&&n.stopPropagation(),t.config.isWrite&&t.writing({x:n.offsetX,y:n.offsetY})})),this.canvas.addEventListener("mouseup",(function(n){n&&n.preventDefault()&&n.stopPropagation(),t.writeEnd({x:n.offsetX,y:n.offsetY})})),this.canvas.addEventListener("mouseleave",(function(n){n&&n.preventDefault()&&n.stopPropagation(),t.writeEnd({x:n.offsetX,y:n.offsetY})})),this.canvas.addEventListener("touchstart",(function(n){n&&n.preventDefault()&&n.stopPropagation();var e=n.targetTouches[0],i=t.offset(e.target,"left"),o=t.offset(e.target,"top"),s=e.pageX?e.pageX-i:e.clientX,a=e.pageY?e.pageY-o:e.clientY;t.writeBegin({x:s,y:a})})),this.canvas.addEventListener("touchmove",(function(n){n&&n.preventDefault()&&n.stopPropagation();var e=n.targetTouches[0],i=t.offset(e.target,"left"),o=t.offset(e.target,"top"),s=e.pageX?e.pageX-i:e.clientX,a=e.pageY?e.pageY-o:e.clientY;console.log(e),t.config.isWrite&&t.writing({x:s,y:a})})),this.canvas.addEventListener("touchend",(function(n){n&&n.preventDefault()&&n.stopPropagation();var e=n.targetTouches,i=n.changedTouches,o=e&&e.length&&e[0]||i&&i.length&&i[0],s=t.offset(o.target,"left"),a=t.offset(o.target,"top"),c=o.pageX?o.pageX-s:o.clientX,r=o.pageY?o.pageY-a:o.clientY;t.writeEnd({x:c,y:r})}))},downloadSignImg:function(t){var n=document.getElementById(this.domId),e=n.toDataURL("image/png");this.saveFile(e,t?"".concat(t,".").concat(this.config.imgType):"".concat(Date.parse(new Date),".").concat(this.config.imgType))},saveFile:function(t,n){var e=document.createElementNS("http://www.w3.org/1999/xhtml","a");e.href=t,e.download=n;var i=document.createEvent("MouseEvents");i.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),e.dispatchEvent(i)},offset:function(t,n){var e="offset"+n[0].toUpperCase()+n.substring(1),i=t[e],o=t.offsetParent;while(null!=o)i+=o[e],o=o.offsetParent;return i}}}),d=v,p=Object(r["a"])(d,g,u,!1,null,null,null),m=p.exports;m.install=function(t){t.component(m.name,m)};var w=m;function x(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}function W(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?x(e,!0).forEach((function(n){Object(l["a"])(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):x(e).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var b=[w],y=function t(n){if(t.installed)return!1;t.installed=!0,b.map((function(t){n.component(t.name,t)}))};"undefined"!==typeof window&&window.Vue&&y(window.Vue);var S=W({install:y,SignCanvas:w},b);i["a"].use(S),i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(f)}}).$mount("#app")},e780:function(t,n,e){"use strict";var i=e("5e45"),o=e.n(i);o.a}});
//# sourceMappingURL=index.e9df1cf3.js.map