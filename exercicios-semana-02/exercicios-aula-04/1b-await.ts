/*
* 1.b) Rosas não falam utilizando async/await
*/

const desafioUm2asRosasNaoFalam = async () => {
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

  await queixoMeAsRosas();
  await masQueBobagem();
  await asRosasNaoFalam();
  await simplesmenteAsRosasExalam();
  await oPerfumeQueRoubamDeTi();

}

desafioUm2asRosasNaoFalam();