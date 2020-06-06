import React from 'react';
import '../css/search.css';
import search_icon from '../images/search.png';


function Search() {
  return (
    <>
      <div class="logobar">

        <div class="searchbar">
          <input
            type="text"
            placeholder="Pesquisar"
            class="search"
          />
        </div>

        <div class="logo">
          <p>NavyTube</p>
        </div>



      </div>
    </>
  );

}

export default Search;

