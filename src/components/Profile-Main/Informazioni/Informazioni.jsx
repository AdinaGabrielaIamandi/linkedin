import "./Informazioni.css";
import { Container, Row } from "react-bootstrap";

const Informazioni = () => {
  return (
    <Container className="allCards mt-2">
      <Row>
        <h5 className="mt-4 textInformazioni">Informazioni</h5>
        <p className="py-4 textInformazioni">
          Sono un ragazzo con tanta voglia di imparare, ho fatto diversi
          mestieri una volta diplomato, tutti diversi l'uno dall'altro.
        </p>
      </Row>
    </Container>
  );
};
export default Informazioni;
