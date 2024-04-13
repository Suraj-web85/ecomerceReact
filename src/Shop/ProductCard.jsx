import React from "react";
import { Link } from "react-router-dom";
import Rating from "../Components/Rating";
const ProductCard = ({ GridList, products }) => {
  return (
    <div
      className={`shop-product-wrap row justtify-content-center ${
        GridList ? "grid" : "list"
      }`}
    >
      {products.map((product, i) => (
        <div key={i} className="col-lg-4 col-md-6 col-12">

          {/* grid item */}
          <div className="product-item">
            <div className="product-thumb">
              <div className="pro-thumb">
                <img src={product.img} alt="" />
              </div>

              <div className="product-action-link">
                <Link to={`/shop/${product.id}`}>
                  <i className="icofont-eye"></i>
                </Link>
                <a href="">
                  <i className="icofont-heart"></i>
                </a>
                <Link to="/cart-page">
                  <i className="icofont-cart-alt"></i>
                </Link>
              </div>
            </div>

            <div className="product-content">
              <h5>
                <Link to={`/shop/${product.id}`}>{product.name}</Link>
              </h5>
              <p>
                <Rating />
              </p>
              <h6>${product.price}</h6>
            </div>
          </div>

          {/* list item */}

          <div className="product-list-item">
            <div className="product-thumb">
              <div className="pro-thumb">
                <img src={product.img} alt="" />
              </div>

              <div className="product-action-link">
                <Link to={`/shop/${product.id}`}>
                  <i className="icofont-eye"></i>
                </Link>
                <a href="">
                  <i className="icofont-heart"></i>
                </a>
                <Link to="/cart-page">
                  <i className="icofont-cart-alt"></i>
                </Link>
              </div>
            </div>

            <div className="product-content">
              <h5>
                <Link to={`/shop/${product.id}`}>{product.name}</Link>
              </h5>
              <p>
                <Rating />
              </p>
              <h6>${product.price}</h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
