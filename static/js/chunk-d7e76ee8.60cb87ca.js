(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d7e76ee8"],{6207:function(t,e,a){},"9a20":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("div",{staticClass:"btn-list"},[a("el-button",{attrs:{type:"primary"},on:{click:t.closedata}},[t._v("关闭")]),a("el-button",{attrs:{type:"primary"},on:{click:t.editordata}},[t._v("编辑")])],1),a("div",{staticClass:"ser-confiog"},[a("p",{staticClass:"ser-config-title"},[t._v("节假日配置")]),a("div",{staticClass:"orgInfoTableBody"},t._l(t.orgIndex,(function(e,n){return a("el-row",{key:n,attrs:{gutter:5}},[a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple normalFont"},[t._v(" "+t._s(e.label)+" "),e.isImpot?a("span",{staticStyle:{color:"red"}},[t._v("*")]):t._e()])]),a("el-col",{attrs:{span:18}},[a("div",{staticClass:"grid-content bg-purple-light normalFont"},[t._v(t._s(t.orgIndexData[e.props]))])])],1)})),1)])])},o=[],r={name:"serverdeal",data:function(){return{orgIndexData:{},orgIndex:[{label:"年份",prop:"memberName"},{label:"法定节假日",prop:"department"},{label:"调为休息日的工作日",prop:"department"},{label:"调为工作日的休息日",prop:"department"},{label:"全年节假日",prop:"department"}]}},methods:{closedata:function(){this.$router.push("/setting/sysConfig/otherconfig/holiday")},editordata:function(){this.$router.push("/setting/sysConfig/otherconfig/holiday/editor")}}},s=r,i=(a("b859"),a("2877")),l=Object(i["a"])(s,n,o,!1,null,"1c6d6060",null);e["default"]=l.exports},b859:function(t,e,a){"use strict";var n=a("6207"),o=a.n(n);o.a}}]);