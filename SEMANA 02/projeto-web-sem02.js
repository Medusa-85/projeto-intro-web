//PROJETO INTRODUÇÃO A WEB

// SEMANA 02

// ITEM: ANIMAIS PACIENTES DE UMA CLÍNICA VETERINÁRIA

// ATIVIDADE 01: TRASNFORMAR OS ITENS CRIADOS NA SEMANA 01 EM OBJETOS

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

//ATIVIDADE 02: CRIAR UM ARRAY PARA GUARDAR OS OBJETOS DA ATIVIDADE 01

const pets = []

//ATIVIDADE 03: ADICIONE OS OBJETOS AO ARRAY DA ATIVIDADE 02

pets.push(pet1, pet2, pet3, pet4, pet5, pet6)
console.log(pets)

//ATIVIDADE 04: Altere o item 3 “Adicione os novos objetos no array de objetos, utilizando o push()”, para criar uma verificação antes de dar o push. A caraterística booleana do objeto deve ser validada. Isto é, o objeto só deve ser adicionado ao array se a propriedade booleana for true
//ATIVIDADE 05: Crie uma condição else, que, em caso de valor false na condição acima, exiba um **ALERT** avisando para o usuário que o item não foi adicionado, e não faça o push
const petsCastrados = []

for (petCastrado of pets){    
    if(petCastrado.castrado){  
        petsCastrados.push(petCastrado)   
    }else{  
        alert("O pet " + petCastrado.nome + " não é castrado.")
    }
}
console.log(petsCastrados)

