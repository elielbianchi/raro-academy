/*
* 1.a) Rosas não falam utilizando promises
*/

const desafioUm1AsRosasNaoFalam = () => {
  const geraIntervaloAleatório = (): number => Math.floor(Math.random() * 3 * 1000);

  const timeout = (ms: number, frase: string): Promise<void> => {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(frase);
        resolve();
      }, ms);
    });
  };

  const queixoMeAsRosas = () => {
    return timeout(geraIntervaloAleatório(), 'Queixo-me às rosas');
  };

  const masQueBobagem = () => {
    return timeout(geraIntervaloAleatório(), 'Mas que bobagem');
  };

  const asRosasNaoFalam = () => {
    return timeout(geraIntervaloAleatório(), 'As rosas não falam');
  };

  const simplesmenteAsRosasExalam = () => {
    return timeout(geraIntervaloAleatório(), 'Simplesmente as rosas exalam');
  };

  const oPerfumeQueRoubamDeTi = () => {
    return timeout(geraIntervaloAleatório(), 'O perfume que roubam de ti, ai');
  };

  queixoMeAsRosas()
    .then(() => masQueBobagem())
    .then(() => asRosasNaoFalam())
    .then(() => simplesmenteAsRosasExalam())
    .then(() => oPerfumeQueRoubamDeTi());

}

desafioUm1AsRosasNaoFalam();