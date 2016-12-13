function goPage(v) {
	$("#pageNo").val(v);
	fn_search();
}

function fnToDate(datetext){
	return new Date(datetext).toLocaleDateString();
}

function isMobile() {
    var x = navigator.userAgent;
    var devices = new Array('Android', 'iPhone', 'iPod', 'BlackBerry', 'Windows CE', 'SAMSUNG', 'LG', 'MOT', 'SonyEricsson');
    for(var idx in devices){
    	if(x.indexOf(devices[idx]) > -1) {
    		return true;
    	}
    }
    return false;
}

function fnBooleanNumber(bool){
	if(bool) return 1;
	else return 0;
}

function postPage(page, _from){
	return page + "?" + _from.serialize();
}

function appIf(fn){
	try{
		fn.call();
	} catch(err){
		console.log("err >> " + err);
	}
}

function beforeLoading(bool){
	if(bool) $("#loading").show();
	else $("#loading").hide();
}