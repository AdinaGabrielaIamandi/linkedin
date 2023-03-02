import { Container, Row, Col, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./footerhome.scss";

export const FooterHome = () => {
  return (
    <Container fluid className="mt-5 d-none d-md-block">
      <Row className="d-flex justify-content-center">
        <Col md={9}>
          <Row>
            <Col className="d-flex justify-content-evenly align-items-center text-secondary text-footer">
              <small>Informazioni</small>
              <small>Accessibilità</small>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-evenly align-items-center text-secondary text-footer">
              <small>Centro assistenza</small>
              <small>
                <NavDropdown title="Privacy e condizioni " id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1" className="dropdown-text">
                    Informazioni sulla privacy
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2" className="dropdown-text">
                    Contartto di licenza
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3" className="dropdown-text">
                    Informativa sui coockie
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4" className="dropdown-text">
                    Informativa sui copyright
                  </NavDropdown.Item>
                </NavDropdown>
              </small>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-evenly align-items-center text-secondary text-footer">
              <small>Opzioni per gli annunci pubblicitari</small>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-evenly align-items-center text-secondary text-footer">
              <small>Pubblicità</small>
              <small>
                <NavDropdown title="Servizi alle aziende" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1" className="dropdown-text">
                    <p>Talent Solutions</p>
                    <small>Trova, attrai e assumi</small>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2" className="dropdown-text">
                    <p>Sales Solutions</p>
                    <small>Sblocca nuove oportunità di vendita</small>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3" className="dropdown-text">
                    <p>Pubblica offerta di lavoro gratuita</p>
                    <small>Raggiungi i migliori candidati con la tua offerta di lavoro</small>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4" className="dropdown-text">
                    <p>Marcketing Solutions</p>
                    <small>Raggiungi i migliori candidati con la tua offerta di lavoro</small>
                  </NavDropdown.Item>
                </NavDropdown>
              </small>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex align-items-center mt-2">
              <img
                className="p-0 m-0"
                id="logoFooter"
                src="https://1000marche.net/wp-content/uploads/2020/03/LinkedIn-Logo-1.png"
                alt="LogoFooter"
                style={{ width: "45px", height: "30px" }}
              />
              <span className="footerQuestion2 p-0 m-0">LinkedIn Corporation © 2023</span>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
