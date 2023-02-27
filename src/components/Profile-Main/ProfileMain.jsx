import { Col, Container, Row } from "react-bootstrap";
import { OtherCompanies } from "../Other-Companies/OtherCompanies";

export const ProfileMain = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={9}>
          {/* parte a sinistra */}
        </Col>
        <Col md={3} className="col-xs-d-none col-md-2">
          <OtherCompanies />
        </Col>
      </Row>
    </Container>
  );
};
