
let productos = prompt("Por favor ingrese el producto");
if(productos == "honey" ||  productos == "Honey"){
    alert("Has seleccionado Honey");
}

if (productos == "amber" ||  productos == "Amber") {
    alert("Has seleccionado Amber");
}
if (productos == "stout" || productos =="Stout") {
    alert("Has seleccionado Stout");
}

let cantidad =  prompt("por favor ingrese la cantidad");

function asignarProductos(productos, cantidad) {
    return " Producto:  " + productos + "  Precio: 450$  " + "  Cantidad:  " + cantidad;
}
alert(asignarProductos(productos,cantidad));


let resultado = 0;

function precioIpa(precio, cantidad) {
    resultado = precio * cantidad;
    alert("Total a pagar: " + resultado );
}

if (parseInt(cantidad)){
    alert("cantidad agregada correctamente");
}
else{
    alert("Por favor agregue un dato valido");
}
precioIpa(450, cantidad);

producto = prompt("Por favor ingrese su tipo de cerveza");

function precioHoney(precio,cantidad) {
    resultado = precio * cantidad;
    alert("Total a pagar: " + resultado);
}
if (parseInt(cantidad)){
    alert("Cerveza y cantidad agregada correctamente");
}
else{
    alert("Por favor agregue un dato valido");
}
precioHoney(200, cantidad);


function Naggels( id, nombre, precio2){
    this.id = parseInt(id);
    this.nombre = nombre;
    this.precio = parseInt(precio2);
    this.cantidad = 0;

}

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
console.log(producto4);

class Cerveza{
    constructor(id,tipo,precioCerveza){
    this.id =parseInt(id);
    this.tipo = tipo;
    this.precioCerveza =  parseInt(precioCerveza);
    }
}

const tipoCerveza = new Cerveza (2,"IPA",150);
console.log(tipoCerveza);
/*ARRAY */
const tipos = [];
/*ARRAY*/
tipos.push(tipoCerveza);
tipos.push(new Cerveza(3, "HONEY", 200));
tipos.push(new Cerveza(4,"STOUT", 250));
console.log(tipos);

let salida = "";

for (let index = 0; index < tipos.length; index++) {
     salida += " Item " + tipos[index].id +
      " Nombre "+ tipos[index].tipo +
    " Precio " + tipos[index].precioCerveza + "\n";
    
}
alert(salida);

/* Buscador*/

let idCerveza = prompt("por favor ingrese tipo de cerveza");
let encontrado = tipos.find( tipos => tipos.id == idCerveza)
console.log(encontrado);

/*filtrar precio*/

let filtroPrecio = prompt("por favor ingresar precio")
let productosFiltrados = tipos.filter( tipos => tipos.precioCerveza < filtroPrecio)
console.log(productosFiltrados);
console.log(tipos);
