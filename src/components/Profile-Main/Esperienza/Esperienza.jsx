import "./Esperienza.css";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getExperienceAction } from "../../../redux/action";
import { useEffect } from "react";

const Esperienza = () => {
  // vado a leggere stato
  const experiences = useSelector((state) => state.experience);
  const dispatch = useDispatch();
  console.log(experiences);

  useEffect(() => {
    dispatch(getExperienceAction());
  }, []);

  return (
    <Container className="allCards my-2">
      <Row className="textEsperienza">
        <h5 className="mt-4">Esperienza</h5>

        {experiences.map((exp) => (
          <Col className="d-flex ">
            <img
              className="picEsperienza"
              src={exp.img}
              onerror="this.onerror=null;
              this.src='https://cdn-icons-png.flaticon.com/512/6134/6134065.png'"
              alt="immagine non trovata"
            />
            <div className="textFlex mx-3">
              <h6>{exp.role}</h6>
              <ul className="d-flex">
                <li>{exp.company}</li>
                <li>?</li>
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
        ))}
      </Row>
    </Container>
  );
};
export default Esperienza;
