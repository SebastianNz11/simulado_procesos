import { useState, useEffect } from "react";

export const Vrs = () => {
  // Código del componente FIFO
  const [procesosLifo, setProcesosLifo] = useState([]);
  const [conteoProcesos, setConteoProcesos] = useState(0);
  const [vaciarPila, setVaciarPila] = useState(false);
  const [alertaLlena, setAlertaLlena] = useState(false);

  const agregarProceso = () => {
    const nuevoProceso = Math.floor(Math.random() * 100);
    setProcesosLifo([nuevoProceso, ...procesosLifo]);
    setConteoProcesos(conteoProcesos + 1);
  };

  const reiniciarLlenado = () => {
    setProcesosLifo([]);
    setConteoProcesos(0);
    setVaciarPila(false);
  };

  useEffect(() => {
    const intervalId = setInterval(agregarProceso, 2000);

    if (conteoProcesos === 10) {
      clearInterval(intervalId);
      setAlertaLlena(true); // Mostrar alerta de "Pila llena"
    }

    return () => clearInterval(intervalId);
  }, [conteoProcesos]);

  useEffect(() => {
    if (vaciarPila) {
      const intervalId = setInterval(() => {
        if (procesosLifo.length > 0) {
          const nuevaPila = [...procesosLifo];
          nuevaPila.pop(); // Eliminar el último elemento (último en entrar)
          setProcesosLifo(nuevaPila);
        } else {
          clearInterval(intervalId);
          // No se muestra la alerta
          reiniciarLlenado(); // Reiniciar el llenado al dar click en OK
        }
      }, 2000); // Vaciar la pila cada 2 segundos

      return () => clearInterval(intervalId);
    }
  }, [vaciarPila, procesosLifo]);

  useEffect(() => {
    if (alertaLlena) {
      // No se muestra la alerta
      setVaciarPila(true); // Iniciar el vaciado al dar click en OK
      setAlertaLlena(false); // Resetear la alerta de "Pila llena"
    }
  }, [alertaLlena]);

  // Código del componente LIFO
  const [procesosLifoLifo, setProcesosLifoLifo] = useState([]);
  const [conteoProcesosLifo, setConteoProcesosLifo] = useState(0);
  const [vaciarPilaLifo, setVaciarPilaLifo] = useState(false);
  const [alertaLlenaLifo, setAlertaLlenaLifo] = useState(false);

  const agregarProcesoLifo = () => {
    const nuevoProcesoLifo = Math.floor(Math.random() * 100);
    setProcesosLifoLifo([nuevoProcesoLifo, ...procesosLifoLifo]);
    setConteoProcesosLifo(conteoProcesosLifo + 1);
  };

  const reiniciarLlenadoLifo = () => {
    setProcesosLifoLifo([]);
    setConteoProcesosLifo(0);
    setVaciarPilaLifo(false);
  };

  useEffect(() => {
    const intervalId = setInterval(agregarProcesoLifo, 2000);

    if (conteoProcesosLifo === 10) {
      clearInterval(intervalId);
      setAlertaLlenaLifo(true); // Mostrar alerta de "Pila llena"
    }

    return () => clearInterval(intervalId);
  }, [conteoProcesosLifo]);

  useEffect(() => {
    if (vaciarPilaLifo) {
      const intervalId = setInterval(() => {
        if (procesosLifoLifo.length > 0) {
          const nuevaPilaLifo = [...procesosLifoLifo];
          nuevaPilaLifo.shift(); // Eliminar el primer elemento (último en entrar)
          setProcesosLifoLifo(nuevaPilaLifo);
        } else {
          clearInterval(intervalId);
          // No se muestra la alerta
          reiniciarLlenadoLifo(); // Reiniciar el llenado al dar click en OK
        }
      }, 2000); // Vaciar la pila cada segundo

      return () => clearInterval(intervalId);
    }
  }, [vaciarPilaLifo, procesosLifoLifo]);

  useEffect(() => {
    if (alertaLlenaLifo) {
      // No se muestra la alerta
      setVaciarPilaLifo(true); // Iniciar el vaciado al dar click en OK
      setAlertaLlenaLifo(false); // Resetear la alerta de "Pila llena"
    }
  }, [alertaLlenaLifo]);

  return (
    <div className="container">
      <div className="row p-2">
        <div className="col-6 border border-5 p-3">
          <h2>FIFO</h2>
          <div className="border border-4  border-black bg-light rounded-4">
            {procesosLifo.map((proceso, index) => (
              <div
                className="border border-black border-2 bg-warning m-3 text-dark d-flex justify-content-center fs-5 rounded-1"
                key={index}
              >
                {proceso}
              </div>
            ))}
          </div>
        </div>
        <div className="col-6 border border-5 p-3">
          <h2>LIFO</h2>
          <div className="border border-4  border-black bg-light rounded-4">
            {procesosLifoLifo.map((proceso, index) => (
              <div
                className="border border-black border-2 bg-success-subtle m-3 text-dark d-flex justify-content-center fs-5 rounded-1"
                key={index}
              >
                {proceso}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
