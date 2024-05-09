import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";
import GetStarted from "../../components/getstarted/GetStarted";

function HomePage() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
          Discover your dream home with us at HomeHarbour. From bustling city condos to serene countryside retreats, we have the perfect property waiting for you. <br /> <br />Let our experienced team guide you to your ideal home sweet home. Start your journey today.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>1000+</h1>
              <h2>Deals</h2>
            </div>
          <div className="box">
  <h1>1000+</h1>
  <h2>Happy Clients Served</h2>
</div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
      
      
    </div>
  );
}

export default HomePage;
