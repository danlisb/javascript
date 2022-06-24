/*Crie uma função que recebe dois números como parâmetros.
Confira se os números são iguais.
Confira se a soma dos números é maior que 10 ou menor que 20.
Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20".

Exemplo:
Input: 1, 2
Output: Os números 1 e 2 não são iguais. Sua soma é 3, que é menor que 10 e menor que 20.*/

function comparaNumeros(a, b) {
    //Conferindo se os números são iguais
    a == b ? console.log("Os números", a, "e" , b, "são números iguais.") : console.log("Os números", a, "e", b, "não são números iguais.");

    //Conferindo se a soma dos números é maior/menor que 10 ou maior/menor que 20
    if (a + b > 10 && a + b < 20) {
        console.log(`Sua soma é ${a + b},que é maior que 10 e menor que 20.`);
    }

    if (a + b > 10 && a + b > 20) {
        console.log(`Sua soma é ${a + b}, que é maior que 10 e maior que 20.`);
    }

    if (a + b < 10 && a + b < 20) {
        console.log(`Sua soma é ${a + b}, que é menor que 10 e menor que 20.`);
    }
}

comparaNumeros(1, 2);