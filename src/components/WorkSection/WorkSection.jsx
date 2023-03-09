import { Col, Container, Row } from "react-bootstrap";
import LeftSection from "./LeftSection/LeftSection";
import CenterSection from "./CenterSection/CenterSection";
import { WorksList } from "./CenterSection/WorksList";
import { FooterHome } from "./../Home-page/FooterHome/FooterHome";

export const WorkSection = () => {
  return (
    <Container className="d-flex justify-content-center ">
      <Row className="w-100">
        <Col className="col-3">
          <LeftSection />
        </Col>
        <Col className="col-6">
          <CenterSection />
          <WorksList />
        </Col>
        <Col className="col-3">
          <FooterHome />
        </Col>
      </Row>
    </Container>
  );
};
