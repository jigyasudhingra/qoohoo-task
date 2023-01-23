import React from "react";
import "./HeroContent.css";
import MAIN_HERO_IMG from "../../assets/MainProfile.jpg";
import FilledCircle from "../FilledCircle";
import RIGHT_ARROW from "../../assets/RightArrow.png";
import BLUE_TICK from "../../assets/BlueTick.png";

const HeroContent = () => {
  return (
    <div className="hero-content">
      <div className="hero-main-content">
        <div
          style={{
            justifyContent: "right",
            width: "50%",
          }}
        >
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
        <div className="hero-main-content-right">
          <p
            style={{
              fontSize: 40,
              fontWeight: 700,
              marginTop: -12,
            }}
          >
            <span
              style={{
                color: "#fb9b43",
                fontWeight: 900,
              }}
            >
              Get ready
            </span>{" "}
            to grow with us ⭐️
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
            <img src={RIGHT_ARROW} alt="right-arrow" width="4%" />
          </button>
        </div>
      </div>
      <div className="three-ticks">
        {threeYellowCircles.map((i, idx) => (
          <div
            key={i.text}
            style={{
              textAlign: "-webkit-center",
              color: "white",
            }}
          >
            <FilledCircle
              key={idx + "circle"}
              circleColor="#fb9b43"
              width={84}
              height={84}
              tick
            />
            {/* <img
              style={{
                position: "absolute",
                marginTop: -55,
                marginLeft: -18,
                width: "3%",
              }}
              src={BLUE_TICK}
              alt="blue-tick"
            /> */}
            <h3>{i.text}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

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
