import React from "react";
import "./Cart.css";

const Cart = (props) => {
  let total = 0;
  for (const food of props.cart) {
    total = total + food.price;
  }
  let tax = total / 10;
  let delivery = 15;
  if (total > 100) {
    delivery = 5;
  }
  let grandTotal = total + delivery + tax;
  if (total === 0) {
    grandTotal = 0;
    tax = 0;
    delivery = 0;
  }
  return (
    <div>
      <h1>Selected: {props.cart.length}</h1>
      <br />
      <h3>Price: ${total}</h3>
      <p>Delivery Cost: ${delivery}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h2>Total: ${grandTotal.toFixed(2)}</h2>
      <hr />
    </div>
  );
};

export default Cart;
