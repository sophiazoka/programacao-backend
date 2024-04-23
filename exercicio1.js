//ex 1
const idade = 18;


if (idade < 18) {
    console.log("menor de idade")
} else {
    console.log("maior de idade")
};

//ex 2
let saldoConta = -50;

if (saldoConta < 0) {
    console.log("Saldo Positivo")
}else {
console.log("Saldo Negativo")
}

//ex 3
const array = [1,2,3,4,5,6,7,8,9,10];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

//ex 4
for (let i = 1; i <= 10; i += 2) {
    console.log(i);
}

//ex 5

for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}

//ex 6

function ehNegativo(numero) {
    return numero < 0;
}

//ex 7

function soma(a, b) {
    return a + b;
}

//ex 8

function menorNumero(a, b, c) {
    return Math.min(a, b, c);
}

//ex 9

function ehPar(numero) {
    return numero % 2 === 0;
}

//ex 10

function fatorial(n) {
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

//ex 11

let somaPares = 0;
for (let i = 2; i <= 100; i += 2) {
    somaPares += i;
}
console.log(somaPares);

//ex 12

function ehMultiplo(a, b) {
    return a % b === 0;
}

//ex 13

function classificaNumero(numero) {
    if (numero < 0) {
        console.log("Negativo");
    } else if (numero > 0) {
        console.log("Positivo");
    } else {
        console.log("Zero");
    }
}

//ex 14

function somaDivisivelPorCinco(a, b) {
    return (a + b) % 5 === 0;
}

//ex 15

function celsiusParaFahrenheit(celsius) {
    return celsius * 9/5 + 32;
}