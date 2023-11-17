// import { guardaDatos } from "../DB

const e_img=document.getElementById("e_img");
const e_estrella=document.getElementById("e_estrella");
const e_cancion=document.getElementById("e_cancion");
const e_autor=document.getElementById("e_autor");
const e_audio=document.getElementById("e_audio");
export function setPlayer(cancion,album,datos,musica_favorita){
    e_img.src=musica_favorita[album].canciones[cancion].img;
    if(datos.canciones_favoritas.hasOwnProperty(album+"-"+cancion))e_estrella.classList.add("star_selected");
    else e_estrella.classList.remove("star_selected");
    e_cancion.innerText=musica_favorita[album].canciones[cancion].nombre;
    e_autor.innerText=musica_favorita[album].canciones[cancion].album;
    e_audio.src=""+musica_favorita[album].canciones[cancion].audio;
    
}
export function checkPlayer(datos,musica_favorita){
    if(datos.musica_actual.hasOwnProperty("album")&&datos.musica_actual.hasOwnProperty("cancion")){
        setPlayer(datos.musica_actual.cancion,datos.musica_actual.album,datos,musica_favorita);
    }
}