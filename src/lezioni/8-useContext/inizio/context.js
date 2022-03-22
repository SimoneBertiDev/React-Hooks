import React, { useState, useContext } from "react";
import { data } from "../../../data";

const AppContext = React.createContext();
//Provider o Consumer

const MainComponent = () => {
  const [people, setPeople] = useState(data);

  const removePeople = (id) => setPeople(people.filter((el) => el.id !== id));
  return (
    <AppContext.Provider value={{ people, removePeople }}>
      <div>
        <h3>useContext</h3>
        <Elenco />
      </div>
    </AppContext.Provider>
  );
};

const Elenco = () => {
  // const info = useContext(AppContext);
  const {people} = useContext(AppContext);
  return (
    <div>
      {people.map((el, index) => {
        return <Persona key={index} {...el} />;
      })}
    </div>
  );
};

const Persona = ({ id, name, }) => {
  // const info = useContext(AppContext);
  // console.log(info);
  const {removePeople} = useContext(AppContext);

  return (
    <div className="item show">
      <h5> {name} </h5>
      {/* <button className="button delete-button" onClick={() => info.removePeople(id)}> */}
      <button className="button delete-button" onClick={() => removePeople(id)}>
        {" "}
        x{" "}
      </button>
    </div>
  );
};

export default MainComponent;
