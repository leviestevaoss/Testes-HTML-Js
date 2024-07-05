
// adicionei Meu Nome :
let myname = document.createElement('h1')
myname.innerHTML = 'Meu Nome e Levi Estevão'

let father = document.querySelector('div')

father.appendChild(myname)

// ------------------


let lista = document.createElement('ul')
father.appendChild(lista)

let idade = document.createElement('li')
idade.innerHTML = 20
lista.appendChild(idade)


let endereco = document.createElement('li')
endereco.innerHTML = 'OBA OBA OBA'
lista.appendChild(endereco)

let numeros1 = [1,2,3,4,5,6,7,8,9,10]

function titulo(item,pai){
    let tit = document.createElement('h1')
    tit.innerHTML = item
    pai.appendChild(tit)
}


numeros1.forEach((num) => titulo(num,father))

