import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Rating,
} from "@mui/material";
import { useState } from "react";
import Carousel from "react-material-ui-carousel";
import ReactStars from "react-rating-stars-component";
import productLink from "../../images/product.jpeg";
import "./ProductDetails.css";
import ReviewCard from "./ReviewCard";
const ProductDetails = () => {
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (1 >= quantity) {
      return;
    }
    const qty = quantity - 1;
    setQuantity(qty);
  };
  const increaseQuantity = () => {
    if (product.stock <= quantity) {
      return;
    }
    const qty = quantity + 1;
    setQuantity(qty);
  };
  const addToCartHandler = () => {
    alert("Add to cart successful.");
  };
  //   we will do review toggle handler next
  const reviewSubmitHandler = () => {
    setOpen(!open);
    // Further add backend logic here.
  };
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const submitReviewToggle = () => {
    setOpen(!open);
  };
  const product = {
    _id: "123545556544658585524541",
    description:
      "This is a decorative products. Every can try it. This product contain hundred percent accuracy and not harmful for environment.",
    name: "Beautiful product.",
    numOfReviews: 10,
    stock: 10,
    price: 10000,
    url: [
      productLink,
      productLink,
      productLink,
      productLink,
      productLink,
      productLink,
      productLink,
    ],
    reviews: [
      {
        id: 1,
      },
      {
        id: 2,
      },
      {
        id: 3,
      },
      {
        id: 4,
      },
    ],
  };
  return (
    <>
      <div className="ProductDetails">
        <div>
          <Carousel>
            {product.url &&
              product.url.map((item, index) => (
                <img
                  className="CarouselImage"
                  key={index}
                  src={item}
                  alt={`${index} Slide`}
                />
              ))}
          </Carousel>
        </div>
        <div>
          <div className="detailsBlock-1">
            <h2>{product.name}</h2>
            <p>product # {product._id}</p>
          </div>
          <div className="detailsBlock-2">
            <ReactStars
              count={5}
              size={14}
              activeColor="tomato"
              isHalf={true}
              value={4.5}
              edit={false}
            />
            <span className="detailsBlock-2-span">
              ({product.numOfReviews} Reviews)
            </span>
          </div>
          <div className="detailsBlock-3">
            <h1>{`$${product.price}`}</h1>
            <div className="detailsBlock-3-1">
              <div className="detailsBlock-3-1-1">
                <button onClick={decreaseQuantity}>-</button>
                <input type="number" value={quantity} readOnly />
                <button onClick={increaseQuantity}>+</button>
              </div>
              <button
                disabled={product.stock < 1 ? true : false}
                onClick={addToCartHandler}
              >
                Add to Cart
              </button>
            </div>
            <p>
              Status:
              <b className={product.stock < 1 ? "redColor" : "greenColor"}>
                {product.stock < 1 ? "Out of Stock" : "In Stock"}
              </b>
            </p>
          </div>
          <div className="detailsBlock-4">
            Description:<p>{product.description}</p>
          </div>
          <button onClick={submitReviewToggle} className="submitReview">
            Submit Review
          </button>
        </div>
      </div>
      <h3 className="reviewsHeading">REVIEWS. </h3>
      <Dialog
        aria-labelledby="simple-dialog-box"
        open={open}
        onClose={submitReviewToggle}
      >
        <DialogContent className="submitDialog">
          <Rating onChange={(e) => setRating(e.target.value)} value={rating} />
          <textarea
            className="submitDialogTextArea"
            cols={30}
            rows={5}
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
          ></textarea>
        </DialogContent>
        <DialogActions>
          <Button onClick={submitReviewToggle} color="secondary">
            Cancel
          </Button>
          <Button onClick={reviewSubmitHandler} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      {product.reviews ? (
        <div className="reviews">
          {product.reviews &&
            product.reviews.map((rev) => <ReviewCard key={rev.id} />)}
        </div>
      ) : (
        <p className="noReviews">No Reviews Yet</p>
      )}
    </>
  );
};

export default ProductDetails;
