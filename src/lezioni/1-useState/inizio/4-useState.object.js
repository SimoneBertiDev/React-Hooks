import React, { useState } from "react";

const StateObject = () => {
  // const [name, setName] = useState("dario");
  // const [age, setAge] = useState(24);
  // const [saluto, setSaluto] = useState("Ciao");
  

  const [person, setPerson] = useState({
    id:1,
    name:'dario',
    age: 24,
    saluto:"Ciao",
  })

  const cambiaSaluto = () => {
    setPerson({
      ...person,//in modo tale di non perdere i dati precedenti
      age:25,
      saluto:"Ciao ho fatto gli anni"
    })
    // setSaluto("Ciao ho fatto gli anni");
    // setAge(25);
  };

  return (
    <div className="item shadow">
      <div className="text-left">
        <h5>{person.name}</h5>
        <h5>{person.age}</h5>
        <h6>{person.saluto}</h6>
      </div>
      <button className="button" onClick={cambiaSaluto}>
        cambia il saluto
      </button>
    </div>
  );
};

export default StateObject;
