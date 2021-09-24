import React, { useEffect, useState } from "react";
import Cart from "./Cart/Cart";
import Products from "./Products/Products";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-9">
          <Products products={products} />
        </div>

        <div className="col-12 col-md-3">
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default Shop;
