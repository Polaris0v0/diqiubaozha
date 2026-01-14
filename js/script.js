var time = 60;
var timer = setInterval(function(){
    time++;
    document.querySelector(".second").innerHTML = time;
    if(time>99){
        document.querySelector(".distance_zh_cn_2").style.margin = "-35px 0 0 860px";
    }
    if(time>999){
        document.querySelector(".distance_zh_cn_2").style.margin = "-35px 0 0 874px";
    }
},1000)