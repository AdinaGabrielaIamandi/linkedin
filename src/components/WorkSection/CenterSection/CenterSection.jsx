import { Col, Container, Row } from "react-bootstrap"
import "./CenterSection.css"
const CenterSection = () => {
<<<<<<< Updated upstream
    return (
        <Container className="allCards m- w-100">
            <Row>
                <Col>
                <h5>Ricerche di offerte di lavoro recenti</h5>
                <p>Studente ·<span>626 nuove</span></p>
                </Col>
            </Row>
        </Container>
    )
}
export default CenterSection
=======
  return (
    <Container className="allCards">
      <Row>
        <Col className="mt-4">
          <h5>Ricerche di offerte di lavoro recenti</h5>
          <p>
            Studente ·<span>626 nuove</span>
          </p>
        </Col>
      </Row>
    </Container>
  );
};
export default CenterSection;
>>>>>>> Stashed changes
