(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-01c00932"],{"9b7e":function(e,t,a){},de14:function(e,t,a){"use strict";var i=a("9b7e"),o=a.n(i);o.a},dee9:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"clickRate"},[a("div",{staticClass:"inquireTable"},[a("div",{staticClass:"inquireTitle"},[e._v("公文点击率统计")]),a("div",{staticStyle:{height:"35px"}},[a("el-radio-group",{style:{float:"right"},model:{value:e.resource,callback:function(t){e.resource=t},expression:"resource"}},[a("el-radio",{attrs:{label:"HTML"}}),a("el-radio",{attrs:{label:"EXCEL"}})],1)],1),a("div",{staticClass:"inquireTableBody"},[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"统计日期",prop:"data"}},[a("el-date-picker",{style:{width:"60%"},attrs:{type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions},model:{value:e.form.data,callback:function(t){e.$set(e.form,"data",t)},expression:"form.data"}})],1),a("el-form-item",{attrs:{label:"执发行",prop:"region0"}},[a("el-select",{attrs:{width:"100%",placeholder:"请选择执发行"},model:{value:e.form.region0,callback:function(t){e.$set(e.form,"region0",t)},expression:"form.region0"}},[a("el-option",{attrs:{label:"区域一",value:"shanghai"}}),a("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),a("el-form-item",{style:{display:"inline-block"},attrs:{label:"发文类型",prop:"region1"}},[a("el-select",{attrs:{placeholder:"请选择发文类型"},model:{value:e.form.region1,callback:function(t){e.$set(e.form,"region1",t)},expression:"form.region1"}},[a("el-option",{attrs:{label:"区域一",value:"shanghai"}}),a("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),a("el-form-item",{attrs:{label:"发文代字",prop:"region2"}},[a("el-select",{attrs:{placeholder:"请选择发文代字"},model:{value:e.form.region2,callback:function(t){e.$set(e.form,"region2",t)},expression:"form.region2"}},[a("el-option",{attrs:{label:"区域一",value:"shanghai"}}),a("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("开始统计")]),a("el-button",{on:{click:function(t){return e.reset()}}},[e._v("重写")])],1)],1)],1)])])},o=[],r={name:"clickRate",components:{},props:{},data:function(){return{resource:"HTML",form:{name0:"",name1:"",name2:"",region0:"",region1:"",region2:"",date:""},pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]}}},computed:{},methods:{onSubmit:function(){},reset:function(){this.$refs.form.resetFields()}},activated:function(){},mounted:function(){}},l=r,n=(a("de14"),a("2877")),s=Object(n["a"])(l,i,o,!1,null,"65323b05",null);t["default"]=s.exports}}]);