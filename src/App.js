import React from 'react';
import './App.css';
import './container.css';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import Search from './components/search';
import Menu from './components/menu';
import Lancamentos from './pages/lancamentos/lancamento';
import Sobre from './pages/sobre/sobre';
import Busca from './pages/busca/busca';

function App() {
  return (
    <div className="body">

      <Search />
      <BrowserRouter>
        <NavLink className="nav-link" to="/lancamentos">Lançamentos</NavLink>
        <NavLink className="nav-link" to="/sobre">Sobre</NavLink>
        <Switch>

          <Route exact path="/" component={Lancamentos} />
          <Route path="/lancamentos" component={Lancamentos} />
          <Route path="/sobre" component={Sobre} />
          <Route path="/busca" component={Busca} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
