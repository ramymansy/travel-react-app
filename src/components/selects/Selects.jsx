import "./selects.css";
import Cairo from "../../assets/cairo.jpg";
import Giza from "../../assets/giza.jpg";
import Alexandria from "../../assets/alexandria.jpg";
import Fayoum from "../../assets/fayoum.jpg";
import Luxor from "../../assets/luxor.jpg";
import Aswan from "../../assets/aswan.jpg";
import Catrien from "../../assets/catrien.jpg";
import Hurghada from "../../assets/hurghada.jpg";
import Sharm from "../../assets/sharm.jpg";

import SelectsImg from "../selectsImg/SelectsImg";

const Selects = () => {
  return (
    <div id="selects" className="selects">
      <div className="container">
        <SelectsImg bgImg={Cairo} text="Cairo" />
        <SelectsImg bgImg={Giza} text="Giza" />
        <SelectsImg bgImg={Alexandria} text="Alexandria" />
        <SelectsImg bgImg={Fayoum} text="Fayoum" />
        <SelectsImg bgImg={Luxor} text="Luxor" />
        <SelectsImg bgImg={Aswan} text="Aswan" />
        <SelectsImg bgImg={Catrien} text="Sant Catreen" />
        <SelectsImg bgImg={Hurghada} text="Hurghada" />
        <SelectsImg bgImg={Sharm} text="sharm el sheikh" />
      </div>
    </div>
  );
};

export default Selects;
