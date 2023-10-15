import React, { useEffect } from "react";
import BannerBackground from "../assets/home-banner-background.png";
import BannerImage from "../assets/home-banner-image.webp";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  useEffect(() => {
    function initLandbot() {
      if (!window.myLandbot) {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.addEventListener('load', function () {
          window.myLandbot = new window.Landbot.Livechat({
            configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-1748467-F07KB7MIDWTBQ20J/index.json',
          });
        });
        s.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.js';
        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);
      }
    }

    initLandbot();
  }, []);

  return (




    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            WOMEN EMPOWERMENT
          </h1>
          <p className="primary-text">
            We envision a India “where every woman and every girl, who wants to earn, gets the opportunities to do so.”
          </p>
          <button className="secondary-button">
            Explore More <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>


      </div>
    </div>
  );
};

export default Home;