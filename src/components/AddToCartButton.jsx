import { useCart } from "../context/CartContext";

const AddToCartButton = ({ item }) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(item);
  };

  return <button onClick={handleAddToCart}>Add to Cart</button>;
};

export default AddToCartButton;
