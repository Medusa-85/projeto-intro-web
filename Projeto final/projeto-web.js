//PROJETO INTRODUÇÃO A WEB

// ITEM: ANIMAIS PACIENTES DE UMA CLÍNICA VETERINÁRIA

// SEMANA 2 - ATIVIDADE 01: TRASNFORMAR OS ITENS CRIADOS NA SEMANA 01 EM OBJETOS

const pet1 = {  
    tutor: "Clara Bernardes",
    nome : "Mila",
    tipo : "Canino",
    raca : "Fox Paulistinha",
    cor : "branco, preto e marrom",
    idade : 9,
    castrado : false,
    vacinado: true,
    peso : 5,
    prescricao : ["Drontal", " Simparic", " Promundog"],
    imagem: 'Mila.jpg',
}

const pet2 = {  
    tutor: "Mariana Lima",
    nome : "Ferrugem",
    tipo : "Canino",
    raca : "SRD",
    cor : "branco e marrom",
    idade : 5,
    castrado : true,
    vacinado : true,
    peso : 17,
    prescricao : ["Drontal", " Simparic", " Amoxivet", " Shampoo medicamentoso"],
    imagem: 'Ferrugem.jpg',
}

const pet3 = {  
    tutor: "Mariana Lima",
    nome : "Cocada",
    tipo : "Canino",
    raca : "SRD",
    cor : "caramelo escuro",
    idade : 4,
    castrado : true,
    vacinado : true,
    peso : 13,
    prescricao : ["Drontal", " Simparic", " Tartarectomia"],
    imagem: 'Cocada.jpg',
}

const pet4 = {      
    tutor: "Sulamita Bernardes",
    nome: "Cléberson",
    tipo: "Felino",
    raca: "Persa",
    cor: "laranja",
    idade: 1,
    castrado: false,
    vacinado: true,
    peso: 4.5,
    prescricao : ["Lavagem gástrica", " Drontal", " Tosa higiênica"],
    imagem: 'Cléberson.jpeg',
}

const pet5 = {  
    tutor: "Ariel Fajardini",
    nome: "Don Juan Corleone",
    tipo: "Felino",
    raca: "SRD",
    cor: "preto e branco",
    idade: 9,
    castrado: true,
    vacinado: true,
    peso: 5,
    prescricao : ["Drontal"],
    imagem: 'Don.jpg',
}

const pet6 = {  
    tutor: "Juliana Fajardini",
    nome: "Cookie",
    tipo: "Felino",
    raca: "SRD",
    cor: "tigrada",
    idade: 9,
    castrado: true,
    vacinado: true,
    peso: 6,
    prescricao : ["Drontal"],
    imagem: 'Cookie-close.jpeg',
}

//SEMANA 2 - ATIVIDADE 02: CRIAR UM ARRAY PARA GUARDAR OS OBJETOS DA ATIVIDADE 01
const pets = []

//SEMANA 2 - ATIVIDADE 03: ADICIONE OS OBJETOS AO ARRAY DA ATIVIDADE 02
pets.push(pet1, pet2, pet3, pet4, pet5, pet6)

//SEMANA 2 - ATIVIDADE 04: Altere o item 3 “Adicione os novos objetos no array de objetos, utilizando o push()”, para criar uma verificação antes de dar o push. A caraterística booleana do objeto deve ser validada. Isto é, o objeto só deve ser adicionado ao array se a propriedade booleana for true
//SEMANA 2 - ATIVIDADE 05: Crie uma condição else, que, em caso de valor false na condição acima, exiba um **ALERT** avisando para o usuário que o item não foi adicionado, e não faça o push

console.log("***SEMANA 2 - ATIVIDADES 4 E 5***")
const petsCastrados = []

for (let petCastrado of pets){    
    if(petCastrado.castrado){  
        petsCastrados.push(petCastrado)   
    }else{  
        //alert("O pet " + petCastrado.nome + " não é castrado.")
    }
}
console.log(petsCastrados)

//SEMANA 3 - ATIVIDADE 01: REESCREVER O RELATÓRIO DE FORMA QUE A PROPRIEDADE QUE É ORIGINALMENTE UM ARRAY SEJA ESCRITA EM UMA MESMA STRING.

console.log("***SEMANA 3 - ATIVIDADE 1***")
for (let i in pets){  
    pets[i].prescricao=pets[i].prescricao.toString()
    console.log(pets[i].prescricao)
}

//SEMANA 3 -ATIVIDADE 02: IMPRIMIR O RELATÓRIO A PARTIR DE ITERAÇÃO DO LAÇO

console.log("***SEMANA 3 - ATIVIDADE 2***")
for (let i in pets){    
    console.log("Pet: "+pets[i].nome)
    console.log(pets[i])
}

//SEMANA 3 - ATIVIDADE 03: CRIAR UMA FUNÇÃO QUE RECEBA COMO PARAMETRO UM OBJETO E DEVOLVA UMA STRING DO RELATÓRIO COM OS DADOS DO OBJETO

console.log("***SEMANA 3 - ATIVIDADE 3***")
function relatorioString (paciente){    
    let petString = ""
    for (let chave in paciente){    
        petString += `${chave}: ${paciente[chave]}\n`
    }
    return petString
}
for (let pet of pets){  
    console.log(relatorioString(pet))
}

//SEMANA 1 - ATIVIDADE 3: Faça um cálculo de média, entre os valores numéricos respectivos de cada item. Imprima o valor da média utilizando um console.log. Guarde este valor em uma const
console.log("***SEMANA 1 - ATIVIDADE 3***")
function mediaPeso(pets) {
    let pesoTotal = 0
    const numItens = pets.length
    for (let pet of pets) { 
        pesoTotal += pet.peso
    }
    
    return (pesoTotal / numItens).toFixed(2)
}

console.log(`Média de peso dos pets: ${mediaPeso(pets)} kg`)
console.log("A quantidade de pets registrados é: ", pets.length) 

//SEMANA 1 - ATIVIDADE 4: Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores de variáveis booleanas criadas até aqui são verdadeiras.

console.log("***SEMANA 1 - ATIVIDADE 4***")
function verificarCastrado(pets) { 
    const petCastrado = []
    for (let pet of pets) {  
        if (pet.castrado){  
            petCastrado.push(pet.nome)
        }
    }
    if (petCastrado.length === pets.length) {   
        console.log("Todos os pets registrados foram castrados.")
    } else {    
        console.log("Há pet registrado que ainda não foi castrado.")
    }
         
}
verificarCastrado(pets)

function verificarVacina(pets) { 
    const petVacinado = []
    for (let pet of pets) {  
        if (pet.vacinado){  
            petVacinado.push(pet.nome)
        }
    }
    if (petVacinado.length ===  pets.length) {   
        console.log("Todos os pets registrados foram vacinados.")
    } else {    
        console.log("Há pet registrado que ainda não foi vacinado.")
    }
         
}
verificarVacina(pets)

//SEMANA 1 - ATIVIDADE 6: Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui.
//OBS: O log deve exibir o dado de nome, título ou afim sempre em LETRAS MAIÚSCULAS.

console.log("***SEMANA 1 - ATIVIDADE 6***")
/*
function imprimirRelatorio(pets) { 
    let dadosItens = ""
    for (let pet of pets) {
        console.log(pet.nome.toUpperCase())
        console.log(pet.tutor)
    }
    
}
imprimirRelatorio(pets)*/


function relatorioString (paciente){    
    let petString = ""
    for (let chave in paciente){    
        petString += `${chave}: ${paciente[chave]}\n`
    }
    return petString
}
for (let pet of pets){ 
    console.log(pet.nome.toUpperCase()) 
    console.log(relatorioString(pet))
}

//SEMANA 6 - ATIVIDADE 1: Altere seu código para que a tela de lista de itens crie os elementos da lista através de manipulação do DOM.

function criarPet(pet) {    
    const criarSectionListaPet = document.createElement("section")
    criarSectionListaPet.setAttribute("class","pet-da-lista")
    const boxItens = document.getElementById("lista-pets")
    boxItens.insertAdjacentElement("beforeend",criarSectionListaPet)

    if (pet.castrado===true) {
        pet.castrado="Sim"
    } else {
        pet.castrado="Não"
    }
    if (pet.vacinado===true) {
        pet.vacinado="Sim"
    } else {
        pet.vacinado="Não"
    }
    
    const criarUlListaPet = document.createElement("ul")
    criarUlListaPet.setAttribute("class","ul-parametros")
    criarSectionListaPet.insertAdjacentElement("afterbegin", criarUlListaPet)

    const h2NomePet = document.createElement("h2")
    const valorNome = document.createTextNode(pet.nome.toUpperCase())
    h2NomePet.appendChild(valorNome)
    criarSectionListaPet.insertAdjacentElement("afterbegin",h2NomePet)

    const liTutorPet = document.createElement("li")
    const valorTutor = document.createTextNode("Tutor: "+pet.tutor)
    liTutorPet.appendChild(valorTutor)
    criarUlListaPet.insertAdjacentElement("beforeend",liTutorPet)
    
    const liTipoPet = document.createElement("li")
    const valorTipo = document.createTextNode("Tipo: "+pet.tipo)
    liTipoPet.appendChild(valorTipo)
    criarUlListaPet.insertAdjacentElement("beforeend",liTipoPet)

    const liRacaPet = document.createElement("li")
    const valorRaca = document.createTextNode("Raça: "+pet.raca)
    liRacaPet.appendChild(valorRaca)
    criarUlListaPet.insertAdjacentElement("beforeend",liRacaPet)

    const liCorPet = document.createElement("li")
    const valorCor = document.createTextNode("Cor: "+pet.cor)
    liCorPet.appendChild(valorCor)
    criarUlListaPet.insertAdjacentElement("beforeend",liCorPet)

    const liIdadePet = document.createElement("li")
    const valorIdade = document.createTextNode("Idade: "+pet.idade)
    liIdadePet.appendChild(valorIdade)
    criarUlListaPet.insertAdjacentElement("beforeend",liIdadePet)

    const liCastradoPet = document.createElement("li")
    const valorCastrado = document.createTextNode("Castrado: "+pet.castrado)
    liCastradoPet.appendChild(valorCastrado)
    criarUlListaPet.insertAdjacentElement("beforeend",liCastradoPet)

    const liVacinadoPet = document.createElement("li")
    const valorVacinado = document.createTextNode("Vacinado: "+pet.vacinado)
    liVacinadoPet.appendChild(valorVacinado)
    criarUlListaPet.insertAdjacentElement("beforeend",liVacinadoPet)

    const liPesoPet = document.createElement("li")
    const valorPeso = document.createTextNode("Peso: "+pet.peso+"kg")
    liPesoPet.appendChild(valorPeso)
    criarUlListaPet.insertAdjacentElement("beforeend",liPesoPet)

    const liPrescricaoPet = document.createElement("li")
    const valorPrescricao = document.createTextNode("Prescrição: "+pet.prescricao)
    liPrescricaoPet.appendChild(valorPrescricao)
    criarUlListaPet.insertAdjacentElement("beforeend",liPrescricaoPet)
    
    const imgPet = document.createElement("img")
    imgPet.src = pet.imagem
    criarSectionListaPet.insertAdjacentElement("afterbegin",imgPet)

}

for (let pet of pets){  
    criarPet(pet)
}


//SEMANA 6 - ATIVIDADE 2: Utilize a função de busca criada no item 2 da semana 6 para fazer com que ao digitar um campo no input e apertar o botão, apenas os itens com nome igual ao da busca sejam renderizados na tela.

function filtro (pets,event) { 
    event.preventDefault () 
    const buscarListaPet = document.getElementById("lista-pets")
    buscarListaPet.innerHTML = ""
    const nome = document.getElementById("pet")
    const noPet = []
    
    for (let pet of pets){ 
        const petNomeUp = pet.nome.toUpperCase()
        const nomeValueUp = nome.value.toUpperCase()
        if (petNomeUp.includes(nomeValueUp) && nome.value !== ""){   
            console.log(pet)
            criarPet(pet)
            noPet.push(pet)
        } 
    }
    if(noPet.length<1){    
        alert("Pet não encontrado.")
    }
    return 
}