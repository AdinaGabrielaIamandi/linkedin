import "./LeftSection.scss";
import { BsFillBookmarkFill } from "react-icons/bs";
import { BsFillBellFill } from "react-icons/bs";
import { BsClipboardCheck } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { BsPencilSquare } from "react-icons/bs";
import { Button, Col, Container, Row } from "react-bootstrap";
const LeftSection = () => {
  return (
    <>
      <Container className="allCards">
        <Row>
          <Col className="Left">
            <p>
              <div>
                <BsFillBookmarkFill />
              </div>{" "}
              Le mie offerte di Lavoro
            </p>
            <p>
              <div>
                <BsFillBellFill />
              </div>{" "}
              Avvisi di offerte di Lavoro
            </p>
            <p>
              <div>
                <BsClipboardCheck />
              </div>{" "}
              Valutazioni delle competenze
            </p>
            <p>
              <div>
                <BsYoutube />
              </div>{" "}
              Indicazioni per chi cerca lavoro
            </p>
            <p>
              <div>
                <IoMdSettings />
              </div>{" "}
              Impostazioni di candidatura
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Button className="buttonLeftSection mt-3 cta3 cta2">
            <BsPencilSquare className="fs-4" />{" "}
            <div>
              Pubblica offerta <br /> gratuita
            </div>
          </Button>
        </Row>
      </Container>
    </>
  );
};

export default LeftSection;
