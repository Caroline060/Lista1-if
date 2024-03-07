/* (10 pontos)
8-Escreva um programa que leia o valor de 3 ângulos de um triângulo e escreva se o triângulo
é Acutângulo, Retângulo ou Obtusângulo. Sendo que:
− Triângulo Retângulo: possui um ângulo reto. (igual a 90º)
− Triângulo Obtusângulo: possui um ângulo obtuso. (maior que90º)
− Triângulo Acutângulo: possui três ângulos agudos. (menor que 90º)
Nome Aluno: Nathália Caroline Gumbio
*/
var teclado = require("prompt-sync")();
var ang1 = parseFloat(teclado("Digite o valor do primeiro \u00E2ngulo do tri\u00E2ngulo: "));
var ang2 = parseFloat(teclado("Digite o valor do segundo \u00E2ngulo do tri\u00E2ngulo: "));
var ang3 = parseFloat(teclado("Digite o valor do terceiro \u00E2ngulo do tri\u00E2ngulo: "));
if (ang1 == 90 || ang2 == 90 || ang3 == 90) {
    console.log("Esse tri\u00E2ngulo \u00E9 um Tri\u00E2ngulo Ret\u00E2ngulo!");
}
else if (ang1 > 90 || ang2 > 90 || ang3 > 90) {
    console.log("Esse tri\u00E2ngulo \u00E9 um Tri\u00E2ngulo Obtus\u00E2ngulo!");
}
else if (ang1 && ang2 && ang3 < 90) {
    console.log("Esse tri\u00E2ngulo \u00E9 um Tri\u00E2ngulo Acut\u00E2ngulo!");
}
else {
    console.log("algo deu errado!");
}
