import React from "react";
//Far vedere che il componente non si riaggiorna ma la variabile si
//Spiegare che cosa è un React Fragment e che è possibile abbreviarlo

const ErroreBase = () => {

  let titolo = "Hello Word";

  const cambiaTitolo = () => {
    
    titolo = "nuovo titiolo";
    console.log(titolo);
  };

  return (
    <>
      <h2>{titolo}</h2>
      <button
        type="button"
        onClick={cambiaTitolo}
        className="btn btn-info my-3"
      >
        info
      </button>
    </>
  );
};

export default ErroreBase;
