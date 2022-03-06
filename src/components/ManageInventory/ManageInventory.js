import React from "react";
import { Outlet } from "react-router-dom";
import useCart from "../../Hooks/useCart/useCart";
import useProducts from "../../Hooks/useProducts/useProducts";
import Cart from "../Cart/Cart";
import "../Shop/Shop.css";

const ManageInventory = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);

  return (
    <div className="shop-container">
      <div className="shop-body"></div>
      <div className="shop-cart">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default ManageInventory;
