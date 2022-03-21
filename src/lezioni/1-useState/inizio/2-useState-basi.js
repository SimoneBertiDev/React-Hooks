import React, { useState } from "react";
// Gli Hooks devono essere usasti con use davanti
// componenti devono avere la prima lettere Maiuscola
// Gli Hook devono essere invocati all'interno del corpo/funzione del componente
// Gli Hook non possono essere utilizzati in maniera condizionale

const UsoBase = () => {
  //   const value = useState()[0];
  //   const handler = useState()[1];
  //   console.log(value, handler);
  // const {log} = console;
  // log(useState('Hello word!!'));
  // const value = useState()[0];
  // const handler = useState()[1];
  // log(value,handler);

  const [titolo, setTitolo] = useState("Hello Word!!");
  const cambiaTitolo = () => {
    if(titolo === "Hello Word!!"){
    setTitolo("React Magic!!");
    }else{
      setTitolo("Hello Word!!");
    }
  }
  return (
    <>
      <h2> {titolo} </h2>
      <button className="btn btn-info" type="button" onClick={cambiaTitolo}>
        Cambiami
      </button>
    </>
  );
};

export default UsoBase;
