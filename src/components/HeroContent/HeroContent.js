import React from "react";
import "./HeroContent.css";
import MAIN_HERO_IMG from "../../assets/MainProfile.jpg";
import FilledCircle from "../FilledCircle";
import RIGHT_ARROW from "../../assets/RightArrow.png";

const HeroContent = () => {
  return (
    <div className="hero-content">
      <div className="hero-main-content">
        <MainContentImgSection />
        <MainContentHeadingSection />
      </div>
      <ThreeTicks />
    </div>
  );
};

const MainContentImgSection = () => (
  <div className="main-content">
    <img className="image" src={MAIN_HERO_IMG} alt="main-hero" />
    <div className="three-grey-circles">
      {Array(3)
        .fill(" ")
        .map((i, idx) => (
          <FilledCircle
            key={idx + "circle"}
            circleColor="#C1CFFF"
            width={36}
            height={36}
          />
        ))}
    </div>
  </div>
);

const MainContentHeadingSection = () => (
  <div className="hero-main-content-right">
    <p className="main-heading">
      <span className="highlighted-heading">Get ready</span> to grow <br /> with
      us ⭐️
    </p>
    <p
      style={{
        fontWeight: 500,
        fontSize: 18,
        marginTop: -15,
        marginBottom: 20,
      }}
    >
      Start with us today
    </p>
    <button className="contained-yellow-button">
      <p>View all courses</p>
      <img
        style={{
          transition: `transform 1s`,
        }}
        src={RIGHT_ARROW}
        alt="right-arrow"
        width="4%"
      />
    </button>
  </div>
);

const ThreeTicks = () => (
  <div className="three-ticks">
    {threeYellowCircles.map((i, idx) => (
      <div key={i.text} className="three-ticks-inner">
        <FilledCircle
          key={idx + "circle"}
          circleColor="#fb9b43"
          width={84}
          height={84}
          tick
        />
        <h3>{i.text}</h3>
      </div>
    ))}
  </div>
);

const threeYellowCircles = [
  {
    text: "500+ happy customers",
  },
  {
    text: "Learn as you go",
  },
  {
    text: "Self-paced learning",
  },
];

export default HeroContent;
