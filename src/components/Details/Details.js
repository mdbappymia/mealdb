import React from "react";
import "./Details.css";

const Details = (props) => {
  console.log(props.details);
  const {
    strMealThumb,
    strIngredient1,
    strCategory,
    strArea,
    strInstructions,
  } = props.details;
  return (
    <div>
      <p>Details:</p>
      <div className="d-flex">
        <img src={strMealThumb} alt="" className="details-image me-1" />
        <div className="fw-bold meal-details">
          <small>Name: {strIngredient1}</small>
          <small>Area: {strArea}</small>
          <small>Category: {strCategory}</small>
        </div>
      </div>
      <small className="description">{strInstructions}</small>
    </div>
  );
};

export default Details;
