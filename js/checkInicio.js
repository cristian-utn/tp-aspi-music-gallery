import {guardaDatos,getDatos, checkExistLocalStorage} from './DB.js';
checkExistLocalStorage();
let form = document.getElementById("form_inicio_sesion");
let datos=getDatos();
// hasOwnProperty
// localStorage.clear();
function checkSession(usuario){
    console.log("hay usuario"+datos.hasOwnProperty("usuario"));
    console.log("hay usuarios"+datos.hasOwnProperty("usuarios"));
    if(datos.hasOwnProperty(usuario)){
        console.log("si");
    }
    else{
        console.log("no");
    }
}
function onFormSubmit(e){
    e.preventDefault();
    console.log("tocaodo");
    let {usuario,clave}=Object.fromEntries(new FormData(e.target))
    // busca usuario
    let encontrado=false;
    for (let i = 0; i < datos.usuarios.length; i++) {
        if(datos.usuarios[i].usuario==usuario){
            if(datos.usuarios[i].clave=clave){
                datos.usuario=datos.usuarios[i];
                encontrado=true;
                window.location = "/inicio.html";
            }
        }
    }
    if(encontrado)console.log("inicio con exito");
    else console.log("no inicio con exito");
    console.log("Object.fromEntries(new FormData(e.target))");
    console.log(Object.fromEntries(new FormData(e.target)));
}
// checkSession(usuario);
form.addEventListener("submit", onFormSubmit);
