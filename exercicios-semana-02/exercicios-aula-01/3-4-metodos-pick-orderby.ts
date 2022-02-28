const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
];

/*
* 3) Implementar o método de pick que receba um parâmetro do tipo array de objetos, 
* e outro parâmetro do tipo array de strings. Este método deverá retornar todos os 
* itens do array original, porém, mantendo somente os atributos com os nomes passados 
* no segundo atributo. Importante: o array original deve ser mantido intacto.
*/

type myObj = Record<string, any>;
// TODO: refatorar função orderBy para que aceite o tipo Record<string, unknown>

function pick<T extends myObj>(items: Array<T>, ...keys: Array<(keyof T)>): Array<myObj> {
    const arrayPick: Array<myObj> = [];
    const allKeys: Array<string> = (Object.keys(items[0]));
    
    items.forEach(function(item, index) {
        arrayPick.push({})
        
        allKeys.forEach(function(eachKey) {
            if (keys.includes(eachKey)) {
                arrayPick[index][eachKey] = item[eachKey];
            }
        });
    });

    return arrayPick;
};

console.log('Saída função pick:')
console.log(pick(alunos, 'nome', 'nota'));

/*
* 4) Ainda com o mesmo exemplo dos alunos, implementar agora um método chamado orderBy. 
* Esse método deverá receber um parâmetro do tipo array de objetos, e outro parâmetro, 
* um array de strings. O método deverá retornar um novo array, com os objetos ordenados 
* de acordo com o critério do array de strings. Importante: O array original deve ser 
* mantido intacto.
*/

// O código abaixo utiliza do tipo e da função do exercício acima, número 3.

function orderBy <T extends myObj>(items: Array<T>, ...keys: Array<(keyof T)>) {
    const picked = pick(items, ...keys) 

    const compare: any = (objectA: myObj, objectB: myObj, i: number = 0) => {
        const valueA = objectA[keys[i] as string]
        const valueB = objectB[keys[i] as string]
    
        if (valueA > valueB) {
          return 1;
        }
    
        if (valueA < valueB) {
          return -1;
        } 

        if (keys[i+1]) {
            i += 1;
            return compare (objectA, objectB, 1);
        }
        
        return 0;
      }

    return picked.sort(compare)
}

console.log('\nSaída função orderBy:')
console.log(orderBy(alunos, 'nota', 'nome'));