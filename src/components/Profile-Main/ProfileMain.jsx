import { Col, Container, Row } from "react-bootstrap";
import { Footer } from "../Footer/Footer";
import { Learning } from "../Learning/Learing";
import { OtherCompanies } from "../Other-Companies/OtherCompanies";
import { OtherPeople } from "../Other-People/OtherPeople";

export const ProfileMain = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={9}>
          {/* parte a sinistra */}
        </Col>
        <Col md={3} className="col-xs-d-none col-md-2">
          <OtherCompanies />
          <OtherPeople />
          <Learning />
        </Col>
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
};
