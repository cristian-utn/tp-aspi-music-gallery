import { checkExistLocalStorage, getDatos, getListaAlbums, guardaDatos } from "./DB.js";
import { checkPlayer, setPlayer } from "./modules/set_music.js";
checkExistLocalStorage();
let datos=getDatos();
let datos_lista_albums=getListaAlbums();
if(datos.usuario==undefined||datos.usuario==null)window.location = "/";
let nombre_usuario=document.getElementById("nombre_usuario");
let btn_cerrar_sesion=document.getElementById("btn_cerrar_sesion");
let e_lista_canciones=document.getElementById("lista_canciones");
let e_campo_buscar=document.getElementById("campo_buscar");
nombre_usuario.innerText=datos.usuario;
btn_cerrar_sesion.addEventListener("click",()=>{
    datos.usuario=null;
    guardaDatos(datos);
});
console.log(Object.keys(datos_lista_albums).length);
const e_item=(foto,album,clave_album,color)=>{
    // contenedor
    console.log(color);
    let elemento=document.createElement("div");
    elemento.className="contenedor";
    elemento.innerHTML=`
        <a href="musica-sonando.html?${"clave_album="+clave_album+"&clave="+album}"><img src="${foto}" alt="album" class="foto"></a>
        <div style="background-color: ${color}" class="img_description_cancion">${album}</div>
        <div class="img_description">${clave_album}</div>
        <span class="star ${datos.usuarios[datos.usuario].canciones_favoritas.hasOwnProperty(clave_album+"-"+album)?"star_selected":""}"></span>
    `;
    return elemento;
}
function draw(){
    e_lista_canciones.innerHTML="";
    Object.keys(datos_lista_albums).forEach((clave_album)=>{
        // console.log(datos_lista_albums[clave_album].canciones);
        Object.keys(datos_lista_albums[clave_album].canciones).forEach((clave)=>{
            const palabras_buscadas=(e_campo_buscar.value).toLowerCase().trim().split(" ");// agregado recien para buscar 1 busqueda extra por cada espacio
            let encontrado_antes=true;
            for (let g = 0; g < palabras_buscadas.length; g++)
            if((clave+ " " +clave_album).toLowerCase().indexOf(palabras_buscadas[g])!=-1)encontrado_antes=true&&encontrado_antes;
            else encontrado_antes=false;
            if(encontrado_antes)e_lista_canciones.appendChild(e_item(datos_lista_albums[clave_album].canciones[clave].img,clave, clave_album, datos_lista_albums[clave_album].canciones[clave].bg));
        });
    });
}
draw();
e_lista_canciones.addEventListener("click", (e)=>{
    e.preventDefault();
    if(e.target.classList.contains("star")&&e.target.tagName=="SPAN"){
        // canciones_favoritas
        e.target.classList.toggle("star_selected");
        if(e.target.classList.contains("star_selected"))
        // datos.canciones_favoritas[e.target.parentNode.children[2].innerText+"-"+e.target.parentNode.children[1].innerText]=true;
        datos.usuarios[datos.usuario].canciones_favoritas[e.target.parentNode.children[2].innerText+"-"+e.target.parentNode.children[1].innerText]=true;
        else delete datos.usuarios[datos.usuario].canciones_favoritas[e.target.parentNode.children[2].innerText+"-"+e.target.parentNode.children[1].innerText];
        guardaDatos(datos);
    };
    if(e.target.tagName=="IMG"){
        // console.log(e.target.parentNode.parentNode.children[0].children[0].src);
        // console.log(e.target.parentNode.parentNode.children[1].innerText);//cancion
        // console.log(e.target.parentNode.parentNode.children[2].innerText);//album
        // console.log(e.target.parentNode.parentNode);
        // setPlayer(e.target.parentNode.parentNode.children[1].innerText,e.target.parentNode.parentNode.children[2].innerText,datos,datos_lista_albums);
        setPlayer(e.target.parentNode.parentNode.children[1].innerText,e.target.parentNode.parentNode.children[2].innerText,datos.usuarios[datos.usuario],datos_lista_albums);
        datos.usuarios[datos.usuario].musica_actual["album"]=e.target.parentNode.parentNode.children[2].innerText;
        datos.usuarios[datos.usuario].musica_actual["cancion"]=e.target.parentNode.parentNode.children[1].innerText;
        guardaDatos(datos);
    }
    // if(e.target.className=="star"&&e.target.tagName=="SPAN")console.log(e.target.parentNode);
});
checkPlayer(datos.usuarios[datos.usuario],datos_lista_albums);
e_campo_buscar.addEventListener("keyup",draw);