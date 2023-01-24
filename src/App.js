import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Courses from "./components/Courses/Courses";
import Bootcamps from "./components/Bootcamps/Bootcamps";
import HeroContent from "./components/HeroContent/HeroContent";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".three-ticks-inner");

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

    cards.forEach((card) => {
      observer.observe(card);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <HeroContent />
      <Courses />
      <Bootcamps />
      <Footer />
    </div>
  );
};

export default App;
