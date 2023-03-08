import { Container } from "react-bootstrap";

const Informazioni = (props) => {
  return (
    <Container className="allCards mt-2 ps-4">
      <h5 className="mt-4 ps-0 textInformazioni">Informazioni</h5>
      <p className="textInformazioni">{props.bio}</p>
    </Container>
  );
};
export default Informazioni;
