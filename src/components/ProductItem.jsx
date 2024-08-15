import AddToCartButton from "./AddToCartButton";

const ProductItem = (props) => {
  return (
    <div className="ProductItemContainer">
      <div className="ItemContainer">
        <img src={props.imgUrl} alt={props.imgAlt} />
        <div>{props.name}</div>
        <div className="itemReviews">
          <div className="reviewStars">{props.stars}</div>
          <div className="itemRating">{props.rating}</div>
        </div>
        <AddToCartButton />
      </div>
    </div>
  );
};

export default ProductItem;
