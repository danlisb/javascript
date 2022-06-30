const helloWorld1 = function() {
    return "Hello World!";
}

const helloWorld2 = () => {
    return "Hello World!";
}

const helloWorld3 = () => "Hello World!";

console.log(helloWorld1());
console.log(helloWorld2());
console.log(helloWorld3());

const soma1 = (a,b) => a + b;

const soma2 = a => a; //Quando se tem uma variável os () não são obrigatórios

console.log(soma1(2, 3));
console.log(soma2(10));