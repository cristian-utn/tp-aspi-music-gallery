// import { guardaDatos } from "../DB

const e_img=document.getElementById("e_img");
const e_estrella=document.getElementById("e_estrella");
const e_cancion=document.getElementById("e_cancion");
const e_autor=document.getElementById("e_autor");
const e_audio=document.getElementById("e_audio");
export function setPlayer(cancion, album,datos,lista_canciones){
    e_img.src=lista_canciones[album].canciones[cancion].img;
    console.log("datos que recibe set player");
    console.log(datos);
    console.log(lista_canciones);
    if(datos.canciones_favoritas.hasOwnProperty(album+"-"+cancion))e_estrella.classList.add("star_selected");
    else e_estrella.classList.remove("star_selected");
    e_cancion.innerText=lista_canciones[album].canciones[cancion].nombre;
    e_autor.innerText=lista_canciones[album].canciones[cancion].album;
    e_audio.src=""+lista_canciones[album].canciones[cancion].audio;
    
}
export function checkPlayer(datos, lista_canciones){
    if(datos.musica_actual.hasOwnProperty("album")&&datos.musica_actual.hasOwnProperty("cancion")){
        setPlayer(datos.musica_actual.cancion,datos.musica_actual.album,datos,lista_canciones);
    }else{
        let album=Object.keys(lista_canciones)[0];
        let cancion=Object.keys(lista_canciones[album].canciones)[0];
        console.log("busca musica para convertirla en actual");
        setPlayer(cancion, album, datos, lista_canciones);
    }
}