import React, { useEffect } from "react";
import "./Courses.css";
import course1 from "../../assets/course1.jpg";
import course2 from "../../assets/course2.jpg";
import course3 from "../../assets/course3.png";
import WHITE_RIGHT_ARROW from "../../assets/whiteRightArrow.png";

const Courses = () => {
  useEffect(() => {
    const courseCard = document.querySelectorAll(".course-card");

    const observer = new IntersectionObserver((entries) =>
      entries.forEach(
        (entry, idx) => {
          setTimeout(
            () => {
              entry.target.classList.toggle("show", entry.isIntersecting);
            },
            idx === 0 ? 300 : idx * 500
          );
          if (entry.isIntersecting) observer.unobserve(entry.target);
        },
        {
          threshold: 1,
        }
      )
    );

    courseCard.forEach((card) => {
      observer.observe(card);
    });
  }, []);
  return (
    <>
      <div className="course-title">Checkout my courses</div>
      <div className="courses-main">
        {courseDetails.map((i) => {
          return (
            <div key={i.name} className="course-card">
              <img className="card-img" src={i.imgSrc} alt={i.name} />
              <p className="card-heading">{i.name}</p>
              <button className="blue-contained-button">
                Join Now
                <img
                  src={WHITE_RIGHT_ARROW}
                  alt="white-right-arrow"
                  width="3%"
                  style={{
                    transition: `transform 1s`,
                  }}
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
