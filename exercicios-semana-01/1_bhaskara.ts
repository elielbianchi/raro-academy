/*
* 1. Faça um algoritmo que calcule a fórmula de equação quadrática ("fórmula de bháskara").
*/

// bloco de execução com teste

let a: number = 4;
let b: number = 2;
let c: number = -2;

let x: Array<number> = bhaskara(a, b, c);
console.log(`As raízes da função quadrática informada são: x': ${x[0]} e x'': ${x[1]}`);

// funções utilizadas

function bhaskara (a: number, b: number, c: number) {

    const delta: number = calculaDelta(a, b, c);
    verificaFuncaoQuadratica(a, delta);
    return [calculaX1 (a, b, delta), calculaX2 (a, b, delta)];
}

function calculaDelta(a: number, b: number, c: number): number {

    return (b * b) - (4 * a * c);
}

function verificaFuncaoQuadratica (a: number, delta: number): any {

    if (a === 0 || delta < 0) {
        throw 'A função não é uma função quadrática com raízes reais';
    } 
}

function calculaX1 (a: number, b: number, delta: number): number {

    return (-b + Math.sqrt(delta) / (2 * a));
}

function calculaX2 (a: number, b: number, delta: number): number {

    return (-b - Math.sqrt(delta) / (2 * a));
}