import HomePageCarosel from "../components/HomePageCarosel";
import exampleItems from "../testItems";
import "../styles/homepage.css";

const Homepage = () => {
  return (
    <div className="HomepageContainer">
      <div className="homePageHeading">
        <h5>Welcome to Puptastic Petstore!</h5>
        <h6>
          Browse our extensive range of dog accessories and appeal! We pride
          ourselves on products that are...
        </h6>
        <ul>
          <li>Adjustable design with various sizes to suit most dogs</li>
          <li>Super durable and machine washable</li>
          <li>Available in a great range of colors and designs</li>
          <li>We offer Fast shipping on all orders</li>
        </ul>
      </div>
      <HomePageCarosel name={"Dog Backpacks"} products={exampleItems} />
      <HomePageCarosel name={"Harnesses"} products={exampleItems} />
      <HomePageCarosel name={"Toys"} products={exampleItems} />
      <HomePageCarosel name={"Supplements"} products={exampleItems} />
      <HomePageCarosel name={"Treats"} products={exampleItems} />
    </div>
  );
};

export default Homepage;
