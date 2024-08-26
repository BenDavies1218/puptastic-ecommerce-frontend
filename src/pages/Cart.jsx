import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "../styles/cartPage.css";
import { loadStripe } from "@stripe/stripe-js";
import ShippingForm from "../components/ShippingForm";
import { useState } from "react";

const Cart = () => {
  const [shipping, setShipping] = useState(3.99);
  const cart = useCart();
  const navigate = useNavigate();

  const handleBack = () => {
    // Check if the user was redirected to Stripe
    const redirectedToStripe = localStorage.getItem("redirectedToStripe");

    if (redirectedToStripe) {
      localStorage.removeItem("redirectedToStripe");
      navigate("/");
    } else {
      navigate(-1);
    }
  };

  const handleRemoveItem = (item) => {
    cart.removeItem(item);
  };

  const handleMakePayment = async () => {
    const stripe = await loadStripe(import.meta.env.VITE_APP_STRIPE_PUBLIC_KEY);

    // Create the body object with the current cart items
    const body = {
      products: cart.state.items,
    };

    // Set up headers
    const header = {
      "Content-Type": "application/json",
    };

    // Send the POST request to the checkout endpoint
    const response = await fetch("http://localhost:3001/checkout", {
      method: "POST",
      headers: header,
      body: JSON.stringify(body), // Send the body directly
    });

    // Parse the response from the server
    const session = await response.json();

    // Set a flag indicating that the user is redirected to Stripe
    localStorage.setItem("redirectedToStripe", "true");

    // Redirect to Stripe Checkout
    const result = await stripe.redirectToCheckout({ sessionId: session.id });

    // Log any errors from Stripe
    if (result.error) {
      console.log(result.error.message);
    }
  };

  return (
    <div className="cart">
      <div className="back-button-container" onClick={handleBack}>
        <button className="button">Back</button>
      </div>
      <div className="cartItems">
        {cart.state.items.length > 0 ? (
          cart.state.items.map((item) => (
            <div key={item.id} className="CartItemContainer">
              <h2>{item.name}</h2>
              <div className="CartItemContainer">
                <img src={item.image} alt="item Image" />
              </div>
              <h5>Price: {item.price}</h5>
              <h5>Quantity: {item.quantity}</h5>
              <button
                className="removeFromCartButton"
                onClick={() => handleRemoveItem(item)}
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
      <ShippingForm />
      <div className="totalContainer">
        <div>Shipping: {shipping}</div>
        <div>Cost of goods: {(cart.state.total * 0.9).toFixed(2)}</div>
        <div>GST (included): {(cart.state.total * 0.1).toFixed(2)}</div>
        <div className="subtotal">
          Subtotal: ${(cart.state.total + shipping).toFixed(2)}
        </div>
        <button onClick={handleMakePayment}>Checkout Now</button>
      </div>
    </div>
  );
};

export default Cart;
