import { SectionLeft } from "./SectionLeft/SectionLeft";
import { SectionCenter } from "./SectionCenter/SectionCenter";
import { SectionRight } from "./SectionRight/SectionRight";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { FooterHome } from "./FooterHome/FooterHome";

export const Homepage = () => {
  const myProfile = useSelector((state) => state.linkedin.myProfile);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={2}>
          <SectionLeft
            name={myProfile.name}
            surname={myProfile.surname}
            work={myProfile.title}
            image={myProfile.image}
          />
        </Col>
        <Col lg={5}>
          <SectionCenter name={myProfile.name} surname={myProfile.surname} image={myProfile.image} />
        </Col>
        <Col lg={3}>
          <SectionRight />
          <FooterHome />
        </Col>
      </Row>
    </Container>
  );
};
