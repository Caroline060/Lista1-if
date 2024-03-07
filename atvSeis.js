/* (15 pontos)
6 – Ler valor de nota de N1 e N2 calcule a média e escrever a nota correspondente, tal que 0
é a menor nota e 10 a maior, e imprimir o conceito equivalente (A, B, C, D ou E), conforme
a seguinte tabela:
  A  -   nota=>8,5  nota=<10
  B  -   nota=>7     nota<8,5
  C  -   nota=>5     nota<7
  D  -   nota=>3     nota<5
  E  -   nota>3

Nome Aluno: Nathália Caroline Gumbio
*/
var teclado = require("prompt-sync")();
var n1 = parseFloat(teclado("Digite o valor da nota N1: "));
var n2 = parseFloat(teclado("Digite o valor da nota N2: "));
var media = (n1 + n2 / 2);
console.log("A nota correspondente a essa m\u00E9dia \u00E9 ".concat(media));
if (media >= 8.5 && media <= 10) {
    console.log("A nota \u00E9 equivalente a \"A\"");
}
else if (media >= 7 && media < 8.5) {
    console.log("A nota \u00E9 equivalente a \"B\"");
}
else if (media >= 5 && media < 7) {
    console.log("A nota \u00E9 equivalente a \"C\"");
}
else if (media >= 3 && media < 5) {
    console.log("A nota \u00E9 equivalente a \"D\"");
}
else if (media > 3) {
    console.log("A nota \u00E9 equivalente a \"E\"");
}
else {
    console.log("algo deu errado!");
}
