import React, { useState } from "react";
import CORPORATE_BOOTCAMP from "../../assets/CorporateBootcamp.jpg";
import "./Bootcamps.css";
import WHITE_RIGHT_ARROW from "../../assets/whiteRightArrow.png";

const Bootcamps = () => {
  const [bootcampName, setBootcapName] = useState("Corporate");
  const bootcampDetail = bootcampDetails[bootcampName];

  return (
    <div className="bootcamp">
      <div className="bootcamp-title">Bootcamps</div>
      <div
        style={{
          display: "flex",
          gap: 20,
          justifyContent: "center",
          marginBottom: 30,
          marginTop: 50,
        }}
      >
        {Object.keys(bootcampDetails).map((i) => (
          <div
            key={i}
            className={
              bootcampName === i ? "selected-bootcamp-name" : "bootcamp-name"
            }
            onClick={() => setBootcapName(i)}
          >
            {i}
          </div>
        ))}
      </div>
      <div className="bootcamp-detail-card">
        <div
          style={{
            width: "50%",
            // textAlign: "",
            justifyContent: "right",
            marginRight: 50,
            marginLeft: 50,
          }}
        >
          <div
            style={{
              fontSize: 44,
              fontWeight: 800,
              marginBottom: 20,
              marginTop: 20,
            }}
          >
            {bootcampDetail.name}
          </div>
          <div
            style={{
              fontSize: 24,
              fontWeight: 600,
              marginBottom: 25,
            }}
          >
            {bootcampDetail.description}
          </div>
          <button className="contained-button">
            <div>Join Now</div>
            <div>
              <img src={WHITE_RIGHT_ARROW} alt="white-right-arrow" />
            </div>
          </button>
        </div>
        <div
          style={{
            width: "50%",
            textAlign: "center",
          }}
        >
          <img
            style={{
              borderRadius: 32,
            }}
            src={bootcampDetail.imgSrc}
            alt={bootcampDetail.name}
          />
        </div>
      </div>
    </div>
  );
};

const bootcampDetails = {
  Corporate: {
    name: "Corporate minim mollit ",
    imgSrc: CORPORATE_BOOTCAMP,
    description:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
  },
  Groups: {
    name: "Groups minim mollit",
    imgSrc: CORPORATE_BOOTCAMP,
    description:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
  },
  Upcoming: {
    name: "Upcoming minim mollit ",
    imgSrc: CORPORATE_BOOTCAMP,
    description:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
  },
};

export default Bootcamps;
