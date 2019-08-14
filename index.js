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
/*------MOSTRANDO IMAGEN EN LA WEB LOCALMENTE-----*/
/*Insertar la imagen en la web */
function insertar(e){
    var resultado = e.target.result;
    var imagen = document.getElementById('imagen');
    imagen.innerHTML = "<img src='"+resultado+"' id='img' class='img'>";

}
/*Verificar si se esta subiendo una imagen */
function leer(e){
    var archivo = e.target.files;
    var archivos = archivo[0];
    console.log(archivos);
    if(!archivos.type.match(/image/)){
        alert("Inserte una imagen");
    }
    else
    {
        var lector = new FileReader();
        lector.readAsDataURL(archivos);
        lector.addEventListener('load',insertar);
    }
}
//Seleccionar archivo
function comenzar(){
    var archivo = document.getElementById('file');
    archivo.addEventListener('change',leer);
}
window.addEventListener('load',comenzar);
