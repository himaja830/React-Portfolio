import React from "react";
import "../index.css";

import Jumbo from "../components/Jumbo";
import Content from "../components/Content";
import image from "../assets/images/portfolio_img.png";

function AboutPage(props) {
  return (
    <div style={{ backgroundColor: "#e6e6e6" }}>
      <Jumbo title={props.title} />
      <img
        className="s-card-image"
        src={image}
        alt="myImage"
        ALIGN="left"
        HSPACE="50"
        VSPACE="50"
      />
      <Content>
        <i>
          <p>Hello!</p>
          <p>Welcome to my Portfolio Page.</p>
          <p>
            I'm Himaja.I'm Full stack Web developer graduated from UT Austin
            Full stack Web Developer Boot Camp .
          </p>

          <p>
            Coming to my Backgroud, Im a pharmacist who has been surrounded by
            developers in friends and Family.
          </p>
          <p>
            {" "}
            This helped me to know about web development peripherally.When I had
            a plan to switch my Career,just thought of giving a try to the Web
            development.Then got myself introduced to Web Development through
            online resources such as W3 schools, Udemy, FreeCodeCamp. While
            learning through these resources and practicing coding, I found
            myself verymuch involded in it and enjoyed every bit of
            learning.It's then decided to take a Career switch from being a
            pharmacist to Web Developer.Later got enrolled in Fullstack Web
            development BootCamp that helped me to become a Full Stack Web
            Developer.
          </p>
          <p>
            The result of my learning Experience in BootCamp is this Portfolio
            which I built to Showcase some of my Work, that i have done through
            my learning process.
          </p>
        </i>
      </Content>
    </div>
  );
}

export default AboutPage;
