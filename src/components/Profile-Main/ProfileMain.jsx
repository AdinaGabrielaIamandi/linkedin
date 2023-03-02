import { Col, Container, Row } from "react-bootstrap";
import { FirstCard } from "../FirstCard/FirstCard";
import Interessi from "./Interessi/Interessi";
import Attività from "./Attività/Attività";
import Esperienza from "./Esperienza/Esperienza";
import Informazioni from "./Informazioni/Informazioni";
import Risorse from "./Risorse/Risorse";
import Competenze from "./Competenze/Competenze";
import { Learning } from "../Learning/Learing";
import { OtherCompanies } from "../Other-Companies/OtherCompanies";
import { OtherPeople } from "../Other-People/OtherPeople";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileAction } from "../../redux/action";
import { useParams } from "react-router-dom";
import { Footer } from "./../Footer/Footer";

export const ProfileMain = () => {
  const dispatch = useDispatch();
  const seeProfile = useSelector((state) => state.profile);
  const params = useParams();

  useEffect(() => {
    dispatch(getProfileAction(params.id));
  }, []);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={7}>
          <FirstCard
            name={seeProfile.name}
            surname={seeProfile.surname}
            work={seeProfile.title}
            town={seeProfile.area}
            image={seeProfile.image}
            id={seeProfile._id}
          />
          <Risorse />
          <Informazioni bio={seeProfile.bio} />
          <Attività />
          <Esperienza />
          {/* parte a sinistra */}
          <Competenze />
          <Interessi />
        </Col>
        <Col xs={0} md={4} lg={4} className="d-none d-md-block">
          <OtherCompanies />
          <OtherPeople />
          <Learning />
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};
