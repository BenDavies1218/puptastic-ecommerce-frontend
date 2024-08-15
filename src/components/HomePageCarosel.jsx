import React, { useRef } from "react";
import ProductItem from "./ProductItem";
import "../styles/carosel.css";

const HomePageCarosel = (props) => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="carousel-container">
      <h4>{props.name}</h4>
      <button className="nav-button prev-button" onClick={scrollLeft}>
        &#8249;
      </button>
      <div className="carousel" ref={carouselRef}>
        {props.products && props.products.length > 0 ? (
          props.products.map((product, index) => (
            <ProductItem key={index} {...product} />
          ))
        ) : (
          <div>No products available</div> // Display a message or placeholder
        )}
      </div>
      <button className="nav-button next-button" onClick={scrollRight}>
        &#8250;
      </button>
    </div>
  );
};

export default HomePageCarosel;
