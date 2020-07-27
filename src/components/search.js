import '../css/search.css'
import search_icon from '../images/search.png'
import React, { useState } from 'react'


function Search(props) {

  const [search, setSearch] = useState("");

  return (
    <>
      <div className="logobar">
        <form action="">
          <input type="text"
            placeholder="Pesquisar"
            name="search"
            id="search"
            onChange={(e) => setSearch(e.target.value)} />
          <button type="submit">Procurar</button>
        </form>

        <div className="logo">
          <p>NavyTube</p>
        </div>


      </div>
    </>
  );

}

export default Search;

