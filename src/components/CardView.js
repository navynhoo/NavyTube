import React from 'react';
import '../css/card.css'

function CardView({ serie }) {
  const imgUrl = "https://image.tmdb.org/t/p/w200"
  return (

    /*<section className="cards">*/
    <div className="card-anime">
      <div className="poster-image"
        style={{
          backgroundImage: `url(${imgUrl}${serie.poster_path})`
        }}
      >
      </div>
      <div className="card-detail">

        <h1 className="titulo-anime">{serie.name}</h1>
        <div className="text">
          <h2 className="descricao-anime"> {serie.first_air_date} </h2>
          <h2 className="descricao-anime"> <span className="material-icons">star</span> {serie.vote_average}</h2>
        </div>
      </div>
      <button className="botao">
        <a href="#">
          <span className="material-icons">play_circle_filled</span> Assistir
      </a>
      </button>
    </div>
    /*</section>*/
  );
}

export default CardView;