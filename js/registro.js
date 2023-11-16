console.log("importare registro");
import { getDatos } from "./DB.js";
// import fun from "./parte.js"
// fun();
import checkSession from "./checkInicio1.js";
let datos=getDatos();
console.log("no funciona");
const form_registro=document.getElementById("form_registro");
console.log(datos);
checkSession(datos);
form_registro.addEventListener("submit",(e)=>{
    e.preventDefault();
    // const {contrasenia,repetir_contrasenia}=Object.fromEntries(new FormData(e.target))
    const valores=Object.fromEntries(new FormData(e.target))
    if(valores.contrasenia==valores.repetir_contrasenia){
        console.log("si es igual la clave");
    }
    if(!datos.usuarios.some((d)=>{
        console.log("recorro: ",d);
        return d.nombre == valores.nombre;  
    })){
        console.log("no existe el nombre");
        datos.usuarios.push(valores)
    }
    else{
        console.log("si existe el nombre -> no copiare");
    }
    console.log(datos);
});