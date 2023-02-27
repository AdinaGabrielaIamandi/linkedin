import { Col, Container, Row } from "react-bootstrap";
import { FirstCard } from "../FirstCard/FirstCard";
import { SecondCard } from "../SecondCard/SecondCard";
import Interessi from "./Interessi/Interessi";
import Attività from "./Attività/Attività";
import Esperienza from "./Esperienza/Esperienza";
import Informazioni from "./Informazioni/Informazioni";
import Risorse from "./Risorse/Risorse";
import { Footer } from "../Footer/Footer";
import { Learning } from "../Learning/Learing";
import { OtherCompanies } from "../Other-Companies/OtherCompanies";
import { OtherPeople } from "../Other-People/OtherPeople";

export const ProfileMain = () => {
  console.log("profile main");
  return (
    <Container>
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
        <Col md={3} className="d-none d-md-block">
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
