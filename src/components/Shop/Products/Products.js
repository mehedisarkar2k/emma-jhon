import Product from "./Product/Product";
import "./Products.css";

const Products = (props) => {
  const products = props.products;
  const { clickHandler } = props;

  return (
    <div
      style={{ border: "1px doted #777" }}
      className="row row-cols-1 row-cols-sm-2  row-cols-md-1 row-cols-lg-2 g-4"
    >
      {products.map((product) => (
        <Product
          key={product.key}
          clickHandler={clickHandler}
          product={product}
        />
      ))}
    </div>
  );
};

export default Products;
