import React from "react";
import Slider from "react-slick";
import img1 from "../../../assets/shayt1.svg";
import img2 from "../../../assets/shayt2.svg";
import img3 from "../../../assets/shayt3.svg";

function SliderSolo() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={img1} alt="" className='img-slider'/>
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
        <div>
          <img src={img3} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default SliderSolo;