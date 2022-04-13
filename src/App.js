import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Heading from './components/Heading';
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js";
import Navbar from "./components/Navbar.js";
import Offers from "./components/Offers.js";
import PreNavbar from './components/PreNavbar';
import Slider from "./components/Slider.js";
import StarProduct from "./components/StarProduct.js";
import data from "./data/data.json";
function App ()
{

  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <Slider start={ data.banner.start } />
      <Offers offer={ data.offer } />
      <Heading text="STAR PRODUCTS" />
      <StarProduct starProduct={ data.starProduct } />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />
    </Router>

  );
}

export default App;
