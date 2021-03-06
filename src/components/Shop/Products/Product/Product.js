import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Product = (props) => {
  const { name, category, price, img } = props.product;
  const { clickHandler } = props;

  return (
    <div className="col">
      <div className="card p-2 h-100">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={img} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <div className="card-text">
                <h6 className="text-success">Category: {category}</h6>
                <h6 className="text-success">Price: {price}</h6>
                <small className="text-muted">
                  <i>Last updated 3 mins ago</i>
                </small>

                <button
                  onClick={() => clickHandler(props.product)}
                  className="btn btn-success mt-2"
                >
                  <FontAwesomeIcon icon={faShoppingCart} className="me-1" />
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
