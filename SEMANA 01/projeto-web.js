//PROJETO INTRODUÇÃO A WEB

// SEMANA 01

// ITEM: ANIMAIS PACIENTES DE UMA CLÍNICA VETERINÁRIA

// ATIVIDADE 01: DEFINIR CARACTERÍSTICAS DO ITEM ESCOLHIDO, SENDO PELO MENOS UMA STRING, UM NUMERO E UM BOOLEANO:
// NOME / TIPO / RAÇA / COR / IDADE / CASTRADO / VACINADO / PESO

//ATIVIDADE 02: CRIAR 3 CONJUNTOS DE VARIÁVEIS UTILIZANDO AS CARACTERÍSTICAS ACIMA.

const nome1 = "Mila"
const tipo1 = "Canino"
const raca1 = "Fox Paulistinha"
const cor1 = "branco, preto e marrom"
const idade1 = 9
const castrado1 = false
const vacinado1= true
const peso1 = 5
const prescricao1 = ["Drontal", "Simparic", "Promundog"]

const nome2 = "Ferrugem"
const tipo2 = "Canino"
const raca2 = "SRD"
const cor2 = "branco e marrom"
const idade2 = 5
const castrado2 = true
const vacinado2 = true
const peso2 = 17
const prescricao2 = ["Drontal", "Simparic", "Amoxivet", "Shampoo medicamentoso"]

const nome3 = "Cocada"
const tipo3 = "Canino"
const raca3 = "SRD"
const cor3 = "caramelo escuro"
const idade3 = 4
const castrado3 = true
const vacinado3 = true
const peso3 = 13
const prescricao3 = ["Drontal", "Simparic", "Tartarectomia"]

//ATIVIDADE 03: CALCULAR A MÉDIA ENTRE OS VALORES NUMÉRICOS (NO CASO A MÉDIA PARA AS VARIÁVEIS IDADE E PESO)

const mediaIdade = (idade1+idade2+idade3)/3

console.log("Media idade dos pets:")
console.log(mediaIdade)

const mediaPeso = (peso1+peso2+peso3)/3

console.log("Media peso dos pets:")
console.log(mediaPeso)

//ATIVIDADE 04: IMPRIMIR O RESULTADO DE UMA OPERAÇÃO LÓGICA QUE CHECA SE TODOS OS VALORES DAS VARIÁVEIS BOOLEANAS SÃO VERDADEIROS (CHECAR PARA CASTRADO E PARA VACINADO)

const verificaCastrado = castrado1 && castrado2 && castrado3
console.log("Todos os pets são castrados?")
console.log(verificaCastrado)

const verificaVacinado = vacinado1 && vacinado2 && vacinado3
console.log("Todos os pets estão vacinados?")
console.log(verificaVacinado)

//ATIVIDADE 05: CRIAR MAIS UMA CARACTERÍSTICA PARA O ITEM. ESSA CARACTERÍSTICA DEVE SER UM ARRAY. ('const prescricao' adicionada ao conjunto de características da Atividade 02)

//ATIVIDADE 06: EXIBIR UM RELATÓRIO APRESENTANDO TODAS OS DADOS DE CADA ITEM CRIADO.

console.log(nome1.toUpperCase())
console.log(tipo1)
console.log(raca1)
console.log(cor1)
console.log(idade1)
console.log(castrado1)
console.log(vacinado1)
console.log(peso1)
console.log(prescricao1)

console.log(nome2.toUpperCase())
console.log(tipo2)
console.log(raca2)
console.log(cor2)
console.log(idade2)
console.log(castrado2)
console.log(vacinado2)
console.log(peso2)
console.log(prescricao2)

console.log(nome3.toUpperCase())
console.log(tipo3)
console.log(raca3)
console.log(cor3)
console.log(idade3)
console.log(castrado3)
console.log(vacinado3)
console.log(peso3)
console.log(prescricao3)

// const pet4 = {  
//     nome: "Cléberson",
//     tipo: "Felino",
//     raca: "Persa",
//     cor: "laranja",
//     idade: 1,
//     castrado: false,
//     vacinado: true,
//     peso: 4.5
// }

// const pet5 = {  
//     nome: "Dom Juan Corleone",
//     tipo: "Felino",
//     raca: "SRD",
//     cor: "preto e branco",
//     idade: 9,
//     castrado: true,
//     vacinado: false,
//     peso: 5
// }

// const pet6 = {  
//     nome: "Coockie",
//     tipo: "Felino",
//     raca: "SRD",
//     cor: "tigrada",
//     idade: 9,
//     castrado: true,
//     vacinado: true,
//     peso: 6
// }
console.log(pet1)


const pet1 = {  
    nome: "Mila",
    tipo: "Canino",
    raca: "Fox Paulistinha",
    cor: "branco, preto e marrom",
    idade: 9,
    castrado: false,
    vacinado: true,
    peso: 5
}

const pet2 = {  
    nome: "Ferrugem",
    tipo: "Canino",
    raca: "SRD",
    cor: "branco e caramelo",
    idade: 5,
    castrado: true,
    vacinado: true,
    peso: 17
}

const pet3 = {  
    nome: "Cocada",
    tipo: "Canino",
    raca: "SRD",
    cor: "Caramelo escuro",
    idade: 4,
    castrado: true,
    vacinado: true,
    peso: 13
}

// const pet4 = {  
//     nome: "Cléberson",
//     tipo: "Felino",
//     raca: "Persa",
//     cor: "laranja",
//     idade: 1,
//     castrado: false,
//     vacinado: true,
//     peso: 4.5
// }

// const pet5 = {  
//     nome: "Dom Juan Corleone",
//     tipo: "Felino",
//     raca: "SRD",
//     cor: "preto e branco",
//     idade: 9,
//     castrado: true,
//     vacinado: false,
//     peso: 5
// }

// const pet6 = {  
//     nome: "Coockie",
//     tipo: "Felino",
//     raca: "SRD",
//     cor: "tigrada",
//     idade: 9,
//     castrado: true,
//     vacinado: true,
//     peso: 6
// }