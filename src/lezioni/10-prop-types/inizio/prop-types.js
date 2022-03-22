import React from "react";
import { datiIncompleti } from "../../../data";
import PropTypes from "prop-types";

const imageDefoult =
  "https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png";

const PropComponent = () => {
  return (
    <div>
      {datiIncompleti.map((el) => {
        // console.log(el);
        return <Prodotto key={el.id} {...el} />;
      })}
    </div>
  );
};

const Prodotto = ({ nome, prezzo, image }) => {
  // console.log(nome, prezzo, image);
  const imgi = image && image.url;
  return (
    <article className="shadow card my-3 p-2">
      Singolo componente
      <div className="card-body">
        <img
          src={imgi || imageDefoult}
          alt={nome || "divano default"}
          className="card-img-top"
        />
        <div className="card-text">
          <h4 className="card-title">{nome || "divano default"}</h4>
          <p className="card-subtitle">€{prezzo || 19.99}</p>
        </div>
      </div>
    </article>
  );
};

Prodotto.prototype = {
  nome: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  prezzo: PropTypes.number.isRequired,
};

Prodotto.defaultProps = {
  nome: "divano",
  prezzo: 17.99,
};

export default PropComponent;
