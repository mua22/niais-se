import React from "react";

const Product = props => {
  console.log(props);
  return (
    <div className="product">
      <h3>{props.title}</h3>
      <p>PKR: {props.price}</p>
      <button>Like Me</button>
    </div>
  );
};

export default Product;
