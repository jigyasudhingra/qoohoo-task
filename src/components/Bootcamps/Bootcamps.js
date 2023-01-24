import React, { useState } from "react";
import CORPORATE_BOOTCAMP from "../../assets/CorporateBootcamp.png";
import "./Bootcamps.css";
import WHITE_RIGHT_ARROW from "../../assets/whiteRightArrow.png";

const Bootcamps = () => {
  const [bootcampName, setBootcapName] = useState("Corporate");
  const bootcampDetail = bootcampDetails[bootcampName];

  return (
    <div className="bootcamp">
      <div className="bootcamp-title">Bootcamps</div>
      <BootcampNameCards
        bootcampName={bootcampName}
        setBootcapName={setBootcapName}
      />
      <BootcampDetailCards bootcampDetail={bootcampDetail} />
    </div>
  );
};

const BootcampNameCards = ({ bootcampName, setBootcapName }) => (
  <div className="bootcamp-names">
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
);

const BootcampDetailCards = ({ bootcampDetail }) => {
  return (
    <div className="bootcamp-detail-card">
      <div className="bootcamp-details">
        <div className="bootcamp-details-heading">{bootcampDetail.name}</div>
        <div className="bootcamp-details-description">
          {bootcampDetail.description}
        </div>
        <button className="contained-button">
          <div>Join Now</div>
          <div>
            <img
              style={{
                transition: `transform 1s`,
              }}
              src={WHITE_RIGHT_ARROW}
              alt="white-right-arrow"
            />
          </div>
        </button>
      </div>
      <div className="bootcamp-detail-img">
        <img
          style={{
            width: "80%",
            height: "auto",
          }}
          src={bootcampDetail.imgSrc}
          alt={bootcampDetail.name}
        />
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
