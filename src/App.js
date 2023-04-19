import React from 'react';
import {BrowserRouter as Switch, Route, Link, Router} from 'react-router-dom';
import Mensagem from "./Mensagem";

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="mensagem">Mensagem</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/mensagem">
          <Mensagem />
        </Route>
        <Route path="/">
          <h1>Bem-vindo ao App!</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
