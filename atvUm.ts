/* (5 pontos)
1 - Faça um programa que calcule e apresente o valor do volume de uma lata, sabendo que PI é 
um valor constante de 3.14159, o programa deve pedir os valores de RAIO e ALTURA, utilize a 
fórmula VOLUME = PI * RAIO² *ALTURA.
Nome: Nathália Caroline Gumbio
*/

const teclado = require (`prompt-sync`)();

let raio: number = parseFloat(teclado(`Digite o valor do raio da lata: `));

let altura: number = parseFloat(teclado(`Digite o valor da altura da lata: `))

let pi: number = 3.14159

let volume: number = pi * (raio * raio) * altura;

console.log (`O volume da lata é: ${volume}`);