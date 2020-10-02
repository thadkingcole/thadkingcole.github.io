import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function About() {
  return (
    <Container>
      <Row>
        <Col xs={4}>
          <Image src="https://pbs.twimg.com/profile_images/814979740935290881/yxYJg4Av_400x400.jpg"/>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
