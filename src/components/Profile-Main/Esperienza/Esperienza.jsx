import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getExperienceAction } from "../../../redux/action";
import { useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlinePencil } from "react-icons/hi";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./Esperienza.scss";
import { ModalExperience } from "./ModalExperience";

const Esperienza = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // vado a leggere stato
  const experiences = useSelector((state) => state.experience);
  const dispatch = useDispatch();
  console.log(experiences);

  useEffect(() => {
    dispatch(getExperienceAction());
  }, []);

  return (
    <Container className="allCards my-2">
      <Row className="textEsperienza mt-4 d-flex align-items-center">
        <Col xs={10}>
          <h5>Esperienza</h5>
        </Col>
        <Col xs={2}>
          <div className="d-flex justify-content-end">
            <div className="d-flex justify-content-center rounded-circle pencil-add align-items-center">
              <AiOutlinePlus
                style={{ fontSize: "23px" }}
                onClick={handleShow}
              />
            </div>
          </div>
        </Col>

        {experiences.map((exp, i) => (
          <>
            <Col key={i} xs={10} className="d-flex ">
              <img
                className="picEsperienza"
                src="https://icons.veryicon.com/png/o/miscellaneous/zr_icon/company-23.png"
                alt="immagine non trovata"
              />
              <div className="textFlex mx-3">
                <h6 className="mb-1">{exp.role}</h6>
                <ul className="d-flex">
                  <li>{exp.company}</li>
                </ul>
                <ul>
                  <li>{exp.startDate}</li>
                </ul>
                <ul>
                  <li>{exp.area}</li>
                </ul>
                <p>
                  <strong>Competenze:</strong>
                  <ul>
                    <li>{exp.description}</li>
                  </ul>
                </p>
              </div>
            </Col>
            <Col xs={2}>
              <div className="d-flex justify-content-end ">
                <div className="d-flex justify-content-center rounded-circle pencil-add align-items-center">
                  <HiOutlinePencil
                    style={{ fontSize: "23px" }}
                    onClick={handleShow}
                  />
                </div>
              </div>
              <Modal
                size="lg"
                show={show}
                onHide={handleClose}
                aria-labelledby="example-modal-sizes-title-lg"
              >
                <Modal.Header closeButton>
                  <Modal.Title>Aggiungi esperienza</Modal.Title>
                </Modal.Header>
                <ModalExperience />
                {/*               <Modal.Body>
                  Woohoo, you're reading this text in a modal!
                </Modal.Body> */}
              </Modal>
            </Col>
          </>
        ))}
      </Row>
    </Container>
  );
};
export default Esperienza;
