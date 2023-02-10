import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./Components/NavigationBar";
import AboutUs from "./Components/AboutUs";
import OurTeam from "./Components/OurTeam";
import Testimonials from "./Components/Testimonials";
import NewsLetter from "./Components/NewsLetter";
import Footer from "./Components/Footer";
function App() {
  return (
    <div>
      <div>
        {/* <NavigationBar /> */}
      </div>
      <div style={{ backgroundColor: "white" }}>
        <AboutUs />
      </div>
      <div>
        <OurTeam />
      </div>
      <div>
        <Testimonials />
      </div>
      <div>
        <NewsLetter />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
