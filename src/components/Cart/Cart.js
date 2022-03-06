import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  // console.log(cart);
  let totalQuantity = 0;
  let totalPrice = 0;
  let totalShippingCost = 0;
  let priceWithShippingcost = 0;
  let tax = 0;
  let totalCost = 0;

  for (const product of cart) {
    const quantity = !product.quantity ? 1 : product.quantity;
    // console.log({ quantity });
    totalQuantity = totalQuantity + quantity;
    // console.log({ totalQuantity });
    totalPrice = totalPrice + product.price;
    totalShippingCost += product.shipping;
    priceWithShippingcost = totalPrice + totalShippingCost;
    tax = totalPrice < 500 ? totalPrice * 0.1 : totalPrice * 0.2;
    totalCost = totalPrice + totalShippingCost + tax;
  }
  return (
    <div className="cart">
      <div className="order-summery">
        <h3>Order Summery</h3>
      </div>
      <p>Items: {totalQuantity}</p>
      <p>Item(s) Price: ${totalPrice.toFixed(2)}</p>
      <p>Shipping & Handling: ${totalShippingCost.toFixed(2)}</p>
      <p>Total Before Tax: ${priceWithShippingcost.toFixed(2)}</p>
      <p>Estimated Tax: ${tax.toFixed(2)}</p>
      <h3 className="order-total">Order Total: ${totalCost.toFixed(2)}</h3>

      {props.children}
    </div>
  );
};

export default Cart;
