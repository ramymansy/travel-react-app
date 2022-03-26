import "./destinations.css";
import Resort from "../../assets/resort.jpg";
import Resort2 from "../../assets/resort2.jpg";
import Resort3 from "../../assets/resort3.jpg";
import Resort4 from "../../assets/resort4.jpg";
import Resort5 from "../../assets/resort5.jpg";

const Destinations = () => {
  return (
    <div id="destinations" className="destinations">
      <div className="container">
        <h1>All-inclusive Resorts</h1>
        <p>On the World's beauty country</p>
        <div className="img-container">
          <img className="span-3 image-grid-row-2" src={Resort3} alt="img1" />
          <img src={Resort2} alt="img1" />
          <img src={Resort} alt="img1" />
          <img src={Resort4} alt="img1" />
          <img src={Resort5} alt="img1" />
        </div>
      </div>
    </div>
  );
};

export default Destinations;
