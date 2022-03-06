import React from "react";
import { Link } from "react-router-dom";
import useCart from "../../Hooks/useCart/useCart";
import useProducts from "../../Hooks/useProducts/useProducts";
import { clearTheCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "../Shop/Shop.css";

const OrderReview = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  const handleRemove = (key) => {
    const newCart = cart.filter((product) => product.key !== key);
    setCart(newCart);
    removeFromDb(key);
  };
  const HandleConfirmOrder = () => {
    clearTheCart();
  };
  return (
    <div className="shop-container">
      <div className="shop-body">
        {cart.map((product) => (
          <ReviewItem
            key={product.key}
            product={product}
            handleRemove={handleRemove}
          ></ReviewItem>
        ))}
      </div>
      <div className="shop-cart">
        <Cart cart={cart}>
          <button className="btn-review" onClick={HandleConfirmOrder}>
            <Link
              style={{
                textDecoration: "none",
                fontSize: "18px",
                color: "whitesmoke",
              }}
              to="/confirm-order"
            >
              {" "}
              Place Order
            </Link>
          </button>{" "}
        </Cart>
      </div>
    </div>
  );
};

export default OrderReview;
