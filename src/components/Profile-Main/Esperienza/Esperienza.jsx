import "./Esperienza.css";
import { Container, Row, Col } from "react-bootstrap";

const Esperienza = () => {
  return (
    <Container className="allCards my-2">
      <Row className="textEsperienza">
        <h5 className="mt-4">Esperienza</h5>
        <Col className="d-flex ">
          <img
            className="picEsperienza"
            src="http://placekitten.com/80/80"
            alt="cat"
          />
          <div className="textFlex mx-3">
            <p>Esperienza lavorativa</p>
            <p>Competenze</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Esperienza;
