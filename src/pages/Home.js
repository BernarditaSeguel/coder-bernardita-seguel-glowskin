import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/slide-web/SLIDE-GLOW-SKIN--7.JPG";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Piel más radiante</h1>
        <p>Completa tu rutina de skincare</p>
        <Link to="/shop">
          <button>Shop now</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
