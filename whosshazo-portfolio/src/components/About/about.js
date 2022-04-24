import React from "react";
// import { Row, Col } from "reactstrap";
import Selfie from "../../assets/selfie/selfie.jpeg";
import Dad from "../../assets/abouts/daddy-daughter.JPG";
import Slob from "../../assets/abouts/slob-plant.jpg";
import Tunnel from "../../assets/abouts/tunnel.JPG";
import "./about.css";

function About() {
  return (
    <container className="abouts">
      <div className="media">
        <img
          src={Selfie}
          class="mr-3"
          alt="me in my car"
          style={{ width: "45%" }}
        />
        <div class="media-body">
          <h5 className="media-title">About Me</h5>
          <p className="intro">
            Husband & father of two. Love for all things skateboarding and old
            cars. Started my career off as a photographer on a experimental
            explosive facility for the Navy. Now, I am devoting my career to
            full stack development & building you the website of your dreams.
            Graduated full stack development from the University of Richmond in
            May 22. Let's build something together, and have fun doing it!
          </p>
          <div className="photo-list">
            <img
              src={Dad}
              class="mr-3"
              alt="me in my car"
              style={{ width: "30%" }}
            />
            <img
              src={Tunnel}
              class="mr-3"
              alt="me in my car"
              style={{ width: "30%" }}
            />
            <img
              src={Slob}
              class="mr-3"
              alt="me in my car"
              style={{ width: "30%" }}
            />
          </div>
        </div>
      </div>
    </container>
  );
}
export default About;
