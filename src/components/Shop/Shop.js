import React, { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useProducts from "../../Hooks/useProducts/useProducts";
import useCart from "../../Hooks/useCart/useCart";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);
  const [showProducts, setShowProducts] = useState([]);

  useEffect(() => {
    setShowProducts(products);
  }, [products]);

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.key);
  };

  const handleSearch = (event) => {
    const searchText = event.target.value;
    const filterContent = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log(filterContent);
    setShowProducts(filterContent);
  };
  return (
    <>
      <div className="search-container">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="search item"
          onChange={handleSearch}
        />
        <FontAwesomeIcon icon={faShoppingCart} size="3x" />
      </div>
      <div className="shop-container">
        <div className="shop-body">
          {/* Products: {products.length} */}
          {showProducts.map((product) => {
            return (
              <Product
                key={product.key}
                product={product}
                addToCart={addToCart}
              ></Product>
            );
          })}
        </div>
        <div className="shop-cart">
          <Cart cart={cart}>
            <button className="btn-review">
              <Link
                style={{
                  textDecoration: "none",
                  fontSize: "18px",
                  color: "whitesmoke",
                }}
                to="/order-review"
              >
                {" "}
                Review Order{" "}
              </Link>
            </button>
          </Cart>
        </div>
      </div>
    </>
  );
};

export default Shop;
