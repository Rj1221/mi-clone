import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Banner from './components/Banner';
import Footer from "./components/Footer";
import Heading from './components/Heading';
import HotAccessories from "./components/HotAccessories";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js";
import Navbar from "./components/Navbar.js";
import Offers from "./components/Offers.js";
import PreNavbar from './components/PreNavbar';
import ProductReview from "./components/ProductReview";
import Slider from "./components/Slider.js";
import StarProduct from "./components/StarProduct.js";
import Videos from "./components/Videos";
import data from "./data/data.json";
import NavOptions from "./components/NavOptions";
function App ()
{

  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <NavOptions miPhones={ data.miPhones } redmiPhones={ data.redmiPhones } tv={ data.tv } laptop={ data.laptop } fitness={ data.fitnessAndLifeStyle} home={data.home} radio={data.audio} accessories={data.accessories} />
      <Slider start={ data.banner.start } />
      <Offers offer={ data.offer } />
      <Heading text="STAR PRODUCTS" />
      <StarProduct starProduct={ data.starProduct } />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />
      <Routes>
        <Route path='/music' element={ <
          // @ts-ignore
          HotAccessories music={ data.hotAccessories.music } musicCover={ data.hotAccessoriesCover.music } /> } />
        <Route path='/smartDevice' element={ <
          // @ts-ignore
          HotAccessories smartDevices={ data.hotAccessories.smartDevice } smartDevicesCover={ data.hotAccessoriesCover.smartDevice } /> } />
        <Route path='/home' element={ <
          // @ts-ignore
          HotAccessories home={ data.hotAccessories.home } homeCover={ data.hotAccessoriesCover.home } /> } />
        <Route path='/lifestyle' element={ <
          // @ts-ignore
          HotAccessories lifeStyle={ data.hotAccessories.lifeStyle } lifeStyleCover={ data.hotAccessoriesCover.lifeStyle } /> } />
        <Route path='/mobileAccessories' element={ <
          // @ts-ignore
          HotAccessories mobileAccessories={ data.hotAccessories.mobileAccessories } mobileAccessoriesCover={ data.hotAccessoriesCover.mobileAccessories } /> } />
      </Routes>
      <Heading text="PRODUCT REVIEWS" />
      <ProductReview productReviews={ data.productReviews } />
      <Heading text="VIDEOS" />
      <Videos videos={ data.videos } />
      <Heading text="IN THE PRESS" />
      <Banner banner={ data.banner.end } />
      <Footer footer={ data.footer } />
    </Router>

  );
}

export default App;

// Adding the @its- ignore because  i just want to pass 2 props from each section not all the props
