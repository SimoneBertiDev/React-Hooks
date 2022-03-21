import React, { useEffect } from "react";

const useEffectBasi = () => {
  // console.log("consoel");

  const [value, setValue] = React.useState(0);

  // const funzio = () => {
  //   console.log("secondo use effect");
  // };

  useEffect(() => {
    console.log("sono il primo ");
    if (value < 1) {
      document.title = "primo Messaggio :" + value;
    } else {
      document.title = "Nuovo Messaggio :" + value;
    }
    return () => console.log("clane Up function");
  }, [value]);

  // useEffect(funzio ,[]);

  const aumenta = () => {
    setValue((oldValue) => oldValue + 1);
  };

  return (
    <div className="item">
      <h4>
        {" "}
        Value : <span>{value}</span>{" "}
      </h4>
      <button className="button" onClick={aumenta}>
        Amuenta
      </button>
    </div>
  );
};

export default useEffectBasi;
