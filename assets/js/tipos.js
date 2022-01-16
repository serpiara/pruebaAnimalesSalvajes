import {Animal} from './animal.js'
// hay que usar los export Default en cada una de las clases, no instancia de otra forma
export class Leon extends Animal{
    constructor(nombre,edad,img,comentarios,sonido){
        super (nombre,edad,img,comentarios,sonido);
    }
    Rugir(){
        //let audio = document.getElementById("player")
        //audio.setAttribute("src", `assets/${this.sonido}`)
        //audio.play();
    }
}


export class Lobo extends Animal{
    constructor(nombre,edad,img,comentarios,sonido){
        super (nombre,edad,img,comentarios,sonido);
    }
    Aullar(){
        //src => audio.setAttribute('src',¿qui va la ruta del audio?)
        //
    }
}

export class Oso extends Animal{
    constructor(nombre,edad,img,comentarios,sonido){
        super (nombre,edad,img,comentarios,sonido);
    }
    Gruñir(){}
}

export class Serpiente extends Animal{
    constructor(nombre,edad,img,comentarios,sonido){
        super (nombre,edad,img,comentarios,sonido);
    }
    Sisear(){}
}

export class Aguila extends Animal{
    constructor(nombre,edad,img,comentarios,sonido){
        super (nombre,edad,img,comentarios,sonido);
    }
    Chillar(){}
}

//export default {Leon, Lobo, Oso, Serpiente, Aguila};

