function change(){
    var number = document.getElementsByClassName("number");
    var img = document.getElementById("img");
    var widht=number[0].value;
    var height= number[1].value;
    img.style.width=`${widht}px`;
    img.style.height=`${height}px`;
}