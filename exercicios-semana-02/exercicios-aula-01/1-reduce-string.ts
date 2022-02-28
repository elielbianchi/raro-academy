/* 
* 1) Abaixo você tem a lista de todos os ingredientes necessários para fazer um Hambúrguer. 
* Utilizando o reduce, como você pode fazer para unir todos os itens do array em uma única string
*/

const ingredientes = [
    '2 hambúrgueres',
    'alface',
    'queijo',
    'molho especial',
    'cebola',
    'picles',
    'pão com gergelim'
  ];
  
  const fazUmBigMac = (ingredientes: string[]): string => {
    return ingredientes.reduce((acumulador, valorAtual) => `${acumulador}, ${valorAtual}`);
  };

  /* Implementação com o forEach
  const fazUmBigMac1 = (ingredientes: string[]): string => {
    let frase: string = '';
    ingredientes.forEach((ingrediente) => frase += `, ${ingrediente}`);
    return frase.slice(2);
  }; */

  console.log(fazUmBigMac(ingredientes));