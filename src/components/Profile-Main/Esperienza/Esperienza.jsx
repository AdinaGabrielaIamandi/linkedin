import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getExperienceAction } from "../../../redux/action";
import { useEffect } from "react";
import "./Esperienza.scss";
import { ModalExperience } from "./ModalExperience";
import { useParams } from "react-router-dom";

const Esperienza = (prop) => {
  const experiences = useSelector((state) => state.linkedin.experience);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getExperienceAction(prop.id));
  }, []);

  return (
    <Container className="allCards my-2">
      <Row className="textEsperienza mt-4 d-flex align-items-center">
        <Col xs={10} className="mb-3 ps-0">
          <h5 className="">Esperienza</h5>
        </Col>
        {params.id === "me" ? (
          <Col xs={2}>
            <ModalExperience id="ADDEXP" idProfile={prop.id} allExp={experiences} />
          </Col>
        ) : (
          <></>
        )}

        {experiences
          .map((exp, i) => (
            <>
              <Col key={i} xs={10} className="d-flex ps-0">
                <img
                  className="picEsperienza rounded-square"
                  src={exp.image}
                  alt="immagine non trovata"
                  style={{ width: "48px", height: "48px" }}
                />
                <div className="textFlex mx-3">
                  <h6 className="mb-1">{exp?.role}</h6>
                  <ul className="noBorder mb-0">
                    <li className="mb-1">{exp.company}</li>
                    <li className="mb-1">{exp.startDate.slice(0, -14).split("-").reverse().join("-")}</li>
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
              {params.id === "me" ? (
                <Col xs={2}>
                  <ModalExperience idExp={exp._id} id={exp._id} idProfile={prop.id} />
                </Col>
              ) : (
                <></>
              )}
            </>
          ))
          .reverse()}
      </Row>
    </Container>
  );
};
export default Esperienza;
