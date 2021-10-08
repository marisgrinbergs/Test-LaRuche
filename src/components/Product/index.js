import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Product = ( data ) => {
  const ids = data.history.location.state.data.id;
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios.get(`https://world.openfoodfacts.org/api/v0/product/${ids}.json?fields=product_name%2Ccategories%2Cimage_front_url%2Callergens_hierarchy%2Cingredients_text`, {}, { withCredentials: true})
    .then((response) => {
      setProduct(response.data.product)
    });
  }, [ids]);
  return (
        <div className="Product">
        <h2>Nom du produit : {product.product_name}</h2>
        <h3>catégories : {product.categories}</h3>
        <img src={product.image_front_url} alt="produit" />
        <p>allergenes : {product.allergens_hierarchy} </p>
        <p> ingrédients : {product.ingredients_text}</p>
        </div>
  );
}

export default Product;
