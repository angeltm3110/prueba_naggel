
/*LOAD*/

window.addEventListener('load', ()=>{
    console.log("IMAGENES CARGADAS");
    $("#indicador").remove();
})




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

/* funcion para generar la interfaz de prodcutos*/

function productosUI(tipos,id){
    for (const productoUI of tipos) {
        document.getElementById(id).appendChild(divCervezas(productosUI));
    }
}

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

function productosUIJQuery (tipos, id){
    for (const productosJQ of tipos) {
        $(id).append(`<div class="card" style="width: 18rem;">
        <img src="${tipos.img}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${tipos.tipo}</h5>
        <p class="card-text">${tipos.precioCerveza}</p>
        <a href="#" id=${tipos.id} class="btn btn-primary btnComprar">COMPRAR</a>
        </div>
         </div>`);
    }
}
/* JQuery*/
productosUIJQuery(tipos,'#interfazProductos');
console.dir($(".card"));




/* ------eventos -------*/ 
const boton = $(".btnComprar");
console.log(boton);
/*ARRAY CARRITO*/
carrito = [];

function comprarCervezas(e) {
       console.log('COMPRADO');
       e.preventDefault();
       const productoID = e.target.id;
       const seleccionado = tipos.find( p => p.id == productoID);
       carrito.push(seleccionado);
       //guardar en el storage//
       localStorage.setItem("CARRITO", JSON.stringify(carrito));
       carritoUI(carrito);


}

function carritoUI(tipos){
    $("#carrito-cantidad").html(tipos.length);
    
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
