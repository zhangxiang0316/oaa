(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31434374"],{"3bbee":function(t,n,s){},ba81:function(t,n,s){"use strict";s.r(n);var a=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"orgAlterLists"},[s("div",{staticClass:"handleButton"},[s("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.configOrgInfo()}}},[t._v("编辑")]),s("el-button",{attrs:{type:"primary"},on:{click:t.closeOrgList}},[t._v("关闭")])],1),s("div",{staticClass:"orgAlterTable"},[s("el-row",[s("el-col",{attrs:{span:24}},[s("div",{staticClass:"grid-content bg-purple-dark titleFont"},[t._v("新旧机构对应表")])])],1),s("el-row",{attrs:{gutter:5}},[s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content bg-purple normalFont"},[t._v("原机构全称")])]),s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content bg-purple-light normalFont"},[t._v("11")])]),s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content bg-purple normalFont"},[t._v("新机构全称")])]),s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content bg-purple-light normalFont"},[t._v("22")])]),s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content bg-purple normalFont"},[t._v("原机构简称")])]),s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content bg-purple-light normalFont"},[t._v("33")])]),s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content bg-purple normalFont"},[t._v("新机构简称")])]),s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content bg-purple-light normalFont"},[t._v("44")])]),s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content bg-purple normalFont"},[t._v("原机构ID")])]),s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content bg-purple-light normalFont"},[t._v("55")])]),s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content bg-purple normalFont"},[t._v("新机构ID")])]),s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content bg-purple-light normalFont"},[t._v("66")])]),s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content bg-purple normalFont"},[t._v("备注")])]),s("el-col",{attrs:{span:18}},[s("div",{staticClass:"grid-content bg-purple-light normalFont"},[t._v("77")])])],1)],1)])},e=[],l={name:"orgAlterLists",components:{},props:{},data:function(){return{detail:JSON.parse(this.$route.query.detail||"{}")}},computed:{},methods:{configOrgInfo:function(){this.$intent.go(this,{name:"orgAlterEdit",query:{detail:JSON.stringify(this.detail)}})},closeOrgList:function(){this.$router.push({path:"/setting/orgDepartment/alterRecord/orgAlterRecord"})}},activated:function(){},mounted:function(){},created:function(){}},r=l,o=(s("dee2"),s("2877")),i=Object(o["a"])(r,a,e,!1,null,"36e1ecf6",null);n["default"]=i.exports},dee2:function(t,n,s){"use strict";var a=s("3bbee"),e=s.n(a);e.a}}]);