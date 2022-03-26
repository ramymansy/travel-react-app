import "./imgCarousel.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import BoraBora from "../../assets/borabora.jpg";
import BoraBora2 from "../../assets/borabora2.jpg";
import Maldives from "../../assets/maldives.jpg";
import Maldives2 from "../../assets/maldives2.jpg";
import Maldives3 from "../../assets/maldives3.jpg";
import KeyWest from "../../assets/keywest.jpg";

const ImgCarousel = () => {
  return (
    <div id="carousel" className="container">
      <Carousel
        className="carousel"
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
      >
        <div>
          <img src={BoraBora} alt="BoraBora" />
        </div>
        <div>
          <img src={BoraBora2} alt="BoraBora2" />
        </div>
        <div>
          <img src={Maldives} alt="Maldives" />
        </div>
        <div>
          <img src={Maldives2} alt="Maldives2" />
        </div>
        <div>
          <img src={Maldives3} alt="Maldives3" />
        </div>
        <div>
          <img src={KeyWest} alt="KeyWest" />
        </div>
      </Carousel>
    </div>
  );
};

export default ImgCarousel;
