import Animal from './animal';
class Leon extends Animal{
    constructor(nombre,edad,img,comentarios,sonido){
        super (nombre,edad,img,comentarios,sonido);
    }
    Rugir(){}
}

class Lobo extends Animal{
    constructor(nombre,edad,img,comentarios,sonido){
        super (nombre,edad,img,comentarios,sonido);
    }
    Aullar(){
        //src => audio.setAttribute('src',¿qui va la ruta del audio?)
        //
    }
}

class Oso extends Animal{
    constructor(nombre,edad,img,comentarios,sonido){
        super (nombre,edad,img,comentarios,sonido);
    }
    Gruñir(){}
}

class Serpiente extends Animal{
    constructor(nombre,edad,img,comentarios,sonido){
        super (nombre,edad,img,comentarios,sonido);
    }
    Sisear(){}
}

class Aguila extends Animal{
    constructor(nombre,edad,img,comentarios,sonido){
        super (nombre,edad,img,comentarios,sonido);
    }
    Chillar(){}
}

export{Leon,Lobo,Oso,Serpiente,Aguila};
