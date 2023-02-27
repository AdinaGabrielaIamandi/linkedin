import "./Risorse.css"
import { Container, Row } from "react-bootstrap"


const Risorse =() => {
    return(
        <Container className="allCards mt-2" >
        <Row className="px-0 mt-3">
        <h5 className="TextRisorse mt-3">Risorse</h5>
        <p className="TextRisorse">Solo per te</p>
        <h6 className="TextRisorse">Modalità creazione di contenuti <button className="ButtonRisorse">No</button></h6>
        <p className="TextRisorse border-bottom py-3">Fatti scoprire, metti in risalto i contenuti sul tuo profilo e accedi agli strumenti di creazione</p>
        <h6 className="TextRisorse">La mia rete</h6>
        <p className="TextRisorse border-bottom py-3">Salva e gestisci i tuoi collegamenti e interessi</p>
        <button className="ButtonMostraRisorse py-2">Mostra tutte le risorse</button>
        </Row>
        </Container>
    )
}
export default Risorse