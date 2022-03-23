import React, {useEffect} from "react";
import { useHistory, useLocation } from "react-router-dom";

const ErrorPage = ({ location, history }) => {
  const storia = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => {
      storia.push("/");
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // console.log(location, history);
  return <div>Pagina non esistente</div>;
};

export default ErrorPage;
