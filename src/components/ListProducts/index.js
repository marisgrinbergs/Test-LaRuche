import React from 'react';
import './index.scss';
import {
    Link
  } from "react-router-dom";


const ListProducts = ({ datas }) => {
  return (
    datas.map((data) => ( 
      <div className="ListProducts" key={data.id}>
          <ul>
                   <Link to={{ 
                    pathname: `/Product/${data.id}`,
                    state: {data} 
                    }}>
                      <li>
                          <img src={data.image_front_small_url} alt="product" style={{width: '67px', height: '100px'}}/>
                          <p>{data.product_name}</p>
                      </li>
                  </Link>
          </ul>
      </div>
     )));
}

export default ListProducts;
