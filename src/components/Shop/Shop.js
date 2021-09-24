import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Meal from "../Meal/Meal";
import "./Shop.css";

const Shop = (props) => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch(props.url || "https://www.themealdb.com/api/json/v1/1/search.php?s=a")
      .then((res) => res.json())
      .then((data) => setMeals(data.meals || []));
  }, [props.url]);
  return (
    <Container className="d-flex justify-content-between">
      <div className="meal-container w-75 row">
        {meals.map((meal) => (
          <Meal meal={meal}></Meal>
        ))}
      </div>
      <div className="cart-container ps-3">
        <h3>This is cart</h3>
      </div>
    </Container>
  );
};

export default Shop;
