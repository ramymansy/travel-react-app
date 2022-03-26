import "./selectsImg.css";

const SelectsImg = ({ bgImg, text }) => {
  return (
    <div id="location" className="selects-location">
      <img src={bgImg} alt="bgimg" />
      <div className="overlay">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default SelectsImg;
