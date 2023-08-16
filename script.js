import { barcelona, roma, paris, londres } from  "./ciudades.js";



let enlaces = document.querySelectorAll("a");
let titulo = document.getElementById("titulo");
let subtitulo = document.getElementById("subtitulo");
let parrafo = document.getElementById("parrafo");
let precio = document.getElementById("precio");


enlaces.forEach(function(enlace){
        enlace.addEventListener("click", function(){

            enlaces.forEach(function (enlace) {
                enlace.classList.remove("active");
            });

            this.classList.add("active");

            let contenido = obtenerContenido(this.textContent);

            titulo.innerHTML = contenido.titulo;
            subtitulo.innerHTML = contenido.subtitulo;
            parrafo.innerHTML = contenido.parrafo;
            precio.innerHTML = `PRECIO DE VIAJE: $${contenido.precio}`;
        });
    });


function obtenerContenido(enlace){
    let contenido = {
        "Barcelona" : barcelona,
        "Roma" : roma ,
        "París" : paris,
        "Londres" : londres
    }
    return contenido[enlace];
};