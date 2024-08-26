/* eslint-disable react/prop-types */
import AddToCartButton from "./AddToCartButton";
// import StarRating from "./StarRating";
import "../styles/productItem.css";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ product }) => {
  const { mainImageUrl, name, imgAlt = "Product Image" } = product;
  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate(`/shop/${product._id}`, { state: { product } });
  };

  return (
    <div className="ProductItemContainer">
      <div>{name}</div>
      <div className="ItemContainer">
        <img
          src={mainImageUrl || "../assets/9-min.png"}
          alt={imgAlt}
        />
        
        <div className="itemReviews">
          {/* 
          I'm not sure if the rating is going to be used in the future, so I'm commenting it out for now.
          <StarRating rating={rating || 0} />
          <div className="itemRating">{rating || 0} / 5</div> */}
        </div>
        <div className="priceContainer">
          <strong> ${product.price}</strong>
          <div className="price">${product.price + Math.floor(product.price * 0.15)}</div>
        </div>
        <strong>SALE! </strong>
        <div className="buttons">
          <button onClick={handleViewClick}>View</button>
          <AddToCartButton item={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
