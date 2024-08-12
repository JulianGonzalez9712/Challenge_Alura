const text__area =  document.getElementById("textarea__contenedor__texto__a__encriptar");
const text__area_mensaje = document.getElementById("textarea__contenedor__texto__encriptado");


// Llaves de encripcion:

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function boton__encriptar(){

    const texto__encriptado = encriptar(text__area.value);

    if(text__area.value != ""){
        text__area_mensaje.value = texto__encriptado;
        text__area.value = "";
        document.getElementById("boton__copiar").style.display = "initial";
        text__area_mensaje.style.backgroundImage ="none";
    }
    else{
        document.getElementById("boton__copiar").style.display = "none";
        text__area_mensaje.value = "";

    }

}

//función para desencriptad

function boton__desencriptar(){

    const texto__desencriptado = desencriptar(text__area.value); 

    if(text__area.value != ""){ //validacion si el text area esta vacio
        text__area_mensaje.value = texto__desencriptado;
        text__area.value = ""; //se limpia el text area
        document.getElementById("boton__copiar").style.display = "initial"; //aparece el boton para copiar
        text__area_mensaje.style.backgroundImage ="none";
    }
    else{
        document.getElementById("boton__copiar").style.display = "none";
        text__area_mensaje.value = "";
   
    }

}

function encriptar(palabrasEncriptadas){ //funcion para encriptar tomando parametro del text area inicial


    let llaves = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];  //llaves para realizar la encripcion


    palabrasEncriptadas = palabrasEncriptadas.toLowerCase(); //se convierten todas las letras a minuscula

    for(let i = 0; i < llaves.length; i++){
        
        if(palabrasEncriptadas.includes(llaves[i][0])){

            palabrasEncriptadas = palabrasEncriptadas.replaceAll(llaves[i][0],llaves[i][1]) //se reaplaza las letras por las llaves

        }    
        

    }
    return palabrasEncriptadas;

}

function desencriptar(palabrasDesencriptadas){

    let llaves2 = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]]; //llaves de desencripcion, solo cambia el valor inicial por el final  


    palabrasDesencriptadas = palabrasDesencriptadas.toLowerCase();

    for(let i = 0; i < llaves2.length; i++){
        
        if(palabrasDesencriptadas.includes(llaves2[i][0])){

            palabrasDesencriptadas = palabrasDesencriptadas.replaceAll(llaves2[i][0],llaves2[i][1])

        }    
        

    }
    return palabrasDesencriptadas;

}

function Copiar(){ //funcion para copiar, utilizando execCommand

    text__area_mensaje.select();
    document.execCommand('copy');
    
}