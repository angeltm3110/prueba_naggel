
/*
class Producto {
    constructor (vender,reponer){
        this.vender = vender;
        this.reponer = reponer;
        this.cantidad2= 100;
    }
   venderStock(){
            this.vender = this.cantidad2 - 50 ;
            console.log(this.vender);
   }

   reponerStock(){
            this.reponer = this.cantidad2 + 25;
            console.log(this.reponer);
   }
   
}

const producto2 = new Naggels( 2, prompt("Ingrese tipo de Naggel:"), 500);
const producto3 = new Naggels( 3, prompt("ingrese tipo de Naggel:"), 700);
const producto4 = new Naggels( 4, prompt("Ingrese tipo de Naggel:"), 800);
const reponer2 = new Producto(8, 40);
const vender2 = new Producto( 14, 5);

reponer2.reponerStock(50);
vender2.venderStock(50);
console.log(producto2);
console.log(producto3);
console.log(producto4); */

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

/*-------- DOM----------*/
for (const cerveza of tipos) {
    let divCervezas = document.createElement("div");
    divCervezas.innerHTML = `<h2> ${cerveza.tipo}</h2>
                            <img src="${cerveza.img}" width = "150" "heigth = "150">
                            <h4>${cerveza.precioCerveza}</h4>
                            <button id= '${cerveza.id}' class= "btnComprar" > COMPRAR </button>`;
                             
    document.getElementById("interfazProducto").appendChild(divCervezas);
}


/* ------eventos -------*/ 
const boton = document.getElementsByClassName("btnComprar");
console.log(boton);
/*ARRAY CARRITO*/
carrito = [];

function comprarCervezas(event) {
        /*console.log(event);
        console.log(event.target.id);*/
        const seleccionado = tipos.find ( cerveza => cerveza.id == this.id);
        console.log(seleccionado);
        carrito.push(seleccionado);
        console.log(carrito);
        localStorage.setItem('carrito' , JSON.stringify(carrito));
        const seleccionCerveza = document.getElementById('carrito');
        seleccionCerveza.innerHTML  = "";
        for (const cerveza of carrito) {
            let item = document.createElement("p");
            item.innerHTML = ` Producto = ${cerveza.tipo} $ ${cerveza.precioCerveza}`;
            seleccionCerveza.appendChild(item);
        }
}

for (const botones of boton) {
        botones.addEventListener('click', comprarCervezas);
}




/*let salida = "";

for (let index = 0; index < tipos.length; index++) {
     salida += " Item " + tipos[index].id +
      " Nombre "+ tipos[index].tipo +
    " Precio " + tipos[index].precioCerveza + "\n";
    
}
alert(salida);*/

/* Buscador*/

let idCerveza = prompt("por favor ingrese tipo de cerveza");
let encontrado = tipos.find( tipos => tipos.id == idCerveza)
console.log(encontrado);

/*filtrar precio*/

let filtroPrecio = prompt("por favor ingresar precio")
let productosFiltrados = tipos.filter( tipos => tipos.precioCerveza < filtroPrecio)
console.log(productosFiltrados);
console.log(tipos);
