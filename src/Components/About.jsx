import React from "react";
import AboutBackground from "../assets/about-background.png";
import AboutBackgroundImage from "../assets/about.webp";
import { BsFillPlayCircleFill } from "react-icons/bs";
// import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="about-section-container">
            <div className="about-background-image-container">
                <img src={AboutBackground} alt="" />
            </div>
            <div className="about-section-image-container">
                <img src={AboutBackgroundImage} alt="" />
            </div>
            <div className="about-section-text-container">
                <p className="primary-subheading">About</p>
                <h1 className="primary-heading">
                    WHAT WE DO?               </h1>
                <p className="primary-text">
                    Smile Foundation’s women empowerment programme Swabhiman, initiated in 2005, reaches out to marginalized and socially-excluded women with interventions in nutrition, healthcare, and livelihood. The programme capacitates women through innovative community practices, empowering them to seek healthcare and bring sustainable changes in the community, while also supporting them to become aware, skilled, and financially independent. Swabhiman also actively works to create a gender equal society, actively engaging men, and boys to participate in the process of women empowerment.
                </p>
                <p className="primary-text">
                    Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
                    elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
                </p>
                <div className="about-buttons-container">
                    <button className="secondary-button">Learn More</button>


                    <button className="watch-video-button">
                        <BsFillPlayCircleFill /> Watch Video
                    </button>

                </div>
            </div>
        </div>
    );
};

export default About;