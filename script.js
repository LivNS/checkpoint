/* 3- Escreva  um  programa  que  calcula  o  índice  de  massa  corporal 
(IMC)  de  uma  pessoa  e  exibe  uma mensagem indicando se ela está abaixo,
no peso ideal ou acima do peso. Considere as seguintes faixas de IMC:  abaixo 
de  18,5  (abaixo  do  peso),  entre  18,5  e  24,9  (peso  ideal)  e  acima  
de  24,9  (acima  do  peso). */

//Prompt para o usuário indicar seu peso e altura para que o programa calcule o IMC
//a altura deve ser indicada com um ponto (ex: 1.60)

const massa = parseFloat(prompt("Digite seu peso em kg:"));
const altura = parseFloat(prompt("Digite sua altura em metros :"));
const imc = massa/(altura ** 2);
document.write("Seu IMC é ", imc.toFixed(2),"<br><br>" );


// se menor ou maior que 

if (imc < 18.5 ) {
    document.write("Você está abaixo do peso.");
} else if (imc <= 24.9 ) {
    document.write("Você está no peso ideal.");
} else {
    document.write("Você está acima do peso.");
}





/* 4- Faça um programa que receba a idade de uma pessoa e exiba
uma mensagem indicando em qual faixa etária ela se encontra: criança 
(até 12 anos), adolescente (entre 13 e 18 anos), adulto (entre 19 e 60 anos)
 ou idoso (mais de 60 anos). Exemplifique e demonstre a saída!*/

 

const idade =parseInt(prompt("Digite sua idade: "))

if (idade <= 12){
    document.write("Você é uma criança! ")
}else if (idade <=18){
    document.write("Você é adolescente! ")
}else if (idade <=60){
    document.write("Você é adulto! ")
}else {
    document.write("Você é idoso!")
}
