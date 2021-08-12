class Cerveza{
    constructor(id,tipo,precioCerveza,img){
    this.id =parseInt(id);
    this.tipo = tipo;
    this.precioCerveza =  parseInt(precioCerveza);
    this.img = img;
    }
} 

const tipoCerveza = new Cerveza (1,"RED IPA",150, "image/redipa2.jpg");
console.log(tipoCerveza);

const tipos = [];

tipos.push(tipoCerveza);

tipos.push(new Cerveza(2, "AMBER", 200 ,"image/amberlager.jpg"));
tipos.push(new Cerveza(3,"STOUT", 250, "image/stout.jpg"));
console.log(tipos);
