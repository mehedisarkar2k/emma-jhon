import React, { useEffect, useState } from "react";
const Cart = ({ cartItem }) => {
  const [price, setPrice] = useState(0);
  const [shipping, setShipping] = useState(0);

  let total = 0;

  for (const item of cartItem) {
    total += item.price;
  }

  useEffect(() => {
    setPrice(total.toFixed(2));
    setShipping(
      total > 0
        ? total < 500
          ? (20).toFixed(2)
          : (total * 0.05).toFixed(2)
        : shipping
    );
  }, [total, shipping]);

  const subTotal = Number(price) + Number(shipping);
  const tax = (subTotal * 0.02).toFixed(2);
  const grandTotal = (Number(subTotal) + Number(tax)).toFixed(2);

  return (
    <div className="ms-2">
      <h2 className="text-success">Order Summary</h2>
      <h4>Item added: {cartItem.length}</h4>
      <hr className="mt-1" />
      <div className="items">
        <p className="m-0 d-flex text-muted">
          <small className="title">Product original price:</small>
          <small className="price ms-auto">{price}</small>
        </p>
        <p className="m-0 d-flex d-flex text-muted">
          <small className="title">Shipping charge:</small>
          <small className="price ms-auto">{shipping}</small>
        </p>
        <hr className="m-0 my-1" />
        <h6 className="m-0 d-flex text-muted">
          <small className="title">Sub Total:</small>
          <small className="price ms-auto">{subTotal}</small>
        </h6>
        <p className="m-0 d-flex text-muted">
          <small className="title">Tax (20%):</small>
          <small className="price ms-auto">{tax}</small>
        </p>
        <hr className="m-0" />
        <h4 className="mt-1 d-flex text-muted">
          <small className="title">Total:</small>
          <small className="price ms-auto">{grandTotal}</small>
        </h4>
      </div>

      <button type="button" className="mt-3 btn btn-success">
        Confirm Order
      </button>
    </div>
  );
};

export default Cart;
