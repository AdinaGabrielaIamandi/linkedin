import { Container, Row } from "react-bootstrap"
import "./RightSection.css"
const RightSection = () => {
    return(
    <Container>
        <Row>
             <span><a href="alt">Informazioni</a> <a href="alt">Accessibilità</a></span>
             <span><a href="alt">Centro assistenza</a> <a href="alt">Privacy e condizioni</a></span>
             <span><a href="alt">Opzioni per gli annunci pubblicitari</a> </span>
             <span><a href="alt">Pubblicità</a> <a href="alt">Servizi alle aziende</a></span>
             <span><a href="alt">Scarica l'app Linkedin</a> <a href="alt">Altro</a></span>
             <img
              className="mb-3"
              id="logoFooter"
              src="https://www.iter.it/wp-content/uploads/2019/12/linkedin-logo-png-transparent.png"
              alt="LogoFooter"
              style={{ width: "5em", height: "1em" }}
            /> LinkedIn Corporation © 2023 
        </Row>
    </Container>
    )
}
export default RightSection