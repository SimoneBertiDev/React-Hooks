import React, { useState, useEffect } from "react";
import Axios from "axios";

// const url = "https://api.github.com/users";
const url = "http://localhost:8080/user";

const FetchComponent = () => {
  const [users, setUsers] = useState([]);
  const [simone, setSimone] = useState(false);
  const [id, setID] = useState(false);


  const getData = async () => {
    const responde = await Axios.get(url);

    setUsers(responde.data);

    // Axios.get(url).then( reposnse => setUsers(reposnse)).catch(err => console.log(err));
  };

  const delData = (id) => {
    setSimone(true);
    setID(id);
  };
const getsih = () => {
  setSimone(false);
}
  useEffect(() => {
    getData();
    if(simone === true){//funziona ma se si ripete molteplice volte va in crash
      Axios.delete(url + "/" + id);
      getsih();
    }
  },[id, users, simone]);

  return (
    <>
      {users.map((el) => {
        const {
          userId,
          firstName,
          lastName,
          userType,
          startDate,
          codiceFiscale,
          eta,
        } = el;
        return (
          <div key={userId} className="item shadow">
            <h5>
              {firstName} {lastName}
            </h5>
            <p>
              Tipo abbonamento {userType}, inizio {startDate}
              <span>
                Dati personali {codiceFiscale.toUpperCase()}, di eta {eta}
              </span>
            </p>
            <button
              className="btn btn-danger"
              onClick={() => delData(userId)}
            >
              eleiminare
            </button>
          </div>
        );
      })}
    </>
  );
};

export default FetchComponent;
