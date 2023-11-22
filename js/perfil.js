import { checkExistLocalStorage, getDatos, guardaDatos } from "./DB.js";
import { siExisteUsuario } from "./login.js";

console.log("import");
checkExistLocalStorage();
let datos=getDatos();
if(datos.usuario==undefined||datos.usuario==null)window.location = "/";
const nombre_usuario=document.getElementById("nombre_usuario");
let btn_cerrar_sesion=document.getElementById("btn_cerrar_sesion");
const e_usuario=document.getElementById("usuario");
const e_form_perfil=document.getElementById("form_perfil");
nombre_usuario.innerText=datos.usuario;
const clave=document.getElementById("clave");
const repetir_clave=document.getElementById("repetir_clave");
const fecha_nacimiento=document.getElementById("fecha_nacimiento");
const email=document.getElementById("email");
clave.value=datos.usuarios[datos.usuario].clave;
repetir_clave.value=datos.usuarios[datos.usuario].repetir_clave;
fecha_nacimiento.value=datos.usuarios[datos.usuario].fecha_nacimiento;
email.value=datos.usuarios[datos.usuario].email;
e_usuario.value=datos.usuarios[datos.usuario].usuario;
btn_cerrar_sesion.addEventListener("click",()=>{
    datos.usuario=null;
    guardaDatos(datos);
});

const btn_eliminar=document.getElementById("btn_eliminar");
btn_eliminar.addEventListener("click",(e)=>{
    // Object.keys();
    e.preventDefault()  
    // for (let i = 0; i < datos.usuarios.length; i++) {
    //     // if(datos.usuario.nombre==e_usuario){
    //     if(datos.usuarios[i].usuario==e_usuario.value){
    //         datos.usuarios.splice(i,1);
    //         datos.usuario=null;
    //         guardaDatos(datos);
    //         alert("usuario: "+e_usuario.value+"eliminado correctamente");
    //         window.location.reload();
    //     }
    // }
    if(datos.usuario==e_usuario.value){
        delete datos.usuarios[datos.usuario];
        datos.usuario=null;
        guardaDatos(datos);
        window.location.reload();
    }

});
e_form_perfil.addEventListener("submit",(e)=>{
    e.preventDefault();
    const valores=Object.fromEntries(new FormData(e.target))
    if(valores.clave==valores.repetir_clave){
        console.log("si es igual la clave");
        let fecha=getFechaFromString(valores.fecha_nacimiento);
        if(siExisteUsuario(valores.usuario,datos.usuarios)){
            if(fecha.getTime()>new Date().getTime())alert("fecha superior a la actual");
            else{
                // for (let i = 0; i < datos.usuarios.length; i++) {
                    // if(datos.usuario.nombre==e_usuario){
                    // if(datos.usuarios[i].usuario==e_usuario.value){
                        datos.usuarios[datos.usuario].clave=valores.clave;
                        datos.usuarios[datos.usuario].repetir_clave=valores.repetir_clave;
                        datos.usuarios[datos.usuario].fecha_nacimiento=valores.fecha_nacimiento;
                        datos.usuarios[datos.usuario].email=valores.email;
                        // datos.usuario=datos.usuarios[i];
                        guardaDatos(datos);
                        console.log("modificado correctamente");
                        // alert("usuario: "+e_usuario.value+"eliminado correctamente");
                        // window.location.reload();
    
                    // }
                    
                // }
                // guardaDatos(datos);
            }
            // console.log(new Date(valores.fecha_nacimiento));
        }
    }else alert("la contraseña debe ser igual");
    
});
function getFechaFromString(fecha_input){
    const nueva_fecha=new Date();
    let [anio,mes,dia]=fecha_input.split("-");
    nueva_fecha.setDate(Number(dia));
    nueva_fecha.setMonth(Number(mes));
    nueva_fecha.setFullYear(Number(anio));
    // console.log(nueva_fecha);
    // console.log("dia: " + dia+" mes: " + mes + " año: " + anio);
    return nueva_fecha;
};