import { Col, Container, Row } from "react-bootstrap";
import "./CenterSection.scss";
import { useSelector } from "react-redux";

const CenterSection = () => {
  const favJobs = useSelector((state) => state.linkedin.favJobs);
  return (
    <Container className="allCards">
      <Row>
        <Col className="mt-4">
          <h5 className="fs-5">Ricerche di offerte di lavoro salvate</h5>
          {favJobs?.map((el) => (
            <p>{el}</p>
          ))}
        </Col>
      </Row>
    </Container>
  );
};
export default CenterSection;
