(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76c8d307","chunk-16174e1d"],{"091b":function(t,e,i){"use strict";var n=i("afc2"),r=i.n(n);r.a},"176c":function(t,e,i){"use strict";var n=i("fd3e"),r=i.n(n);r.a},"17be":function(t,e,i){},"18f5":function(t,e,i){"use strict";var n=i("17be"),r=i.n(n);r.a},"245c":function(t,e,i){"use strict";var n=i("5ad0"),r=i.n(n);r.a},"38c6":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-container",[i("el-aside",{staticStyle:{width:"250px"}},[i("side-bar",{attrs:{menuList:t.menuList,router:t.router}})],1),i("el-main",[i("section",{staticStyle:{background:"white"}},[i("breadCrumb")],1),i("div",{staticStyle:{height:"10px",background:"#F0F5FA"}}),i("section",{staticStyle:{"margin-left":"10px",background:"white"}},[i("transition",{attrs:{name:"fade",mode:"out-in"}},[i("router-view")],1)],1),i("toTop")],1)],1)},r=[],s=i("a39f"),a=i("e38d"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-breadcrumb",{staticClass:"app-breadcrumb",attrs:{"separator-class":"el-icon-arrow-right"}},[i("transition-group",{attrs:{name:"breadcrumb"}},t._l(t.levelList,(function(e,n){return e.meta.title?i("el-breadcrumb-item",{key:e.path},["noredirect"===e.redirect||n==t.levelList.length-1?i("span",{staticClass:"no-redirect"},[t._v(t._s(e.meta.title))]):i("router-link",{attrs:{to:e.redirect||e.path}},[t._v(t._s(e.meta.title))])],1):t._e()})),1)],1)},l=[],c=(i("99af"),i("4de4"),i("b0c0"),{created:function(){this.getBreadcrumb()},data:function(){return{levelList:null}},watch:{$route:function(){this.getBreadcrumb()}},methods:{getBreadcrumb:function(){var t=this.$route.matched.filter((function(t){return t.name}));t=[{path:"/index",meta:{title:"首页"}}].concat(t),this.levelList=t}}}),d=c,g=(i("091b"),i("2877")),u=Object(g["a"])(d,o,l,!1,null,"74a466e9",null),f=u.exports,p={name:"index",components:{sideBar:s["default"],toTop:a["a"],breadCrumb:f},props:{router:!1,menuList:{type:Array,required:!0}}},m=p,x=(i("245c"),Object(g["a"])(m,n,r,!1,null,"3ff44bd9",null));e["a"]=x.exports},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,i){var n=i("1d80"),r=i("5899"),s="["+r+"]",a=RegExp("^"+s+s+"*"),o=RegExp(s+s+"*$"),l=function(t){return function(e){var i=String(n(e));return 1&t&&(i=i.replace(a,"")),2&t&&(i=i.replace(o,"")),i}};t.exports={start:l(1),end:l(2),trim:l(3)}},"5ad0":function(t,e,i){},"5fe1":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("layout",{attrs:{menuList:t.menuList,router:!0}})},r=[],s=i("38c6"),a={name:"index",components:{layout:s["a"]},data:function(){return{menuList:[{title:"组织机构",index:"/setting/orgDepartment",children:[{title:"机构索引管理",index:"/setting/orgDepartment/orgIndex",children:[{title:"配置机构索引",index:"/setting/orgDepartment/orgIndex/orgIndexConfig"},{title:"查看机构索引",index:"/setting/orgDepartment/orgIndex/orgIndexView"}]},{title:"机构管理",index:"/setting/orgDepartment/orgManage",children:[{title:"配置机构",index:"/setting/orgDepartment/orgManage/orgManageConfig"},{title:"查看机构",index:"/setting/orgDepartment/orgManage/orgManageView"}]},{title:"部门管理",index:"/setting/orgDepartment/departManage",children:[{title:"配置部门",index:"/setting/orgDepartment/departManage/depManageConfig"},{title:"查看部门",index:"/setting/orgDepartment/departManage/depManageView"},{title:"部门变更",index:"/setting/orgDepartment/orgManage/depManageAltera"}]},{title:"人员管理",index:"/setting/orgDepartment/personManage",children:[{title:"提取人员",index:"/setting/orgDepartment/personManage/extract"},{title:"查看人员",index:"/setting/orgDepartment/personManage/personList"},{title:"查看休眠",index:"/setting/orgDepartment/personManage/sleepList"},{title:"查看文件",index:"/setting/orgDepartment/personManage/filePersonList"}]},{title:"群组管理",index:"/setting/orgDepartment/teamManage",children:[{title:"查看群组",index:"/setting/orgDepartment/teamManage/teamList"},{title:"配置群组",index:"/setting/orgDepartment/teamManage/editTeam"}]},{title:"变更记录管理",index:"/setting/orgDepartment/alterRecord",children:[{title:"新旧机构对应记录",index:"/setting/orgDepartment/alterRecord/orgalterRecord"},{title:"新旧部门对应记录",index:"/setting/orgDepartment/alterRecord/alterDeptRecord"},{title:"机构索引变更记录",index:"/setting/orgDepartment/alterRecord/deptIndexAlter"},{title:"机构变更记录",index:"/setting/orgDepartment/alterRecord/orgAlterations"},{title:"部门变更记录",index:"/setting/orgDepartment/alterRecord/deptAlterations"}]}]},{title:"流程控制",index:"/setting/1",children:[]},{title:"主题词库",index:"/setting/themeLexicon",children:[{title:"配置类别词",index:"/setting/themeLexicon/classifier"},{title:"配置类属词",index:"/setting/themeLexicon/genus"},{title:"配置公共类属词",index:"/setting/themeLexicon/publicGenus"},{title:"配置文种词",index:"/setting/themeLexicon/practice"}]},{title:"系统配置",index:"/setting/sysConfig",children:[{title:"服务器配置",index:"/setting/sysConfig/server"},{title:"数据库配置",index:"/setting//sysConfig/database"},{title:"正文模板配置",index:"/setting/sysConfig/texttem"},{title:"恢复用户口令",index:"/setting/sysConfig/restPwd"},{title:"分级维护设置",index:"/setting/sysConfig/gradprotect"},{title:"主题词部门设置",index:"/setting/sysConfig/keyword"},{title:"落款部门过滤设置",index:"/setting/sysConfig/payfiflter"},{title:"其他配置",index:"/setting/sysConfig/otherconfig",children:[{title:"短信微信发送配置",index:"/setting/sysConfig/otherconfig"},{title:"节假日配置",index:"/setting/sysConfig/otherconfig/holiday"},{title:"视图分类配置",index:"/setting/sysConfig/otherconfig/categoryView"},{title:"数据库空间预警",index:"/setting/sysConfig/otherconfig/dataWarning"},{title:"超期待办个人提醒",index:"/setting/sysConfig/otherconfig/overduePer"},{title:"超期待办综合提醒",index:"/setting/sysConfig/otherconfig/overdueCom"},{title:"反向提醒设置",index:"/setting/sysConfig/otherconfig/reMind"},{title:"待办事宜排序",index:"/setting/sysConfig/otherconfig/thingsOrder"},{title:"接口系统配置",index:"/setting/sysConfig/otherconfig/interSys"},{title:"正文字数超限原因配置单",index:"/setting/sysConfig/otherconfig/textNum"},{title:"附件上传黑名单配置",index:"/setting/sysConfig/otherconfig/blackList"},{title:"意见中不能包含的特殊字符",index:"/setting/sysConfig/otherconfig/opinionChar"},{title:"正文延时白名单设置",index:"/setting/sysConfig/otherconfig/whiteList"}]}]},{title:"设计词典",index:"/setting/4",children:[]},{title:"日志管理",index:"/setting/logs",children:[{title:"用户收藏日志查询",index:"/setting/logs/selectCollectLogs"},{title:"用户登录日志查询",index:"/setting/logs/selectLoginLogs"},{title:"系统维护日志",index:"/setting/logs/selectPreserveLogs"},{title:"用户回顾",index:"/setting/logs/reviewLogs"},{title:"日志安全设置",index:"/setting/logs/settingSafeLogs"}]},{title:"用户指南",index:"/setting/6",children:[]},{title:"查询",index:"/setting/inquire",children:[]},{title:"统计",index:"/setting/statistics",children:[{title:"公文统计分析汇总",index:"/setting/statistics/analysis",children:[{title:"按全行统计",index:"/setting/statistics/analysis/wholeBank"},{title:"按下级机构统计",index:"/setting/statistics/analysis/lowerOrg"}]},{title:"公文点击率统计",index:"/setting/statistics/clickRate"}]}]}}},o=a,l=i("2877"),c=Object(l["a"])(o,n,r,!1,null,null,null);e["default"]=c.exports},a39f:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sidebar-container"},[i("el-scrollbar",{attrs:{"wrap-class":"scrollbar-wrapper"}},[i("el-menu",{attrs:{mode:"vertical","default-active":t.activeMenu,router:"","unique-opened":!0}},t._l(t.menuList,(function(t){return i("sidebar-item",{key:t.index,attrs:{item:t}})})),1)],1)],1)},r=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.item.children?i("div",[0==t.item.children.length?[i("el-menu-item",{attrs:{index:t.item.index}},[t._v(" "+t._s(t.item.title)+" ")])]:i("el-submenu",{attrs:{index:t.item.index}},[i("template",{slot:"title"},[t._v(" "+t._s(t.item.title)+" ")]),t._l(t.item.children,(function(e){return[e.children&&e.children.length>0?i("sidebar-item",{attrs:{item:e}}):i("el-menu-item",{attrs:{index:e.index}},[t._v(" "+t._s(e.title)+" ")])]}))],2)],2):t._e()},a=[],o={name:"SidebarItem",props:{item:{type:Object,required:!0}}},l=o,c=i("2877"),d=Object(c["a"])(l,s,a,!1,null,null,null),g=d.exports,u={name:"Sidebar",components:{sidebarItem:g},props:{router:!1,menuList:{type:Array,required:!0}},computed:{activeMenu:function(){var t=this.$route,e=t.path;return e}},data:function(){return{}}},f=u,p=(i("18f5"),Object(c["a"])(f,n,r,!1,null,null,null));e["default"]=p.exports},a9e3:function(t,e,i){"use strict";var n=i("83ab"),r=i("da84"),s=i("94ca"),a=i("6eeb"),o=i("5135"),l=i("c6b6"),c=i("7156"),d=i("c04e"),g=i("d039"),u=i("7c73"),f=i("241c").f,p=i("06cf").f,m=i("9bf2").f,x=i("58a8").trim,h="Number",b=r[h],v=b.prototype,y=l(u(v))==h,w=function(t){var e,i,n,r,s,a,o,l,c=d(t,!1);if("string"==typeof c&&c.length>2)if(c=x(c),e=c.charCodeAt(0),43===e||45===e){if(i=c.charCodeAt(2),88===i||120===i)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+c}for(s=c.slice(2),a=s.length,o=0;o<a;o++)if(l=s.charCodeAt(o),l<48||l>r)return NaN;return parseInt(s,n)}return+c};if(s(h,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var C,_=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof _&&(y?g((function(){v.valueOf.call(i)})):l(i)!=h)?c(new b(w(e)),i,_):w(e)},L=n?f(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;L.length>I;I++)o(b,C=L[I])&&!o(_,C)&&m(_,C,p(b,C));_.prototype=v,v.constructor=_,a(r,h,_)}},afc2:function(t,e,i){},e38d:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:t.transitionName}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"back-to-top",style:t.customStyle,on:{click:t.backToTop}},[i("i",{staticClass:"icon el-icon-top",staticStyle:{"font-size":"20px"}})])])},r=[],s=(i("a9e3"),{name:"ByuiBackToTop",props:{visibilityHeight:{type:Number,default:400},backPosition:{type:Number,default:0},customStyle:{type:Object,default:function(){return{background:"#fff",right:"25px",bottom:"25px",width:"50px",height:"50px",paddingTop:"15px",borderRadius:"99px",boxShadow:"0 1px 4px rgba(0, 21, 41, 0.08)"}}},transitionName:{type:String,default:"fade"}},data:function(){return{visible:!1,interval:null,isMoving:!1}},watch:{$route:function(){this.destroy(),this.init()}},mounted:function(){this.init()},beforeDestroy:function(){this.destroy()},methods:{init:function(){window.addEventListener("scroll",this.handleScroll)},destroy:function(){window.removeEventListener("scroll",this.handleScroll),this.interval&&clearInterval(this.interval)},handleScroll:function(){this.visible=window.pageYOffset>this.visibilityHeight},backToTop:function(){var t=this;if(!this.isMoving){var e=window.pageYOffset,i=0;this.isMoving=!0,this.interval=setInterval((function(){var n=Math.floor(t.easeInOutQuad(10*i,e,-e,500));n<=t.backPosition?(window.scrollTo(0,t.backPosition),clearInterval(t.interval),t.isMoving=!1):window.scrollTo(0,n),i++}),16.7)}},easeInOutQuad:function(t,e,i,n){return(t/=n/2)<1?i/2*t*t+e:-i/2*(--t*(t-2)-1)+e}}}),a=s,o=(i("176c"),i("2877")),l=Object(o["a"])(a,n,r,!1,null,"0138c92c",null);e["a"]=l.exports},fd3e:function(t,e,i){}}]);