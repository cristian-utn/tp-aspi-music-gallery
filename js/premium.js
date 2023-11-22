import { checkExistLocalStorage, getDatos } from "./DB.js";

checkExistLocalStorage();
let datos=getDatos();
if(datos.usuario==undefined||datos.usuario==null)window.location = "/";
const form=document.getElementById("form");
const nombre_usuario=document.getElementById("nombre_usuario");
let btn_cerrar_sesion=document.getElementById("btn_cerrar_sesion");
nombre_usuario.innerText=datos.usuario;
btn_cerrar_sesion.addEventListener("click",()=>{
    datos.usuario=null;
    guardaDatos(datos);
});
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const valores=Object.fromEntries(new FormData(e.target))
    if(!valores.hasOwnProperty("plan"))alert("debe seleccionar un plan");
    else{
        window.location = "/pagar-plan.html?plan="+valores.plan;
        // valores.plan;
    }
    console.log(valores);
});