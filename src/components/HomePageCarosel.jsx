/* eslint-disable react/prop-types */
import { useRef } from "react";
import ProductItem from "./ProductItem";
import "../styles/carosel.css";

const HomePageCarosel = ({ name, products }) => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="carousel-container">
      <h4>{name}</h4>
      <button className="nav-button prev-button" onClick={scrollLeft}>
        &#8249;
      </button>
      <div className="carousel" ref={carouselRef}>
        {products && products.length > 0 ? (
          products.map((product, index) => {
            
            return <ProductItem key={index} product={product} />;
          })
        ) : (
          // Directly log when no products are available
          <div>No products available</div>
        )}
      </div>
      <button className="nav-button next-button" onClick={scrollRight}>
        &#8250;
      </button>
    </div>
  );
};

export default HomePageCarosel;
