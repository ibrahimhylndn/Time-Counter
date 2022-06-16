var as=0;
var b=0
var cc;

function bar(){
    document.getElementById("p").innerHTML=as++ 
    console.log("hello"+cc)
}

function timerStarter(){
    if(b===1){
   }else{
        cc =setInterval(bar,1000)
        console.log(cc)
        b=1
    }
}
function timerStopper(){

    clearInterval(cc)
    console.log(clearInterval(cc))
      console.log(cc)
      b=0
    
}

function timerReset(){
    as=0
    document.getElementById("p").innerHTML=as
}
