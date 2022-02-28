/*
* 1) As rosas não falam
*/

const desafio1asRosasNaoFalam = () => {
  type callbackFn = () => void;
  const geraIntervaloAleatório = (): number => Math.floor(Math.random() * 3 * 1000);

  const queixoMeAsRosas = (cb: callbackFn) => {
    setTimeout(() => {
      console.log('Queixo-me às rosas');
      cb();
    }, geraIntervaloAleatório());
  };

  const masQueBobagem = (cb: callbackFn) => {
    setTimeout(() => {
      console.log('Mas que bobagem');
      cb();
    }, geraIntervaloAleatório());
  };

  const asRosasNaoFalam = (cb: callbackFn) => {
    setTimeout(() => {
      console.log('As rosas não falam');
      cb();
    }, geraIntervaloAleatório());
  };

  const simplesmenteAsRosasExalam = (cb: callbackFn) => {
    setTimeout(() => {
      console.log('Simplesmente as rosas exalam');
      cb();
    }, geraIntervaloAleatório());
  };

  const oPerfumeQueRoubamDeTi = (cb: callbackFn) => {
    setTimeout(() => {
      console.log('O perfume que roubam de ti, ai');
      cb();
    }, geraIntervaloAleatório());
  };

  queixoMeAsRosas(() => {
    masQueBobagem(() => {
      asRosasNaoFalam(() => {
        simplesmenteAsRosasExalam(() => {
          oPerfumeQueRoubamDeTi(() => {
          });
        });
      });
    });
  });
}

desafio1asRosasNaoFalam();