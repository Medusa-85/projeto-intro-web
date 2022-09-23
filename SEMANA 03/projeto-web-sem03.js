//PROJETO INTRODUÇÃO A WEB

// SEMANA 03

// ITEM: ANIMAIS PACIENTES DE UMA CLÍNICA VETERINÁRIA

// ATIVIDADE 01: REESCREVER O RELATÓRIO DE FORMA QUE A PROPRIEDADE QUE É ORIGINALMENTE UM ARRAY SEJA ESCRITA EM UMA MESMA STRING.

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
    prescricao : ["Drontal", "Simparic", "Promundog"]
}

const pet2 = {  
    tutor: "Mariana Lima",
    nome : "Ferrugem",
    tipo : "Canino",
    raca : "SRD",
    cor2 : "branco e marrom",
    idade : 5,
    castrado : true,
    vacinado : true,
    peso : 17,
    prescricao : ["Drontal", "Simparic", "Amoxivet", "Shampoo medicamentoso"]
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
    prescricao : ["Drontal", "Simparic", "Tartarectomia"]
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
    prescricao : ["Lavagem gástrica", "Drontal", "Tosa higiênica"]
}

const pet5 = {  
    tutor: "Ariel Fajardini",
    nome: "Dom Juan Corleone",
    tipo: "Felino",
    raca: "SRD",
    cor: "preto e branco",
    idade: 9,
    castrado: true,
    vacinado: false,
    peso: 5,
    prescricao : ["Drontal"]
}

const pet6 = {  
    tutor: "Juliana Fajardini",
    nome: "Coockie",
    tipo: "Felino",
    raca: "SRD",
    cor: "tigrada",
    idade: 9,
    castrado: true,
    vacinado: true,
    peso: 6,
    prescricao : ["Drontal"]
}

const pets = []

pets.push(pet1, pet2, pet3, pet4, pet5, pet6)

for (i in pets){  
    pets[i].prescricao=pets[i].prescricao.toString()
    console.log(pets[i].prescricao)
}

//ATIVIDADE 02: IMPRIMIR O RELATÓRIO A PARTIR DE ITERAÇÃO DO LAÇO

for (let i in pets){    
    console.log("Pet: "+pets[i].nome)
    console.log(pets[i])
}

//ATIVIDADE 03: CRIAR UMA FUNÇÃO QUE RECEBA COMO PARAMETRO UM OBJETO E DEVOLVA UMA STRING DO RELATÓRIO COM OS DADOS DO OBJETO

function relatorioString (paciente){    
    let petString = ""
    for (let chave in paciente){    
        petString+=`${chave}: ${paciente[chave]}\n`
    }
    return petString
}
for (pet of pets){  
    console.log(relatorioString(pet))
}

//ATIVIDADE 04: 

function filtro (pacientes,nomePet) {  
    for (let paciente of pacientes){    
        if (paciente["nome"]=== nomePet){   
            return paciente
        }
    }
    alert("Pet não encontrado.")
}

console.log(filtro(pets,"Toquinho"))


