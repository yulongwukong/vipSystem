try{
    if(window["CSS"] && CSS.supports("width","1vw")){
        console.log("支持vw");
    }else{
        throw new Error("不支持vw");
    }
}catch(e){
    var html = document.querySelector("html");
    var deviceWidth = 750;
    function resize(){
        var width = (document.documentElement || document.body).clientWidth;
        html.style.fontSize = 100 * (width / deviceWidth) + "px";
    }
    window.addEventListener("resize", resize);
    resize();
}

