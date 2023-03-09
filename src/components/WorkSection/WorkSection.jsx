import { Col, Container, Row } from "react-bootstrap";
import LeftSection from "./LeftSection/LeftSection";
import CenterSection from "./CenterSection/CenterSection";
import RightSection from "./RightSection/RightSection";
import { WorksList } from "./CenterSection/WorksList";

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
          <RightSection />
        </Col>
      </Row>
    </Container>
  );
};
