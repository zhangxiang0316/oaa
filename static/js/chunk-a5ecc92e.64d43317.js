(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a5ecc92e"],{"0543":function(e,a,t){"use strict";var o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("el-form",{ref:"editForm",attrs:{size:e.size,inline:e.isInline,"label-width":e.labelWidth,model:e.formData,rules:e.formRules}},[e._l(e.formCfg,(function(a){return t("el-form-item",{key:a.label,attrs:{label:a.label,prop:a.prop}},["input"===a.type?t("el-input",{style:{width:a.width?a.width:"300px"},attrs:{disabled:a.disabled,clearable:""},on:{change:function(t){a.change&&a.change(e.formData[a.prop])}},model:{value:e.formData[a.prop],callback:function(t){e.$set(e.formData,a.prop,t)},expression:"formData[item.prop]"}}):e._e(),"textarea"===a.type?t("el-input",{style:{width:a.width?a.width:"300px"},attrs:{type:"textarea",disabled:a.disabled},on:{change:function(t){a.change&&a.change(e.formData[a.prop])}},model:{value:e.formData[a.prop],callback:function(t){e.$set(e.formData,a.prop,t)},expression:"formData[item.prop]"}}):e._e(),"select"===a.type?t("el-select",{attrs:{clearable:"",disabled:a.disabled&&a.disabled(e.formData)},on:{change:function(t){a.change&&a.change(e.formData[a.prop])}},model:{value:e.formData[a.prop],callback:function(t){e.$set(e.formData,a.prop,t)},expression:"formData[item.prop]"}},e._l(a.options,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1):e._e(),"radio"===a.type?t("el-radio-group",{style:{width:a.width?a.width:"100%"},attrs:{disabled:a.disabled},on:{change:function(t){a.change&&a.change(e.formData[a.prop])}},model:{value:e.formData[a.prop],callback:function(t){e.$set(e.formData,a.prop,t)},expression:"formData[item.prop]"}},e._l(a.radios,(function(a){return t("el-radio",{key:a.value,style:{lineHeight:2},attrs:{label:a.value}},[e._v(e._s(a.label)+" ")])})),1):e._e(),"radioButton"===a.type?t("el-radio-group",{style:{width:a.width?a.width:"300px"},attrs:{disabled:a.disabled},on:{change:function(t){a.change&&a.change(e.formData[a.prop])}},model:{value:e.formData[a.prop],callback:function(t){e.$set(e.formData,a.prop,t)},expression:"formData[item.prop]"}},e._l(a.radios,(function(a){return t("el-radio-button",{key:a.value,attrs:{label:a.value}},[e._v(e._s(a.label))])})),1):e._e(),"checkbox"===a.type?t("el-checkbox-group",{style:{width:a.width},attrs:{disabled:a.disabled},on:{change:function(t){a.change&&a.change(e.formData[a.prop])}},model:{value:e.formData[a.prop],callback:function(t){e.$set(e.formData,a.prop,t)},expression:"formData[item.prop]"}},e._l(a.checkboxs,(function(a){return t("el-checkbox",{key:a.value,attrs:{label:a.value}},[e._v(e._s(a.label))])})),1):e._e(),"date"===a.type?t("el-date-picker",{attrs:{disabled:a.disabled,clearable:""},on:{change:function(t){a.change&&a.change(e.formData[a.prop])}},model:{value:e.formData[a.prop],callback:function(t){e.$set(e.formData,a.prop,t)},expression:"formData[item.prop]"}}):e._e(),"time"===a.type?t("el-time-select",{attrs:{type:"",disabled:a.disabled,clearable:""},on:{change:function(t){a.change&&a.change(e.formData[a.prop])}},model:{value:e.formData[a.prop],callback:function(t){e.$set(e.formData,a.prop,t)},expression:"formData[item.prop]"}}):e._e(),"dateTime"===a.type?t("el-date-picker",{attrs:{type:"datetime",clearable:"",disabled:a.disable},on:{change:function(t){a.change&&a.change(e.formData[a.prop])}},model:{value:e.formData[a.prop],callback:function(t){e.$set(e.formData,a.prop,t)},expression:"formData[item.prop]"}}):e._e(),"Slider"===a.type?t("el-slider",{model:{value:e.formData[a.prop],callback:function(t){e.$set(e.formData,a.prop,t)},expression:"formData[item.prop]"}}):e._e(),"switch"===a.type?t("el-switch",{attrs:{disabled:a.disabled},on:{change:function(t){a.change&&a.change(e.formData[a.prop])}},model:{value:e.formData[a.prop],callback:function(t){e.$set(e.formData,a.prop,t)},expression:"formData[item.prop]"}}):e._e(),a.showAdditionButton?t("el-button",{staticClass:"additionStyle",attrs:{type:"primary"},on:{click:function(e){a.additionButtonhandel&&a.additionButtonhandel()}}},[e._v(e._s(a.additionButtonLabel)+" ")]):e._e(),e._l(a.buttons,(function(o,n){return a.showMoreButton?t("el-button",{key:n,staticClass:"additionStyle",attrs:{size:o.size||e.size,type:o.type?o.type:"primary",icon:o.icon},on:{click:function(e){return o.handle()}}},[e._v(e._s(o.label)+" ")]):e._e()})),a.showAdditionSpan?t("span",{staticClass:"additionStyle",style:a.additionSpanStyle,attrs:{type:"primary"}},[e._v(e._s(a.additionSpan))]):e._e()],2)})),e.showButton?t("div",{staticStyle:{display:"flex"}},[t("div",{staticStyle:{flex:"1"}}),t("el-button",{on:{click:function(a){return e.cancel()}}},[e._v("取消")]),t("el-button",{on:{click:function(a){return e.sure()}}},[e._v("保存")])],1):e._e()],2)},n=[],l={name:"mForm",components:{},props:{isInline:{type:Boolean,default:!0},showButton:{type:Boolean,default:!0},labelWidth:{type:String,default:"100px"},size:{type:String,default:"mini"},formCfg:{type:Array,default:function(){return[]}},formData:{type:Object,default:function(){}},formRules:{type:Object,default:null}},data:function(){return{}},computed:{},methods:{cancel:function(){this.$emit("cancel")},sure:function(){var e=this;this.$refs.editForm.validate((function(a){if(!a)return!1;e.$emit("sure")}))}},activated:function(){},mounted:function(){},created:function(){}},i=l,r=(t("78ed"),t("2877")),p=Object(r["a"])(i,o,n,!1,null,"b9d9a9b8",null);a["a"]=p.exports},"5b28":function(e,a,t){},"78ed":function(e,a,t){"use strict";var o=t("5b28"),n=t.n(o);n.a},"992b":function(e,a,t){"use strict";var o=t("e0c0"),n=t.n(o);n.a},acf3:function(e,a,t){"use strict";t.r(a);var o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"organizationConfig"},[t("div",{staticClass:"handleButton"},[t("el-button",{attrs:{type:"primary"},on:{click:function(a){return e.saveOrgInfo()}}},[e._v("保存")]),t("el-button",{attrs:{type:"primary"},on:{click:function(a){return e.$router.go(-1)}}},[e._v("返回")])],1),t("div",{staticClass:"orgInfoTable"},[t("div",{staticClass:"orgInfoTitle"},[e._v("机构信息表")]),t("div",[t("h3",[e._v("机构索引信息")]),t("div",{staticClass:"orgInfoTableBody"},[t("m-form",{attrs:{formCfg:e.indexformCfg,formRules:e.indexformRules,formData:e.indexformData,showButton:!1,isInline:!1,labelWidth:"260px"}})],1)]),t("div",[t("h3",[e._v("机构配置信息")]),t("div",{staticClass:"orgInfoTableBody"},[t("m-form",{attrs:{formCfg:e.formCfg,formRules:e.formRules,formData:e.formData,showButton:!1,isInline:!1,labelWidth:"260px"}})],1)]),e._m(0)])])},n=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"explanation"},[t("p",[e._v("填写说明:")]),t("p",[e._v("机构全称：指机构在正式场合或公文内使用的名称；")]),t("p",[e._v("机构简称：指机构在OA系统中使用的系统名；")]),t("p",[e._v("机构ID：指机构在OA系统内作为关键字唯一编号；")])])}],l=t("0543"),i={name:"orgManageConfig",components:{mForm:l["a"]},props:{},data:function(){return{indexformCfg:[{label:"机构序号",prop:"memberName",type:"input"},{label:"机构全称",prop:"roleName",type:"input",additionButtonLabel:"选择",showAdditionButton:!0,additionButtonhandel:function(){console.log("select")}},{label:"机构简称",prop:"uass",type:"input"},{label:"机构ID",prop:"department",type:"input"},{label:"上级机构（组织树）",prop:"memberName",type:"input"},{label:"上级机构（行政层次）",prop:"roleName",type:"input"},{label:"机构类别",prop:"uass",type:"input"},{label:"机构管理员",prop:"department",type:"input"}],indexformRules:{},indexformData:{},formCfg:[{label:"机构代字",prop:"memberName",type:"input",showAdditionSpan:!0,additionSpan:"例如：建苏",additionSpanStyle:{color:"#F5150B"}},{label:"是否有权直发",prop:"isPower",type:"radio",radios:[{label:"是",value:0},{label:"否",value:1}]},{label:"OA版本",prop:"uass",type:"input",disabled:!0},{label:"机构综合代表中文名",prop:"department",type:"input",showAdditionSpan:!0,additionSpan:"例如：江苏总收发",additionSpanStyle:{color:"#F5150B"}},{label:"机构综合代表注册名",prop:"memberName",type:"input",showAdditionSpan:!0,additionSpan:"例如：js-zsf/js/ccb",additionSpanStyle:{color:"#F5150B"}},{label:"OA服务器名称",prop:"roleName",type:"input",showAdditionSpan:!0,additionSpan:"例如：js-oa11/ccb",additionSpanStyle:{color:"#F5150B"}},{label:"OA数据库路径",prop:"uass",type:"input",showAdditionSpan:!0,additionSpan:"例如：CCBWEBOAJS",additionSpanStyle:{color:"#F5150B"}},{label:"发送函件库名称",prop:"department",type:"input",showAdditionSpan:!0,additionSpan:"例如：CCBWEBOAJSSD",additionSpanStyle:{color:"#F5150B"}},{label:"接收函件库名称",prop:"memberName",type:"input",showAdditionSpan:!0,additionSpan:"例如：CCBWEBOAJSRC",additionSpanStyle:{color:"#F5150B"}},{label:"OA短信发送函件库名称",prop:"roleName",type:"input",showAdditionSpan:!0,additionSpan:"例如：CCBWEBOAJSOAMSGSD",additionSpanStyle:{color:"#F5150B"}},{label:"OA短信接收函件库名称",prop:"uass",type:"input",showAdditionSpan:!0,additionSpan:"例如：CCBWEBOAJSOAMSGRC",additionSpanStyle:{color:"#F5150B"}},{label:"OA微信接收函件库",prop:"department",type:"input",showAdditionSpan:!0,additionSpan:"例如：CCBWEBOAJSOAWXINECPT",additionSpanStyle:{color:"#F5150B"}},{label:"统一待办接收函件库",prop:"memberName",type:"input",showAdditionSpan:!0,additionSpan:"例如：CCBWEBOAPORTALINCEPT",additionSpanStyle:{color:"#F5150B"}},{label:"跨行签报管理员中文名",prop:"roleName",type:"input",showAdditionSpan:!0,additionSpan:"例如：js-qbadmin/js/ccb",additionSpanStyle:{color:"#F5150B"}},{label:"跨行签报管理员注册名",prop:"uass",type:"input",showAdditionSpan:!0,additionSpan:"例如：江苏跨行事务审批管理员",additionSpanStyle:{color:"#F5150B"}},{label:"跨行事务审批管理员中文名",prop:"department",type:"input",showAdditionSpan:!0,additionSpan:"例如：js-swspadmin/js/ccb",additionSpanStyle:{color:"#F5150B"}},{label:"跨行事务审批管理员注册名",prop:"memberName",type:"input"},{label:"移动服务",prop:"roleName",type:"radio",radios:[{label:"启用",value:0},{label:"禁用",value:1}]},{label:"是否有Oracle",prop:"uass",type:"radio",radios:[{label:"有",value:0},{label:"无",value:1}]},{label:"是否启用Oracle",prop:"department",type:"radio",radios:[{label:"启用",value:0},{label:"不启用",value:1}]},{label:"管理员",prop:"memberName",type:"input"},{label:"密码",prop:"roleName",type:"input"},{label:"Oracle jdbc连接",prop:"uass",type:"input"},{label:"OA同步至Oracle执行时间点",prop:"department",type:"input"},{label:"Oracle同步至OA执行时间点",prop:"memberName",type:"input"},{label:"该机构是否启用",prop:"roleName",type:"radio",radios:[{label:"是",value:0},{label:"否",value:1}]},{label:"该机构下组织机构是否同步商密OA系统",prop:"roleName",type:"radio",radios:[{label:"是",value:0},{label:"否",value:1}]}],formRules:{memberName:[{required:!0,message:"请输入姓名",trigger:"blur"}]},formData:{uass:1}}},computed:{},methods:{saveOrgInfo:function(){this.$router.push("/setting/orgDepartment/orgManage/orgManageViewDetail")}},activated:function(){},mounted:function(){},created:function(){}},r=i,p=(t("992b"),t("2877")),d=Object(p["a"])(r,o,n,!1,null,"343a8b10",null);a["default"]=d.exports},e0c0:function(e,a,t){}}]);