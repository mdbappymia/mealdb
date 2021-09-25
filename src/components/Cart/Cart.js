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
      <h4>Selected: {props.cart.length}</h4>
      <br />
      <h5>Price: ${total}</h5>
      <p className="mb-0">Delivery Cost: ${delivery}</p>
      <small>Tax: ${tax.toFixed(2)}</small>
      <h4>Total: ${grandTotal.toFixed(2)}</h4>
      <hr />
    </div>
  );
};

export default Cart;
