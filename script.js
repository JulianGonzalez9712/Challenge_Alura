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
        text__area_mensaje.style.backgroundImage = "url('/Challenge_Encriptador/assets/Imagen_inicial.png')"; 
    }

}

function boton__desencriptar(){

    const texto__desencriptado = desencriptar(text__area.value);

    if(text__area.value != ""){
        text__area_mensaje.value = texto__desencriptado;
        text__area.value = "";
        document.getElementById("boton__copiar").style.display = "initial";
        text__area_mensaje.style.backgroundImage ="none";
    }
    else{
        document.getElementById("boton__copiar").style.display = "none";
        text__area_mensaje.value = "";
        text__area_mensaje.style.backgroundImage = "url('/Challenge_Encriptador/assets/Imagen_inicial.png')"; 
    }

}

function encriptar(palabrasEncriptadas){


    let llaves = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];  


    palabrasEncriptadas = palabrasEncriptadas.toLowerCase();

    for(let i = 0; i < llaves.length; i++){
        
        if(palabrasEncriptadas.includes(llaves[i][0])){

            palabrasEncriptadas = palabrasEncriptadas.replaceAll(llaves[i][0],llaves[i][1])

        }    
        

    }
    return palabrasEncriptadas;

}

function desencriptar(palabrasDesencriptadas){

    let llaves2 = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];  


    palabrasDesencriptadas = palabrasDesencriptadas.toLowerCase();

    for(let i = 0; i < llaves2.length; i++){
        
        if(palabrasDesencriptadas.includes(llaves2[i][0])){

            palabrasDesencriptadas = palabrasDesencriptadas.replaceAll(llaves2[i][0],llaves2[i][1])

        }    
        

    }
    return palabrasDesencriptadas;

}

function Copiar(){

    text__area_mensaje.select();
    document.execCommand('copy');
    alert("Texto copiado");
}