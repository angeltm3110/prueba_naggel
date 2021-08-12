
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
                            <img src="${cerveza.img}" class="card-img-top" alt="..." width = "150" height = "150">
                            <div class="card-body">
                            <h5 class="card-title">${cerveza.tipo}</h5>
                             <p class="card-text"> ${cerveza.precioCerveza}</p>
                            <a href="#" class="btn btn-primary">Comprar</a>
                            </div>
                             </div>`;
                             
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
