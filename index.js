function giveWidth(widht,sImgw){
    if(widht==""){
        img.style.width=`${sImgw}px`;
    }
    else{
        img.style.width=`${widht}px`;
    }
}
function giveHeight(height,sImg){
    if(height==""){
        img.style.height=`${sImg}px`;
    }
    else{
        img.style.height=`${height}px`;
    }
}
function change(){
    var number = document.getElementsByClassName("number");
    var img = document.getElementById("img");
    var widht=number[0].value;
    var height= number[1].value;
    var sImg = img.height;
    var sImgw = img.width;
    giveHeight(height,sImg);
    giveWidth(widht,sImgw);
}
function capturar(e){
    var evento = e || window.event;
    var enter = evento.keyCode;
    if(enter == 13){
        change();
    }
}
window.addEventListener("load",function(){
    document.addEventListener("keyup",capturar);
})