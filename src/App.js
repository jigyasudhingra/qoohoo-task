import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Courses from "./components/Courses/Courses";
import Bootcamps from "./components/Bootcamps/Bootcamps";
import HeroContent from "./components/HeroContent/HeroContent";

const App = () => {
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
