/**
 * P2 Framework JS Library 1.0
 * Copyright(c) 2012, China Construction Bank.
 * @Author zhouyuhang
 * Create on: 2012-10-25
 * Last Updated:
 * 将涉及资源访问的常量单独使用命名空间PJF.loadResources by shenye 2014.04.04
 * 
 * 说明:PJF框架的配置信息以及PJF函数中需要回调的固定函数，主要是出错后的处理函数
 * 
 */
/*
 * The configuration of PJF,each application can modify these params
 */
window.PJF = {};
//PJF需要使用的常量
PJF.constants = {
	// 凭证扫描界面路径
	VOUSCAN_PAGE_URL : "/bosWeb/page/cost/vouScan/vouScan.jsp",
	//在线浏览文档地址	
	VIEW_DOC_URL:'http://128.192.80.252/op/view.aspx?src=',
	//在线浏览文档代理地址	
	VIEW_PROXY_URL:'http://localhost:8808/download.php?fs=',
	//是否将js错误弹出显示
	SHOW_JS_ERROR: false,
	//ajax请求超时时间,单位是毫秒
	AJAX_TIMEOUT: 30000,
	//默认的ajax请求方式
	AJAX_METHOD: 'post',
	//默认为非debug模式
	IS_DEBUG:false,
	//默认的ajax数据格式
	AJAX_DATA_TYPE: 'json',
	//默认后端请求Action
	DEFAULT_ACTION: 'ecpJsonDispatch.action',
	//交易成功代码
	BK_CODE_SUCCESS: '00',
	//开启键盘定制
	KEYBOARD_ENABLE: false,
	//开启键盘定制:统一客服
	KEYBOARD_NEW_ENABLE: false,
	//以防万一可以关闭全键盘
	KEYBOARD_ENABLE_BKDOOR: false,
	//分行打印ip
	PRINT_IP:'http://128.160.96.149:7002',
	//default authinfo for im
	IM_REQ_AUTH:'u554ck2yixDih1xF',
	// 是否浏览器登陆标志,默认为false,在浏览器登陆的情况下会会由登陆页面置为true
	IS_BSLOGIN_MODEL : false,

	// 是否开启浏览器右键 默认true 表示开启，如需关闭设置该值为false
	IS_ENABLE_RIGHT_CLICK : true,

	// 是否开启高性能模式 默认为false 不开启，
	// 如果设置为true则表示关闭所有额外操作 该属性值优先级低于grid属性
	// 包括：列宽自适应、数据加载时排序操作等。
	HIGH_PERFORMANCE : false,	
	
	// grid 初始缺省提示信息 yh 2013.2.19
	GRID_INIT_INFO : resource.GRID_INIT_INFO,
	/* grid 为查询到数据的提示信息 famingyuan 2013/07/31 */
	GRID_NODATA_INFO : resource.GRID_NODATA_INFO,
	/*grid默认宽度 允许覆盖*/
	GRID_DEFAULT_WIDTH:850,
	/* grid 1024屏幕宽度及以下 宽度为770 */
	GRID_DEFAULT_WIDTH_1024 : 770,
	// grid 验证信息 yh 2013.2.19
	GRID_VALIDATE_INFO : resource.GRID_VALIDATE_INFO,

	// dateinput组件的验证提示信息 linguoyong 2013.2.19
	DATEINPUT_VALIDATE_INFO : resource.DATEINPUT_VALIDATE_INFO,
	// dateinput年月默认的验证信息 linguoyong 2013.5.6
	DATEINPUT_VALIDATE_MONTH_DEFAULT_INFO : resource.DATEINPUT_VALIDATE_MONTH_DEFAULT_INFO,
	// dateinput日期时间默认的验证信息 linguoyong 2013.5.14
	DATEINPUT_VALIDATE_DATETIME_DEFAULT_INFO : resource.DATEINPUT_VALIDATE_DATETIME_DEFAULT_INFO,
	// datespan组件验证第一个日期小于等于第二个日期 信息 lingy 2013.2.20
	DATESPAN_VALIDATE_INFO_ONE : resource.DATESPAN_VALIDATE_INFO_ONE,
	// datespan组件验证第二个日期须大于或等于第一个日期信息 lingy 2013.2.20
	DATESPAN_VALIDATE_INTO_TWO : resource.DATESPAN_VALIDATE_INFO_ONE,
	// //datespan组件验证第二个月份要大于第一个月份信息 lingy 2013.5.6
	DATESAPN_VALIDATE_MONTH_INFO : resource.DATESAPN_VALIDATE_MONTH_INFO,
	//datespan组件开始日期和当前日期比较
	DATESAPN_VALIDATE_STARTDATE_INFO:resource.DATESPAN_VALIDATE_STARTDATE_INFO,
	//datespan组件结束日期和当前日期比较
	DATESAPN_VALIDATE_ENDDATE_INFO:resource.DATESPAN_VALIDATE_ENDDATE_INFO,
	
	//选择季度比较错误信息 2015-1-5
	DATESPAN_VALIDATE_INTO_TWO_SEASON : resource.DATESPAN_VALIDATE_INTO_TWO_SEASON,
	
	// 选择的日期和设置的最大日期比较信息
	DATEINPUT_VALIDATE_MAXDATE_INFO : resource.DATEINPUT_VALIDATE_MAXDATE_INFO,
	// 选择的日期和设置的最小日期比较信息
	DATEINPUT_VALIDATE_MINDATE_INFO : resource.DATEINPUT_VALIDATE_MINDATE_INFO,
	// timespinner验证的默认信息 lingy 2013.5.10
	TIMESPINNER_VALIDATE_DEFAULT_INFO : resource.TIMESPINNER_VALIDATE_DEFAULT_INFO,
	// timespinnerspan比较验证的默认信息 lingy 2013.5.10
	TIMESPINNERSPAN_VALIDATE_COMPARE_INTO : resource.TIMESPINNERSPAN_VALIDATE_COMPARE_INTO,
	TIMESPINNERSPAN_VALIDATE_COMPARE_INTO_NOT_EQUAL : resource.TIMESPINNERSPAN_VALIDATE_COMPARE_INTO_NOT_EQUAL,
	// numberspan两个数字比较提示信息 lingy 2013.6.17
	NUMBERSPINNER_VALIDATE_COMPARE_INTO : resource.NUMBERSPINNER_VALIDATE_COMPARE_INTO,
	// numberspinner与最大数字比较验证信息
	NUMBERSPINNER_VALIDATE_MAXNUM_INFO : resource.NUMBERSPINNER_VALIDATE_MAXNUM_INFO,
	// numberspinner与最小数字比较验证信息
	NUMBERSPINNER_VALIDATE_MINNUM_INFO : resource.NUMBERSPINNER_VALIDATE_MINNUM_INFO,
	// numberspinner默认的验证信息
	NUMBERSPINNER_VALIDATE_DEFAULT_INFO : resource.NUMBERSPINNER_VALIDATE_DEFAULT_INFO,
	//判定是否label文本长度超过了一行，需要补充样式 linguoyong 2013.2.26
	LABEL_LINE_FLAG: 16,
	//判定是否label文本在1024情况下是否超出了一行 zhangxr 2013.8.12
	LABEL_LINE_SMALL_FLAG: 7,
	/*机构树机构查询类型*/
	//营业机构 
	ORGTREE_TYPE_B:'08', 
	//管理机构
	ORGTREE_TYPE_M:'06',
	//卡管理
	ORGTREE_TYPE_CARD:'18',
	//SO15服务　查询所有
	ORGTREE_TYPE_A:'ALL06',
	//SO1508
	ORGTREE_TYPE_S01508:'ALL08',
	//直辖市代码
	AREA_BEIJING: 110000,
	AREA_TIANJING: 120000,
	AREA_SHANGHAI: 310000,
	AREA_CHONGQING: 500000,
	//是否自动选择直辖市 add by bhy 2015-04-02
	AREA_AUTOSELECT:false,

	//把form包裹在panel中然后使其收缩 为true时可以创建包裹form的panel并使其收缩 add zhangxr 2013/8/27 
	FORM_PANEL:false,
	//判断textFiled.getValue是否替换换行转义符
	TEXTFIELD_GETVALUE_REPLACE : true,
	//连续发送相同cps交易间隔时间
	TRANS_INTERVAL_TIME : 0,
	//记录上一次发送的cps交易号
	LAST_CPS_TRANS_ID : '',

	// 普通银行卡
	COMMON_BANK_CARD:0,
	// IC卡
	IC_CARD:1,

	// 普通借记卡
	COMMON_DEBIT_CARD:2,
	// 普通贷记卡
	COMMON_CREDIT_CARD:3,
	// IC 借记卡
	IC_DEBIT_CARD:4,
	// IC 贷记卡
	IC_CREDIT_CARD:5,
	
	// 存折
	BANKBOOK:6,
	// 人脸获取卡号
	FACE_CARD: 7,
	// 扫码获取卡号
	QRCODE_CARD: 8,
	// NFC获取卡号
	NFC_CARD: 9,
	//是否要求textfield组件require情况下进行trim验证,默认false,应用可自行开启
	TEXTFIELD_REQUIRE_TRIM : false,
	//是否console.log输出到js-log.js中
	logDebug:true,

	/************以下为热键键值常量****************/
	KEYBOARD_F1:'112',
	// KEYBOARD_F2:'113',
	KEYBOARD_F3:'114',
	KEYBOARD_F4:'115',
	KEYBOARD_F5:'116',
	KEYBOARD_F6:'117',
	KEYBOARD_F7:'118',
	KEYBOARD_F8:'119',
	KEYBOARD_F9:'120',
	KEYBOARD_F10:'121',
	KEYBOARD_F11:'122',
	KEYBOARD_F12:'123',

	KEYBOARD_ESC:'27', // ESC
	KEYBOARD_PAGE_UP:'33', // 上翻
	KEYBOARD_PAGE_DOWN:'34', // 下翻
	//通行证代码
	IDENTITY_GANG_AO : '1070',
	IDENTITY_TAI_WAN : '1080',
	IDENTITY_FOREIGN : '1121',
	clientVersion : '',
	clientSubVersion : '',
	lastTransId : 'XXXXXXXXX',//记录最近一次外呼交易码，用于外联知识库
	floatDiv : null,
	minDate:'', //统一修改的dateinput最小日期
	maxDate:'', //统一修改的dateinput最大日期
	TIP_WARNING : true,
	ACCOUNTSCAR_ID : "_win_accountsCar_id", //结算车window dom id
	D2D:true,
	VOUCHER_LIST:[],
	IS_RA_AUTH:false,
	VOUSCAN_HOST_E2E:typeof(window.sendNSCommand) != 'undefined' ? window.sendNSCommand('getIPByRouteId','DSE'):"http://mget.nemc.dev.jh",
	ELEC_SIGN_FLAG:undefined, //电子签名是否开启，默认否
	NEED_FANGZHENG:false,
	WATER_MARK:true,
	ELEC_SIGN_CAPABILITY:undefined, //终端电子签名能力
	PRINT_NEW:false, //在打印预览界面直接打印
	termType:'pc',
	DEF_IM_PASSWORD:'password',//默认im用户密码
	OOTC_SIGN_URL:'page/common/ootc/ootcSign.html',
	//im ip
	IM_URL:'ws://128.192.152.74:7070/ws/server',
	//im ip
	IM_HTTP_URL:'http://128.192.152.74:9090',
	DEF_IM_PASSWORD:'password',//默认im用户密码
	IM_CONNECTING_EVENT:'IM_CONNECTING_EVENT',//即时通信正在连接事件
	IM_DISCONNECTING_EVENT:'IM_DISCONNECTING_EVENT',//即时通信正在断开连接事件
	IM_DISCONNECTED_EVENT:'IM_DISCONNECTED_EVENT',//即时通信已断开连接事件
	IM_CONNECTED_EVENT:'IM_CONNECTED_EVENT',//即时通信正在连接事件
	IM_CONNECT_FAIL:'IM_CONNECT_FAIL',//即时通信连接失败事件
	IM_USE_WEBSOCKET:true, //设置即时通讯采用websocket发送消息
	FUNC_KHTSJ: ['G00000000001', 'G00000000003', 'G00000000005', 'G00000000006', 'G00000000007'], // 客户透视镜, 邹浩
	FIX_GRID_PAGINATION_ERR: true,
	DOMAIN_MAP : {  //两地三中心的地址
		"1": {
			"pub": "pub_vt1.nemc.dev.jh",
			"mgt": "mget_vt1.nemc.dev.jh",
			"cnt": "cnt01_vt1.nemc.dev.jh", // 业务
			"stm": "stm_vt1.nemc.dev.jh",
			"lt": "lt.ecip.jh",
			"im": "im.nemc.jh",
			"mob": "128.192.152.70"
		},
		"0": {
			"pub": "pub_vt1_nh.nemc.dev.jh",
			"mgt": "mget_vt1_nh.nemc.dev.jh",
			"cnt": "cnt01_vt1_nh.nemc.dev.jh",
			"stm": "stm_vt1_nh.nemc.dev.jh",
			"lt": "lt.ecip.jh",
			"im": "im.nemc.jh",
			"mob": "128.196.101.41"
		},
		"2": {
			"mgt": "mgt.nemc.jh"
		},
		"zd": {
			"pub": "zd_pl3.nemc.dev.jh",
			"mgt": "zd_pl3.nemc.dev.jh",
			"cnt": "zd_pl3.nemc.dev.jh",
			"stm": "zd_pl3.nemc.dev.jh",
			"lt": "lt.ecip.jh",
			"im": "im.nemc.jh",
			"mob": "128.192.152.70"
		}
	}
};

//资源访问常量，如授权、柜外清等
PJF.loadResource = {
	//资源访问window组件Id
	PJF_LOAD_RESOURCES_ID :'PJF_LOAD_RESOURCES_ID',
	//资源访问window dom Id
	PJF_LOAD_RESOURCES_DOM_ID : 'PJF_LOAD_RESOURCES_DOM_ID',	
	//资源访问cps请求conf拷贝副本
	PJF_LOAD_RESOURCES_CONF : {},
	//资源访问成功后回调函数
	PJF_LOAD_RESOURCES_CALLBACK : function(){},
	//授权岗位列表(数组,不通过交易触发时,由应用自己定义)
	PJF_LOAD_RESOURCES_POSITIONS : [],
	PJF_AUTH_FAILURE:'PJF_AUTH_FAILURE', //资源拦截失败的时候统一发布事件名
	PJF_AUTH_SUCC:'PJF_AUTH_SUCC', //资源拦截成功发布事件名
	PJF_JIAOYICHE_TEXT_ID:'pjf_jiaoyiche_text',
	PJF_JIAOYICHE_URL:'http://' + location.host + '/bosWeb/page/common/cts/main.html',
	PJF_JIAOYICHE_PWD_KEY:'PJF_TRANSCART_PWD_KEY'
};


//PJF配置的默认函数实现
PJF.configuration = {
		// ajax请求失败后的回调函数
		ajaxFailure : function(fn) {
			new PJF.ui.messageBox({
				title : resource.MESSAGEBOX_AJAX_ERRORTITLE,
				content : resource.MESSAGEBOX_AJAX_RESPONSEERR_ERROR,
				fn : fn
			});
		},
		ajaxParseError : function(fn) {
			new PJF.ui.messageBox({
				title : resource.MESSAGEBOX_AJAX_ERRORTITLE,
				content : resource.MESSAGEBOX_AJAX_RESPONSEERR_DATAERR,
				fn : fn
			});
		},
		// ajax请求失败后的回调函数
		ajaxTimeOut : function(fn) {
			new PJF.ui.messageBox({
				title : resource.MESSAGEBOX_AJAXTIMEOUT_TITLE,
				content : resource.MESSAGEBOX_AJAX_RESPONSEERR_TIMEOUT,
				fn : fn
			});
		},
		gridFailureByJson : function() {
			new PJF.ui.messageBox({
				title : resource.MESSAGEBOX_AJAXDATA_TITLE,
				content : resource.MESSAGEBOX_AJAX_RESPONSEERR_DATAlOADINGERR
			});
		}
	}