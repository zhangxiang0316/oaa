(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b6efd0a2"],{"28d5":function(e,t,a){},"885d":function(e,t,a){"use strict";var l=a("28d5"),i=a.n(l);i.a},d29c:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"process_order"},[a("div",{staticClass:"order_top"},[a("div",{staticClass:"order_top_back"},[a("p",{staticClass:"back_icon"},[a("i",{staticClass:"el-icon-arrow-left",on:{click:e.backlevel}})]),a("span",[e._v("发文处理单")])]),a("div",{staticClass:"order_top_btn"},[a("div",[e._v("关闭")]),a("div",[e._v("保存")]),a("div",{on:{click:function(t){e.dialogFormVisible=!0}}},[e._v("完成并发送")]),a("div",[e._v("起草征文")]),a("div",[e._v("查看流程")]),a("div",[e._v("打印处理单")]),a("div",[e._v("删除此文")]),a("div",[e._v("操作指南")])])]),a("p",{staticClass:"order_title"},[e._v("中国建设银行电子发文处理单")]),a("div",{staticClass:"process_content"},[a("div",{staticClass:"cur_box"},[e._m(0),a("div",{staticClass:"feed_back"},[a("p",{staticClass:"label_title"},[e._v("反馈方式")]),[a("el-radio-group",{model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[a("el-radio",{attrs:{label:0}},[e._v("无需反馈")]),a("el-radio",{attrs:{label:1}},[e._v("反馈意见")]),a("el-radio",{attrs:{label:2}},[e._v("反馈意见及附件")])],1)]],2)]),a("div",{staticClass:"form_taxt"},[a("div",{staticStyle:{margin:"20px"}}),a("el-form",{attrs:{"label-width":"80px",model:e.formdata}},[a("el-form-item",{attrs:{label:"正文标题"}},[a("el-input",{model:{value:e.formdata.title,callback:function(t){e.$set(e.formdata,"title",t)},expression:"formdata.title"}})],1),a("el-form-item",{attrs:{label:"编号"}},[a("el-input",{model:{value:e.formdata.title,callback:function(t){e.$set(e.formdata,"title",t)},expression:"formdata.title"}})],1),a("el-form-item",{attrs:{label:"拟稿部门"}},[a("el-input",{model:{value:e.formdata.title,callback:function(t){e.$set(e.formdata,"title",t)},expression:"formdata.title"}})],1)],1),a("el-form",{staticStyle:{"margin-left":"24px"},attrs:{inline:!0,model:e.formdata}},[a("el-form-item",{attrs:{label:"拟稿人"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.formdata.title,callback:function(t){e.$set(e.formdata,"title",t)},expression:"formdata.title"}})],1),a("el-form-item",{attrs:{label:"联系电话"}},[a("el-input",{model:{value:e.formdata.title,callback:function(t){e.$set(e.formdata,"title",t)},expression:"formdata.title"}})],1),a("el-form-item",{attrs:{label:"拟稿日期"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","value-format":"timestamp"},model:{value:e.formdata.title,callback:function(t){e.$set(e.formdata,"title",t)},expression:"formdata.title"}})],1)],1),a("div",{staticClass:"editor_box"},[a("label",[e._v("便函内容")]),a("editor")],1),a("el-form",{attrs:{"label-width":"80px",model:e.formdata}},[a("el-form-item",{attrs:{label:"批示意见"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.formdata.title,callback:function(t){e.$set(e.formdata,"title",t)},expression:"formdata.title"}})],1),a("el-form-item",{attrs:{label:"传阅意见"}},[a("el-input",{model:{value:e.formdata.title,callback:function(t){e.$set(e.formdata,"title",t)},expression:"formdata.title"}})],1),a("el-form-item",{attrs:{label:"审核意见"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.formdata.title,callback:function(t){e.$set(e.formdata,"title",t)},expression:"formdata.title"}})],1),a("el-form-item",{attrs:{label:"备注"}},[a("el-input",{attrs:{type:"textarea",placeholder:"填写意见不可多余500字",maxlength:"500","show-word-limit":""},model:{value:e.formdata.title,callback:function(t){e.$set(e.formdata,"title",t)},expression:"formdata.title"}})],1),a("el-form-item",{attrs:{label:"单位名称"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.formdata.title,callback:function(t){e.$set(e.formdata,"title",t)},expression:"formdata.title"}})],1),a("el-form-item",{attrs:{label:"传阅人员"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.formdata.title,callback:function(t){e.$set(e.formdata,"title",t)},expression:"formdata.title"}}),a("el-input",{attrs:{disabled:!0},model:{value:e.formdata.title,callback:function(t){e.$set(e.formdata,"title",t)},expression:"formdata.title"}})],1)],1),a("el-form",{attrs:{inline:!0,model:e.formdata}},[a("el-form-item",{attrs:{label:"附件上传"}},[a("el-input",{model:{value:e.formdata.title,callback:function(t){e.$set(e.formdata,"title",t)},expression:"formdata.title"}})],1),a("el-form-item",[a("el-button",[e._v("上传")])],1)],1),e._m(1)],1)]),a("el-dialog",{staticClass:"alert_tree",attrs:{title:"选择下一环节和处理人",visible:e.dialogFormVisible,width:"80%"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("p",{staticClass:"select_title"},[e._v("下一处理环节")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.couponSelected,expression:"couponSelected"}],attrs:{name:"public-choice"},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.couponSelected=t.target.multiple?a:a[0]},e.getCouponSelected]}},e._l(e.couponList,(function(t){return a("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.name))])})),0),a("div",{staticClass:"select_per"},[a("p",[e._v("选择处理人")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.radio_per,expression:"radio_per"}],attrs:{type:"checkbox",name:"vehicle",checked:"false"},domProps:{checked:Array.isArray(e.radio_per)?e._i(e.radio_per,null)>-1:e.radio_per},on:{change:function(t){var a=e.radio_per,l=t.target,i=!!l.checked;if(Array.isArray(a)){var r=null,o=e._i(a,r);l.checked?o<0&&(e.radio_per=a.concat([r])):o>-1&&(e.radio_per=a.slice(0,o).concat(a.slice(o+1)))}else e.radio_per=i}}}),e._v("常用发送对象 ")]),a("p",{on:{click:e.set_per}},[e._v("设置")])]),a("div",{staticClass:"choose_per"},[a("div",[a("el-tree",{ref:"tree",attrs:{props:e.defaultProps,data:e.data,"show-checkbox":"","highlight-current":""},on:{check:e.handlePer}})],1),a("div",e._l(e.choocePer,(function(t){return a("li",{key:t.index},[e._v(e._s(t))])})),0)]),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("确 定")])],1)])],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"cur_sess"},[a("p",[e._v(" 当前环节： "),a("span",[e._v("拟稿")])]),a("p",[e._v(" 当前处理人： "),a("span",[e._v("测试总收文")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"annex_btn_list"},[a("div",[e._v("引入")]),a("div",[e._v("删除")]),a("div",[e._v("排序")]),a("div",[e._v("导出反馈意见")]),a("div",[e._v("批量下载附件")])])}],r=(a("d81d"),a("dac0")),o={name:"proceorderdeal",components:{editor:r["a"]},data:function(){return{ubderId:"",radio:0,dialogFormVisible:!1,choocePer:[],radio_per:1,formdata:{title:"",unit:"中国建设银行",perA:"张三",perB:"李四"},couponSelected:"",couponList:[{id:"0",name:"优惠券1"},{id:"1",name:"优惠券2"},{id:"2",name:"优惠券3"}],data:[{label:"一级 1",children:[{label:"二级 1-1",children:[{label:"三级 1-1-1",id:"1"}]}]},{label:"一级 2",children:[{label:"二级 2-1",children:[{label:"三级 2-1-1"}]},{label:"二级 2-2",children:[{label:"三级 2-2-1"}]}]},{label:"一级 3",children:[{label:"二级 3-1",children:[{label:"三级 3-1-1",children:[{label:"三级 3-1-1",children:[{label:"三级 3-1-1",children:[{label:"三级 3-1-1",children:[{label:"三级 3-1-1-A"}]}]}]}]},{label:"三级 3-1-2"},{label:"三级 3-1-3"}]},{label:"二级 3-2",children:[{label:"三级 3-2-1"}]}]}],defaultProps:{children:"children",label:"label"},sonselect:0}},created:function(){this.ubderId=this.$route.params.id},mounted:function(){},methods:{getCouponSelected:function(){},handlePer:function(e){var t=this.$refs.tree.getCheckedNodes(!0),a=this,l=[];t.map((function(e,t,i){l.push(e.label),a.choocePer=l})),t.length<1&&(this.choocePer=[])},set_per:function(){},backlevel:function(){this.$router.push("/bianhan/undertable")}}},d=o,s=(a("885d"),a("2877")),n=Object(s["a"])(d,l,i,!1,null,"9e010302",null);t["default"]=n.exports},d81d:function(e,t,a){"use strict";var l=a("23e7"),i=a("b727").map,r=a("1dde"),o=a("ae40"),d=r("map"),s=o("map");l({target:"Array",proto:!0,forced:!d||!s},{map:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);