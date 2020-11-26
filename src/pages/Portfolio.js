import React from "react";
import Project from "../components/Project";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./portfolio.css";

function Portfolio() {
  // these are the 6 repos I want to display (in order)
  const repos = [
    "yard-pal",
    "symptom_tracker",
    "is_it_open",
    "weather_dashboard",
    "emdir",
    "noted",
  ];

  return (
    <Container>
      <Row xs={1} sm={2} lg={3}>
        {repos.map((repo) => {
          return (
            <Col key={repo}>
              <Project name={repo} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Portfolio;
