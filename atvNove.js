/* (15 pontos)
9- Para doar sangue é necessário ter entre 18 e 67 anos e possuir mais de 60Kg. Faça
um aplicativo que pergunte a idade de uma pessoa e seu peso e diga se ela pode
doar sangue ou não, caso não diga o(s) motivo(s).
Nome: Nathália Caroline Gumbio
*/
var teclado = require("prompt-sync")();
var idade = parseFloat(teclado("Digite sua idade: "));
var peso = parseFloat(teclado("Digite quanto voc\u00EA pesa: "));
if (idade >= 18 && idade <= 67) {
    if (peso > 60) {
        console.log("Voc\u00EA pode doar sangue!");
    }
}
else {
    console.log("Voc\u00EA n\u00E3o pode doar sangue!");
}
