import React, { useEffect, useState } from "react";
import Cart from "./Cart/Cart";
import Products from "./Products/Products";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const clickHandler = (product) => {
    // const { name, price } = product;
    // console.log(name, price);
    const newProduct = [...cart, product];
    setCart(newProduct);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-9">
          <Products clickHandler={clickHandler} products={products} />
        </div>

        <div className="col-12 col-md-3">
          <Cart cartItem={cart} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
