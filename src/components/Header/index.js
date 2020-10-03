import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Jumbotron as="header" className="pb-0" fluid>
      <Container>
        <h1>Thaddeus Cole</h1>
        <Col sm={7} md={6}>
          <Nav fill variant="tabs" defaultActiveKey="/about">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                eventKey="/about"
              >
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/portfolio"
                eventKey="/portfolio"
              >
                Portfolio
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                eventKey="/contact"
              >
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Container>
    </Jumbotron>
  );
}

export default Header;
