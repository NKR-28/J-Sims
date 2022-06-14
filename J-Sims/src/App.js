import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Contact from "./Contact";
import ResponsiveAppBar from "./ResponsiveAppBar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="responsiveNav">
        <ResponsiveAppBar />
      </div>
      <div className="content">
        <Home />
        <div className="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
