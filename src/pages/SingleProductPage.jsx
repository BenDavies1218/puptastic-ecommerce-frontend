import { useNavigate, useLocation } from "react-router-dom";

const SingleProductPage = () => {
  const location = useLocation();
  const navigate = useNavigate(); 
  const product = location.state?.product; 

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="back-button-container">
        <button className="button" onClick={handleBack}>Back</button>
      </div>
      {product ? (
        <div>
          <h1>{product.name}</h1>
          <img src={product.mainImageUrl} alt={product.imgAlt} />
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
};

export default SingleProductPage;
