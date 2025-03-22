import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { img } from "./image/Data";

function CaurasualEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imageItemLink, index) => (
          <img key={index} src={imageItemLink} alt={`carousel-item-${index}`} />
        ))}
      </Carousel>
    </div>
  );
}

export default CaurasualEffect;
