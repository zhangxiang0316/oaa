(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fa908f38"],{"0e46":function(t,n,o){"use strict";o.r(n);var r=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"organizationInfo"},[o("div",{staticClass:"handleButton"},[o("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.configOrgInfo()}}},[t._v("编辑")]),o("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.$router.go(-1)}}},[t._v("返回")])],1),o("div",{staticClass:"orgInfoTable"},[o("div",{staticClass:"orgInfoTitle"},[t._v("机构信息表")]),o("div",[o("el-row",[o("el-col",{attrs:{span:24}},[o("div",{staticClass:"grid-content bg-purple-dark titleFont"},[t._v("机构索引信息")])])],1),t._l(t.orgIndex,(function(n,r){return o("el-row",{key:r,attrs:{gutter:5}},[o("el-col",{attrs:{span:12}},[o("div",{staticClass:"grid-content bg-purple normalFont"},[t._v(t._s(n.label))])]),o("el-col",{attrs:{span:12}},[o("div",{staticClass:"grid-content bg-purple-light normalFont"},[t._v(t._s(t.orgIndexData[n.props]))])])],1)}))],2),o("div",[o("el-row",[o("el-col",{attrs:{span:24}},[o("div",{staticClass:"grid-content bg-purple-dark titleFont"},[t._v("机构配置信息")])])],1),t._l(t.orgConfigInfo,(function(n,r){return o("el-row",{key:r,attrs:{gutter:5}},[o("el-col",{attrs:{span:12}},[o("div",{staticClass:"grid-content bg-purple normalFont required"},[t._v(" "+t._s(n.label)+" "),n.isImpot?o("span",{staticStyle:{color:"red"}},[t._v("*")]):t._e()])]),o("el-col",{attrs:{span:12}},[o("div",{staticClass:"grid-content bg-purple-light normalFont"},[t._v(t._s(t.orgConfigInfoData[n.props]))])])],1)}))],2)])])},a=[],e={name:"orgManageViewDetail",components:{},props:{},data:function(){return{orgIndexData:{},orgIndex:[{props:"",label:"机构序号"},{props:"",label:"机构序号"},{props:"",label:"机构序号"},{props:"",label:"机构序号"}],orgConfigInfoData:{},orgConfigInfo:[{props:"",label:"机构代字",isImpot:!0},{props:"",label:"机构代字"},{props:"",label:"机构代字"},{props:"",label:"机构代字"}]}},computed:{},methods:{configOrgInfo:function(){this.$router.push({path:"/setting/orgDepartment/orgManage/orgManageConfig"})}},activated:function(){},mounted:function(){},created:function(){}},s=e,l=(o("bb30"),o("2877")),i=Object(l["a"])(s,r,a,!1,null,"d1a7febe",null);n["default"]=i.exports},bb30:function(t,n,o){"use strict";var r=o("fc4f"),a=o.n(r);a.a},fc4f:function(t,n,o){}}]);