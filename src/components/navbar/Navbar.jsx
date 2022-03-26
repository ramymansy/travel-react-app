import "./navbar.css";
import { BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaFacebook, FaTwitter, FaPinterest, FaYoutube } from "react-icons/fa";
import { AiFillInstagram, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="navbar">
      <div className="nav-menu-top">
        <div className="logo">
          <h2>TRAVEL</h2>
        </div>
        <div className="hamburger" onClick={() => setNav(!nav)}>
          {!nav ? (
            <HiOutlineMenuAlt4 className="icon" />
          ) : (
            <AiOutlineClose className="icon" />
          )}
        </div>
        <ul className="nav-menu">
          <li className="nav-list">
            <a href="#home">Home</a>
          </li>
          <li className="nav-list">
            <a href="#destinations">Destinations</a>
          </li>
          <li className="nav-list">
            <a href="#carousel">Travel</a>
          </li>
          <li className="nav-list">
            <a href="#search">Book</a>
          </li>
          <li className="nav-list">
            <a href="#selects">Views</a>
          </li>
        </ul>
        <div className="nav-icons">
          <BiSearch className="icon" />
          <BsPerson className="icon" />
        </div>
      </div>
      <div className={nav ? "mobile-menu active" : "mobile-menu"}>
        <ul className="mobile-nav">
          <li className="mobile-list">
            <a href="#home">Home</a>
          </li>
          <li className="mobile-list">
            <a href="#destinations">Destinations</a>
          </li>
          <li className="mobile-list">
            <a href="#carousel">Travel</a>
          </li>
          <li className="mobile-list">
            <a href="#search">Book</a>
          </li>
          <li className="mobile-list">
            <a href="#selects">Views</a>
          </li>
        </ul>
        <div className="mobile-menu-bottom">
          <div className="menu-icons">
            <button>Search</button>
            <button>Account</button>
          </div>
          <div className="social-icons">
            <FaFacebook className="icon" />
            <AiFillInstagram className="icon" />
            <FaTwitter className="icon" />
            <FaPinterest className="icon" />
            <FaYoutube className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
