import React from "react";
import "./Home.css";
const Home = () => {
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
        <p>Products will add here.</p>
      </div>
    </>
  );
};

export default Home;
