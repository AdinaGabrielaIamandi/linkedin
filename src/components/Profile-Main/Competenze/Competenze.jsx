import { Col, Row, Container } from "react-bootstrap";
import { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import "./app.scss";

const Competenze = () => {
  const MAXIMUM = 100;

  const DEFAULTNUMBER = 3;
  const [numberToDisplay, setNumberToDisplay] = useState(DEFAULTNUMBER);

  const dataCompetenze = [
    {
      titolo: "Idraulica avanzata",
      Conferme: ["Lucia Dolla", "Pinco Pallino", "Sara Dello Russo"],
      Descrizione: "Scuola di idraulica di Brooklyn",
      Categoria: "Conoscenza del Settore",
      img: "https://c8.alamy.com/compit/rjh185/una-incisione-raffigurante-il-test-dell-acciaio-per-ancoraggio-in-una-pressa-idraulica-della-sospensione-di-brooklyn-bridge-la-sospensione-di-brooklyn-bridge-e-stato-progettato-e-costruito-da-john-augustus-roebling-1806-1869-e-suo-figlio-washington-roebling-augusto-1837-1926-e-aperto-nel-1883-datata-del-xix-secolo-rjh185.jpg"
    },
    {
      titolo: "Salto di precisione",
      Descrizione: "Esperto",
      Conferme: ["Lucia Dolla", "Pinco Pallino", "Sara Dello Russo"],
      Categoria: "Conoscenza del Settore",
      img: "https://storage.laprovinciadicomo.it/media/photologue/2020/6/16/photos/schembri-salto-triplo-lungo-e-altosono-il-piu-forte-di-tutti-i-tempi_6d47b806-b617-11ea-9af4-d2823e8a66df_900_566.jpg"
    },
    {
      titolo: "Forza sovrumana",
      Descrizione: "Potenza",
      Conferme: ["Hugo Boss", "Chartier", "Parlament", "Lamborghini"],
      img: "http://wonepiece3.weebly.com/uploads/1/7/2/3/17237142/1207064.jpg?409",
      Categoria: "Conoscenza del Settore"
    },
    {
      titolo: "Abilità culinarie",
      Conferme: ["Bootstrap CSS"],
      Descrizione: "Casa della mamma",
      img: "https://www.irenemilito.it/wp-content/uploads/2020/09/age_rf_photo_of_veggie_stir-fry.jpg",
      Categoria: "Conoscenza del Settore"
    },
    {
      titolo: "Investigazione Privata",
      Descrizione: "6 mesi Scuola di Polizia",
      Conferme: ["POLIZIA DI STATO"],
      img: "https://thumbs.dreamstime.com/b/police-officer-badge-icon-vector-89817911.jpg",
      Categoria: "Investigazione"
    }
  ];

  return (
    <Container className="allCards p-4">
      <Row>
        <Col className="d-flex align-items-center">
          {numberToDisplay > DEFAULTNUMBER ? (
            <AiOutlineArrowLeft className="iconTitle" onClick={(e) => setNumberToDisplay(DEFAULTNUMBER)} />
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
                <img className="imgIcon" src={element.img} alt={element.titolo + " immagine"} />
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
                Mostra tutte le Competenze({dataCompetenze.length}) <BsFillArrowRightCircleFill />
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
