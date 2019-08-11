function change(){
    var number = document.getElementsByClassName("number");
    var img = document.getElementById("img");
    var widht=number[0].value;
    var height= number[1].value;
    var sImg = img.height;
    var sImgw = img.width;
    if(widht==""){
        img.style.width=`${sImgw}px`;
    }
    else{
        img.style.width=`${widht}px`;
    }

    if(height==""){
        img.style.height=`${sImg}px`;
    }
    else{
        img.style.height=`${height}px`;
    }
}