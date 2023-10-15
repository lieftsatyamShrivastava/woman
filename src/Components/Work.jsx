import React from "react";
import PickMeals from "../assets/education.webp";
import ChooseMeals from "../assets/healthi.webp";
import DeliveryMeals from "../assets/home-banner-image.webp";

const Work = () => {
    const workInfoData = [
        {
            image: PickMeals,
            title: " Educating Girls Matters",
            text: "The folks at Education Girls Matter have a more global reach than some of the other sites, and are one of the leaders in raising awareness about the importance of education for girls. From their website, Educating Girls Matters is an online resource designed to provide news about educating girls and links to websites of organizations that help educate girls/women around the world. We dare to imagine a world in which all girls have access to education.",
        },
        {
            image: ChooseMeals,
            title: " Hardy Girls Healthy Women",
            text: "Great webinars, great message, and a whole lot of tools to help empower the girls in your life.  Hardy Girls Healthy Women (HGHW) is a nonprofit organization dedicated to the health and well being of girls and women. Our vision is that all girls and women experience equality, independence, and safety in their everyday lives. To that end, our mission is to create opportunities, develop programs, and provide services that empower them. Since day one, Hardy Girls programming,",
        },
        {
            image: DeliveryMeals,
            title: " Girls Can’t WHAT?",
            text: "Well of course we love Girls Can’t WHAT? We just completed our first contest sponsored by them! From their website, We’ve started a revolution that challenges women to break through gender stereotypes and achieve their dreams. Ideas, motivation, encouragement and interviews can be found on the where we often spark very lively discussions on current issues and challenges facing women. ",
        },
    ];
    return (
        <div className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading">Work</p>
                <h1 className="primary-heading">How It Works</h1>
                <p className="primary-text">
                    Smile Foundation’s women empowerment programme Swabhiman, initiated in 2005, reaches out to marginalized and socially-excluded women with interventions in nutrition, healthcare, and livelihood. The programme capacitates women through innovative community practices, empowering them to seek healthcare and bring sustainable changes in the community, while also supporting them to become aware, skilled, and financially independent. Swabhiman also actively works to create a gender equal society, actively engaging men, and boys to participate in the process of women empowerment.
                </p>
            </div>
            <div className="work-section-bottom">
                {workInfoData.map((data) => (
                    <div className="work-section-info" key={data.title}>
                        <div className="info-boxes-img-container">
                            <img src={data.image} alt="" />
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Work;