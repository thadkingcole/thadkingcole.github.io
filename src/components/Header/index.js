import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Jumbotron as="header" className="bg-primary pb-0" fluid>
      <Container>
        <h1>Thaddeus Cole</h1>
        <p>Welcome to my portfolio!</p>
        <Col sm={7} md={6}>
          <Nav fill variant="tabs" defaultActiveKey="/about">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                eventKey="/about"
                className="bg-dark text-success"
              >
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/portfolio"
                eventKey="/portfolio"
                className="bg-dark text-success"
              >
                Portfolio
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                eventKey="/contact"
                className="bg-dark text-success"
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