import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

function Footer() {
  return (
    <Jumbotron
      fluid
      as="footer"
      className="bg-dark mb-0 py-2 fixed-bottom text-center text-info"
    >
      <Container>
        <small>Copyright &copy; Thaddeus Cole</small>
      </Container>
    </Jumbotron>
  );
}

export default Footer;
