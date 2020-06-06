import React from 'react';
import '../css/card.css'

function CardView() {
  return (
    <div className="card-anime">
      <div className="poster-image"></div>
      <div className="card-detail">
        
        <h1 className="titulo-anime">BOKU NO HERO ACADEMIA</h1>
        <h2 className="descricao-anime">Shounen, escolar</h2>
        <h2 className="descricao-anime"> 89 Episódios</h2>
        <span className="material-icons">star</span>
        <h2 className="descricao-anime">9.9</h2>
      </div>
      <a href="#">
        <span className="material-icons">play_circle_filled</span>
        Assistir
      </a>
    </div>
  );
}

export default CardView;