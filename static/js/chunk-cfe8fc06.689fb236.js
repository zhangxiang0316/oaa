(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cfe8fc06"],{"5cef":function(e,t,a){"use strict";var n=a("c054"),l=a.n(n);l.a},"72d2":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ces-table-page"},[e.isHandle?a("div",{staticClass:"ces-handle"},e._l(e.tableHandles,(function(t,n){return a("el-button",{key:n,attrs:{size:t.size||e.size,type:t.type,icon:t.icon},on:{click:function(e){return t.handle()}}},[e._v(e._s(t.label))])})),1):e._e(),a("div",{staticClass:"ces-table"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"cesTable",attrs:{data:e.tableData,size:e.size,id:e.id,border:e.isBorder,"header-cell-style":{background:"#eef1f6",color:"#3B85F0"},"row-class-name":e.tableRowClassName,defaultSelections:e.defaultSelections},on:{select:e.select,"select-all":e.selectAll,"cell-click":e.cellClick}},[e.isSelection?a("el-table-column",{attrs:{width:"50px",type:"selection",align:"center"}}):e._e(),e.isIndex?a("el-table-column",{attrs:{type:"index",label:e.indexLabel,align:"center",width:"50"}}):e._e(),e._l(e.tableCols,(function(t){return a("el-table-column",{key:t.id,attrs:{prop:t.prop,formatter:t.formatter,label:t.label,width:t.width,align:"center","render-header":t.require?e.renderHeader:null},scopedSlots:e._u([{key:"default",fn:function(n){return["Html"===t.type?a("span",{domProps:{innerHTML:e._s(t.html(n.row))}}):e._e(),"Button"===t.type?a("span",e._l(t.formatter||t.btnList,(function(t,l){return!t.isShow||t.isShow&&t.isShow(n.row)?a("el-button",{key:l,attrs:{disabled:t.isDisabled&&t.isDisabled(n.row),type:t.type,size:t.size||e.size,icon:t.icon},on:{click:function(e){return t.handle(n.row)}}},[e._v(e._s(t.label))]):e._e()})),1):e._e(),"button"===t.type?a("span",e._l(t.formatter(n.row),(function(t,l){return a("el-button",{key:l,attrs:{type:t.type,size:t.size||e.size,icon:t.icon},on:{click:function(e){return t.handle(n.row)}}},[e._v(e._s(t.label))])})),1):e._e(),"Input"===t.type?a("el-input",{attrs:{size:e.size},on:{focus:function(e){t.focus&&t.focus(n.row)}},model:{value:n.row[t.prop],callback:function(a){e.$set(n.row,t.prop,a)},expression:"scope.row[item.prop]"}}):e._e(),"Select"===t.type?a("el-select",{attrs:{size:e.size,props:t.props},on:{change:function(e){t.change&&t.change(n.row)}},model:{value:n.row[t.prop],callback:function(a){e.$set(n.row,t.prop,a)},expression:"scope.row[item.prop]"}},e._l(t.options,(function(e){return a("el-option",{key:e[t.props.value],attrs:{label:e[t.props.label],value:e[t.props.value]}})})),1):e._e(),"Radio"===t.type?a("el-radio-group",{on:{change:function(e){t.change&&t.change(n.row)}},model:{value:n.row[t.prop],callback:function(a){e.$set(n.row,t.prop,a)},expression:"scope.row[item.prop]"}},e._l(t.radios,(function(t,n){return a("el-radio",{key:n,attrs:{label:t.value}},[e._v(e._s(t.label))])})),1):e._e(),"Checkbox"===t.type?a("el-checkbox-group",{on:{change:function(e){t.change&&t.change(n.row)}},model:{value:n.row[t.prop],callback:function(a){e.$set(n.row,t.prop,a)},expression:"scope.row[item.prop]"}},e._l(t.checkboxs,(function(t,n){return a("el-checkbox",{key:n,attrs:{label:t.value}},[e._v(e._s(t.label))])})),1):e._e(),"Rate"===t.type?a("el-rate",{on:{change:function(e){t.change&&t.change(n.row)}},model:{value:n.row[t.prop],callback:function(a){e.$set(n.row,t.prop,a)},expression:"scope.row[item.prop]"}}):e._e(),"Switch"===t.type?a("el-switch",{on:{change:function(e){t.change&&t.change(n.row)}},model:{value:n.row[t.prop],callback:function(a){e.$set(n.row,t.prop,a)},expression:"scope.row[item.prop]"}}):e._e(),"Image"===t.type?a("img",{attrs:{src:n.row[t.prop]},on:{click:function(e){t.handle&&t.handle(n.row)}}}):e._e(),"Slider"===t.type?a("el-slider",{on:{change:function(e){t.change&&t.change(n.row)}},model:{value:n.row[t.prop],callback:function(a){e.$set(n.row,t.prop,a)},expression:"scope.row[item.prop]"}}):e._e(),t.type?e._e():a("span",{class:t.itemClass&&t.item.itemClass(n.row),style:t.itemStyle&&t.itemStyle(n.row)},[e._v(e._s(t.formatter&&t.formatter(n.row)||n.row[t.prop]))])]}}],null,!0)})}))],2)],1),e.isPagination?a("div",{staticClass:"ces-pagination"},[a("div",{staticStyle:{flex:"1","line-height":"30px"}}),a("el-pagination",{attrs:{background:"",layout:"total,prev, pager, next,jumper","page-size":e.pagination.pageSize,total:e.pagination.total},on:{"current-change":e.handleCurrentChange}})],1):e._e()])},l=[],o=(a("4160"),a("159b"),{props:{size:{type:String,default:"medium"},id:{type:String,default:"table"},isBorder:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},isHandle:{type:Boolean,default:!1},tableHandles:{type:Array,default:function(){return[]}},tableData:{type:Array,default:function(){return[]}},tableCols:{type:Array,default:function(){return[]}},isSelection:{type:Boolean,default:!1},defaultSelections:{type:[Array,Object],default:function(){return null}},isIndex:{type:Boolean,default:!1},indexLabel:{type:String,default:"序号"},isPagination:{type:Boolean,default:!0},pagination:{type:Object,default:function(){return{pageSize:10,pageNum:1,total:10}}}},data:function(){return{Height:0}},mounted:function(){this.height="500px"},watch:{defaultSelections:function(e){this.$nextTick((function(){var t=this;Array.isArray(e)?e.forEach((function(e){t.$refs.cesTable.toggleRowSelection(e)})):this.$refs.cesTable.toggleRowSelection(e)}))}},methods:{select:function(e,t){console.log("---select->",e,t),this.$emit("select",e,t)},selectAll:function(e){console.log("---selectAll->",e),this.$emit("select",e)},cellClick:function(e,t,a,n){this.$emit("cellClick",e,t,a,n)},tableRowClassName:function(e){var t=e.row,a=e.rowIndex;t.index=a},handleCurrentChange:function(e){this.pagination.pageNum=e,this.$emit("refresh")},handleSizeChange:function(e){this.pagination.pageSize=e,this.$emit("refresh")},renderHeader:function(e,t){return e("span",{class:"ces-table-require"},t.column.label)}}}),i=o,r=(a("5cef"),a("2877")),s=Object(r["a"])(i,n,l,!1,null,"f7f0ad18",null);t["a"]=s.exports},c054:function(e,t,a){},ca34:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("m-table",{attrs:{size:"medium",isPagination:!0,isHandle:!1,tableData:e.tableData,tableCols:e.tableCols,pagination:e.pagination},on:{refresh:function(t){return e.loadData()},cellClick:e.jumpdeal}})],1)},l=[],o=a("72d2"),i={name:"serialnum",components:{mTable:o["a"]},data:function(){return{tableData:[{data:"12121",num:"1435345",title:"54654654654",depar:"567657"},{data:"12121",num:"1435345",title:"54654654654",depar:"567657"},{data:"12121",num:"1435345",title:"54654654654",depar:"567657"},{data:"12121",num:"1435345",title:"54654654654",depar:"567657"},{data:"12121",num:"1435345",title:"54654654654",depar:"567657"},{data:"12121",num:"1435345",title:"54654654654",depar:"567657"},{data:"12121",num:"1435345",title:"54654654654",depar:"567657"},{data:"12121",num:"1435345",title:"54654654654",depar:"567657"},{data:"12121",num:"1435345",title:"54654654654",depar:"567657"},{data:"12121",num:"1435345",title:"54654654654",depar:"567657"},{data:"12121",num:"1435345",title:"54654654654",depar:"567657"}],tableCols:[{label:"传阅日期",prop:"data"},{label:"编号",prop:"num"},{label:"标题",prop:"title"},{label:"拟稿部门",prop:"depar"}],pagination:{pageNum:1,total:7}}},methods:{loadData:function(){console.log("请求数据")},jumpdeal:function(e){console.log("-----val-----\x3e",e);var t=e.num;this.$router.push("/bianhan/serialdeal/".concat(t))}},created:function(){this.loadData()}},r=i,s=a("2877"),c=Object(s["a"])(r,n,l,!1,null,"3ba0be30",null);t["default"]=c.exports}}]);