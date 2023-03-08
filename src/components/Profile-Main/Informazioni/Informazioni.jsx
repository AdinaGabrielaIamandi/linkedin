import "./Informazioni.scss";
import { Container, Row } from "react-bootstrap";

const Informazioni = (props) => {
  return (
    <Container className="allCards mt-2">
      <Row>
        <h5 className="mt-4 textInformazioni">Informazioni</h5>
        <p className="py-4 textInformazioni">{props.bio}</p>
      </Row>
    </Container>
  );
};
export default Informazioni;
