/* eslint-disable react/prop-types */
import { useCart } from "../context/CartContext";

const AddToCartButton = ({ item }) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    
    const itemWithId = {
      id: item._id,
      name: item.name,
      price: item.price,
      image: item.mainImageUrl,
      description: item.description,
      quantity: 1,
    };
    addItem(itemWithId);
  };

  return <button onClick={handleAddToCart}>Add to Cart</button>;
};

export default AddToCartButton;
