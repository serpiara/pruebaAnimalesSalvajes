import Animales from "./datosAnimales.js";
 
//Capturar elmento en Select Nombre de Animal
//animal.addEventListener('change', async() =>{
    //const {animales}  = await Animales.leer();
    //console.log(animal.value);
//});

//Capturar elmento en Select Años de edad estimados
//edad.addEventListener('change', async() =>{
    //const {animales}  = await Animales.leer();
    //console.log(edad.value);
//});

//Capturar elmento en texto ingresado en campo Comentarios
//comentarios.addEventListener('change', async() =>{
    //const {animales}  = await Animales.leer();
    //console.log(comentarios.value);
//}); 

// Busca la imagen del animal seleccionado en el select y la muestra en el campo animales
var animalSeleccionado = [];
document.getElementById('animal').addEventListener('change', async (event) =>{
    const {animales}  = await Animales.leer();
    const seleccion = event.target.value;
    const preview = document.getElementById('preview');
    const tipoAnimal = animales.find(animal => animal.name === seleccion)

// Insertar en el arreglo el nombre del animal seleccionado
    animalSeleccionado.push(tipoAnimal.name)
// Insertar en el arreglo la url de la imagen del animal
    animalSeleccionado.push (preview.style.backgroundImage = `url(../assets/imgs/${tipoAnimal.imagen})`);    
    //animalSeleccionado.push(tipoAnimal.imagen);
});

//Capturar elmento en Select Años de edad estimados
edad.addEventListener('change', async() =>{
// Insertar en el arreglo la edad seleccionada    
    animalSeleccionado.push(edad.value);
});

//Capturar elemento en texto ingresado en campo Comentarios
comentarios.addEventListener('change', async() =>{
// Insertar en el arreglo el comentario ingresado    
    animalSeleccionado.push(comentarios.value);
}); 

// Boton Agregar debe enviar los datos del arreglo y mostrar en el area de anilaes en investigacion
    document.getElementById('btnRegistrar').addEventListener('click', async() =>{
        console.log(animalSeleccionado);
        /* animalSeleccionado.forEach(function(elemento, indice) {
            console.log(elemento, indice);    
        }); */    
    
//Limpiar los select y campo
    document.getElementById("animal").value = "Seleccione un animal";
    document.getElementById("edad").value = "Seleccione un rango de años";
    document.getElementById("comentarios").value = "";
    document.getElementById("preview").style.backgroundImage= `url(../assets/imgs/lion.svg)`;   
});