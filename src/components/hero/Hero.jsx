import "./hero.css";
import Video from "../../assets/pexels-juancarlos-córdova-7574279.mp4";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <video loop autoPlay muted className="video">
        <source src={Video} type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <div className="content">
        <h1>First Class Travel</h1>
        <h2>Top Location Worldwide</h2>
        <form className="form">
          <div>
            <input
              className="input"
              type="text"
              placeholder="Choose Destination"
            />
          </div>
          <div>
            <button>Search</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
