(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7006e636","chunk-63654c24"],{"32b0":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"deptList"},[r("org-record",{attrs:{typeNum:e.typeNum}},[e._t("default",[r("el-col",{attrs:{span:18}},[r("div",{staticClass:"handleButton"},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.creatRowData()}}},[e._v("新建")]),r("el-button",{attrs:{type:"primary"},on:{click:e.del}},[e._v("删除")])],1)])],{slot:"addBtns"})],2)],1)},o=[],n=r("72d2"),l=r("3e1c"),c={name:"deptAlterRecords",components:{mTable:n["a"],orgRecord:l["default"]},props:{},data:function(){return{typeNum:2,value:"",selectRowData:null,options:[{value:"1",label:"甘肃省分行1"},{value:"2",label:"甘肃省分行2"}],tableData:[{creDate:"2012-12-12",pre:"资产保全部",cur:"资产保全部",preShort:"D939170",curShort:"甘肃省分行/资产保全部"},{creDate:"2012-12-12",pre:"资产保全部",cur:"资产保全部",preShort:"D939170",curShort:"甘肃省分行/资产保全部"},{creDate:"2012-12-12",pre:"资产保全部",cur:"资产保全部",preShort:"D939170",curShort:"甘肃省分行/资产保全部"},{creDate:"2012-12-12",pre:"资产保全部",cur:"资产保全部",preShort:"D939170",curShort:"甘肃省分行/资产保全部"},{creDate:"2012-12-12",pre:"资产保全部",cur:"资产保全部",preShort:"D939170",curShort:"甘肃省分行/资产保全部"},{creDate:"2012-12-12",pre:"资产保全部",cur:"资产保全部",preShort:"D939170",curShort:"甘肃省分行/资产保全部"},{creDate:"2012-12-12",pre:"资产保全部",cur:"资产保全部",preShort:"D939170",curShort:"甘肃省分行/资产保全部"},{creDate:"2012-12-12",pre:"资产保全部",cur:"资产保全部",preShort:"D939170",curShort:"甘肃省分行/资产保全部"},{creDate:"2012-12-12",pre:"资产保全部",cur:"资产保全部",preShort:"D939170",curShort:"甘肃省分行/资产保全部"},{creDate:"2012-12-12",pre:"资产保全部",cur:"资产保全部",preShort:"D939170",curShort:"甘肃省分行/资产保全部"},{creDate:"2012-12-12",pre:"资产保全部",cur:"资产保全部",preShort:"D939170",curShort:"甘肃省分行/资产保全部"}],tableCols:[{label:"创建日期",prop:"creDate"},{label:"原部门全称",prop:"pre"},{label:"新部门全称",prop:"cur"},{label:"原部门全层次名称",prop:"preShort"},{label:"新部门全层次名称",prop:"curShort"}],pagination:{pageNum:1,total:55}}},computed:{},methods:{loadData:function(){},getRowData:function(e){this.$intent.go(this,{name:"alterDeptRecordList",query:{detail:JSON.stringify(e)}})},creatRowData:function(){this.$router.push({name:"alterDeptEdit"})},del:function(){var e=this;this.$confirm("是否删除选中记录?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.$message({type:"success",message:"删除成功!"})})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},select:function(e){this.selectRowData=e},selectAll:function(e){this.selectRowData=e}},activated:function(){},mounted:function(){},created:function(){}},i=c,s=r("2877"),u=Object(s["a"])(i,a,o,!1,null,"6ebd6c94",null);t["default"]=u.exports},"3e1c":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"orgList"},[r("el-row",{staticStyle:{padding:"20px"}},[r("el-col",{attrs:{span:6}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._t("addBtns")],2),r("m-table",{attrs:{size:"medium",isSelection:!0,isPagination:!0,isHandle:!1,tableData:e.tableData,tableCols:e.tableCols,pagination:e.pagination},on:{refresh:function(t){return e.loadData()},cellClick:e.getRowData}})],1)},o=[],n=(r("a9e3"),r("72d2")),l={name:"orgAlterRecords",components:{mTable:n["a"]},props:{typeNum:{type:Number,default:1}},data:function(){return{value:"",options:[{value:"1",label:"建行财产保险有限公司1"},{value:"2",label:"建行财产保险有限公司2"}],tableData:[{creDate:"2012-12-12",pre:"资产保全部",cur:"资产保全部",preShort:"D939170",curShort:"甘肃省分行/资产保全部"},{creDate:"2012-12-12",pre:"资产保全部",cur:"资产保全部",preShort:"D939170",curShort:"甘肃省分行/资产保全部"},{creDate:"2012-12-12",pre:"资产保全部",cur:"资产保全部",preShort:"D939170",curShort:"甘肃省分行/资产保全部"},{creDate:"2012-12-12",pre:"资产保全部",cur:"资产保全部",preShort:"D939170",curShort:"甘肃省分行/资产保全部"},{creDate:"2012-12-12",pre:"资产保全部",cur:"资产保全部",preShort:"D939170",curShort:"甘肃省分行/资产保全部"},{creDate:"2012-12-12",pre:"资产保全部",cur:"资产保全部",preShort:"D939170",curShort:"甘肃省分行/资产保全部"},{creDate:"2012-12-12",pre:"资产保全部",cur:"资产保全部",preShort:"D939170",curShort:"甘肃省分行/资产保全部"},{creDate:"2012-12-12",pre:"资产保全部",cur:"资产保全部",preShort:"D939170",curShort:"甘肃省分行/资产保全部"},{creDate:"2012-12-12",pre:"资产保全部",cur:"资产保全部",preShort:"D939170",curShort:"甘肃省分行/资产保全部"},{creDate:"2012-12-12",pre:"资产保全部",cur:"资产保全部",preShort:"D939170",curShort:"甘肃省分行/资产保全部"},{creDate:"2012-12-12",pre:"资产保全部",cur:"资产保全部",preShort:"D939170",curShort:"甘肃省分行/资产保全部"}],pagination:{pageNum:1,total:55}}},computed:{tableCols:function(){return 1==this.typeNum?[{label:"创建日期",prop:"creDate"},{label:"原机构全称",prop:"pre"},{label:"新机构全称",prop:"cur"},{label:"原机构简称",prop:"preShort"},{label:"新机构简称",prop:"curShort"}]:2==this.typeNum?[{label:"创建日期",prop:"creDate"},{label:"原部门全称",prop:"pre"},{label:"新部门全称",prop:"cur"},{label:"原部门全层次名称",prop:"preShort"},{label:"新部门全层次名称",prop:"curShort"}]:void 0}},methods:{loadData:function(){},getRowData:function(e){1==this.typeNum?this.$intent.go(this,{name:"orgAlterRecordList",query:{detail:JSON.stringify(e)}}):2==this.typeNum&&this.$intent.go(this,{name:"alterDeptRecordList",query:{detail:JSON.stringify(e)}})}},activated:function(){},mounted:function(){},created:function(){}},c=l,i=r("2877"),s=Object(i["a"])(c,a,o,!1,null,"5f3bcd8f",null);t["default"]=s.exports},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,r){var a=r("1d80"),o=r("5899"),n="["+o+"]",l=RegExp("^"+n+n+"*"),c=RegExp(n+n+"*$"),i=function(e){return function(t){var r=String(a(t));return 1&e&&(r=r.replace(l,"")),2&e&&(r=r.replace(c,"")),r}};e.exports={start:i(1),end:i(2),trim:i(3)}},"5cef":function(e,t,r){"use strict";var a=r("c054"),o=r.n(a);o.a},"72d2":function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"ces-table-page"},[e.isHandle?r("div",{staticClass:"ces-handle"},e._l(e.tableHandles,(function(t,a){return r("el-button",{key:a,attrs:{size:t.size||e.size,type:t.type,icon:t.icon},on:{click:function(e){return t.handle()}}},[e._v(e._s(t.label))])})),1):e._e(),r("div",{staticClass:"ces-table"},[r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"cesTable",attrs:{data:e.tableData,size:e.size,id:e.id,border:e.isBorder,"header-cell-style":{background:"#eef1f6",color:"#3B85F0"},"row-class-name":e.tableRowClassName,defaultSelections:e.defaultSelections},on:{select:e.select,"select-all":e.selectAll,"cell-click":e.cellClick}},[e.isSelection?r("el-table-column",{attrs:{width:"50px",type:"selection",align:"center"}}):e._e(),e.isIndex?r("el-table-column",{attrs:{type:"index",label:e.indexLabel,align:"center",width:"50"}}):e._e(),e._l(e.tableCols,(function(t){return r("el-table-column",{key:t.id,attrs:{prop:t.prop,formatter:t.formatter,label:t.label,width:t.width,align:"center","render-header":t.require?e.renderHeader:null},scopedSlots:e._u([{key:"default",fn:function(a){return["Html"===t.type?r("span",{domProps:{innerHTML:e._s(t.html(a.row))}}):e._e(),"Button"===t.type?r("span",e._l(t.formatter||t.btnList,(function(t,o){return!t.isShow||t.isShow&&t.isShow(a.row)?r("el-button",{key:o,attrs:{disabled:t.isDisabled&&t.isDisabled(a.row),type:t.type,size:t.size||e.size,icon:t.icon},on:{click:function(e){return t.handle(a.row)}}},[e._v(e._s(t.label))]):e._e()})),1):e._e(),"button"===t.type?r("span",e._l(t.formatter(a.row),(function(t,o){return r("el-button",{key:o,attrs:{type:t.type,size:t.size||e.size,icon:t.icon},on:{click:function(e){return t.handle(a.row)}}},[e._v(e._s(t.label))])})),1):e._e(),"Input"===t.type?r("el-input",{attrs:{size:e.size},on:{focus:function(e){t.focus&&t.focus(a.row)}},model:{value:a.row[t.prop],callback:function(r){e.$set(a.row,t.prop,r)},expression:"scope.row[item.prop]"}}):e._e(),"Select"===t.type?r("el-select",{attrs:{size:e.size,props:t.props},on:{change:function(e){t.change&&t.change(a.row)}},model:{value:a.row[t.prop],callback:function(r){e.$set(a.row,t.prop,r)},expression:"scope.row[item.prop]"}},e._l(t.options,(function(e){return r("el-option",{key:e[t.props.value],attrs:{label:e[t.props.label],value:e[t.props.value]}})})),1):e._e(),"Radio"===t.type?r("el-radio-group",{on:{change:function(e){t.change&&t.change(a.row)}},model:{value:a.row[t.prop],callback:function(r){e.$set(a.row,t.prop,r)},expression:"scope.row[item.prop]"}},e._l(t.radios,(function(t,a){return r("el-radio",{key:a,attrs:{label:t.value}},[e._v(e._s(t.label))])})),1):e._e(),"Checkbox"===t.type?r("el-checkbox-group",{on:{change:function(e){t.change&&t.change(a.row)}},model:{value:a.row[t.prop],callback:function(r){e.$set(a.row,t.prop,r)},expression:"scope.row[item.prop]"}},e._l(t.checkboxs,(function(t,a){return r("el-checkbox",{key:a,attrs:{label:t.value}},[e._v(e._s(t.label))])})),1):e._e(),"Rate"===t.type?r("el-rate",{on:{change:function(e){t.change&&t.change(a.row)}},model:{value:a.row[t.prop],callback:function(r){e.$set(a.row,t.prop,r)},expression:"scope.row[item.prop]"}}):e._e(),"Switch"===t.type?r("el-switch",{on:{change:function(e){t.change&&t.change(a.row)}},model:{value:a.row[t.prop],callback:function(r){e.$set(a.row,t.prop,r)},expression:"scope.row[item.prop]"}}):e._e(),"Image"===t.type?r("img",{attrs:{src:a.row[t.prop]},on:{click:function(e){t.handle&&t.handle(a.row)}}}):e._e(),"Slider"===t.type?r("el-slider",{on:{change:function(e){t.change&&t.change(a.row)}},model:{value:a.row[t.prop],callback:function(r){e.$set(a.row,t.prop,r)},expression:"scope.row[item.prop]"}}):e._e(),t.type?e._e():r("span",{class:t.itemClass&&t.item.itemClass(a.row),style:t.itemStyle&&t.itemStyle(a.row)},[e._v(e._s(t.formatter&&t.formatter(a.row)||a.row[t.prop]))])]}}],null,!0)})}))],2)],1),e.isPagination?r("div",{staticClass:"ces-pagination"},[r("div",{staticStyle:{flex:"1","line-height":"30px"}}),r("el-pagination",{attrs:{background:"",layout:"total,prev, pager, next,jumper","page-size":e.pagination.pageSize,total:e.pagination.total},on:{"current-change":e.handleCurrentChange}})],1):e._e()])},o=[],n=(r("4160"),r("159b"),{props:{size:{type:String,default:"medium"},id:{type:String,default:"table"},isBorder:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},isHandle:{type:Boolean,default:!1},tableHandles:{type:Array,default:function(){return[]}},tableData:{type:Array,default:function(){return[]}},tableCols:{type:Array,default:function(){return[]}},isSelection:{type:Boolean,default:!1},defaultSelections:{type:[Array,Object],default:function(){return null}},isIndex:{type:Boolean,default:!1},indexLabel:{type:String,default:"序号"},isPagination:{type:Boolean,default:!0},pagination:{type:Object,default:function(){return{pageSize:10,pageNum:1,total:10}}}},data:function(){return{Height:0}},mounted:function(){this.height="500px"},watch:{defaultSelections:function(e){this.$nextTick((function(){var t=this;Array.isArray(e)?e.forEach((function(e){t.$refs.cesTable.toggleRowSelection(e)})):this.$refs.cesTable.toggleRowSelection(e)}))}},methods:{select:function(e,t){this.$emit("select",e,t)},selectAll:function(e){this.$emit("select",e)},cellClick:function(e,t,r,a){this.$emit("cellClick",e,t,r,a)},tableRowClassName:function(e){var t=e.row,r=e.rowIndex;t.index=r},handleCurrentChange:function(e){this.pagination.pageNum=e,this.$emit("refresh")},handleSizeChange:function(e){this.pagination.pageSize=e,this.$emit("refresh")},renderHeader:function(e,t){return e("span",{class:"ces-table-require"},t.column.label)}}}),l=n,c=(r("5cef"),r("2877")),i=Object(c["a"])(l,a,o,!1,null,"f7f0ad18",null);t["a"]=i.exports},a9e3:function(e,t,r){"use strict";var a=r("83ab"),o=r("da84"),n=r("94ca"),l=r("6eeb"),c=r("5135"),i=r("c6b6"),s=r("7156"),u=r("c04e"),p=r("d039"),f=r("7c73"),d=r("241c").f,h=r("06cf").f,b=r("9bf2").f,g=r("58a8").trim,m="Number",S=o[m],y=S.prototype,w=i(f(y))==m,D=function(e){var t,r,a,o,n,l,c,i,s=u(e,!1);if("string"==typeof s&&s.length>2)if(s=g(s),t=s.charCodeAt(0),43===t||45===t){if(r=s.charCodeAt(2),88===r||120===r)return NaN}else if(48===t){switch(s.charCodeAt(1)){case 66:case 98:a=2,o=49;break;case 79:case 111:a=8,o=55;break;default:return+s}for(n=s.slice(2),l=n.length,c=0;c<l;c++)if(i=n.charCodeAt(c),i<48||i>o)return NaN;return parseInt(n,a)}return+s};if(n(m,!S(" 0o1")||!S("0b1")||S("+0x1"))){for(var v,_=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof _&&(w?p((function(){y.valueOf.call(r)})):i(r)!=m)?s(new S(D(t)),r,_):D(t)},k=a?d(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;k.length>N;N++)c(S,v=k[N])&&!c(_,v)&&b(_,v,h(S,v));_.prototype=y,y.constructor=_,l(o,m,_)}},c054:function(e,t,r){}}]);