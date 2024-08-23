/* eslint-disable react/prop-types */
import AddToCartButton from "./AddToCartButton";
import StarRating from "./StarRating";
import "../styles/productItem.css";

const ProductItem = ({ product }) => {
  const { mainImageUrl, name, rating, imgAlt = "Product Image" } = product;

  return (
    <div className="ProductItemContainer">
      <div className="ItemContainer">
        <img
          src={mainImageUrl || "../assets/9-min.png"}
          alt={imgAlt}
        />
        <div>{name}</div>
        <div className="itemReviews">
          <StarRating rating={rating || 0} />
          <div className="itemRating">{rating || 0} / 5</div>
        </div>
        <div className="buttons">
          <button>View</button>
          <AddToCartButton item={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
