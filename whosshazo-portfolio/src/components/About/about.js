import React from "react";
import { Row, Col } from "reactstrap";
import Selfie from "../../assets/selfie/selfie.jpeg";

function About() {
  return (
    <container>
      <Row>
        <Col class="media d-flex flex">
          <img
            src={Selfie}
            className="align-self-start mr-3"
            style={{ width: "45%" }}
            alt="selfie"
          />
          <Col className="media-body">
            <h5 className="mt-0">About Me</h5>
            <p>
              Husband & father of two. Love for all things skateboarding and old
              cars. Started my career off as a photographer on a experimental
              explosive facility for the Navy. Now, I am devoting my career to
              full stack development & building you the website of your dreams.
              Graduated full stack development from the University of Richmond
              in May 22. Let's build something together, and have fun doing it!
            </p>
          </Col>
        </Col>
      </Row>
    </container>
  );
}
export default About;
