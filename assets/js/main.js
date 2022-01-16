import Animales from './datosAnimales.js';
import {Leon, Lobo, Oso, Serpiente, Aguila} from "./tipos.js";

// Declaracion de variables globales
var seleccionAnimal;
var imagenAnimal;
var edadAnimal;
var comentariosAnimal;
var sonidoAnimal; 
// Busca la imagen del animal seleccionado en el select y la muestra en el campo animales
document.getElementById('animal').addEventListener('change', async (event) =>{
    const {animales}  = await Animales.leer();
    const seleccion = event.target.value;
    const preview = document.getElementById('preview');
    const tipoAnimal = animales.find(animal => animal.name === seleccion)

    // Insertar en el arreglo la url de la imagen del animal y guarda el nombre del animal seleccionado
    imagenAnimal = (preview.style.backgroundImage = `url(../assets/imgs/${tipoAnimal.imagen})`);
    seleccionAnimal = tipoAnimal.name;
    sonidoAnimal = tipoAnimal.sonido;
    imagenAnimal = tipoAnimal.imagen;
    console.log(imagenAnimal);
});   

//Capturar elmento en Select Años de edad estimados
edad.addEventListener('change', async() =>{
    edadAnimal = edad.value;
});

//Capturar elemento en texto ingresado en campo Comentarios
comentarios.addEventListener('change', async() =>{
    comentariosAnimal =comentarios.value;
}); 

// Boton Agregar debe enviar los datos del arreglo y mostrar en el area de anilaes en investigacion
    document.getElementById('btnRegistrar').addEventListener('click', () =>{
    console.log(
    `El animal seleccionado es un ${seleccionAnimal}, su edad es entre ${edadAnimal}, y sus comentarios son ${comentariosAnimal} y su iamgen asociada es ${imagenAnimal} y la ruta de su sonido es${sonidoAnimal}`);
    
    let animalIngresado= [];    
        if(seleccionAnimal === 'Leon'){
            animalIngresado = new Leon(seleccionAnimal,edadAnimal,imagenAnimal,comentariosAnimal, sonidoAnimal);
        }else if(seleccionAnimal === 'Lobo'){
            animalIngresado = new Lobo(seleccionAnimal,edadAnimal,imagenAnimal,comentariosAnimal, sonidoAnimal);
        }else if(seleccionAnimal === 'Oso'){
            animalIngresado = new Oso(seleccionAnimal,edadAnimal,imagenAnimal,comentariosAnimal, sonidoAnimal);
        }else if(seleccionAnimal === 'Serpiente'){
            animalIngresado = new Serpiente(seleccionAnimal,edadAnimal,imagenAnimal,comentariosAnimal, sonidoAnimal);
        }else if(seleccionAnimal === 'Aguila'){        
            animalIngresado = new Aguila(seleccionAnimal,edadAnimal,imagenAnimal,comentariosAnimal, sonidoAnimal);
        }

// Cargar el animal instanciado en la seccion animales en investigacion
let tablaAnimales = document.getElementById("Animales");
console.log(`Este es el tipo de animal:${animalIngresado.nombre}`);
console.log(`Este es la edad de animal:${animalIngresado.edad}`);
//console.log(`Este es la URL de IMG de animal:${tipoAnimal.img}`);
console.log(`Este es el comnetario para animal:${animalIngresado.comentarios}`);
console.log(`Este es el URL de sonido para animal:${animalIngresado.sonido}`);


tablaAnimales.innerHTML += `<article class = "col-4">
<img class ="img-fluid" src= "assets/imgs/${animalIngresado.img}" alt="" srcset="">
<button onclick = 'playSound(this.audioAnimal)' class ="w-100 btn  btn-secondary"><img src= assets/imgs/audio.svg height ="30" width="100"></button>
</article>`;

//Limpiar los select y campo
    document.getElementById("animal").value = "Seleccione un animal";
    document.getElementById("edad").value = "Seleccione un rango de años";
    document.getElementById("comentarios").value = "";
    document.getElementById("preview").style.backgroundImage= `url(../assets/imgs/lion.svg)`;   
});