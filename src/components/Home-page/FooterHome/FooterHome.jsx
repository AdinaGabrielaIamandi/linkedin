import { Row, Col, NavDropdown } from "react-bootstrap";
import { HiOutlinePlus } from "react-icons/hi";
import "./footerhome.scss";

export const FooterHome = () => {
  return (
    <Row className="d-flex justify-content-center align-items-center m-3">
      <Col>
        <Row>
          <Col className="d-flex justify-content-around align-items-center text-secondary text-footer mt-2">
            <small className="color">Informazioni</small>
            <small className="color">Accessibilità</small>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-around align-items-center text-secondary text-footer mt-2">
            <small className="color">Centro assistenza</small>
            <small>
              <NavDropdown title="Privacy e condizioni" id="basic-nav-dropdown">
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
          <Col className="d-flex justify-content-around align-items-center text-secondary text-footer mt-2">
            <small className="color">Opzioni per gli annunci pubblicitari</small>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-around align-items-center text-secondary text-footer mt-2">
            <small className="color">Pubblicità</small>
            <small>
              <NavDropdown title="Servizi alle aziende" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1" className="dropdown-text2">
                  <p className="m-0 text-black">Talent Solutions</p>
                  <small className="text-secondary">Trova, attrai e assumi</small>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="dropdown-text2">
                  <p className="m-0 text-black">Sales Solutions</p>
                  <small className="text-secondary">Sblocca nuove oportunità di vendita</small>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" className="dropdown-text2">
                  <p className="m-0 text-black">Pubblica offerta di lavoro gratuita</p>
                  <small className="text-secondary">Raggiungi i migliori candidati con la tua offerta di lavoro</small>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className="dropdown-text2">
                  <p className="m-0 text-black">Marcketing Solutions</p>
                  <small className="text-secondary">Acquisisci clienti e fai crescere la tua azienda</small>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className="dropdown-text2">
                  <p className="m-0 text-black">Learning Solutions</p>
                  <small className="text-secondary">
                    Promuovi l'acquisizione di competenze nella tua organizzazione
                  </small>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  href="#action/3.4"
                  className="dropdown-text2 d-flex align-items-center text-decoration-none"
                >
                  <p className="m-0 text-black color">Crea una pagina aziendale</p>
                  <span>
                    <HiOutlinePlus />
                  </span>
                </NavDropdown.Item>
              </NavDropdown>
            </small>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-around align-items-center text-secondary text-footer mt-2">
            <small className="color">Scarica l'app LinkedIn</small>
            <small className="color">Altro</small>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex align-items-center mt-2 justify-content-center">
            <img
              className="p-0 m-0"
              id="logoFooter"
              src="https://1000marche.net/wp-content/uploads/2020/03/LinkedIn-Logo-1.png"
              alt="LogoFooter"
              style={{ width: "60px", height: "40px" }}
            />
            <span className="footerQuestion2 p-0 m-0">LinkedIn Corporation © 2023</span>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
