import React, { useState } from "react";
import CORPORATE_BOOTCAMP from "../../assets/CorporateBootcamp.jpg";

const Bootcamps = () => {
  const [bootcampName, setBootcapName] = useState("Corporate");
  const bootcampDetail = bootcampDetails[bootcampName];

  return (
    <div className="bootcamp">
      <div>Bootcamps</div>
      <div
        style={{
          display: "flex",
          gap: 10,
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
        <div>
          <p>{bootcampDetail.name}</p>
          <p>{bootcampDetail.description}</p>
        </div>
        <img src={bootcampDetail.imgSrc} alt={bootcampDetail.name} />
      </div>
    </div>
  );
};

const bootcampDetails = {
  Corporate: {
    name: "Amet minim mollit - Corporate ",
    imgSrc: CORPORATE_BOOTCAMP,
    description:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
  },
  Groups: {
    name: "Amet minim mollit - Groups",
    imgSrc: CORPORATE_BOOTCAMP,
    description:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
  },
  Upcoming: {
    name: "Amet minim mollit - Upcoming ",
    imgSrc: CORPORATE_BOOTCAMP,
    description:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
  },
};

export default Bootcamps;
