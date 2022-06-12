import { Rating } from "@mui/material";
import profilePng from "../../images/Profile.png";
const review = {
  name: "Md Sultan Ahmed",
  comment: "This is awesome products. I recommended highly to buy this.",
};
const ReviewCard = () => {
  return (
    <>
      <div className="reviewCard">
        <img src={profilePng} alt="User" />
        <p>{review.name}</p>
        <Rating
          name="simple-controlled"
          value={4.5}
          readOnly={true}
          precision={0.5}
        />
      </div>
    </>
  );
};

export default ReviewCard;
