import Animales from "./datosAnimales.js";
/* 
document.getElementById('btnRegistrar').addEventListener('click', async() =>{
    const {animales}  = await Animales.leer();
    console.log(animales)
    const tipoAnimal = animales.find(animal => animal.name === "Leon")
    console.log(tipoAnimal.name);
    console.log(tipoAnimal.imagen);
});
 */
//Capturar elmento en Select Nombre de Animal
animal.addEventListener('change', async() =>{
    //const {animales}  = await Animales.leer();
    console.log(animal.value);
});

//Capturar elmento en Select Años de edad estimados
edad.addEventListener('change', async() =>{
    //const {animales}  = await Animales.leer();
    console.log(edad.value);
});

//Capturar elmento en texto ingresado en campo Comentarios
comentarios.addEventListener('change', async() =>{
    //const {animales}  = await Animales.leer();
    console.log(comentarios.value);
}); 

// Busca la imagen del animal seleccionado en el select y la muestra en el campo animales
document.getElementById('animal').addEventListener('change', async (event) =>{
    const {animales}  = await Animales.leer();
    const seleccion = event.target.value;
    const preview = document.getElementById('preview');
    const tipoAnimal = animales.find(animal => animal.name === seleccion)
    //console.log(tipoAnimal.imagen);
    preview.style.backgroundImage = `url(../assets/imgs/${tipoAnimal.imagen})`;

// Se pinta la previsualizacion de la imagen en el campo de preview    
    
});

// Boton Agregar debe enviar los datos del arreglo y mostrar en el area de anilaes en investigacion
    document.getElementById('btnRegistrar').addEventListener('click', async() =>{
        
        document.getElementById('Animales').innerHTML= `<img src = "../assets/imgs/${tipoAnimal.imagen}" width="100" height="100")>`;
//Limpiar los select y campo
//   document.getElementById("animal").value = "Seleccione un animal";
//   document.getElementById("edad").value = "Seleccione un rango de años";
//   document.getElementById("comentarios").value = "";
    
});
