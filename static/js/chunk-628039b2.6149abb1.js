(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-628039b2"],{"14cc":function(t,n,e){"use strict";var i=e("8db2"),o=e.n(i);o.a},8894:function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"detailPerson"},[e("div",{staticClass:"handleButton"},[e("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.configOrgInfo()}}},[t._v("编辑")]),e("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.$router.go(-1)}}},[t._v("返回")])],1),e("div",{staticClass:"orgInfoTable"},[e("div",{staticClass:"orgInfoTitle"},[t._v("机构信息表")]),e("div",[e("el-row",[e("el-col",{attrs:{span:24}},[e("div",{staticClass:"grid-content bg-purple-dark titleFont"},[t._v("机构索引信息")])])],1),t._l(10,(function(n){return e("el-row",{key:n,attrs:{gutter:5}},[e("el-col",{attrs:{span:6}},[e("div",{staticClass:"grid-content bg-purple normalFont"},[t._v("姓名")])]),e("el-col",{attrs:{span:6}},[e("div",{staticClass:"grid-content bg-purple-light normalFont"},[t._v("张三")])]),e("el-col",{attrs:{span:6}},[e("div",{staticClass:"grid-content bg-purple normalFont"},[t._v("年龄")])]),e("el-col",{attrs:{span:6}},[e("div",{staticClass:"grid-content bg-purple-light normalFont"},[t._v("23")])])],1)}))],2)])])},o=[],r={name:"detailPerson",components:{},props:{},data:function(){return{detail:JSON.parse(this.$route.query.detail)}},computed:{},methods:{configOrgInfo:function(){this.$intent.go(this,{name:"editPerson",query:{detail:JSON.stringify(this.detail)}})}},activated:function(){},mounted:function(){},created:function(){}},a=r,s=(e("14cc"),e("2877")),l=Object(s["a"])(a,i,o,!1,null,"e8bf2572",null);n["default"]=l.exports},"8db2":function(t,n,e){}}]);