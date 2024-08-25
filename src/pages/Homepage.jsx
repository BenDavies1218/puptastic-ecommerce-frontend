import { useEffect, useState } from "react";
import HomePageCarosel from "../components/HomePageCarosel";
import exampleItems from "../testItems";
import "../styles/homepage.css";

const Homepage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3001/products");
        const data = await response.json();
        console.log('Data fetched:', data);
        setProducts(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="homePage">
      <div className="HomepageContainer">
        <div className="homePageHeading">
          <h5>Welcome to Puptastic Petstore!</h5>
        </div>
        
      </div>
      <HomePageCarosel name="Dog Backpacks" products={products.products} />
      <HomePageCarosel name="Harnesses" products={exampleItems} />
      <div className="bottomTextContainer">
        <h6>
            Browse our extensive range of dog accessories and apparel! We pride
            ourselves on products that are...
        </h6>
        <ul>
          <li>Adjustable design with various sizes to suit most dogs</li>
          <li>Super durable and machine washable</li>
          <li>Available in a great range of colors and designs</li>
          <li>We offer fast shipping on all orders</li>
        </ul>
      </div>
    </div>
  );
};

export default Homepage;
