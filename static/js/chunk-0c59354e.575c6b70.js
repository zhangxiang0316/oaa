(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c59354e"],{"06b6":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("headertop",{ref:"tabheader",on:{selectfun:t.getselect}}),a("m-table",{attrs:{size:"medium",isPagination:!0,isHandle:!1,tableData:t.tableData,tableCols:t.tableCols,pagination:t.pagination},on:{refresh:function(e){return t.loadData()},cellClick:t.jumpdeal}})],1)},n=[],l=(a("9911"),a("72d2")),i=a("933b"),d={name:"undertable",components:{mTable:l["a"],headertop:i["a"]},data:function(){return{tableData:[{type:"121啊21",date:"1435345",title:"54654654654",link:"567657",per:"grtrr",draft:"gffdgdf"},{type:"12121",date:"1435345",title:"54654654654",link:"567657",per:"grtrr",draft:"gffdgdf"},{type:"12121",date:"1435345",title:"54654654654",link:"567657",per:"grtrr",draft:"gffdgdf"},{type:"12121",date:"1435345",title:"54654654654",link:"567657",per:"grtrr",draft:"gffdgdf"},{type:"12121",date:"1435345",title:"54654654654",link:"567657",per:"grtrr",draft:"gffdgdf"},{type:"12121",date:"1435345",title:"54654654654",link:"567657",per:"grtrr",draft:"gffdgdf"},{type:"12121",date:"1435345",title:"54654654654",link:"567657",per:"grtrr",draft:"gffdgdf"},{type:"12121",date:"1435345",title:"54654654654",link:"567657",per:"grtrr",draft:"gffdgdf"},{type:"12121",date:"1435345",title:"54654654654",link:"567657",per:"grtrr",draft:"gffdgdf"},{type:"12121",date:"1435345",title:"54654654654",link:"567657",per:"grtrr",draft:"gffdgdf"}],tableCols:[{label:"拟稿日期",prop:"type"},{label:"编号",prop:"date"},{label:"标题",prop:"title"},{label:"当前环节",prop:"link"},{label:"操作人",prop:"per"},{label:"拟稿人",prop:"draft"}],pagination:{pageNum:1,total:7}}},methods:{loadData:function(){},jumpdeal:function(t){var e=t.link;this.$router.push("/underdeal/".concat(e))},getselect:function(t){if(this.sonselect=t,0==this.sonselect)this.loadData(1);else if(1==this.sonselect)this.loadData(2);else if(2==this.sonselect)this.loadData(3);else{if(3!=this.sonselect)return;this.loadData(4)}}},created:function(){this.loadData()}},f=d,o=a("2877"),p=Object(o["a"])(f,r,n,!1,null,"702b3042",null);e["default"]=p.exports},"857a":function(t,e,a){var r=a("1d80"),n=/"/g;t.exports=function(t,e,a,l){var i=String(r(t)),d="<"+e;return""!==a&&(d+=" "+a+'="'+String(l).replace(n,"&quot;")+'"'),d+">"+i+"</"+e+">"}},9911:function(t,e,a){"use strict";var r=a("23e7"),n=a("857a"),l=a("af03");r({target:"String",proto:!0,forced:l("link")},{link:function(t){return n(this,"a","href",t)}})},af03:function(t,e,a){var r=a("d039");t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}}}]);