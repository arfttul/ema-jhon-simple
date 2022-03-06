import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faStar } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
import reactStars from "react-rating-stars-component";
import Rating from "react-rating";
const Product = (props) => {
  const { img, name, price, seller, shipping, star, stock, features } =
    props.product;
  // console.log(props.product);
  const element = <FontAwesomeIcon icon={faShoppingCart} />;

  return (
    <div className="product-container">
      <div className="img-container">
        <img src={img} alt={name} />
      </div>
      <div className="product-details">
        <h3 className="product-name">{name}</h3>
        <p>
          <small>by: {seller} </small>
        </p>
        <div className="rating-container">
          <div className="rating">
            {
              <Rating
                initialRating={star}
                readonly
                emptySymbol="far fa-star icon-color"
                fullSymbol="fas fa-star icon-color"
              ></Rating>
            }
          </div>
        </div>
        <h5 className="price">${price}</h5>
        <div className="features-container">
          <div className="emty-feature">
            <p className="stock">Only {stock} availabel </p>
            <div className="add-to-cart">
              <button
                className="btn"
                type="button"
                onClick={() => props.addToCart(props.product)}
              >
                {element} Add to cart
              </button>
            </div>
          </div>
          <div className="features">
            Features
            {features.map((f) => (
              <div className="feature">
                <p>{f.description}</p>
                <p>{f.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
