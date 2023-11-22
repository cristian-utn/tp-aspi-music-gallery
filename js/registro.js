import { getDatos, guardaDatos } from "./DB.js";
// import fun from "./parte.js"
// fun();
import checkSession from "./checkInicio1.js";
import { siExisteUsuario } from "./login.js";
let datos=getDatos();
const form_registro=document.getElementById("form_registro");
// checkSession(datos);
form_registro.addEventListener("submit",(e)=>{
    e.preventDefault();
    // const {contrasenia,repetir_contrasenia}=Object.fromEntries(new FormData(e.target))
    const valores=Object.fromEntries(new FormData(e.target))
    if(valores.clave==valores.repetir_clave){
        console.log("si es igual la clave");
        let fecha=getFechaFromString(valores.fecha_nacimiento);
        if(siExisteUsuario(valores.usuario,datos.usuarios))alert("el usario ya existe");
        else{// si no existe usuario
            if(fecha.getTime()>new Date().getTime())alert("fecha superior a la actual");
            else{
                console.log("registrado correctamente");
                alert("registrado con exito");
                valores["albums_favoritos"]={};
                valores["canciones_favoritas"]={};
                valores["musica_actual"]={};
                datos.usuarios[valores.usuario]=(valores);
                guardaDatos(datos);
                window.location = "/";
            }
        }
        // console.log(new Date(valores.fecha_nacimiento));
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