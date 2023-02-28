import "./Attività.css";
import { Container, Row, Button, Col } from "react-bootstrap";
const Attività = () => {
  return (
    <Container className="allCards mt-2">
      <Row className=" textAttività mt-4">
        <Col className="ButtonFlex">
          <h5>Attività</h5>
          <Button variant="outline-primary ButtonAttività">
            Avvia un post
          </Button>
        </Col>
        <p className="mb-0">34 follower</p>
        <p className="nameAttivitap">
          {" "}
          <span className="fw-bold">Saverio Caracappa</span> ha diffuso questo
          post • 1m
        </p>
        <div>
          <img
            className="picAttività"
            src="http://placekitten.com/90/90"
            alt="cat"
          />
        </div>
        <Col className="LikeCommenti border-bottom mt-2">
          <p>like</p>
          <p>commenti</p>
        </Col>
        <p className="nameAttivitap mt-2">
          <span className="fw-bold">Saverio Caracappa</span> ha diffuso questo
          post • 1m
        </p>
        <div>
          <img
            className="picAttività"
            src="http://placekitten.com/90/90"
            alt="cat"
          />
        </div>
        <Col className="LikeCommenti border-bottom mt-2">
          <p>like</p>
          <p>commenti</p>
        </Col>
        <button className="ButtonMostraRisorse py-2">
          Mostra tutte le risorse
        </button>
      </Row>
    </Container>
  );
};
export default Attività;
