// console.log(JSON.parse(localStorage.getItem("usuarios")));
// console.log(typeof localStorage.getItem("usuarios"));
// localStorage.clear();
export default function checkSession(datos){
    if (localStorage.getItem("usuarios") ===null){
        console.log("no hay usuarios");
        localStorage.setItem("usuarios",JSON.stringify({usuarios:[]}));
    }
    else{
        console.log("hay usuarios");
    }
    // console.log(datos.hasOwnProperty("usuario"));
    // console.log(datos.hasOwnProperty("usuarios"));
    if(datos.hasOwnProperty("usuario")){
        console.log("si");
    }
    else{
        console.log("no");
    }
}