/* 4. Implementar a união dos grupos a e b. Os valores do objeto resultante devem 
* ser todos únicos
* 5. Implementar a interseção dos gupos a e b.
* 6. Implementar a diferença de a e b
*/

const a = [1, 2, 3, 4, 5, 6];
const b = [4, 4, 5, 6, 7, 8];

console.log(`A união das duas arrays: [${uniao(a, b)}]`);
console.log(`A interseção das duas arrays: [${intersecao(a, b)}]`);
console.log(`A diferença de 'a' e 'b': [${diferenca(a, b)}]`);

// funcoes 4-uniao, 5-intersecao e 6-diferenca

function uniao(array1: Array<number>, array2: Array<number>): Array<number> {

    let arrayUniao: Array<number> = [...array1];
    for (let i = 0; i < array2.length; i++) {
        let unico: boolean = true;
        for (let j = 0; j < array1.length; j++) {
            if (array2[i] === array1[j]) {
                unico = false;
                break;
            }
        }

        unico === true ? arrayUniao.push(array2[i]) : arrayUniao
    }
    
    return arrayUniao;
}

function intersecao(array1: Array<number>, array2: Array<number>): Array<number> {
    
    let arrayInter = [];
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                arrayInter.push(array2[j]);
                break;
            }
        }
    }
    return arrayInter;
}

function diferenca(array1: Array<number>, array2: Array<number>): Array<number> {
    
    let arrayDif: Array<number> = [];
    for (let i = 0; i < array1.length; i++) {
        let repetido: boolean = false;
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                repetido = true;
                break;
            }
        }

        repetido === false ? arrayDif.push(array1[i]) : arrayDif
    }
    
    return arrayDif;
}