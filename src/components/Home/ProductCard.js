import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import productLink from "../../images/product.jpeg";
const ProductCard = () => {
  const product = {
    _id: "lshalalsssls",
    name: "Beautiful product.",
    numOfReviews: 10,
    price: 10000,
    url: productLink,
  };
  return (
    <>
      <Link className="productCard" to={`/product/${product._id}`}>
        <img src={product.url} alt={product.name} />
        <p>{product.name}</p>
        <div>
          <ReactStars
            count={5}
            size={14}
            activeColor="tomato"
            isHalf={true}
            value={4.5}
            edit={false}
          />
          <span className="productCardSpan">
            ({product.numOfReviews} Reviews.)
          </span>
        </div>
        <span>{`$${product.price}`}</span>
      </Link>
    </>
  );
};

export default ProductCard;
