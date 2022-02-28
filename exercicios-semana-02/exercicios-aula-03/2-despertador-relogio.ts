/*
* 2) Relógio e despertador
*/

const despertador = (intervaloEmSegundos: number) => {
    setTimeout(() => {
        console.log(`passaram-se os ${intervaloEmSegundos} segundos`);
      }, intervaloEmSegundos*1000);
  }
  
  const relogio = () => {
    setInterval(() => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const seconds = String(now.getSeconds()).padStart(2, "0");
        console.log(`${hours}:${minutes}:${seconds}`);
      }, 1000);
  };

  despertador(10);
  relogio();
  