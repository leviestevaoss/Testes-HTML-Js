let entrada = (document.querySelector("#entrada"))

let principal = (document.querySelector('#pratoPrincipal'))

let bebidas = (document.querySelector("#bebidas"))

let sobremesa = (document.querySelector("#sobremesa"))

let taxaServico = (document.querySelector("#taxaServico"))

let subtotal = (document.querySelector('#subTotal'))

let total =  (document.querySelector("#total"))


function alteracao(){
    console.log("campo alterado")
}   


function calculoConta(){
    let precoTotal = Number(entrada.value) + Number(principal.value) + Number(bebidas.value) + Number(sobremesa.value)

    let valorTaxa =  precoTotal * 0.1

    let totalPagar = precoTotal + valorTaxa

    return [precoTotal,valorTaxa,totalPagar]
}

function mostrarConta(){
    let valores = calculoConta()

    subtotal.value = valores[0]
    taxaServico.value = valores[1]
    total.value = valores[2]
}