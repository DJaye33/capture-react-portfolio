import home1 from "../img/home1.png";
// import styled from "styled-components";
import {About as Layout, Description, Image, Hide} from "../styles"

const AboutSection = () => {
  return (
    <Layout>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams </span>come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with incredible skill.
        </p>
        <button>Contact Us</button>
      </Description>
      <Image className="image">
        <img src={home1} alt="man with a camera" />
      </Image>
    </Layout>
  );
};


export default AboutSection;
