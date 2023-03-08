import "./OtherPeople.scss";
import { Button, Container } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";

export const OtherPeople = () => {
  return (
    <Container fluid className="allCards companies p-4 mt-2">
      <h5>Persone che potresti conoscere</h5>
      <div className="d-flex align-items-center mt-4">
        <div>
          <img
            className="portrait"
            src="https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129416.jpg"
            alt=""
          />
        </div>
        <div className="ms-3">
          <h6 className="fw-bold mb-0">Riccardo Rossi</h6>
          <p className="job mb-0">Junior Front End Developer</p>
          <Button className="cta fw-bold mt-1 d-flex align-items-center">
            <AiOutlinePlus />
            Collegati
          </Button>
        </div>
      </div>
      <hr className="line mt-4" />
    </Container>
  );
};
