import "./footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="title">
          <h2>TRAVEL</h2>
        </div>
        <div className="social">
          <FaFacebook className="icon" />
          <FaInstagram className="icon" />
          <FaTwitter className="icon" />
          <FaPinterest className="icon" />
          <FaYoutube className="icon" />
        </div>
        <div className="links">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#destinations">Destinations</a>
            </li>
            <li>
              <a href="#carousel">Travel</a>
            </li>
            <li>
              <a href="#search">Book</a>
            </li>
            <li>
              <a href="#selects">Views</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Partnerships</a>
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
            <li>
              <a href="/">Newsroom</a>
            </li>
            <li>
              <a href="/">Advertising</a>
            </li>
            <li>
              <a href="/">Terms</a>
            </li>
            <li>
              <a href="/">Policy</a>
            </li>
            <li>
              <a href="/">Privacy</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
