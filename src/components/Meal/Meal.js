import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card } from "react-bootstrap";
import "./Meal.css";

const Meal = (props) => {
  console.log(props.meal);
  const { strMealThumb, strIngredient1, strInstructions } = props.meal;
  const price = Math.random() * 20;
  return (
    <Card style={{ width: "16rem", margin: "10px" }}>
      <Card.Img variant="top" src={strMealThumb} />
      <Card.Body>
        <Card.Title>{strIngredient1}</Card.Title>
        <Card.Text style={{ height: "150px" }}>
          {strInstructions.slice(0, 120)}
        </Card.Text>
        <div className="d-flex justify-content-between">
          <h3>$ {Math.round(price)}</h3>
          <Button className="btn btn-primary">Add to Cart</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Meal;
