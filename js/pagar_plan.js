import { checkExistLocalStorage, getDatos, guardaDatos } from "./DB.js";

checkExistLocalStorage();
let datos=getDatos();
if(datos.usuario==undefined||datos.usuario==null)window.location = "/";
const plan=document.getElementById("plan");
// const btn_avanzar=document.getElementById("btn_avanzar");
const form=document.getElementById("form_pagar");
const nombre_usuario=document.getElementById("nombre_usuario");
const btn_cerrar_sesion=document.getElementById("btn_cerrar_sesion");
nombre_usuario.innerText=datos.usuario;
const urlParams = new URLSearchParams(window.location.search);
plan.innerText=urlParams.get('plan').replace("_"," ");
btn_cerrar_sesion.addEventListener("click",()=>{
    datos.usuario=null;
    guardaDatos(datos);
});
form.addEventListener("submit",(e)=>{
    // e.preventDefault();
    const valores=Object.fromEntries(new FormData(e.target))
    // if(!valores.hasOwnProperty("plan"))alert("debe seleccionar un plan");
    // else{
    //     window.location = "/pagar-plan.html?plan="+valores.plan;
    //     // valores.plan;
    // }
    datos.usuarios[datos.usuario]["plan"]=plan.innerText;
    guardaDatos(datos);
    // console.log(valores);
});