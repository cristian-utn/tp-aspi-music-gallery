// console.log("ejecuto DB"); // si se ejecuta
// console.log(typeof localStorage.getItem("usuarios"));
// console.log(JSON.parse(localStorage.getItem("usuarios")));
export function guardaDatos(diccionario){
    localStorage.setItem("usuarios",JSON.stringify(diccionario));
}
export function getDatos(){
    return JSON.parse(localStorage.getItem("usuarios"));
}
export function checkExistLocalStorage(){
    if (localStorage.getItem("usuarios") ===null){
        console.log("no hay usuarios");
        guardaDatos({usuarios:[],usuario:null});
    }
    else{
        console.log("hay usuarios");
    }
}