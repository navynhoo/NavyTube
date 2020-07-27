import React, { Fragment, useEffect, useState } from "react";
import Axios from 'axios';
import CardView from '../../components/CardView';

export default function Busca(props) {

  const [series, setSeries] = useState([])

  useEffect(
    function () {
      load()
    }, []
  )

  async function load() {
    try {
      const resposta = await Axios.get("https://api.themoviedb.org/3/tv/airing_today?api_key=fe4e3ad3705f21c8c91397087d739ff8&language=pt-BR")
      setSeries(resposta.data.results)
      console.log(resposta.data.results)
    } catch (erro) {
      console.log(erro)
    }
  }

  return (
    <div className="container">
      {series.map(
        (serie) => {
          return <CardView serie={serie} />
        }
      )}
    </div>
  );
}
