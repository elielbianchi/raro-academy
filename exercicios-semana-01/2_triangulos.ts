/*
* 2. Faça um algoritmo que recebe três valores numéricos, `a`, `b` e `c`. A partir dos valores 
* recebidos,  você precisa verificar se os valores forma um `triângulo equilátero`, um `triângulo 
* isósceles` ou um triângulo escaleno.
*/

// execução do teste

let a: number = 70;
let b: number = 40;
let c: number = 70;

console.log(tipoTriangulo(a, b, c));

function tipoTriangulo(a: number, b: number, c: number): string {

    seTriangulo(a, b, c);

    if (a === b || a === c || b === c) {
        return a === b && a === c ? 'É um triângulo equilátero' : 'É um triângulo isósceles';
    } else {
        return 'É um triângulo escaleno';
    }
}

function seTriangulo (a: number, b: number, c: number): any {

    const soma = a + b + c;

    if (soma !== 180) {
        throw 'Os ângulos informados não correspondem aos de um triângulo válido';
    }
}