import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";
import ListGroup from "react-bootstrap/ListGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Obfuscate from "react-obfuscate";

function About() {
  return (
    <Container>
      <Row>
        <Col md={true} className="text-center">
          <Figure>
            <Figure.Image
              alt="Thaddeus Cole Profile Pic"
              src="https://pbs.twimg.com/profile_images/814979740935290881/yxYJg4Av_400x400.jpg"
            />
            <Figure.Caption className="text-center">
              {/* github icon link */}
              <a
                href="https://github.com/thadkingcole"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={["fab", "github-square"]}
                  size="3x"
                  fixedWidth
                />
              </a>
              {/* linkedin icon link */}
              <a
                href="https://www.linkedin.com/in/thaddeuscole/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={["fab", "linkedin"]}
                  size="3x"
                  fixedWidth
                />
              </a>
              {/* twitter icon link */}
              <a
                href="https://twitter.com/thadkingcole"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={["fab", "twitter-square"]}
                  size="3x"
                  fixedWidth
                />
              </a>
              {/* instagram icon link */}
              <a
                href="https://www.instagram.com/thadkingcole/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={["fab", "instagram-square"]}
                  size="3x"
                  fixedWidth
                />
              </a>
            </Figure.Caption>
          </Figure>
        </Col>
        <Col md={true}>
          <p>
            My name is Thad, and I am a full-stack web developer with a passion
            for solving problems with code.
          </p>
          <p>
            Graduate of the Coding Bootcamp at UNC Chapel Hill with skills in
            HTML, CSS/Bootstrap, JavaScript/jQuery/React, and Python, I
            specialize in building web applications with a responsive, intuitive
            front-end and a robust, reliable back-end.
          </p>
          <p>
            I leverage my background in nuclear operations to remain calm under
            pressure, think critically, learn quickly, and work as either a
            teammate or team leader to achieve a common goal.
          </p>
          <p>
            I am eager to combine my background in nuclear operations with my
            technical skills to build exciting products as part of a fast-paced
            results-driven engineering team.
          </p>
        </Col>
        <Col lg={3}>{/* offset column on >lg screens */}</Col>
      </Row>
      <Row>
        <Col>
          <ListGroup
            horizontal="md"
            className="justify-content-center text-center"
          >
            <ListGroup.Item>
              <FontAwesomeIcon icon="file-pdf" size="lg" fixedWidth />
              <a
                href="https://drive.google.com/file/d/1-e8Rdh5XIrcg0jafdU54J0hapT8X_esW/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </ListGroup.Item>
            <ListGroup.Item>
              <FontAwesomeIcon icon="envelope-open-text" size="lg" fixedWidth />
              <Obfuscate email="thadjcole@gmail.com" />
            </ListGroup.Item>
            <ListGroup.Item>
              <FontAwesomeIcon icon="phone-square" size="lg" fixedWidth />
              <Obfuscate tel="423-202-1787" />
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
