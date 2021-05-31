//Crie um algoritmo que receba três notas de um aluno, 
//calcule sua média e mostre as seguintes mensagens de acordo com cada situação:
//Se a media for igual ou maior que 7 - Aprovado
//Se a media for maior e igual a cinco e menor que 7 - Recuperação
//Se a media for menor que 5 - Reprovado

let nota1 = 6, nota2 = 6, nota3 = 6;
const notaFinal = (nota1+nota2+nota3) / 3;

if (notaFinal >= 7) {
    console.log(`aprovado`)

}

else if (notaFinal <= 5) {
    console.log(`reprovado`)

}

else {
    console.log(`recuperação`)

}