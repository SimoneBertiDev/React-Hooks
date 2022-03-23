import React from "react";
import { useParams, useHistory } from "react-router-dom";
const SingleProgetto = ({ history, location, match }) => {
  //   console.log(location);
  //   console.log(history);
  //   console.log(match.params.id);

  const forcePageChange = () => {
      if(Number(id) === 1 || Number(id) === 2){
          history.push("/progetto/3");
      }else{
        routerHistrory.push("/progetto/1");
      }
  }
  const routerHistrory = useHistory();
  const { id } = useParams();
  return (
    <div>
      <h4>progetto numero {id}</h4>
      <button className="btn btn-dark" onClick={forcePageChange}>
          cambia progetto
      </button>
    </div>
  );
};

export default SingleProgetto;
