(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a1a48a8"],{"0009":function(t,e,a){"use strict";a.r(e);var p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("div",{staticClass:"btn-list"},[a("el-button",{attrs:{type:"primary"},on:{click:t.savedata}},[t._v("保存")])],1),a("div",{staticClass:"formdata"},[a("p",{staticClass:"base-title"},[t._v("短信发送配置")]),a("fd-form",{staticStyle:{margin:"0 1%"},attrs:{data:t.applyformData,columns:t.applyformCfg,config:t.serverconfig},on:{event:t.btnevent}})],1)])},s=[],n=a("0663"),r={name:"servereditor",components:{FdForm:n["a"]},data:function(){return{applyformData:{},applyformCfg:[{type:"check-boxs",prop:"checkselect",label:"是否启用短信功能",span:22,options:"启用",style:{width:"100%"}},{type:"check-boxs",prop:"checkselect1",label:"是否启用微信功能",span:22,options:"启用",style:{width:"100%"}},[{type:"input-area",prop:"1",span:22,style:{width:"70%"},config:{rows:4}},{type:"button-primary",prop:"$selected",value:"选择",style:{margin:"0px 14px"}},{type:"button-primary",prop:"$setfull",value:"清空"},{type:"formitem",label:"手工发送短信的人员"}],{type:"input-area",prop:"1",label:"手工发送短信人员的英文名",style:{width:"85%"},config:{rows:4}},[{type:"input-area",prop:"1",span:22,style:{width:"70%"},config:{rows:4}},{type:"button-primary",prop:"$selected",value:"选择",style:{margin:"0px 14px"}},{type:"button-primary",prop:"$setfull",value:"清空"},{type:"formitem",label:"发送微信的人员"}],{type:"input-area",prop:"1",label:"发送微信人员的英文名",style:{width:"85%"},config:{rows:4}}],serverconfig:{labelWidth:"180px"}}},methods:{closedata:function(){this.$router.push("/setting/sysConfig/gradprotect")},savedata:function(){},btnevent:function(t){switch(t.prop){case"$selected":break;case"$setfull":break}}}},o=r,i=(a("a791"),a("2877")),l=Object(i["a"])(o,p,s,!1,null,"8d39c37c",null);e["default"]=l.exports},6491:function(t,e,a){},a791:function(t,e,a){"use strict";var p=a("6491"),s=a.n(p);s.a}}]);