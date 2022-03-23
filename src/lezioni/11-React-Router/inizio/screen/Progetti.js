import React from "react";
import { Link } from "react-router-dom";
const Progetti = () => {
  return (
    <div>
      <Link to="progetto/1" className="nav-link">
        Progetto 1
      </Link>
      <Link to="progetto/2" className="nav-link">
        Progetto 2
      </Link>
      <Link to="progetto/3" className="nav-link">
        Progetto 3
      </Link>
    </div>
  );
};

export default Progetti;
