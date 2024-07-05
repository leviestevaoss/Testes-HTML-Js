let buttonRed = document.getElementsByTagName('button')[0]
let buttonBlue = document.getElementsByTagName('button')[1]
let buttonGreen = document.getElementsByTagName('button')[2]

let teste = document.querySelector('.containerPrincipal')

function mudacor(cor){
    teste.style.background = cor
}

let elementoFilho = document.createElement('p')
elementoFilho.innerHTML = 'texto inserido no inner html criado com createElement'

let elementoPai = document.querySelector('body')

elementoPai.appendChild(elementoFilho)

let outroElemento = document.createElement('h1')
outroElemento.innerHTML = 'Titulo Criado com JS'

elementoPai.appendChild(outroElemento)

