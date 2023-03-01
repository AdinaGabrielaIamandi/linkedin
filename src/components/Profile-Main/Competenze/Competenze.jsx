import { Col, Row, Container, Button } from "react-bootstrap";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineArrowLeft } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import "../../../App.css";
import "./app.scss";

const Competenze = () => {
  const MAXIMUM = 100;

  const DEFAULTNUMBER = 3;
  const [numberToDisplay, setNumberToDisplay] = useState(DEFAULTNUMBER);

  const dataCompetenze = [
    {
      titolo: "Angular",
      Conferme: ["Lucia Dolla", "Pinco Pallino", "Sara Dello Russo"],
      Descrizione: "Student presso Epicode Italia",
      Categoria: "Conoscenza del Settore",
      img: "https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/EPICODE_resized/original.png?1651791536",
    },
    {
      titolo: "Javascript",
      Descrizione: "Student presso Epicode Italia",
      Conferme: ["Lucia Dolla", "Pinco Pallino", "Sara Dello Russo"],
      Categoria: "Conoscenza del Settore",
      img: "https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/EPICODE_resized/original.png?1651791536",
    },
    {
      titolo: "Forbes",
      Descrizione: "Esperto di Profumi",
      Conferme: ["Hugo Boss", "Chartier", "Parlament", "Lamborghini"],
      img: "https://logos-world.net/wp-content/uploads/2021/08/Forbes-Symbol.png",
      Categoria: "Conoscenza del Settore",
    },
    {
      titolo: "Css",
      Conferme: ["Bootstrap CSS"],
      Descrizione: "Student presso Epicode Italia",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png",
      Categoria: "Conoscenza del Settore",
    },
    {
      titolo: "Investigazione Privata",
      Descrizione: "6 mesi Scuola di Polizia",
      Conferme: ["POLIZIA DI STATO"],
      img: "https://thumbs.dreamstime.com/b/police-officer-badge-icon-vector-89817911.jpg",
      Categoria: "Investigazione",
    },
  ];

  return (
    <Container className="allCards p-4">
      <Row>
        <Col className="d-flex align-items-center">
          {numberToDisplay > DEFAULTNUMBER ? (
            <AiOutlineArrowLeft
              className="iconTitle"
              onClick={(e) => setNumberToDisplay(DEFAULTNUMBER)}
            />
          ) : (
            <></>
          )}
          <h5>Competenze</h5>
        </Col>
      </Row>

      {dataCompetenze.map((element, index) => {
        if (index < numberToDisplay)
          return (
            <ul className="mt-2" key={index}>
              <h6> {element.titolo}</h6>
              <li>
                <img
                  className="imgIcon"
                  src={element.img}
                  alt={element.titolo + " immagine"}
                />
                {element.Descrizione}
              </li>
              <li>
                {" "}
                <BsFillPeopleFill className="imgIcon" />
                <a href="">
                  {element.Conferme.length + " Conferm"}
                  {element.Conferme.length === 1 ? "a" : "e"}
                </a>
              </li>
            </ul>
          );
      })}
      {numberToDisplay <= DEFAULTNUMBER ? (
        <Row
          className="changeHoverColor"
          onClick={() => {
            setNumberToDisplay(MAXIMUM);
          }}
        >
          <Col className="d-flex justify-content-center align-items-center mt-3">
            {dataCompetenze.length > DEFAULTNUMBER ? (
              <p>
                Mostra tutte le Competenze({dataCompetenze.length}){" "}
                <BsFillArrowRightCircleFill />
              </p>
            ) : (
              <></>
            )}
          </Col>
        </Row>
      ) : (
        <></>
      )}
    </Container>
  );
};
export default Competenze;
