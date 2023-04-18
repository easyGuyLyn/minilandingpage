onEvent("initEnd");
//触发事件 参数： 
//ename: initEnd(初始化完毕) register(注册事件)  play(付费事件)  允许其他自定义值
//pid：渠道id,选填
//uid：用户id
//payMoney 用户付费金额，如果是play可传入，其他可以传
function onEvent(ename,pid = 0,uid = 0,payMoney = 0){	
	if(ename == 'initEnd' && window['luck_m'] && window['luck_m']['onShowBaseUi'] && luck_m.onShowBaseUi != null) {
		//关闭安卓壳启动界面
		luck_m.onShowBaseUi();
		return;
	}

	if(window['luck_m'] && window['luck_m']['onEvent_andironsBranch'] && luck_m.onEvent_andironsBranch != null) {
		console.log("APP e:" + ename + " pid:" + pid );
		luck_m.onEvent_andironsBranch(ename, uid, payMoney);
	}
}

//参数 
//url 外跳转路径  打开客服 外跳链接
//bool：true 调用安卓默认浏览器 
function jumpUrl(url,bool){
	if(bool == true && isAndroid() == true && luck_m.go2Url != null) {
		luck_m.go2Url(url,0);
		return null;
	} else {
		if(window.parent)
			window.parent.location.href = url;
		else
			window.location.href = url;
	}
}

//判断是否安卓壳 
//是安卓壳 return true 
//是h5 return false
function isAndroid(){
	if(typeof(luck_m) != "null" && typeof(luck_m) != "undefined" && typeof(luck_m) != ""){
		return true;
	} else {
		return false;
	}
}