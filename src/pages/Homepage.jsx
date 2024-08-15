import HomePageCarosel from "../components/HomePageCarosel";
import exampleItems from "../testItems";

const Homepage = () => {
  return (
    <>
      <div className="homePageHeading">
        Welcome To Puptastic Browser our range of cute dog appeal
      </div>
      <HomePageCarosel name={"Dog Backpacks"} products={exampleItems} />
      <HomePageCarosel name={"Harnesses"} />
      <HomePageCarosel name={"Toys"} />
      <HomePageCarosel name={"Supplements"} />
      <HomePageCarosel name={"Treats"} />
    </>
  );
};

export default Homepage;
