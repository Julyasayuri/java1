
// let nomeCompleto = "Julya Sayuri Rossi Kawafigashi" ;
// // variável Let nomeCompleto recebe/guarda o valor
// console.log(nomeCompleto) ;
// console.error("Deu tudo errado") ;
// console.warn("Oi") ;
// let número = 22 ;
// let número2 = 22.5 ;
// let boolean = true ;

// let nome = "Julya" ;
// let idade = 17 ;
// let cidadeNatal = "Londrina" ;
// let endereco = "Jardim Roveri" ;

// let msg = "O meu nome é " + nome + " a minha cidade é " + cidadeNatal + " a minha idade é " + idade + " meu bairro é " + endereco;

// let msg2 = `O meu nome é ${nome} a minha idade é ${idade}, nasci em ${cidadeNatal} e moro em ${endereco}`;

// console.log(msg);
// console.log(msg2);

// // const html = `
// //     <div>
// //         <h1>
// //             ${nome}
// //         </h1>
// //      </div> `

//      const idadeEmDias = idade * 365 ;
//      const frase2 = `oi ${idadeEmDias} ...`;
//      console.log(frase2);
         
    let idade = 30
    let classificação = ""
    
    if (idade < 12) {
        classificação += "Pré-Adolescente"

    } else if (idade < 18) {
        classificação += "Adolescente"

    } else if (idade < 29) {
        classificação += "Adulto"

    } else if (idade < 44) {
        classificação += "Adulto Sênior"
    
    } else if (idade < 59) {
        classificação += "Terceira Idade"
    }

//+= (preserva o que já existe e adiciona mais)

    console.log (classificação)

    let dia = "e"
    let diaTraduzido = ""

    switch (dia) {
        case "mon": 
            diaTraduzido = "Segunda-Feira"
            break
        case "tue":
            diaTraduzido = "Terça-Feira"
            break
        case "wed": 
            diaTraduzido = "Quarta-Feira"
            break
        case "thu":
            diaTraduzido = "Quinta-Feira"
            break
        case "fri": 
            diaTraduzido = "Sexta-Feira"
            break
        case "sat":
            diaTraduzido = "Sábado"
            break
        case "sun": 
            diaTraduzido = "Domingo"
            break
        default:
            diaTraduzido = "Inexistente"   

    }

    console.log(diaTraduzido)
    console.log(dia)

    let nota = 4
    let resultado = ""

    if (nota >= 7) {
        resultado = "Aprovado"
    } else if (nota >= 5 && nota < 7) {
        resultado = "Recuperação"
    } else if (nota <= 4) {
        resultado = "Reprovado"
    }

    console.log(nota)
    console.log(resultado)
































//let 10 = 2 ; não é possível pq não interpreta como número a variável, ent tem que ser uma palavra
//let número2 = 22.5 ; confere como number
//let booleano
// let pd mudar dps / let idade = 22; recebe valor 22
// const n muda dps de definido / const nome = Ana ; n muda, caso eu coloque Bia, vai dar erro
// = atribuição de valor == compara valores
// Td variável tem um tipo, estes são 3: string (texto sempre entre ""); number (números com ou sem casas decimais); boolean (true OU false)
// para descobrir o tipo de uma var. use typeof nome
// let nome = Julya
// const idade = 16
// Let e Const são as variáveis...
// console.log ("texto" + nome da variavel + "texto" + nome da variavel)
// alert ("") = aparece um alerta
// prompt ("")
// console.warn
//console.error
//${} ; java para de interpretar como texto e interpreta como código
// OPERADORES LÓGICOS: true && true ; true || true ; !true
// OPERADORES COMPARAÇÃO: === (igual, valor e tipo) !== () <>
// let x = 10 ; let y = 20 ; x < y = true
// (x < y) || (x > y) false
// (x < y) && (x > y) false
// x == (igual) 10 = true
// CONDICIONAIS (if / else e switch)
