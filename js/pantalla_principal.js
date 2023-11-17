import { checkExistLocalStorage, getDatos, getListaAlbums, guardaDatos } from "./DB.js";
import { checkPlayer } from "./modules/set_music.js";
checkExistLocalStorage();
let datos=getDatos();
let datos_lista_albums=getListaAlbums();
if(datos.usuario==undefined||datos.usuario==null)window.location = "/";
let nombre_usuario=document.getElementById("nombre_usuario");
let btn_cerrar_sesion=document.getElementById("btn_cerrar_sesion");
let e_lista_albumnes=document.getElementById("lista_albumnes");
nombre_usuario.innerText=datos.usuario.usuario;
btn_cerrar_sesion.addEventListener("click",()=>{
    datos.usuario=null;
    guardaDatos(datos);
});
console.log(Object.keys(datos_lista_albums).length);
const e_item=(foto,album)=>{
    // contenedor
    let elemento=document.createElement("div");
    elemento.className="contenedor";
    elemento.innerHTML=`
        <a href="musica-sonando.html"><img src="${foto}" alt="album" class="foto"></a>
        <div class="img_description">${album}</div>
        <span class="star ${datos.albums_favoritos.hasOwnProperty(album)?"star_selected":""}"></span>
    `;
    return elemento;
}
e_lista_albumnes.innerHTML="";
Object.keys(datos_lista_albums).forEach((clave)=>{
    e_lista_albumnes.appendChild(e_item(datos_lista_albums[clave].img,clave));
});
e_lista_albumnes.addEventListener("click",(e)=>{
    if(e.target.classList.contains("star")&&e.target.tagName=="SPAN"){
        let album_a_favoritos=e.target.parentNode.children[1].innerText
        // albums_favoritos
        e.target.classList.toggle("star_selected");
        if(e.target.classList.contains("star_selected"))
        datos.albums_favoritos[e.target.parentNode.children[1].innerText]=true;
        else delete datos.albums_favoritos[e.target.parentNode.children[1].innerText];
        guardaDatos(datos);
        // e.target.classList.add("star_selected");
    };
    // if(e.target.className=="star"&&e.target.tagName=="SPAN")console.log(e.target.parentNode);
});
checkPlayer(datos,datos_lista_albums);