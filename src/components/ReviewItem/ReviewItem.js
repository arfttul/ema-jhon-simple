import React from "react";
import Rating from "react-rating";

const ReviewItem = (props) => {
  const { name, price, shipping, star, stock, key, quantity } = props.product;
  const { handleRemove } = props;
  return (
    <div
      style={{
        borderBottom: "1px solid black",
        padding: "10px",
        margin: "15px 0",
        borderRadius: "10px",
      }}
    >
      <h2>{name}</h2>
      <h3>Price:{price}</h3>
      <h3>Shipping: {shipping}</h3>
      <h2>Quantity: {quantity}</h2>
      <h3>
        Rating:{" "}
        <Rating
          initialRating={star}
          readonly
          emptySymbol="far fa-star icon-color"
          fullSymbol="fas fa-star icon-color"
        ></Rating>
      </h3>
      <h3>Available: {stock}</h3>
      <button
        style={{
          padding: "5px 10px",
          margin: "10px 0",
          backgroundColor: "tomato",
          color: "white",
        }}
        onClick={() => handleRemove(key)}
      >
        Remove
      </button>
    </div>
  );
};

export default ReviewItem;
