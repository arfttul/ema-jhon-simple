import { useEffect, useState } from "react";
import { getStoredCart } from "../../utilities/fakedb";

const useCart = (products) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    if (products.length) {
      const savedCart = getStoredCart();
      const storedCart = [];
      for (const key in savedCart) {
        const itemQuantity = savedCart[key];
        const addedProduct = products.find((product) => product.key === key);
        addedProduct.quantity = itemQuantity;
        storedCart.push(addedProduct);
      }
      setCart(storedCart);
    }
  }, [products]);
  return [cart, setCart];
};

export default useCart;
