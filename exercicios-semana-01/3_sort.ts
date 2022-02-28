/*
* 3. Faça um algoritmo que recebe um array de numeros, e retorne um novo array, com os 
* objetos ordenados.
*/
let array = [0,5,1,4,9,3]
console.log(ordenar(array));

function ordenar (numeros: Array<number>): Array<number> {
    
    let repetir: boolean = false;
    [numeros, repetir] =  bubbleSort(numeros, repetir);
    repetir === true ? ordenar(numeros) : numeros;

    return numeros;
}

function bubbleSort (numeros: Array<number>, repetir: boolean): any {

    const n: number = numeros.length;

    for(let i: number = 0; i < n-1; i++) {
        if (numeros[i] > numeros[i+1]) {
            [numeros[i], numeros[i+1]] = [numeros[i+1], numeros[i]];
            repetir = true;
        }
    }
    return [numeros, repetir];
}