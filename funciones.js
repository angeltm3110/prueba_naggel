
/*-------- DOM----------*/
for (const cerveza of tipos) {
    let divCervezas = document.createElement("div");
    divCervezas.innerHTML = `<h2> ${cerveza.tipo}</h2>
                            <img src="${cerveza.img}" width = "150" "heigth = "150">
                            <h4>${cerveza.precioCerveza}</h4>
                            <button id= '${cerveza.id}' class= "btnComprar" > COMPRAR </button>`;
                             
    document.getElementById("interfazProducto").appendChild(divCervezas);
}



















