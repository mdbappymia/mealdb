import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Cart from "../Cart/Cart";
import Meal from "../Meal/Meal";
import "./Shop.css";

const Shop = (props) => {
  const [meals, setMeals] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(props.url || "https://www.themealdb.com/api/json/v1/1/search.php?s=a")
      .then((res) => res.json())
      .then((data) => setMeals(data.meals || []));
  }, [props.url]);
  const handleCart = (meal, price) => {
    meal.price = price;
    setCart([...cart, meal]);
    // console.log(cart);
  };
  return (
    <Container className="d-flex justify-content-between">
      <div className="meal-container w-75 row">
        {meals.map((meal) => (
          <Meal key={meal.idMeal} meal={meal} handleCart={handleCart}></Meal>
        ))}
      </div>
      <div className="cart-container ps-3">
        <Cart cart={cart}></Cart>
      </div>
    </Container>
  );
};

export default Shop;
