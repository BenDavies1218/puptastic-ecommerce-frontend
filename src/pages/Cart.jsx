import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useCart();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="back-button-container" onClick={handleBack}>
        <button className="button">Back</button>
      </div>
      <h1>Cart</h1>
      {cart.state.items.length > 0 ? (
        cart.state.items.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <img src={item.image} alt="item Image" />
            <p>Price: {item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
