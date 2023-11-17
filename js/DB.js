// console.log("ejecuto DB"); // si se ejecuta
// console.log(typeof localStorage.getItem("usuarios"));
// console.log(JSON.parse(localStorage.getItem("usuarios")));
export function guardaDatos(diccionario) {
    localStorage.setItem("usuarios", JSON.stringify(diccionario));
}
export function getDatos() {
    return JSON.parse(localStorage.getItem("usuarios"));
}
export function checkExistLocalStorage() {
    if (localStorage.getItem("usuarios") === null) {
        console.log("no hay usuarios");
        guardaDatos({ usuarios: [], usuario: null });
        alert("no existe usaurios. registrate");
        window.location = "/registro.html";
    }
    else {
        console.log("hay datos localStorage");
        let datos=getDatos();
        if(!datos.hasOwnProperty("albums_favoritos")){
            datos["albums_favoritos"]={};
            guardaDatos(datos);
        }
        if(!datos.hasOwnProperty("canciones_favoritas")){
            datos["canciones_favoritas"]={};
            guardaDatos(datos);
        }
        if(!datos.hasOwnProperty("musica_actual")){
            datos["musica_actual"]={};
            guardaDatos(datos);
        }
    }
}
export function getListaAlbums() {
    return {
        "album 1": {
            nombre: "album 1",
            img: "img/album1.jpg",
            canciones: {
                "cancion 1": {
                    nombre: "cancion 1",
                    img: "img/album1.jpg",
                    album: "album 1",
                    audio: "music/Billie Eilish - Ocean Eyes.mp3",
                    bg: "red"
                },
                "cancion 2": {
                    nombre: "cancion 2",
                    img: "img/album1.jpg",
                    album: "album 1",
                    audio: "music/Billie Eilish - my future.mp3",
                    bg: "blue"
                },
                "cancion 3": {
                    nombre: "cancion 3",
                    img: "img/album1.jpg",
                    album: "album 1",
                    audio: "music/Billie Eilish wish you were gay.mp3",
                    bg: "green"
                },
                "cancion 4": {
                    nombre: "cancion 4",
                    img: "img/album1.jpg",
                    album: "album 1",
                    audio: "music/pei2_2.0_b4_ml.mp3",
                    bg: "violet"
                },
            }
        },
        "album 2": {
            nombre: "album 2",
            img: "img/album2.jpg",
            canciones: {
                "cancion 1": {
                    nombre: "cancion 1",
                    img: "img/album2.jpg",
                    album: "album 2",
                    audio: "music/Billie Eilish - Ocean Eyes.mp3",
                    bg: "red"
                },
                "cancion 2": {
                    nombre: "cancion 2",
                    img: "img/album2.jpg",
                    album: "album 2",
                    audio: "music/Billie Eilish - my future.mp3",
                    bg: "blue"
                },
                "cancion 3": {
                    nombre: "cancion 3",
                    img: "img/album2.jpg",
                    album: "album 2",
                    audio: "music/Billie Eilish wish you were gay.mp3",
                    bg: "green"
                },
                "cancion 4": {
                    nombre: "cancion 4",
                    img: "img/album2.jpg",
                    album: "album 2",
                    audio: "music/pei2_2.0_b4_ml.mp3",
                    bg: "violet"
                },
            }
        },
        "album 3": {
            nombre: "album 3",
            img: "img/album3.jpg",
            canciones: {
                "cancion 1": {
                    nombre: "cancion 1",
                    img: "img/album3.jpg",
                    album: "album 3",
                    audio: "music/Billie Eilish - Ocean Eyes.mp3",
                    bg: "red"
                },
                "cancion 2": {
                    nombre: "cancion 2",
                    img: "img/album3.jpg",
                    album: "album 3",
                    audio: "music/Billie Eilish - my future.mp3",
                    bg: "blue"
                },
                "cancion 3": {
                    nombre: "cancion 3",
                    img: "img/album3.jpg",
                    album: "album 3",
                    audio: "music/Billie Eilish wish you were gay.mp3",
                    bg: "green"
                },
                "cancion 4": {
                    nombre: "cancion 4",
                    img: "img/album3.jpg",
                    album: "album 3",
                    audio: "music/pei2_2.0_b4_ml.mp3",
                    bg: "violet"
                },
            }
        },
        "album 4": {
            nombre: "album 4",
            img: "img/album4.jpg",
            canciones: {
                "cancion 1": {
                    nombre: "cancion 1",
                    img: "img/album4.jpg",
                    album: "album 4",
                    audio: "music/Billie Eilish - Ocean Eyes.mp3",
                    bg: "red"
                },
                "cancion 2": {
                    nombre: "cancion 2",
                    img: "img/album4.jpg",
                    album: "album 4",
                    audio: "music/Billie Eilish - my future.mp3",
                    bg: "blue"
                },
                "cancion 3": {
                    nombre: "cancion 3",
                    img: "img/album4.jpg",
                    album: "album 4",
                    audio: "music/Billie Eilish wish you were gay.mp3",
                    bg: "green"
                },
                "cancion 4": {
                    nombre: "cancion 4",
                    img: "img/album4.jpg",
                    album: "album 4",
                    audio: "music/pei2_2.0_b4_ml.mp3",
                    bg: "violet"
                },
            }
        },
        "album 5": {
            nombre: "album 5",
            img: "img/album5.jpg",
            canciones: {
                "cancion 1": {
                    nombre: "cancion 1",
                    img: "img/album5.jpg",
                    album: "album 5",
                    audio: "music/Billie Eilish - Ocean Eyes.mp3",
                    bg: "red"
                },
                "cancion 2": {
                    nombre: "cancion 2",
                    img: "img/album5.jpg",
                    album: "album 5",
                    audio: "music/Billie Eilish - my future.mp3",
                    bg: "blue"
                },
                "cancion 3": {
                    nombre: "cancion 3",
                    img: "img/album5.jpg",
                    album: "album 5",
                    audio: "music/Billie Eilish wish you were gay.mp3",
                    bg: "green"
                },
                "cancion 4": {
                    nombre: "cancion 4",
                    img: "img/album5.jpg",
                    album: "album 5",
                    audio: "music/pei2_2.0_b4_ml.mp3",
                    bg: "violet"
                },
            }
        },
        "album 6": {
            nombre: "album 6",
            img: "img/album6.jpg",
            canciones: {
                "cancion 1": {
                    nombre: "cancion 1",
                    img: "img/album6.jpg",
                    album: "album 6",
                    audio: "music/Billie Eilish - Ocean Eyes.mp3",
                    bg: "red"
                },
                "cancion 2": {
                    nombre: "cancion 2",
                    img: "img/album6.jpg",
                    album: "album 6",
                    audio: "music/Billie Eilish - my future.mp3",
                    bg: "blue"
                },
                "cancion 3": {
                    nombre: "cancion 3",
                    img: "img/album6.jpg",
                    album: "album 6",
                    audio: "music/Billie Eilish wish you were gay.mp3",
                    bg: "green"
                },
                "cancion 4": {
                    nombre: "cancion 4",
                    img: "img/album6.jpg",
                    album: "album 6",
                    audio: "music/pei2_2.0_b4_ml.mp3",
                    bg: "violet"
                },
            }
        },
        "album 7": {
            nombre: "album 7",
            img: "img/album7.jpg",
            canciones: {
                "cancion 1": {
                    nombre: "cancion 1",
                    img: "img/album7.jpg",
                    album: "album 7",
                    audio: "music/Billie Eilish - Ocean Eyes.mp3",
                    bg: "red"
                },
                "cancion 2": {
                    nombre: "cancion 2",
                    img: "img/album7.jpg",
                    album: "album 7",
                    audio: "music/Billie Eilish - my future.mp3",
                    bg: "blue"
                },
                "cancion 3": {
                    nombre: "cancion 3",
                    img: "img/album7.jpg",
                    album: "album 7",
                    audio: "music/Billie Eilish wish you were gay.mp3",
                    bg: "green"
                },
                "cancion 4": {
                    nombre: "cancion 4",
                    img: "img/album7.jpg",
                    album: "album 7",
                    audio: "music/pei2_2.0_b4_ml.mp3",
                    bg: "violet"
                },
            }
        },
        "album 8": {
            nombre: "album 8",
            img: "img/album8.jpg",
            canciones: {
                "cancion 1": {
                    nombre: "cancion 1",
                    img: "img/album8.jpg",
                    album: "album 8",
                    audio: "music/Billie Eilish - Ocean Eyes.mp3",
                    bg: "red"
                },
                "cancion 2": {
                    nombre: "cancion 2",
                    img: "img/album8.jpg",
                    album: "album 8",
                    audio: "music/Billie Eilish - my future.mp3",
                    bg: "blue"
                },
                "cancion 3": {
                    nombre: "cancion 3",
                    img: "img/album8.jpg",
                    album: "album 8",
                    audio: "music/Billie Eilish wish you were gay.mp3",
                    bg: "green"
                },
                "cancion 4": {
                    nombre: "cancion 4",
                    img: "img/album8.jpg",
                    album: "album 8",
                    audio: "music/pei2_2.0_b4_ml.mp3",
                    bg: "violet"
                },
            }
        },
        "album 9": {
            nombre: "album 9",
            img: "img/album9.jpg",
            canciones: {
                "cancion 1": {
                    nombre: "cancion 1",
                    img: "img/album9.jpg",
                    album: "album 9",
                    audio: "music/Billie Eilish - Ocean Eyes.mp3",
                    bg: "red"
                },
                "cancion 2": {
                    nombre: "cancion 2",
                    img: "img/album9.jpg",
                    album: "album 9",
                    audio: "music/Billie Eilish - my future.mp3",
                    bg: "blue"
                },
                "cancion 3": {
                    nombre: "cancion 3",
                    img: "img/album9.jpg",
                    album: "album 9",
                    audio: "music/Billie Eilish wish you were gay.mp3",
                    bg: "green"
                },
                "cancion 4": {
                    nombre: "cancion 4",
                    img: "img/album9.jpg",
                    album: "album 9",
                    audio: "music/pei2_2.0_b4_ml.mp3",
                    bg: "violet"
                },
            }
        },
        "album 10": {
            nombre: "album 10",
            img: "img/album10.jpg",
            canciones: {
                "cancion 1": {
                    nombre: "cancion 1",
                    img: "img/album10.jpg",
                    album: "album 10",
                    audio: "music/Billie Eilish - Ocean Eyes.mp3",
                    bg: "red"
                },
                "cancion 2": {
                    nombre: "cancion 2",
                    img: "img/album10.jpg",
                    album: "album 10",
                    audio: "music/Billie Eilish - my future.mp3",
                    bg: "blue"
                },
                "cancion 3": {
                    nombre: "cancion 3",
                    img: "img/album10.jpg",
                    album: "album 10",
                    audio: "music/Billie Eilish wish you were gay.mp3",
                    bg: "green"
                },
                "cancion 4": {
                    nombre: "cancion 4",
                    img: "img/album10.jpg",
                    album: "album 10",
                    audio: "music/pei2_2.0_b4_ml.mp3",
                    bg: "violet"
                },
            }
        },
        "album 11": {
            nombre: "album 11",
            img: "img/album11.jpg",
            canciones: {
                "cancion 1": {
                    nombre: "cancion 1",
                    img: "img/album11.jpg",
                    album: "album 11",
                    audio: "music/Billie Eilish - Ocean Eyes.mp3",
                    bg: "red"
                },
                "cancion 2": {
                    nombre: "cancion 2",
                    img: "img/album11.jpg",
                    album: "album 11",
                    audio: "music/Billie Eilish - my future.mp3",
                    bg: "blue"
                },
                "cancion 3": {
                    nombre: "cancion 3",
                    img: "img/album11.jpg",
                    album: "album 11",
                    audio: "music/Billie Eilish wish you were gay.mp3",
                    bg: "green"
                },
                "cancion 4": {
                    nombre: "cancion 4",
                    img: "img/album11.jpg",
                    album: "album 11",
                    audio: "music/pei2_2.0_b4_ml.mp3",
                    bg: "violet"
                },
            }
        },
        "album 12": {
            nombre: "album 12",
            img: "img/album12.jpg",
            canciones: {
                "cancion 1": {
                    nombre: "cancion 1",
                    img: "img/album12.jpg",
                    album: "album 12",
                    audio: "music/Billie Eilish - Ocean Eyes.mp3",
                    bg: "red"
                },
                "cancion 2": {
                    nombre: "cancion 2",
                    img: "img/album12.jpg",
                    album: "album 12",
                    audio: "music/Billie Eilish - my future.mp3",
                    bg: "blue"
                },
                "cancion 3": {
                    nombre: "cancion 3",
                    img: "img/album12.jpg",
                    album: "album 12",
                    audio: "music/Billie Eilish wish you were gay.mp3",
                    bg: "green"
                },
                "cancion 4": {
                    nombre: "cancion 4",
                    img: "img/album12.jpg",
                    album: "album 12",
                    audio: "music/pei2_2.0_b4_ml.mp3",
                    bg: "violet"
                },
            }
        },
        "album 13": {
            nombre: "album 13",
            img: "img/album13.jpg",
            canciones: {
                "cancion 1": {
                    nombre: "cancion 1",
                    img: "img/album13.jpg",
                    album: "album 13",
                    audio: "music/Billie Eilish - Ocean Eyes.mp3",
                    bg: "red"
                },
                "cancion 2": {
                    nombre: "cancion 2",
                    img: "img/album13.jpg",
                    album: "album 13",
                    audio: "music/Billie Eilish - my future.mp3",
                    bg: "blue"
                },
                "cancion 3": {
                    nombre: "cancion 3",
                    img: "img/album13.jpg",
                    album: "album 13",
                    audio: "music/Billie Eilish wish you were gay.mp3",
                    bg: "green"
                },
                "cancion 4": {
                    nombre: "cancion 4",
                    img: "img/album13.jpg",
                    album: "album 13",
                    audio: "music/pei2_2.0_b4_ml.mp3",
                    bg: "violet"
                },
            }
        },
        "album 14": {
            nombre: "album 14",
            img: "img/album14.jpg",
            canciones: {
                "cancion 1": {
                    nombre: "cancion 1",
                    img: "img/album14.jpg",
                    album: "album 14",
                    audio: "music/Billie Eilish - Ocean Eyes.mp3",
                    bg: "red"
                },
                "cancion 2": {
                    nombre: "cancion 2",
                    img: "img/album14.jpg",
                    album: "album 14",
                    audio: "music/Billie Eilish - my future.mp3",
                    bg: "blue"
                },
                "cancion 3": {
                    nombre: "cancion 3",
                    img: "img/album14.jpg",
                    album: "album 14",
                    audio: "music/Billie Eilish wish you were gay.mp3",
                    bg: "green"
                },
                "cancion 4": {
                    nombre: "cancion 4",
                    img: "img/album14.jpg",
                    album: "album 14",
                    audio: "music/pei2_2.0_b4_ml.mp3",
                    bg: "violet"
                },
            }
        },
        "album 15": {
            nombre: "album 15",
            img: "img/album15.jpg",
            canciones: {
                "cancion 1": {
                    nombre: "cancion 1",
                    img: "img/album15.jpg",
                    album: "album 15",
                    audio: "music/Billie Eilish - Ocean Eyes.mp3",
                    bg: "red"
                },
                "cancion 2": {
                    nombre: "cancion 2",
                    img: "img/album15.jpg",
                    album: "album 15",
                    audio: "music/Billie Eilish - my future.mp3",
                    bg: "blue"
                },
                "cancion 3": {
                    nombre: "cancion 3",
                    img: "img/album15.jpg",
                    album: "album 15",
                    audio: "music/Billie Eilish wish you were gay.mp3",
                    bg: "green"
                },
                "cancion 4": {
                    nombre: "cancion 4",
                    img: "img/album15.jpg",
                    album: "album 15",
                    audio: "music/pei2_2.0_b4_ml.mp3",
                    bg: "violet"
                },
            }
        },
        "album 16": {
            nombre: "album 16",
            img: "img/album16.jpg",
            canciones: {
                "cancion 1": {
                    nombre: "cancion 1",
                    img: "img/album16.jpg",
                    album: "album 16",
                    audio: "music/Billie Eilish - Ocean Eyes.mp3",
                    bg: "red"
                },
                "cancion 2": {
                    nombre: "cancion 2",
                    img: "img/album16.jpg",
                    album: "album 16",
                    audio: "music/Billie Eilish - my future.mp3",
                    bg: "blue"
                },
                "cancion 3": {
                    nombre: "cancion 3",
                    img: "img/album16.jpg",
                    album: "album 16",
                    audio: "music/Billie Eilish wish you were gay.mp3",
                    bg: "green"
                },
                "cancion 4": {
                    nombre: "cancion 4",
                    img: "img/album16.jpg",
                    album: "album 16",
                    audio: "music/pei2_2.0_b4_ml.mp3",
                    bg: "violet"
                },
            }
        },
        "album 17": {
            nombre: "album 17",
            img: "img/album17.jpg",
            canciones: {
                "cancion 1": {
                    nombre: "cancion 1",
                    img: "img/album17.jpg",
                    album: "album 17",
                    audio: "music/Billie Eilish - Ocean Eyes.mp3",
                    bg: "red"
                },
                "cancion 2": {
                    nombre: "cancion 2",
                    img: "img/album17.jpg",
                    album: "album 17",
                    audio: "music/Billie Eilish - my future.mp3",
                    bg: "blue"
                },
                "cancion 3": {
                    nombre: "cancion 3",
                    img: "img/album17.jpg",
                    album: "album 17",
                    audio: "music/Billie Eilish wish you were gay.mp3",
                    bg: "green"
                },
                "cancion 4": {
                    nombre: "cancion 4",
                    img: "img/album17.jpg",
                    album: "album 17",
                    audio: "music/pei2_2.0_b4_ml.mp3",
                    bg: "violet"
                },
            }
        },
        "album 18": {
            nombre: "album 18",
            img: "img/album18.jpg",
            canciones: {
                "cancion 1": {
                    nombre: "cancion 1",
                    img: "img/album18.jpg",
                    album: "album 18",
                    audio: "music/Billie Eilish - Ocean Eyes.mp3",
                    bg: "red"
                },
                "cancion 2": {
                    nombre: "cancion 2",
                    img: "img/album18.jpg",
                    album: "album 18",
                    audio: "music/Billie Eilish - my future.mp3",
                    bg: "blue"
                },
                "cancion 3": {
                    nombre: "cancion 3",
                    img: "img/album18.jpg",
                    album: "album 18",
                    audio: "music/Billie Eilish wish you were gay.mp3",
                    bg: "green"
                },
                "cancion 4": {
                    nombre: "cancion 4",
                    img: "img/album18.jpg",
                    album: "album 18",
                    audio: "music/pei2_2.0_b4_ml.mp3",
                    bg: "violet"
                },
            }
        },
    }
}