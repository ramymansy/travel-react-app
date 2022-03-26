import "./search.css";
import Gold from "../../assets/gold.png";

const Search = () => {
  return (
    <div id="search" className="search">
      <div className="container">
        <div className="left">
          <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
          <p>
            Come and experience the ultimate in luxury in Egypt Vacations at our
            luxury resorts are a different kind of fun that you have never
            experienced before.
            <br />
            Egypt has the most beautiful tourist places, wonderful beaches, and
            picturesque deserts Such as Sharm El-Sheikh, Hurghada, Ras Muhammad
            Protectorate, Ras Shaitan Protectorate, Alexandria, Sinai, Siwa
            Oasis in Fayoum, and the ancient archaeological areas in Luxor,
            Aswan, Cairo, and Giza.
            <br />
            Our restaurants, which have an unlimited number of delicacies, offer
            unique bars Excellent wine and wine, all land and water sports,
            including Complimentary Play Fees at PADI® Approved Golf Resorts
            Diving in most beach resorts.
            <br />
            If you are planning a wedding, leave the entire wedding and
            honeymoon arrangements to us and enjoy with your partner throughout
            your stay with us.
          </p>
          <div className="box">
            <div>
              <img src={Gold} alt="gold" style={{ marginRight: "1rem" }} />
            </div>
            <div>
              <h3 className="world">WORLD'S LEADING</h3>
              <p className="text">
                ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW
              </p>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="promo">
            <h4 className="save">GET AN ADDITIONAL 7% OFF</h4>
            <p className="timer">12 HOURS LEFT!</p>
            <p className="offers">VIEW ALL CURRENT OFFERS</p>
          </div>
          <form>
            <div className="input-wrap">
              <label>Destination</label>
              <select>
                <option value="1">Cairo</option>
                <option value="1">Giza</option>
                <option value="1">Alexandria</option>
                <option value="1">Fayoum</option>
                <option value="1">Luxor</option>
                <option value="1">Aswan</option>
                <option value="1">Sant Catreen</option>
                <option value="1">Hurghada</option>
                <option value="1">sharm el sheikh</option>
              </select>
            </div>
            <div className="date">
              <div className="input-wrap">
                <label>Check-In</label>
                <input type="date" />
              </div>
              <div className="input-wrap">
                <label>Check-Out</label>
                <input type="date" />
              </div>
            </div>
            <button>Rates & Availabilities </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
