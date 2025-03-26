import React from 'react'
import Rating from "@mui/material/Rating";
import Currency from '../currenceformates/Currency';
import classes from './product.module.css'
function ProductCard({product}) {
  const { image, title, rating, price } = product;
  return (
    <div className={classes.card_continear}>
      <a href="">
        <img src={image} alt="" />
      </a>
      <div>
        <h3>{title}</h3>
        <div className={classes.rating}>
          {/* rating */}
          <Rating value={rating.rate} precision={0.1} />
          {/* count*/}
          <small>{rating.count}</small>
        </div>
        <div>
          {/* price */}
          <Currency amount={price} />
        </div>
        <button className={classes.btn}>add</button>
      </div>
    </div>
  );
}

export default ProductCard
