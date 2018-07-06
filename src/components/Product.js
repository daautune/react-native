import React, {Component} from 'react';
import RatingProduct from './RatingProduct';
const Product = (props) => {
  return (
    props.products.map(p => (
      <div key={p.id}>
        <h3>{p.name}</h3>
        <p>{p.price}</p>
        <RatingProduct  rating = {p.rating} />
        <br/>
      </div>
  ))
  )
}

export default Product;
