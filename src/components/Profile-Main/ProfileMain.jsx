import { Col, Container, Row } from "react-bootstrap";
import { FirstCard } from "../FirstCard/FirstCard";
import { SecondCard } from "../SecondCard/SecondCard";
import Interessi from "./Interessi/Interessi";
import Attività from "./Attività/Attività";
import Esperienza from "./Esperienza/Esperienza";
import Informazioni from "./Informazioni/Informazioni";
import Risorse from "./Risorse/Risorse";

export const ProfileMain = () => {
  console.log("profile main");
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={9}>
          {" "}
          <FirstCard />
          <SecondCard />
          <Risorse />
          <Informazioni />
          <Attività />
          <Esperienza />
          {/* parte a sinistra */}
          <Interessi />
        </Col>
        <Col className="col-xs-d-none col-md-2">{/* parte a destra */}</Col>
      </Row>
    </Container>
  );
};
