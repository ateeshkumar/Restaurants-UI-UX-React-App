import React from "react";
import images from "../../constants/images";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app_aboutus-overlay flex__center">
      <img src={images.G} alt="G-leter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="About Spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
          voluptatibus nesciunt suscipit
        </p>
        <button type="button" className="custom__button">
          Learn More
        </button>
      </div>

      <div className="app__aboutus-contetent_knife flex__center">
        <img src={images.knife} alt="Knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="About Spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
          voluptatibus nesciunt suscipit
        </p>
        <button type="button" className="custom__button">
          Learn More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
