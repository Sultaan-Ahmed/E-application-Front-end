import { Slider, Typography } from "@mui/material";
import { useState } from "react";
import Pagination from "react-js-pagination";
import ProductCard from "../Home/ProductCard";
import "./Products.css";
const products = [1, 2, 4, 3, 5, 6, 7, 8, 9, 10, 11];
const category = [
  "Laptop",
  "Footwear",
  "Bottom",
  "Tops",
  "Attire",
  "Camera",
  "SmartPhones",
];
const Products = () => {
  const resultPerPage = 8;
  const count = 6;
  const productsCount = 100;
  const [price, setPrice] = useState([0, 2500]);
  const [cat, setCat] = useState("");
  const [ratings, setRatings] = useState(0);
  const [currentPage, setCurrentPage] = useState(2);

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = (e) => {
    setPrice(e.target.value);
    console.log(cat);
  };
  return (
    <>
      <h2 className="productsHeading">Products.</h2>
      <div className="products">
        {products.map((item, index) => (
          <ProductCard key={index} />
        ))}
      </div>
      <div className="filterBox">
        <Typography>Price</Typography>
        <Slider
          aria-labelledby="range-slider"
          value={price}
          onChange={priceHandler}
          valueLabelDisplay="auto"
          min={0}
          max={2500}
        />
        <Typography>Categories.</Typography>
        <ul className="categoryBox">
          {category &&
            category.map((item, index) => (
              <li
                key={index}
                className="category-link"
                onClick={() => {
                  setCat(item);
                }}
              >
                {item}
              </li>
            ))}
        </ul>
        <fieldset>
          <Typography component="legend">Ratings Above</Typography>
          <Slider
            value={ratings}
            onChange={(e, newRating) => {
              setRatings(newRating);
            }}
            aria-labelledby="continuous-slider"
            valueLabelDisplay="auto"
            min={0}
            max={5}
          />
        </fieldset>
        {/* for commit */}
      </div>
      {resultPerPage > count && (
        <div className="paginationBox">
          <Pagination
            activePage={currentPage}
            itemsCountPerPage={resultPerPage}
            totalItemsCount={productsCount}
            onChange={setCurrentPageNo}
            nextPageText="Next"
            prevPageText="Prev"
            firstPageText="1st"
            lastPageText="Last"
            itemClass="page-item"
            linkClass="page-link"
            activeClass="pageItemActive"
            activeLinkClass="pageLinkActive"
          />
        </div>
      )}
    </>
  );
};

export default Products;
