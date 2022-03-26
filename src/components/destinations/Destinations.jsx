import "./destinations.css";
import Borabora from "../../assets/borabora.jpg";
import Borabora2 from "../../assets/borabora2.jpg";
import Maldives from "../../assets/maldives.jpg";
import Maldives2 from "../../assets/maldives2.jpg";
import Keywest from "../../assets/keywest.jpg";

const Destinations = () => {
  return (
    <div id="destinations" className="destinations">
      <div className="container">
        <h1>All-inclusive Resorts</h1>
        <p>On the World's Best Beaches</p>
        <div className="img-container">
          <img className="span-3 image-grid-row-2" src={Borabora} alt="img1" />
          <img src={Borabora2} alt="img1" />
          <img src={Maldives} alt="img1" />
          <img src={Maldives2} alt="img1" />
          <img src={Keywest} alt="img1" />
        </div>
      </div>
    </div>
  );
};

export default Destinations;
