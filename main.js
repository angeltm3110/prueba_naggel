
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
    divCervezas.innerHTML = `<div class="card" style="width: 18rem;">
                            <img src="${cerveza.img}" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">${cerveza.tipo}</h5>
                            <p class="card-text">${cerveza.precioCerveza}</p>
                            <a href="#" class="btn btn-primary btnComprar">COMPRAR</a>
                            </div>
                             </div>`;
                             
    document.getElementById("interfazProducto").appendChild(divCervezas);
}

function productosJQuery (tipos, id){
    for (const productosJQ of tipos) {
        $(id).append(`<div class="card" style="width: 18rem;">
        <img src="${cerveza.img}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${cerveza.tipo}</h5>
        <p class="card-text">${cerveza.precioCerveza}</p>
        <a href="#" class="btn btn-primary btnComprar">COMPRAR</a>
        </div>
         </div>`);
    }
}
/* JQuery*/

console.dir($(".card"));
productosUIJQuery(tipos,'#interfazProdcutos');



/* ------eventos -------*/ 
const boton = $(".btnComprar");
console.log(boton);
/*ARRAY CARRITO*/
carrito = [];

function comprarCervezas(e) {
       console.log('COMPRADO');
       e.preventDefault();
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

/*let idCerveza = prompt("por favor ingrese tipo de cerveza");
let encontrado = tipos.find( tipos => tipos.id == idCerveza)
console.log(encontrado);

/*filtrar precio*/

/*let filtroPrecio = prompt("por favor ingresar precio")
let productosFiltrados = tipos.filter( tipos => tipos.precioCerveza < filtroPrecio)
console.log(productosFiltrados);
console.log(tipos);*/
