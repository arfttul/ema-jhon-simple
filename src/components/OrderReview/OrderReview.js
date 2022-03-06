import React from "react";
import useProducts from "../../Hooks/useProducts/useProducts";

const OrderReview = () => {
  const [products] = useProducts();
  return (
    <div>
      <h1>Hello from Order Review {products.length}</h1>
    </div>
  );
};

export default OrderReview;
