import "./OtherCompanies.scss";
import { Button, Container } from "react-bootstrap";
import { RiSendPlaneFill } from "react-icons/ri";

export const OtherCompanies = () => {
  return (
    <Container fluid className="allCards companies p-4">
      <h5>Altre aziende consultate</h5>
      <div className="d-flex mt-4">
        <div>
          <img
            className="portrait"
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80"
            alt="immagine non trovata"
          />
        </div>
        <div className="ms-3">
          <h6 className="fw-bold mb-0">Riccardo Rossi</h6>
          <p className="job mb-0">Junior Front End Developer</p>
          <Button className="cta fw-bold mt-1 d-flex align-items-center">
            <RiSendPlaneFill className="me-1 fw-bold" />
            Messaggio
          </Button>
        </div>
      </div>
      <hr className="line mt-4" />
    </Container>
  );
};
