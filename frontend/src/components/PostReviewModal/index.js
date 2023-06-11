import React from "react";
import "./PostReviewModal.css";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { createNewReview } from "../../store/reviews";

export default function PostReviewModal(props) {
  let dispatch = useDispatch();
  let { spotId } = useParams();

  let showModal = props.showModal;

  let [review, setReview] = useState("");
  let [filledStars, setfilledStars] = useState(0);

  const onStarClick = (val) => {
    let build = [];

    for (let counter = 1; counter <= val; counter++) {
      build.push(
        <i
          key={counter}
          onClick={(e) => {
            onStarClick(counter);
          }}
          className="fas fa-star"
        ></i>
      );
    }

    for (let counter = val + 1; counter <= 5; counter++) {
      build.push(
        <i
          key={counter}
          onClick={(e) => {
            onStarClick(counter);
          }}
          className="far fa-star"
        ></i>
      );
    }
    setfilledStars(val);
    setStars(build);
  };

  let [stars, setStars] = useState([
    <i
      key={1}
      onClick={(e) => {
        onStarClick(1);
      }}
      className="far fa-star"
    ></i>,
    <i
      key={2}
      onClick={(e) => {
        onStarClick(2);
      }}
      className="far fa-star"
    ></i>,
    <i
      key={3}
      onClick={(e) => {
        onStarClick(3);
      }}
      className="far fa-star"
    ></i>,
    <i
      key={4}
      onClick={(e) => {
        onStarClick(4);
      }}
      className="far fa-star"
    ></i>,
    <i
      key={5}
      onClick={(e) => {
        onStarClick(5);
      }}
      className="far fa-star"
    ></i>,
  ]);

  const handleSubmit = () => {
    console.log(review, filledStars);
    dispatch(createNewReview(spotId, review, filledStars));
  };

  return (
    <div className="modalContainer">
      <div className="modalContent">
        <div className="modalTitle">
          <h2>How was your stay?</h2>
        </div>
        <div>
          <textarea
            className="reviewTextArea"
            name=""
            placeholder="Leave your review here..."
            id=""
            cols="30"
            rows="10"
            value={review}
            onChange={(e) => {
              setReview(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="rating">
          <p>Stars</p>
          {stars}
        </div>
        <div>
          <button
            className="submitButton"
            onClick={(e) => {
              handleSubmit();
              showModal(false);
            }}
          >
            Submit Your Review
          </button>
        </div>
      </div>
    </div>
  );
}
