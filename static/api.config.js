let ENV,KY_IP,KY_H5_IP,TEST_ID,KY_LOGIN= "";

export const setCookie = function(name, value, Days) {
    if (Days === null || Days === '') {
        Days = 30;
    }
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + "; path=/;expires=" + exp.toGMTString();
}

if(window.location.host==""){
	ENV = "正式环境";
	KY_IP = "";
}
else if(window.location.host==""){
    ENV = "测试环境";
    KY_IP = "";
}
else{
	setCookie("PHONENO","");
    setCookie("LOGINKEY","");
    setCookie("customerNo","");

	ENV = "测试环境";
	KY_IP = "";
}

console.log({"当前环境:":ENV,"后端接口:":KY_IP,"H5目录地址:":KY_H5_IP})

module.exports = {
	ENV:ENV,
	KY_IP:KY_IP,
	KY_H5_IP:KY_H5_IP,
	TEST_ID:TEST_ID,
};