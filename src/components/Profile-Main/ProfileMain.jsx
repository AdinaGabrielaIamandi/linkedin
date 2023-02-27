import { Col, Container, Row } from "react-bootstrap";
import { FirstCard } from "../FirstCard/FirstCard";
import { SecondCard } from "../SecondCard/SecondCard";

export const ProfileMain = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={9}>
          {/* parte a sinistra */}
          <FirstCard />
          <SecondCard />
        </Col>
        <Col className="col-xs-d-none col-md-2">{/* parte a destra */}</Col>
      </Row>
    </Container>
  );
};
