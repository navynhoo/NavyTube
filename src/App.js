import React from 'react';
import './App.css';
import './container.css';

import Search from './components/search'
import Menu from './components/menu';
import CardView from './components/CardView'

function App() {
  return (
    <div className="body">
      <Search />
      <div className="container">
        <CardView />
      </div>
    </div>
  );
}

export default App;
