(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b9736676","chunk-6901943f"],{"0de3":function(t,e,n){"use strict";var s=n("9a21"),a=n.n(s);a.a},"9a21":function(t,e,n){},"9ff6":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"deptAlterLists"},[n("dept-info",[t._t("default",[t._v("机构变更记录")],{slot:"title"})],2)],1)},a=[],l=n("eebe"),r={name:"orgAlterationsTab",components:{deptInfo:l["default"]},props:{},data:function(){return{detail:JSON.parse(this.$route.query.detail||"{}")}},computed:{},methods:{closeOrgList:function(){this.$router.go(-1)}},activated:function(){},mounted:function(){},created:function(){}},o=r,i=(n("0de3"),n("2877")),c=Object(i["a"])(o,s,a,!1,null,"3780852c",null);e["default"]=c.exports},b5d8:function(t,e,n){"use strict";var s=n("ffff"),a=n.n(s);a.a},eebe:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"deptAlterLists"},[n("div",{staticClass:"handleButton"},[n("el-button",{attrs:{type:"primary"},on:{click:t.closeOrgList}},[t._v("关闭")])],1),n("div",{staticClass:"deptAlterTable"},[n("el-row",[n("el-col",{attrs:{span:24}},[n("div",{staticClass:"grid-content bg-purple-dark titleFont"},[t._t("title",[t._v("组织变更记录")])],2)])],1),n("el-row",{attrs:{gutter:5}},[n("el-col",{attrs:{span:6}},[n("div",{staticClass:"grid-content bg-purple normalFont"},[t._v("操作人")])]),n("el-col",{attrs:{span:18}},[n("div",{staticClass:"grid-content bg-purple-light normalFont"},[t._v("11")])]),n("el-col",{attrs:{span:6}},[n("div",{staticClass:"grid-content bg-purple normalFont"},[t._v("操作时间")])]),n("el-col",{attrs:{span:18}},[n("div",{staticClass:"grid-content bg-purple-light normalFont"},[t._v("11")])]),1==t.typeNum?n("el-col",{attrs:{span:6}},[n("div",{staticClass:"grid-content bg-purple normalFont"},[t._v("变更类型")])]):t._e(),1==t.typeNum?n("el-col",{attrs:{span:18}},[n("div",{staticClass:"grid-content bg-purple-light normalFont"},[t._v("22")])]):t._e(),n("el-col",{attrs:{span:6}},[n("div",{staticClass:"grid-content bg-purple normalFont"},[t._v("操作类型")])]),n("el-col",{attrs:{span:18}},[n("div",{staticClass:"grid-content bg-purple-light normalFont"},[t._v("22")])]),n("el-col",{attrs:{span:6}},[n("div",{staticClass:"grid-content bg-purple normalFont"},[t._v("操作人IP")])]),n("el-col",{attrs:{span:18}},[n("div",{staticClass:"grid-content bg-purple-light normalFont"},[t._v("33")])]),n("el-col",{attrs:{span:6}},[n("div",{staticClass:"grid-content bg-purple normalFont"},[t._v("变更内容")])]),n("el-col",{attrs:{span:18}},[n("div",{staticClass:"grid-content bg-purple-light normalFont"},[t._v("44")])])],1)],1)])},a=[],l={name:"deptIndexAlterationsTab",components:{},props:{},data:function(){return{detail:JSON.parse(this.$route.query.detail||"{}"),typeNum:JSON.parse(this.$route.query.typeNum||"{}")}},computed:{},methods:{closeOrgList:function(){this.$router.go(-1)}},activated:function(){},mounted:function(){},created:function(){}},r=l,o=(n("b5d8"),n("2877")),i=Object(o["a"])(r,s,a,!1,null,"5c979a78",null);e["default"]=i.exports},ffff:function(t,e,n){}}]);