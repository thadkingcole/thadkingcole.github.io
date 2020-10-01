import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";

function App() {
  return (
    <>
      <Jumbotron as="header" className="bg-primary pb-0" fluid>
        <Container>
          <h1>Thaddeus Cole</h1>
          <p>Welcome to my portfolio!</p>
          <Col sm={7} md={6}>
            <Nav fill variant="tabs" defaultActiveKey="/about">
              <Nav.Item>
                <Nav.Link href="/about" className="bg-dark text-success">
                  About
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="/portfolio"
                  className="bg-dark text-success"
                >
                  Portfolio
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="/contact" className="bg-dark text-success">
                  Contact
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Container>
      </Jumbotron>
      <Container className="mb-5">
        <Row>
          <Col>
            <h2>Hello</h2>
            <p>My name is Thad. Here are some things about me.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              a unde ea nobis sunt est ipsum doloribus reiciendis dolores
              numquam ipsa sit accusamus dolorem porro? Alias dolorum quibusdam
              eum nesciunt?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
              excepturi distinctio iste quas consequuntur architecto voluptatem
              est blanditiis hic numquam, ad eos ut dicta debitis velit fugiat
              ratione earum corrupti repellat. Eos sed voluptates debitis
              perspiciatis, iste commodi eius est numquam tenetur dignissimos ex
              aliquid, voluptas itaque illo officiis sunt quae minus
              reprehenderit voluptatibus, excepturi odio eum mollitia unde!
              Possimus aut cumque, dolorem pariatur dolorum nemo obcaecati quod.
              Facere veritatis laudantium sed optio ullam sit labore saepe. Hic
              non, nisi nam alias debitis error ipsam odio, reiciendis accusamus
              est molestias adipisci eum rerum. Natus doloremque voluptatibus
              exercitationem nihil pariatur laborum, ab magnam officia
              architecto in excepturi est minima quisquam maxime officiis
              possimus optio atque perspiciatis numquam quae voluptatem ad aut,
              tempora quibusdam? Officia, eum tempora quam itaque qui
              dignissimos necessitatibus nihil? Tempore mollitia eaque
              laudantium nihil facilis quae repellendus, amet aperiam placeat
              consequuntur! Sunt, incidunt quos, ipsum, odio praesentium atque
              id nemo voluptatem sapiente magni soluta. Tenetur nisi magni ab
              fugit iste ex, dolores magnam a. Accusantium aperiam magnam
              explicabo quibusdam voluptas neque nihil quos. Ipsa fugit
              blanditiis, assumenda, vitae dolor, libero aspernatur eum quod
              illo doloremque culpa veniam quidem? Iure veniam assumenda dolore
              quisquam sequi! Illo soluta numquam consectetur sapiente qui ab
              ipsam amet, labore repudiandae cum sit eum, eaque nostrum dolorum
              inventore eius debitis dolores voluptatum? Maiores nulla
              distinctio beatae temporibus, neque pariatur corporis consequuntur
              quos aspernatur quibusdam, quod qui voluptates cupiditate eveniet!
              Tempora labore sint voluptatem? Maiores provident impedit quam
              cumque repellat labore quaerat natus dicta perferendis omnis
              exercitationem reprehenderit aliquid necessitatibus accusamus iure
              vero obcaecati, blanditiis vitae sed amet minima. In consequuntur
              debitis hic rerum obcaecati, quidem, assumenda distinctio fugit
              quos dolores aperiam sed doloribus sequi similique nemo officiis
              exercitationem accusamus minus rem labore? Dolorem tenetur
              doloremque distinctio veniam inventore eaque commodi repudiandae a
              quisquam aliquid debitis facilis eum autem ipsum nesciunt nemo ut
              ab, iste necessitatibus ipsam consectetur pariatur expedita
              temporibus harum. Ipsam minima fuga at cupiditate quasi blanditiis
              nemo tenetur adipisci magni repellendus ratione quo aut, aperiam
              ullam provident reiciendis facilis, iste cum repudiandae ipsum
              consequuntur porro totam. Rem modi minus est quos odio. Rem maxime
              ullam ipsum odit odio, mollitia voluptate similique neque ipsa
              placeat veniam dolorem deserunt tempora sint voluptas. Non, sequi
              suscipit beatae porro incidunt reprehenderit id optio, excepturi
              debitis accusamus mollitia blanditiis, dignissimos quae vitae
              numquam reiciendis? Aut rem nihil fuga quis ad eaque! Soluta,
              expedita. Incidunt quo blanditiis architecto consequuntur
              repellendus deleniti veniam doloribus excepturi ea. Voluptas aut
              quo eos officiis itaque ab ratione provident corrupti! Deleniti
              ipsam est in obcaecati doloribus accusantium vitae tempore eos ad
              voluptates, facere voluptatibus modi minus iure aut fugiat magnam
              perspiciatis aspernatur! Molestiae, voluptates. Maxime, provident
              assumenda omnis, nihil officia at accusamus illo unde ab amet sit
              mollitia. Quisquam, explicabo dolores! Nemo debitis minus optio
              quaerat corrupti dolorem veritatis reprehenderit consequatur
              asperiores? Reiciendis illum nostrum ullam itaque perferendis non,
              quidem praesentium dolore fugit atque delectus iure! Rerum culpa
              molestias sit, cumque totam et dolore odio voluptas beatae officia
              optio corporis ad inventore numquam.
            </p>
          </Col>
        </Row>
      </Container>
      <Jumbotron
        fluid
        as="footer"
        className="bg-secondary mb-0 py-2 fixed-bottom text-center"
      >
        <Container>
          <small>Copyright &copy; Thaddeus Cole</small>
        </Container>
      </Jumbotron>
    </>
  );
}

export default App;
