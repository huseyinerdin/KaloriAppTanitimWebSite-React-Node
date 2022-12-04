import React, { useState } from "react";

const Slider = () => {
  const [currentImage, setCurrentImage] = useState("img/slider/anasayfa.png");

  const opacityOff = (n) => {
    let fotos = document.getElementsByClassName("mini-foto");
    for (let i = 0; i < fotos.length; i++) {
      fotos[i].className = fotos[i].className.replace(" opacity-off", "");
    }
    fotos[n - 1].className += " opacity-off";
  };
  return (
    <div className="slider">
      <img src={currentImage} alt="current-foto" className="program-foto" />
      <div className="foto-row">
        <img
          className="mini-foto opacity-off"
          src="img/slider/anasayfa.png"
          alt="main page foto"
          onClick={(event) => {
            setCurrentImage("img/slider/anasayfa.png");
            opacityOff(1);
          }}
        />
        <img
          className="mini-foto"
          src="img/slider/ogunekle.png"
          alt="report page foto"
          onClick={(event) => {
            setCurrentImage("img/slider/ogunekle.png");
            opacityOff(2);
          }}
        />
        <img
          className="mini-foto"
          src="img/slider/ogunduzenle.png"
          alt="report page foto"
          onClick={(event) => {
            setCurrentImage("img/slider/ogunduzenle.png");
            opacityOff(3);
          }}
        />
      </div>
    </div>
  );
};

export default Slider;
