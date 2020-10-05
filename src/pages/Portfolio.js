import React, { useState, useEffect } from "react";
import Project from "../components/Project";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import API from "../utils/API";

function Portfolio() {
  const repos = [
    "symptom_tracker",
    "is_it_open",
    "weather_dashboard",
    "emdir",
    "burger",
    "noted",
  ];

  // function getRepoInfo(repo) {
  //   API.getRepo(repo)
  //     .then((res) => {
  //       const repoInfo = res.data;
  //       console.log(repoInfo);
  //       return (
  //         <Col>
  //           <Project name={repo} homepage={repoInfo.homepage} />
  //         </Col>
  //       );
  //     })
  //     .catch((err) => console.log(err));
  // }

  return (
    <Container>
      <Row xs={1} sm={2} lg={3}>
        {repos.map((repo) => {
          return (
            <Col>
              <Project name={repo} />
            </Col>
          )
        })}
      </Row>
    </Container>
  );
}

export default Portfolio;
