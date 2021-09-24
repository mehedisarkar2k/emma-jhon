import Product from "./Product/Product";
import "./Products.css";

const Products = (props) => {
  const products = props.products;

  return (
    <div className="row row-cols-1 row-cols-sm-2  row-cols-md-1 row-cols-lg-2 g-4">
      {products.map((product) => (
        <Product key={product.key} product={product} />
      ))}
    </div>
  );
};

export default Products;
