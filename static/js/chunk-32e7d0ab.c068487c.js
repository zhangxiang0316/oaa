(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32e7d0ab"],{"103e":function(t,e,a){},"37ea":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("p",{staticClass:"base-title"},[t._v("待办事宜排序")]),a("div",{staticClass:"btn-list"},[a("el-button",{attrs:{type:"primary"},on:{click:t.savedata}},[t._v("保存")])],1),a("div",{staticClass:"formdata"},[a("fd-form",{staticStyle:{margin:"0 1%"},attrs:{data:t.applyformData,columns:t.applyformCfg,config:t.serverconfig},on:{event:t.btnevent}})],1)])},s=[],c=a("0663"),o={name:"servereditor",components:{FdForm:c["a"]},data:function(){return{applyformData:{},applyformCfg:[{type:"input",prop:"checkselect",label:"紧急级别",options:"启用,禁用",max:1},{type:"input",prop:"checkselect1",label:"紧急参数",style:{width:"85%"}}],serverconfig:{labelWidth:"180px"}}},methods:{closedata:function(){this.$router.push("/setting/sysConfig/gradprotect")},savedata:function(){},btnevent:function(t){switch(t.prop){case"$selected":break;case"$setfull":break}}}},r=o,i=(a("ebd6"),a("2877")),l=Object(i["a"])(r,n,s,!1,null,"284b192e",null);e["default"]=l.exports},ebd6:function(t,e,a){"use strict";var n=a("103e"),s=a.n(n);s.a}}]);