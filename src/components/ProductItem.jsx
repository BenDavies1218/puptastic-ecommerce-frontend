import React from "react";
import AddToCartButton from "./AddToCartButton";
import ProductImage from "../assets/9-min.png";
import StarRating from "./StarRating";
import "../styles/productItem.css";

const ProductItem = (props) => {
  return (
    <div className="ProductItemContainer">
      <div className="ItemContainer">
        <img src={props.imgUrl || ProductImage} alt={props.imgAlt} />
        <div>{props.name}</div>
        <div className="itemReviews">
          <StarRating rating={props.rating || 0} />
          <div className="itemRating">{props.rating || 0} / 5</div>
        </div>
        <div className="buttons">
          <button>View</button>
          <AddToCartButton />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
