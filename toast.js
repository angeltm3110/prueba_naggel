const alerta = document.querySelector('#alerta')

alerta.addEventListener('click', () =>{
    toastr.success('MUCHAS GRACIAS!', 'Compra realizada con exito!',{
        "progressBar": true
    });
})

