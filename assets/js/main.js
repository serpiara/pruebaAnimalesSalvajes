import Animales from './datosAnimales.js';
import {Leon, Lobo, Oso, Serpiente, Aguila} from "./tipos.js";
import Animal from "./animal.js";

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

//Limpiar los select y campo
    document.getElementById("animal").value = "Seleccione un animal";
    document.getElementById("edad").value = "Seleccione un rango de años";
    document.getElementById("comentarios").value = "";
    document.getElementById("preview").style.backgroundImage= `url(../assets/imgs/lion.svg)`;   
});