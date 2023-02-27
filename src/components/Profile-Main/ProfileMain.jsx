import { Col, Container, Row } from "react-bootstrap";

export const ProfileMain = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={10}>
          {/* parte a sinistra */}
        </Col>
        <Col className="col-xs-d-none col-md-2">{/* parte a destra */}</Col>
      </Row>
    </Container>
  );
};
