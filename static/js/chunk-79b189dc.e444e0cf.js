(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79b189dc"],{"18b0":function(t,e,a){"use strict";var o=a("1ef4"),n=a.n(o);n.a},"1ef4":function(t,e,a){},"5dc8":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"departDetail"},[a("div",{staticClass:"rightTab"},[a("div",{staticClass:"handleButton"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.handelIndexInfo()}}},[t._v("编辑")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.$router.go(-1)}}},[t._v("返回")])],1),a("div",{staticClass:"orgInfoTable"},[a("div",{staticClass:"orgInfoTitle"},[t._v("部门信息表")]),a("div",{staticClass:"orgInfoTableBody"},t._l(t.depDetail,(function(e,o){return a("el-row",{key:o,attrs:{gutter:5}},[a("el-col",{attrs:{span:8}},[a("div",{staticClass:"grid-content bg-purple normalFont"},[t._v(" "+t._s(e.label)+" "),e.isImpot?a("span",{staticStyle:{color:"red"}},[t._v("*")]):t._e()])]),a("el-col",{attrs:{span:16}},[a("div",{staticClass:"grid-content bg-purple-light normalFont"},[t._v(t._s(t.depDetailData[e.props]))])])],1)})),1)])])])},n=[],l={name:"departDetail",components:{},props:{},data:function(){return{depDetailData:{},depDetail:[{label:"部门序号",prop:"memberName",isImpot:!0},{label:"部门名称",prop:"uass",isImpot:!0},{label:"部门简称",prop:"uass",isImpot:!0},{label:"部门层次（级别）",prop:"uass",isImpot:!0},{label:"直属上级组织",prop:"uass",isImpot:!0},{label:"部门代字",prop:"department",isImpot:!0},{label:"部门类别",prop:"memberName",isImpot:!0},{label:"是否为内设部门",prop:"roleName"},{label:"部门成员",prop:"uass"},{label:"部门正职",prop:"department"},{label:"部门副职",prop:"memberName"},{label:"部门综合代表",prop:"roleName"}]}},computed:{},methods:{handelIndexInfo:function(){this.$router.push({name:"depManageConfig"})}},activated:function(){},mounted:function(){},created:function(){}},r=l,s=(a("18b0"),a("2877")),p=Object(s["a"])(r,o,n,!1,null,"88258396",null);e["default"]=p.exports}}]);