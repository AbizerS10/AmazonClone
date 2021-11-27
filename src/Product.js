import React from "react";
import "./product.css";
import { useStateValue } from "./StateProvider";

function Product({id,title,image,price,rating}) {

  const [{basket}, dispatch] = useStateValue();

  const addToBasket = () => {
      //dispatch the item into data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>Rs.</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating).fill().map((_, i) => {
              return <span>⭐</span>;
          })}   
        </div>
      </div>
      <img
        src={image}
        alt="Lean_Startup_img"
      />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
