(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b2e50c36"],{"0466":function(t,e,s){t.exports=s.p+"img/fenxiang.c94214c2.png"},"6ae1":function(t,e,s){t.exports=s.p+"img/comment.0d284c2e.png"},"98b0":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"course_details_container"},[s("div",{staticClass:"course_details_top"},[s("div",{on:{click:t.backCourse}},[t._v("<")]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showOne,expression:"showOne"}]},[t._v("课程详情")]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showThree,expression:"showThree"}],staticStyle:{display:"flex",justifyContent:"space-around"}},t._l(t.topItem,(function(e,i){return s("div",{key:i,class:t.selectIndex===i?"course_details_top_items_active":"course_details_top_items",on:{click:function(e){return t.selectTop(i)}}},[t._v(t._s(e))])})),0),t._m(0)]),s("div",{staticClass:"course_datails_main"},[s("div",{staticClass:"course_details_content"},[s("div",{staticClass:"course_details_title"},[s("span",[t._v(t._s(t.infoItems.title))]),s("span",{staticStyle:{float:"right"}},[s("van-icon",{staticStyle:{"margin-left":"140px"},attrs:{name:"star",color:t.show?"grey":"orange",size:"25"},on:{click:t.showIcon}})],1)]),s("div",{staticClass:"course_details_pay"},[t._v(t._s(t._f("price")(t.infoItems.price)))]),s("div",{staticClass:"course_details_data"},[s("span",[t._v("共"+t._s(t.infoItems.total_periods)+"课时")]),s("span",{staticStyle:{margin:"0 10px"}},[t._v(" | ")]),s("span",[t._v(" "+t._s(t.infoItems.sales_num)+"人已报名")])])]),s("div",{staticClass:"course_details_team"},[s("div",{staticStyle:{"font-size":"16px","margin-left":"5px"}},[t._v("教学团队")]),t._l(t.teacher,(function(e,i){return s("div",{key:i},[s("div",[s("img",{staticClass:"course_details_team_photo",attrs:{src:e.avatar,alt:""}})]),s("div",{staticStyle:{"margin-left":"20px","font-size":"14px"}},[t._v(t._s(e.teacher_name))])])}))],2),s("div",{staticClass:"course_details_introduce"},[s("div",[t._v("课程介绍")]),t._l(t.introduce,(function(e,i){return s("div",{key:i},[s("div",{staticStyle:{"font-size":"14px",color:"grey"}},[t._v(t._s(e.periods_title))])])}))],2),s("div",{staticClass:"course_details_outline"},[s("div",{staticStyle:{"font-size":"16px"}},[t._v("课程大纲")]),t._l(t.introduce,(function(e,i){return s("div",{key:i,staticClass:"course_details_course"},[s("div",{staticStyle:{"font-size":"14px",color:"grey"}},[t._v(t._s(e.periods_title))])])}))],2),s("div",{staticClass:"course_details_comment"},[s("div",{ref:"commit",staticClass:"course_details_comment_title"},[t._v("课程评论")]),t._l(t.comment,(function(e,i){return s("div",{directives:[{name:"show",rawName:"v-show",value:t.commentItem,expression:"commentItem"}],key:i,staticClass:"course_details_comment_content"},[s("div",{staticClass:"course_details_comment_content_left"},[s("img",{staticStyle:{width:"35px","marign-top":"5px"},attrs:{src:e.avatar,alt:""}})]),s("div",{staticClass:"course_details_comment_content_right"},[s("div",{staticClass:"course_details_comment_content_right_top"},[s("span",{staticStyle:{"font-size":"16px"}},[t._v(t._s(e.nickname))]),s("span",{staticStyle:{color:"grey"}},[t._v(t._s(t._f("time")(e.created_at)))])]),s("div",{staticClass:"course_details_comment_content_right_bottom"},[s("div",[t._v(t._s(e.content))])])])])})),s("div",{directives:[{name:"show",rawName:"v-show",value:t.commentNone,expression:"commentNone"}]},[t._m(1),s("div",{staticStyle:{width:"100%","text-align":"center",color:"grey"}},[t._v("暂无评论")])]),s("div",{staticStyle:{width:"100%",height:"80px"}})],2),s("div",{staticClass:"width:100%;height:50px"}),s("div",{staticClass:"course_details_add"},[t._v("立即报名")])])])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("img",{staticClass:"course_details_top_icon",attrs:{src:s("0466"),alt:""}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("img",{staticStyle:{width:"120px","margin-left":"120px"},attrs:{src:s("6ae1"),alt:""}})])}],o=(s("b680"),{data:function(){return{infoItems:[],teacher:[],introduce:[],comment:[],topItem:["课程详情","课程大纲","课程评价"],commentItem:!1,commentNone:!1,show:!0,showOne:!0,showThree:!1,selectIndex:0}},methods:{backCourse:function(){this.$router.back()},showIcon:function(){this.show=!this.show,0==this.show?this.$http.post("/api/app/collect",{course_basis_id:this.$route.query.id,type:1}).then((function(t){window.console.log(t.data)})):this.$http.put("/api/app/collect/cancel/231/1").then((function(t){window.console.log(t.data)}))},handleScrollx:function(){window.pageYOffset>0?(this.showOne=!1,this.showThree=!0):(this.showOne=!0,this.showThree=!1)},selectTop:function(t){this.selectIndex=t,3==this.selectIndex&&this.$refs.commit.scrollIntoView()}},mounted:function(){var t=this;this.$http.get("/api/app/courseInfo/basis_id="+this.$route.query.id).then((function(e){t.infoItems=e.data.data.info,t.teacher=e.data.data.teachers})),this.$http.post("/api/app/courseChapter",{id:this.$route.query.id}).then((function(e){t.introduce=e.data.data})),this.$http.post("/api/app/courseComment",{limit:10,page:1,id:this.$route.query.id}).then((function(e){t.comment=e.data.data.list,0==t.comment.length?(t.commentItem=!1,t.commentNone=!0):(t.commentItem=!0,t.commentNone=!1)})),window.addEventListener("scroll",this.handleScrollx,!0)},filters:{price:function(t){return 0==t?"免费":"￥".concat((t/100).toFixed(2))},time:function(t){var e=new Date(1e3*parseInt(t)),s=e.getFullYear(),i=e.getMonth()+1;i=i<10?"0"+i:i;var a=e.getDate();a=a<10?"0"+a:a;var o=e.getHours();o=o<10?"0"+o:o;var n=e.getMinutes();return n=n<10?"0"+n:n,s+"-"+i+"-"+a+" "+o+":"+n}}}),n=o,c=(s("e6df"),s("2877")),r=Object(c["a"])(n,i,a,!1,null,null,null);e["default"]=r.exports},e6df:function(t,e,s){"use strict";var i=s("f8be"),a=s.n(i);a.a},f8be:function(t,e,s){}}]);
//# sourceMappingURL=chunk-b2e50c36.f4a2a573.js.map