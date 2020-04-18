//1 faça um loop que mostre 15 vezes uma mensagem ( "ola Reprograma ")
//2  Crie um array de string  e percorra (for of)exibindo cada texto do array.
//3 Crie uma array de objetos e percorrra ( for of) mostrando apenas uma propriedade.
//4 Um loop que leia o nome de cinco pessoas .

//respostas

//let mensagem = ('ola reprograma ')
//for (let i = 0; i < 15;i++) {
////    alert("Olá Reprograma");//
//}

//let names = ["guilherme", "samuel","marco","thassia"]

//for (let valeu of names) {
   //// alert(valeu);

   //resolução   do 4
   // for(let cont = 1  ; cont <=5; cont++){
////prompt ("digite seu nome").
// outro exemplo
//for (let cont = 1; cont <=5; cont++){
//let nome = prompt("digite um nome");
//listadeNom[
  //  es.push(nome);
//}console.log ('lista de nomes')
//}
 //5 let frutas =["banana,"abacaxi","manga
 //frutas.filter((f)) = console.log("eu amo essas frutas"+hgh).

 //6 faça um programa que receba dez numeros calcule  e imprima a soma dos numeros pares e
 //a soma dos numeros impares.
 
 // - for para ler 10 prompt 
let numero = 0, somaImpares = 0, somaPares = 0,  contPar = 0, contImpar = 0;

for (let num = 1; num <= 10; num++) {
    numero = parseInt(prompt(`Digite o número ${num} :`));

    if (numero % 2 === 0) {
        contPar++;
        somaPares += numero;
    }
    else {
        contImpar++; 
        somaImpares += numero;
    }
}

console.log(somaImpares, 'soma de numero impares');
console.log(somaPares, 'soma de numeros pares');
console.log(contPar, 'total de pares');
console.log(contImpar, 'total de impares');


//6. Faça um programa que receba a idade, o peso e o sexo de 10 pessoas. Calcule e imprima:
//total de homens;
//total de mulheres;
//média das idades dos homens;
//média dos pesos das mulheres.
//dica for até 10 = 3 prompts (idade,sexo,peso);
//contar qtde de mulheres
//qtde de mulheres
//media de idade dos homens (soma das idades)
//media dos pesos das mulheres (soma dos pesos
// media = soma / qtde


//git merge upstream/master
////atualizando repositorio criado por fork

////https://gist.github.com/rdeavila/9618969

//http://lucasmaiaesilva.com.br/posts/como-sincronizar-o-fork-feito-pelo-github//
//https://www.lambda3.com.br/2016/02/mantendo-um-fork-atualizado-no-github/
