import React from "react";
import "./Courses.css";
import course1 from "../../assets/course1.jpg";
import course2 from "../../assets/course2.jpg";
import course3 from "../../assets/course3.png";
import WHITE_RIGHT_ARROW from "../../assets/whiteRightArrow.png";

const Courses = () => {
  return (
    <>
      <div className="course-title">Checkout my courses</div>
      <div className="courses-main">
        {courseDetails.map((i) => {
          return (
            <div key={i.name} className="course-card">
              <img
                style={{
                  borderRadius: 8,
                }}
                src={i.imgSrc}
                alt={i.name}
              />
              <p
                style={{
                  fontWeight: 700,
                  fontSize: 20,
                }}
              >
                {i.name}
              </p>
              <button className="blue-contained-button">
                Join Now
                <img
                  src={WHITE_RIGHT_ARROW}
                  alt="white-right-arrow"
                  width="3%"
                />
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

const courseDetails = [
  {
    imgSrc: course1,
    name: "Toledo",
  },
  {
    imgSrc: course2,
    name: "Pembroke Pines",
  },
  {
    imgSrc: course3,
    name: "Naperville",
  },
];

export default Courses;
