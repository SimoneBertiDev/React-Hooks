import React, { useState, useEffect } from "react";
import Axios from "axios";

// const url = "https://api.github.com/users";
const url = "http://localhost:8080/user";

const FetchComponent = () => {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    const responde = await Axios.get(url);
    if (responde.status === 200) {
      setUsers(responde.data);
    }

    // Axios.get(url).then( reposnse => setUsers(reposnse)).catch(err => console.log(err));
  };

  useEffect(() => {
    getData();
  },[]);

  return (
    <>
      <ul>
        {users.map((el) => {
          const {userId, firstName, lastName, userType, startDate, codiceFiscale, eta} = el
          return (
            <li key={userId}>
              <h5>{firstName} {lastName}</h5>
              <p>Tipo abbonamento {userType}, inizio {startDate}</p>
              <p>Dati personali {codiceFiscale.toUpperCase()}, nato il {eta}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FetchComponent;
