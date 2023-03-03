import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getExperienceAction } from "../../../redux/action";
import { useEffect } from "react";

import { HiOutlinePencil } from "react-icons/hi";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./Esperienza.scss";
import { ModalExperience } from "./ModalExperience";

const Esperienza = (prop) => {
  const TUTTOLOSTORE = useSelector((state) => state);
  console.log("STORE", TUTTOLOSTORE);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
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
            <div className="d-flex justify-content-center rounded-circle pencil-add align-items-center"></div>
          </div>
        </Col>
        <ModalExperience id="ADDEXP" idProfile={prop.id} />
        {experiences
          .map((exp, i) => (
            <>
              <Col key={i} xs={10} className="d-flex ">
                <img className="picEsperienza" src={exp.image} alt="immagine non trovata" />
                <div className="textFlex mx-3">
                  <h6 className="mb-1">{exp?.role}</h6>
                  <ul className="d-flex noBorder mb-0">
                    <li className="mb-1">{exp.company}</li>
                    <li className="mb-1">{exp.startDate}</li>
                    <li className="mb-1">{exp.area}</li>
                  </ul>
                  <p>
                    <div className="mt-2">
                      <span className="text-dark fw-bold competenze">
                        Competenze:
                        <span className="competenzeText"> {exp.description} </span>
                      </span>
                    </div>
                  </p>
                </div>
              </Col>
              <Col xs={2}>
                <ModalExperience idExp={exp._id} id={exp._id} idProfile={prop.id} />
                {/*               <Modal.Body>
                  Woohoo, you're reading this text in a modal!
                </Modal.Body> */}
              </Col>
            </>
          ))
          .reverse()}
      </Row>
    </Container>
  );
};
export default Esperienza;
