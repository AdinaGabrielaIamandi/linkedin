import { SectionLeft } from "./SectionLeft/SectionLeft";
import { SectionCenter } from "./SectionCenter/SectionCenter";
import { SectionRight } from "./SectionRight/SectionRight";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getProfileAction } from "./../../redux/action/index";

export const Homepage = () => {
  const dispatch = useDispatch();
  const seeProfile = useSelector((state) => state.profile);
  const params = useParams();

  useEffect(() => {
    dispatch(getProfileAction(params.id));
  }, []);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={2}>
          <SectionLeft
            name={seeProfile.name}
            surname={seeProfile.surname}
            work={seeProfile.title}
            image={seeProfile.image}
          />
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
