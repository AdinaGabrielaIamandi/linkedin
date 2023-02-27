import { Col, Container, Row } from "react-bootstrap";
import Attività from "./Attività/Attività"
import Esperienza from "./Esperienza/Esperienza";
import Informazioni from "./Informazioni/Informazioni";
import Risorse from "./Risorse/Risorse";

export const ProfileMain = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={10}>
          <Risorse/>
          <Informazioni/>
          <Attività/>
          <Esperienza/>
          {/* parte a sinistra */}
        </Col>
        <Col className="col-xs-d-none col-md-2">{/* parte a destra */}</Col>
      </Row>
    </Container>
  );
};
