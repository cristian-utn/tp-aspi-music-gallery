import {guardaDatos,getDatos, checkExistLocalStorage} from './DB.js';
import { buscarUsuario } from './login.js';
checkExistLocalStorage();
let form = document.getElementById("form_inicio_sesion");
let datos=getDatos();
// hasOwnProperty
// localStorage.clear();

function onFormSubmit(e){
    e.preventDefault();
    console.log("tocaodo");
    let {usuario,clave}=Object.fromEntries(new FormData(e.target))
    // busca usuario
    let usuarioBuscado=buscarUsuario(usuario,datos.usuarios);
    console.log("usuarioBuscado: ", usuarioBuscado);
    if(!!usuarioBuscado){
        if(usuarioBuscado.clave==clave){
            datos.usuario=usuarioBuscado;
            guardaDatos(datos);
            window.location = "/pantalla-principal.html";
        } console.log("clave incorrecta");
    }else console.log("usuario no encontrado");
}
// checkSession(usuario);
form.addEventListener("submit", onFormSubmit);
