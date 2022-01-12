import Animales from "./datosAnimales.js";

document.getElementById('btnRegistrar').addEventListener('click', async() =>{
    const {animales}  = await Animales.leer();
    console.log(animales)
    const tipoAnimal = animales.find(animal => animal.name === "Leon")
    console.log(tipoAnimal.name);
    console.log(tipoAnimal.imagen);
});

 
document.getElementById('animal').addEventListener('change', async (event) =>{
    const {animales}  = await Animales.leer();
    const seleccion = event.target.value;
    const preview = document.getElementById('preview');
    const tipoAnimal = animales.find(animal => animal.name === seleccion)
    console.log(tipoAnimal.imagen);
    preview.style.backgroundImage = `url(../assets/imgs/${tipoAnimal.imagen})`;
});
