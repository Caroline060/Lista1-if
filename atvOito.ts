/* (10 pontos)
8-Escreva um programa que leia o valor de 3 ângulos de um triângulo e escreva se o triângulo 
é Acutângulo, Retângulo ou Obtusângulo. Sendo que:
− Triângulo Retângulo: possui um ângulo reto. (igual a 90º)
− Triângulo Obtusângulo: possui um ângulo obtuso. (maior que90º)
− Triângulo Acutângulo: possui três ângulos agudos. (menor que 90º)
Nome Aluno: Nathália Caroline Gumbio
*/

const teclado = require (`prompt-sync`)();

let ang1: number = parseFloat(teclado(`Digite o valor do primeiro ângulo do triângulo: `));
let ang2: number = parseFloat(teclado(`Digite o valor do segundo ângulo do triângulo: `));
let ang3: number = parseFloat(teclado(`Digite o valor do terceiro ângulo do triângulo: `));

if(ang1 ==90 || ang2 ==90 || ang3 ==90){
    console.log(`Esse triângulo é um Triângulo Retângulo!`)
}
else if(ang1 >90 || ang2 >90 || ang3 >90){
    console.log(`Esse triângulo é um Triângulo Obtusângulo!`)
}
else if(ang1 && ang2 && ang3 < 90){
    console.log(`Esse triângulo é um Triângulo Acutângulo!`)
}

else{
    console.log(`algo deu errado!`)
}