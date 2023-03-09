import { Col, Container, Row } from "react-bootstrap";
import "./CenterSection.scss";
const CenterSection = () => {
  return (
    <Container className="allCards">
      <Row>
        <Col className="mt-4">
          <h5 className="fs-5">Ricerche di offerte di lavoro recenti</h5>
          <p>
            Studente ·<span>626 nuove</span>
          </p>
        </Col>
      </Row>
    </Container>
  );
};
export default CenterSection;
