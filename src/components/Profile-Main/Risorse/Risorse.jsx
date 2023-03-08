import "./Risorse.scss";
import { Container } from "react-bootstrap";

const Risorse = () => {
  return (
    <Container className="allCards mt-2 ps-4">
      <h5 className="TextRisorse ps-1 mt-3">Risorse</h5>
      <p className="TextRisorse ps-1 ">Solo per te</p>
      <h6 className="TextRisorse ps-1 ">
        Modalità creazione di contenuti <button className="ButtonRisorse">No</button>
      </h6>
      <p className="TextRisorse border-bottom ps-1 py-3">
        Fatti scoprire, metti in risalto i contenuti sul tuo profilo e accedi agli strumenti di creazione
      </p>
      <h6 className="TextRisorse ps-1 ">La mia rete</h6>
      <p className="TextRisorse border-bottom ps-1 py-3 mb-0">Salva e gestisci i tuoi collegamenti e interessi</p>
      <button className="ButtonMostraRisorse ">Mostra tutte le risorse</button>
    </Container>
  );
};
export default Risorse;
