(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{142:function(t,e,n){var content=n(203);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("4e8213bc",content,!0,{sourceMap:!1})},143:function(t,e,n){var content=n(205);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("b9227c20",content,!0,{sourceMap:!1})},144:function(t,e,n){var content=n(207);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("22744106",content,!0,{sourceMap:!1})},162:function(t,e,n){"use strict";n(38);var r=n(6),o={name:"default",fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/_style_guide/guide.json");case 2:n=e.sent,data=n.data,t.$store.dispatch("fetchGuide",data);case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{}}},c=(n(202),n(204),n(25)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("GHeader"),t._v(" "),n("Nuxt")],1)}),[],!1,null,"8133901a",null);e.a=component.exports;installComponents(component,{GHeader:n(230).default})},163:function(t,e,n){n(164),t.exports=n(165)},202:function(t,e,n){"use strict";n(142)},203:function(t,e,n){var r=n(40)(!1);r.push([t.i,"body,html{margin:0;padding:0}*{box-sizing:border-box}",""]),t.exports=r},204:function(t,e,n){"use strict";n(143)},205:function(t,e,n){var r=n(40)(!1);r.push([t.i,"*[data-v-8133901a]{margin:0;padding:0}",""]),t.exports=r},206:function(t,e,n){"use strict";n(144)},207:function(t,e,n){var r=n(40)(!1);r.push([t.i,'.stguideGHeader[data-v-a227c650]{-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);position:-webkit-sticky;position:sticky;top:0;left:0;right:0;z-index:9999}.stguideGHeader_inner[data-v-a227c650]{padding:10px 20px;display:grid;grid-template-columns:1fr 300px 50px;grid-gap:20px}.stguideGHeader_title[data-v-a227c650]{margin:0;font-size:30px;font-weight:700;align-self:center;text-shadow:0 0 2px #fff,0 0 2px #fff,0 0 2px #fff,0 0 2px #fff}.stguideGHeader_search[data-v-a227c650]{align-self:center}.stguideGHeader_word[data-v-a227c650]  .vue-simple-suggest{position:relative}.stguideGHeader_word[data-v-a227c650]  .vue-simple-suggest .input-wrapper input{width:100%;border:1px solid #888;border-radius:4px;height:40px;padding:0 10px;font-size:16px}.stguideGHeader_word[data-v-a227c650]  .vue-simple-suggest .suggestions{margin:0;padding:0;display:block;position:absolute;top:100%;left:0;right:0;border-radius:4px;background:#fff;border:1px solid #888}.stguideGHeader_word[data-v-a227c650]  .vue-simple-suggest .suggest-item{display:block;margin:0;padding:5px 10px;transition:all .2s}.stguideGHeader_word[data-v-a227c650]  .vue-simple-suggest .suggest-item.hover{background:#55e;color:#fff}.stguideGHeader_navBtn[data-v-a227c650]{align-self:center}.stguideGHeader_navBtn>button[data-v-a227c650]{display:block;border:none;background:#333;height:46px;width:46px;border-radius:4px;cursor:pointer;outline:none;position:relative}.stguideGHeader_navBtn>button[data-v-a227c650]:after,.stguideGHeader_navBtn>button[data-v-a227c650]:before,.stguideGHeader_navBtn>button>span[data-v-a227c650]{content:"";display:block;width:36px;height:2px;background:#fff;position:absolute;top:50%;left:50%;margin:-1px 0 0 -18px;transition:all .4s}.stguideGHeader_navBtn>button[data-v-a227c650]:before{transform:translateY(-8px)}.stguideGHeader_navBtn>button[data-v-a227c650]:after{transform:translateY(8px)}.stguideGHeader_navBtn-active>button[data-v-a227c650]:before{transform:translateY(0) rotate(135deg)}.stguideGHeader_navBtn-active>button>span[data-v-a227c650]{opacity:0}.stguideGHeader_navBtn-active>button[data-v-a227c650]:after{transform:translateY(0) rotate(-135deg)}.stguideGNav[data-v-a227c650]{position:absolute;top:100%;left:0;right:0;background:rgba(0,0,0,.8);height:0;overflow:hidden;transition:height .4s}.stguideGNav_inner[data-v-a227c650]{padding:20px}.stguideGNav_list[data-v-a227c650]{margin:0;display:block}.stguideGNav_item[data-v-a227c650]{display:block;font-size:20px}.stguideGNav_item>a[data-v-a227c650]{display:block;color:#fff;text-decoration:none}',""]),t.exports=r},208:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"getters",(function(){return o})),n.d(e,"mutations",(function(){return c})),n.d(e,"actions",(function(){return d}));n(209),n(212),n(36),n(30),n(135),n(31),n(70),n(97),n(138);var r=function(){return{guide:{sections:[]},filter:""}},o={filter:function(t){return t.filter},guideTree:function(t){var e=t.guide,n=e.sections.filter((function(t){return 1===t.depth})),r=e.sections.filter((function(t){return 1!==t.depth})),o={};return n=n.map((function(t){o["cate-".concat(t.referenceNumber)]=t,o["cate-".concat(t.referenceNumber)].children=[]})),r.map((function(t){var e=t.referenceNumber.split(".")[0];o["cate-".concat(e)].children.push(t)})),o},guideSections:function(t){var e=t.guide,filter=t.filter,n=!1;return filter&&(n=(n=e.sections.filter((function(t){return 1!==t.depth}))).filter((function(t){return filter.toLowerCase().split(/[ 　]/).filter((function(t){return t})).filter((function(e){var n=new RegExp(e,"gi");return t.header.match(n)||t.description.match(n)||t.markup.match(n)})).length}))),n},suggestionList:function(t){return t.guide.sections.map((function(s){return s.header}))}},c={filter:function(t,e){t.filter=e},fetchGuide:function(t,e){var n=t.guide;n=Object.assign(n,e)}},d={filter:function(t,e){(0,t.commit)("filter",e)},fetchGuide:function(t,e){(0,t.commit)("fetchGuide",e)}}},230:function(t,e,n){"use strict";n.r(e);n(36);var r={name:"stguideGHeader",data:function(){return{navIsOpen:!1}},components:{VueSimpleSuggest:n(159).a},computed:{searchFilter:{get:function(){return this.$store.getters.filter},set:function(t){this.$store.dispatch("filter",t)}},suggestionList:{get:function(){return this.$store.getters.suggestionList}},tree:function(){return this.$store.getters.guideTree}},methods:{navToggle:function(){this.navIsOpen=!this.navIsOpen},suggestInput:function(){this.navIsOpen=!1,window.scrollTo(0,0)},navClick:function(){this.searchFilter="",this.navIsOpen=!1},beforeEnter:function(t){t.style.height="0"},enter:function(t){t.style.height=t.scrollHeight+"px"},beforeLeave:function(t){t.style.height=t.scrollHeight+"px"},leave:function(t){t.style.height="0"}}},o=(n(206),n(25)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"stguideGHeader"},[n("div",{staticClass:"stguideGHeader_inner"},[n("h1",{staticClass:"stguideGHeader_title"},[t._v("Style Guide")]),t._v(" "),n("div",{staticClass:"stguideGHeader_search"},[n("div",{staticClass:"stguideGHeader_word"},[n("VueSimpleSuggest",{attrs:{list:t.suggestionList,"filter-by-query":!0,destyled:!0},on:{input:t.suggestInput},model:{value:t.searchFilter,callback:function(e){t.searchFilter=e},expression:"searchFilter"}})],1)]),t._v(" "),n("div",{staticClass:"stguideGHeader_navBtn",class:{"stguideGHeader_navBtn-active":t.navIsOpen}},[n("button",{on:{click:t.navToggle}},[n("span")])])]),t._v(" "),n("transition",{attrs:{name:"stguideGNav"},on:{beforeEnter:t.beforeEnter,enter:t.enter,beforeLeave:t.beforeLeave,leave:t.leave}},[t.navIsOpen?n("nav",{staticClass:"stguideGNav"},[n("div",{staticClass:"stguideGNav_inner"},[n("ul",{staticClass:"stguideGNav_list"},t._l(Object.keys(t.tree),(function(e){return n("li",{staticClass:"stguideGNav_item"},[t.tree[e].children.length?n("a",{attrs:{href:"#"+e},on:{click:t.navClick}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.tree[e].header)+"\n\t\t\t\t\t\t")]):t._e()])})),0)])]):t._e()])],1)}),[],!1,null,"a227c650",null);e.default=component.exports}},[[163,6,1,7]]]);