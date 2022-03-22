import React, { useState, useEffect } from "react";

const ControlledInput = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cellulare, setCellulare] = useState("");
  const [persone, setPerone] = useState([]);

  const hedleSubmit = (e) => {
    e.preventDefault();
    if (nome && email && cellulare) {
      setPerone(
        [
          ...persone,{
            id: new Date(Date.now()).getTime().toString(),
            nome:nome,
            email: email,
            cellulare:cellulare
          }
         ]
      );
      console.log(nome + email + cellulare);
      setNome("");
      setEmail("");
      setCellulare("");
    } else {
      alert("riempi tutto il from");
    }
  };

  const hendelInput = (e) => {
    const { value } = e.target;
    setCellulare(value);
  };

  useEffect(() => {
    const { log } = console;
    // log(new Date(Date.now()).getTime().toString());
    log(persone);
  }, [persone]);

  return (
    <form className="bg-withe shadow p-4 rounded">
      {" "}
      {/*onSubmit={hedleSubmit}*/}
      <div className="form-group d-flex align-item-center justify-content-around container">
        <label htmlFor="nome" className="text-left font-weight-bold col-3">
          Nome:
        </label>
        <input
          id="name"
          type="text"
          name="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="form-control col-9"
        />
      </div>
      <div className="form-group d-flex align-item-center justify-content-around container">
        <label htmlFor="email" className="text-left font-weight-bold col-3">
          E-mail:
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control col-9"
        />
      </div>
      <div className="form-group d-flex align-item-center justify-content-around container">
        <label htmlFor="cellulare" className="text-left font-weight-bold col-3">
          Cellulare:
        </label>
        <input
          id="cellulare"
          type="tel"
          name="cellulare"
          value={cellulare}
          onChange={hendelInput}
          className="form-control col-9"
        />
      </div>
      <button type="submit" className="btn btn-info" onClick={hedleSubmit}>
        Invia
      </button>
    </form>
  );
};

export default ControlledInput;
