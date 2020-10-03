import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// TODO import font awesome icons (use global method?)

function About() {
  return (
    <Container>
      <Row>
        <Col xs={4}>
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
      </Row>
    </Container>
  );
}

export default About;
