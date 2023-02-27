import { Col, Container, Row } from "react-bootstrap";
import Interessi from "./Interessi/Interessi";

export const ProfileMain = () => {
  console.log("profile main");
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={10}>
          {/* parte a sinistra */}
          <Interessi />
        </Col>
        <Col className="col-xs-d-none col-md-2">{/* parte a destra */}</Col>
      </Row>
    </Container>
  );
};
