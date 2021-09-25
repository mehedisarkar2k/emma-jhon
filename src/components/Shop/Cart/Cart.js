import React from "react";

const Cart = () => {
  return (
    <div className="ms-2">
      <h2 className="text-success">Order Summary</h2>
      <h4>Item added: 0</h4>
      <hr className="mt-1" />
      <div className="items">
        <p className="m-0 d-flex text-muted">
          <small className="title">Product original price:</small>
          <small className="price ms-auto">0</small>
        </p>
        <p className="m-0 d-flex d-flex text-muted">
          <small className="title">Shipping charge:</small>
          <small className="price ms-auto">0</small>
        </p>
        <hr className="m-0 my-1" />
        <h6 className="m-0 d-flex text-muted">
          <small className="title">Sub Total:</small>
          <small className="price ms-auto">0</small>
        </h6>
        <p className="m-0 d-flex text-muted">
          <small className="title">Tax (20%):</small>
          <small className="price ms-auto">0</small>
        </p>
        <hr className="m-0" />
        <h4 className="mt-1 d-flex text-muted">
          <small className="title">Total:</small>
          <small className="price ms-auto">0</small>
        </h4>
      </div>

      <button type="button" className="mt-3 btn btn-success">
        Confirm Order
      </button>
    </div>
  );
};

export default Cart;
