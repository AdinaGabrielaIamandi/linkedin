import { SectionLeft } from "./SectionLeft/SectionLeft";
import { SectionCenter } from "./SectionCenter/SectionCenter";
import { SectionRight } from "./SectionRight/SectionRight";
import { Col, Container, Row } from "react-bootstrap";
import { BsFillAlarmFill } from "react-icons/bs";

export const Homepage = () => {
  return (
    <Container>
      <BsFillAlarmFill />
      <Row className="justify-content-center">
        <Col lg={2}>
          <SectionLeft />
        </Col>
        <Col lg={6}>
          <SectionCenter />
        </Col>
        <Col lg={3}>
          <SectionRight />
        </Col>
      </Row>
    </Container>
  );
};
