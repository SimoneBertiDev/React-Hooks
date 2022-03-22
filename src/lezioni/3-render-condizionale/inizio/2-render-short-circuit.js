import React, { useState, useEffect } from "react";

const ShortRender = () => {
  const [parola, setParola] = useState("");
  const [toggle, setToggle] = useState(false);

  // const esempio = parola || 'sono un esempio';//or in line
  // const esempio2 = !parola && 'ho un valolrore';//and
  // //operatore ternario
  // const esempio3 = !parola === '' ? 'Valore' : 'simone'

  return (
    <div>
      {/* <h2>{esempio}</h2>
      <h2>{esempio2}</h2>
      {
        !parola && <h1>ciao sono un componente</h1>
      }
      {esempio3} */}

      <h1>{parola || "sono un esempio inserito un valore"}</h1>
      {toggle ? (
        <h2 className="text-success">vero</h2>
      ) : (
        <h5 className="text-danger">false</h5>
      )}
      <button className="button" onClick={() => setToggle(!toggle)}>
        Cambia
      </button>
    </div>
  );
};

export default ShortRender;
