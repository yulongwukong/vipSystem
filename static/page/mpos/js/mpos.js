export default{
    beforeRouteEnter(to,from,next){
        global.beforeRouteName = from.name;   //给全局变量赋值
        next();
    },
    mounted(){
        //判断浏览器是否支持popstate;
        if(window.history && window.history.pushState){
            history.pushState(null,null,document.URL);
            window.addEventListener('popstate',this.goBack,false);
        }
    },
    methods:{

        goBack(){

            alert("进入的路由名称：" + global.beforeRouteName );

            if(global.beforeRouteName == "payPhoneBill"){
                alert("返回payPhoneBill --  可执行相关操作")
                   
            }else if(global.beforeRouteName == "mpos"){
                alert("返回mpos --  可执行相关操作");
            }else{
                alert("关闭页面")
            }
        }
    },
    destroyed(){
        window.removeEventListener('popstate',this.goBack,false);
    }
}