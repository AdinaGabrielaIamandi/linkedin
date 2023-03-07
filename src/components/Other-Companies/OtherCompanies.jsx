import "./OtherCompanies.css";
import { Button, Container } from "react-bootstrap";

export const OtherCompanies = () => {
  return (
    <Container fluid className="allCards companies p-4">
      <h5>Altre aziende consultate</h5>
      <div className="d-flex align-items-center mt-4">
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
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <Button className="cta fw-bold">Messaggio</Button>
      </div>
      <hr className="line mt-4" />
    </Container>
  );
};
