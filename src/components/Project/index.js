import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import API from "../../utils/API";

function Project({ name }) {
  const [repoInfo, setRepoInfo] = useState(name);

  useEffect(() => {
    API.getRepo(name)
      .then((res) => {
        setRepoInfo(res.data);
      })
      .catch((err) => console.log(err));
  }, [name]);

  return (
    <Card className="mb-5">
      <Card.Link href={repoInfo.homepage} target="_blank">
        <Card.Img
          variant="top"
          src={`https://raw.githubusercontent.com/thadkingcole/${name}/master/public/images/screenshot.png`}
        />
      </Card.Link>
      <Card.Body>
        <Card.Title className="text-center text-capitalize">
          {name.split("_").join(" ")}
        </Card.Title>
        <Card.Text>{repoInfo.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <FontAwesomeIcon
            icon="laptop-code"
            size="lg"
            className="mr-1"
            fixedWidth
          />
          <Card.Link href={repoInfo.homepage} target="_blank">
            Deployed Site
          </Card.Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <FontAwesomeIcon
            icon={["fab", "github-square"]}
            size="lg"
            className="mr-1"
            fixedWidth
          />
          <Card.Link href={repoInfo.html_url} target="_blank">
            Github Repo
          </Card.Link>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default Project;
