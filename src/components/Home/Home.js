import React from "react";
import "./Home.css";
import ProductCard from "./ProductCard";
const Home = () => {
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <div className="banner">
        <p>Welcome to Mariyam's E-commerce shop.</p>
        <h1>FIND AMAZING PRODUCTS BELOW.</h1>
        <a href="#container">
          <button>Scroll</button>
        </a>
      </div>
      {/* Features products showing start */}
      <h2 className="homeHeading">Featured Products.</h2>
      <div className="container" id="container">
        {products && products.map((item) => <ProductCard key={item} />)}
      </div>
    </>
  );
};

export default Home;
