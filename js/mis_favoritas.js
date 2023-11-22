import { checkExistLocalStorage, getDatos, getListaAlbums, guardaDatos } from "./DB.js";
import { checkPlayer, setPlayer } from "./modules/set_music.js";
checkExistLocalStorage();
let datos=getDatos();
let datos_lista_albums=getListaAlbums();
if(datos.usuario==undefined||datos.usuario==null)window.location = "/";
let nombre_usuario=document.getElementById("nombre_usuario");
let btn_cerrar_sesion=document.getElementById("btn_cerrar_sesion");
let e_lista_canciones=document.getElementById("lista_canciones");
let titulos_container=document.querySelector(".titulos_container");
nombre_usuario.innerText=datos.usuario;
btn_cerrar_sesion.addEventListener("click",()=>{
    datos.usuario=null;
    guardaDatos(datos);
});
console.log(Object.keys(datos_lista_albums).length);
const e_item=(foto,album,clave_album,color)=>{// album = cancion / clave_album = album
    // contenedor
    // console.log(color);
    let elemento=document.createElement("tr");
    elemento.className="contenedor";
    let valor='style="color: var(--primary-color);"';
    // ((datos.usuarios[datos.usuario].musica_actual.album==clave_album&&datos.usuarios[datos.usuario].musica_actual.cancion==album)?valor:'')
    if((datos.usuarios[datos.usuario].musica_actual.album==clave_album&&datos.usuarios[datos.usuario].musica_actual.cancion==album))console.log("cierto es");
    else valor='';
    elemento.innerHTML=`
        <td>
            <a href="musica-sonando.html?${"clave_album="+clave_album+"&clave="+album}">
                <i class="fa-solid fa-play" ${valor}></i>
            </a>
        </td>
        <td>
        <span>${album}</span>
        <span class="star str_audio ${datos.usuarios[datos.usuario].canciones_favoritas.hasOwnProperty(clave_album+"-"+album)?"star_selected":""}"></span>
        </td>
        <td>
        <span>${clave_album}</span>
        <span class="star str_album ${datos.usuarios[datos.usuario].albums_favoritos.hasOwnProperty(clave_album)?"star_selected":""}"></span>
        </td>
        <td>3:00</td>
        <td>3500</td>
    `;
    return elemento;
}
function draw(){
    e_lista_canciones.innerHTML="";
    let cont=0;
    Object.keys(datos_lista_albums).forEach((clave_album)=>{
        // console.log(datos_lista_albums[clave_album].canciones);
        Object.keys(datos_lista_albums[clave_album].canciones).forEach((clave)=>{
            if(datos.usuarios[datos.usuario].albums_favoritos.hasOwnProperty(clave_album)||datos.usuarios[datos.usuario].canciones_favoritas.hasOwnProperty(clave_album+"-"+clave)){
                e_lista_canciones.appendChild(e_item(datos_lista_albums[clave_album].canciones[clave].img,clave,clave_album,datos_lista_albums[clave_album].canciones[clave].bg));
                cont=cont+1;
            }
        });
    });
    if(cont<11)titulos_container.style.paddingRight="0";
}
draw();
e_lista_canciones.addEventListener("click",(e)=>{
    e.preventDefault();
    if(e.target.classList.contains("str_album")&&e.target.tagName=="SPAN"){
        // canciones_favoritas
        e.target.classList.toggle("star_selected");
        if(e.target.classList.contains("star_selected"))
        datos.usuarios[datos.usuario].albums_favoritos[e.target.parentNode.children[0].innerText]=true;
        else delete datos.usuarios[datos.usuario].albums_favoritos[e.target.parentNode.children[0].innerText];
        guardaDatos(datos);
        draw();
    }
    if(e.target.classList.contains("str_audio")&&e.target.tagName=="SPAN"){
        // canciones_favoritas
        e.target.classList.toggle("star_selected");
        console.log(e.target.parentNode.children[0].innerText);
        console.log(e.target.parentNode.parentNode);
        console.log(e.target.parentNode.parentNode.children[2].children[0].innerText);
        if(e.target.classList.contains("star_selected"))
        // datos.canciones_favoritas[e.target.parentNode.parentNode.children[2].children[0].innerText+"-"+e.target.parentNode.children[0].innerText]=true;
        datos.usuarios[datos.usuario].canciones_favoritas[e.target.parentNode.parentNode.children[2].children[0].innerText+"-"+e.target.parentNode.children[0].innerText]=true;
        else delete datos.usuarios[datos.usuario].canciones_favoritas[e.target.parentNode.parentNode.children[2].children[0].innerText+"-"+e.target.parentNode.children[0].innerText];
        guardaDatos(datos);
        draw();
    }
    if(e.target.classList.contains("fa-play")&&e.target.tagName=="I"){
        console.log("playing");
        // e.target.style.color="pink";
        const cancion=e.target.parentNode.parentNode.parentNode.children[1].children[0].innerText;
        const album=e.target.parentNode.parentNode.parentNode.children[2].children[0].innerText;
        // console.log(e.target.parentNode.parentNode.parentNode.parentNode);
        console.log("cantidad de elemntos: ",e.target.parentNode.parentNode.parentNode.parentNode.childElementCount);
        for (let i = 0; i < e.target.parentNode.parentNode.parentNode.parentNode.childElementCount; i++) {
            // e.target.parentNode.parentNode.parentNode.parentNode.children[i];
            e.target.parentNode.parentNode.parentNode.parentNode.children[i].children[0].children[0].children[0].style.color="white"
            // console.log(e.target.parentNode.parentNode.parentNode.parentNode.children[i].children[0].children[0].children[0]);
        }
        e.target.style.color="var(--primary-color)";
        setPlayer(cancion,album,datos.usuarios[datos.usuario],datos_lista_albums);
        datos.usuarios[datos.usuario].musica_actual.cancion=cancion;
        datos.usuarios[datos.usuario].musica_actual.album=album;
        guardaDatos(datos);
    }
    // if(e.target.className=="star"&&e.target.tagName=="SPAN")console.log(e.target.parentNode);
});
checkPlayer(datos.usuarios[datos.usuario],datos_lista_albums);