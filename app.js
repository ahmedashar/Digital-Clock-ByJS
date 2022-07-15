
var timeInterval;
function showTime(){
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    var session = "AM"
     
    // 02:10:12 AM
    if(h==0){
      h = 12;     
    }
    else if(h>12){
        h = h-12;
        session = "PM"
    }
   

    if(h<10){
        h = 0 +"" + h
    } else{h}
    if(m<10){
        m = 0 +""+ m
    } else{m}
    if(s<10){
        s = 0 +""+ s
    } else{s}

    var time = h+" : "+m+" : "+s+" "+session;

    document.getElementById("Time").innerText = time 

    
}
var btn1 = document.getElementById("start");
var btn2 = document.getElementById("stop");

function start(){
    timeInterval = setInterval(showTime,1000)
    btn1.disabled = true;
    btn2.disabled = false;
}
function stop(){
    clearInterval(timeInterval);
    btn1.disabled = false;
    btn2.disabled = true;
}
showTime();