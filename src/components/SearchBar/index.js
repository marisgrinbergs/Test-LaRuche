import React, { useState, useEffect } from 'react';
import './index.css';
import axios from 'axios';
import ListProducts from "../ListProducts/index";

const SearchBar = () => {
const [searchProduct, setSearchProduct] = useState("");
const [datas, setDatas] = useState([]);
useEffect(() => {
  axios.get(`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchProduct}&search_simple=1&action=process&fields=id%2Cproduct_name%2Cimage_front_small_url&json=1&page=1&page_size=24`, {}, { withCredentials: true})
  .then((response) => {
    console.log("response", response)
    setDatas(response.data.products)
  });
},[searchProduct]);
  return (
  <>
    <div className="App">
        <input 
          className="searchBar"
          type="text"
          placeholder="Recherchez votre produit"
          onChange={(event) => {setSearchProduct(event.target.value);
          }}
        />
    </div>
      <div className="List">
        {searchProduct !== "" ? <ListProducts datas={datas}/> : <p></p>}
      </div>
  </>
  );
}

export default SearchBar;
