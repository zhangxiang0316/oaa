(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fa908f38"],{"0e46":function(t,o,n){"use strict";n.r(o);var r=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"organizationInfo"},[n("div",{staticClass:"handleButton"},[n("el-button",{attrs:{type:"primary"},on:{click:function(o){return t.configOrgInfo()}}},[t._v("编辑")]),n("el-button",{attrs:{type:"primary"},on:{click:function(o){return t.$router.go(-1)}}},[t._v("返回")])],1),n("div",{staticClass:"orgInfoTable"},[n("div",{staticClass:"orgInfoTitle"},[t._v("机构信息表")]),n("div",[n("el-row",[n("el-col",{attrs:{span:24}},[n("div",{staticClass:"grid-content bg-purple-dark titleFont"},[t._v("机构索引信息")])])],1),t._l(t.orgIndex,(function(o,r){return n("el-row",{key:r,attrs:{gutter:5}},[n("el-col",{attrs:{span:12}},[n("div",{staticClass:"grid-content bg-purple normalFont"},[t._v(t._s(o.label))])]),n("el-col",{attrs:{span:12}},[n("div",{staticClass:"grid-content bg-purple-light normalFont"},[t._v(t._s(t.orgIndexData[o.props]))])])],1)}))],2),n("div",[n("el-row",[n("el-col",{attrs:{span:24}},[n("div",{staticClass:"grid-content bg-purple-dark titleFont"},[t._v("机构配置信息")])])],1),t._l(t.orgConfigInfo,(function(o,r){return n("el-row",{key:r,attrs:{gutter:5}},[n("el-col",{attrs:{span:12}},[n("div",{staticClass:"grid-content bg-purple normalFont required"},[t._v(" "+t._s(o.label)+" "),o.isImpot?n("span",{staticStyle:{color:"red"}},[t._v("*")]):t._e()])]),n("el-col",{attrs:{span:12}},[n("div",{staticClass:"grid-content bg-purple-light normalFont"},[t._v(t._s(t.orgConfigInfoData[o.props]))])])],1)}))],2)])])},e=[],a={name:"orgManageViewDetail",components:{},props:{},data:function(){return{orgIndexData:{},orgIndex:[{props:"",label:"机构序号"},{props:"",label:"机构序号"},{props:"",label:"机构序号"},{props:"",label:"机构序号"}],orgConfigInfoData:{},orgConfigInfo:[{props:"",label:"机构代字",isImpot:!0},{props:"",label:"机构代字"},{props:"",label:"机构代字"},{props:"",label:"机构代字"}]}},computed:{},methods:{configOrgInfo:function(){this.$router.push({path:"/setting/orgDepartment/orgManage/orgManageConfig"})}},activated:function(){},mounted:function(){console.log(this.$route.query.memberNo)},created:function(){}},s=a,l=(n("bb30"),n("2877")),i=Object(l["a"])(s,r,e,!1,null,"d1a7febe",null);o["default"]=i.exports},bb30:function(t,o,n){"use strict";var r=n("fc4f"),e=n.n(r);e.a},fc4f:function(t,o,n){}}]);