import React from "react";
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import About from "./About";
import home from "./Home";
import ErrorPage from "./ErrorPage";
import Progetti from "./Progetti"
import SingleProgetto from './SingleProgetto'

const index = () => {
  return (
    <Router>
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">
            about
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/progetti">
            Progetti
          </Link>
        </li>
      </ul>
      <Switch>
        {/*ci permette di prendere solo una rotta senza questo vaerrano fuori entrambe le rotte*/}
        <Route path="/" exact component={home} />
        <Route path="/about" component={About} />
        <Route path="/progetti" component={Progetti} />
        <Route path="/progetto/:id" component={SingleProgetto} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </Router>
  );
};

export default index;
