import { useState, useEffect } from "react";
import Swal from "sweetalert2";

export const Lifo = () => {
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
          nuevaPila.shift(); // Eliminar el primer elemento (último en entrar)
          setProcesosLifo(nuevaPila);
        } else {
          clearInterval(intervalId);
          Swal.fire({
            title: "Pila vaciada",
            icon: "info",
            confirmButtonText: "Llenar la pila",
          }).then(() => {
            reiniciarLlenado(); // Reiniciar el llenado al dar click en OK
          });
        }
      }, 2000); // Vaciar la pila cada segundo

      return () => clearInterval(intervalId);
    }
  }, [vaciarPila, procesosLifo]);

  useEffect(() => {
    if (alertaLlena) {
      Swal.fire({
        title: "Pila llena",
        icon: "warning",
        confirmButtonText: "Vaciar la pila",
      }).then(() => {
        setVaciarPila(true); // Iniciar el vaciado al dar click en OK
        setAlertaLlena(false); // Resetear la alerta de "Pila llena"
      });
    }
  }, [alertaLlena]);

  return (
    <>
      <div className="container d-flex justify-content-center">
        <div className="row col-4 mt-4">
          <h2>LIFO</h2>
          <div className="border border-4  border-black bg-light rounded-4">
            {procesosLifo.map((proceso, index) => (
              <div
                className="border  border-black border-2 bg-warning m-3 text-dark d-flex  justify-content-center fs-5 rounded-1"
                key={index}
              >
                {proceso}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
