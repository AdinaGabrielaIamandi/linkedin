import { useState } from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import "../../../App.css";
import "./app.css";

const Interessi = () => {
  const [selected, setSelected] = useState("Aziende");
  const MAXIMUM = 100;

  const DEFAULTNUMBER = 2;
  let columWeight;
  const [numberToDisplay, setNumberToDisplay] = useState(DEFAULTNUMBER);

  const dataInteressi = {
    Aziende: [
      {
        titolo: "Microsoft",
        follower: 19064614,
        img: "https://cdn-icons-png.flaticon.com/512/732/732221.png",
      },
      {
        titolo: "Amazon ads",
        follower: 170234,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2048px-Amazon_icon.svg.png",
      },
      {
        titolo: "Forbes",
        follower: 500000,
        img: "https://logos-world.net/wp-content/uploads/2021/08/Forbes-Symbol.png",
      },
    ],
    Gruppi: [
      {
        titolo: "Jaba Web Gruop",
        follower: 24324323,
        img: "https://miro.medium.com/max/512/1*YWazhGyGmNs6K3HZE7lS7Q.png",
      },
      {
        titolo: "Cyber Security Hacking Game",
        follower: 500000,
        img: "https://cdn-icons-png.flaticon.com/512/1691/1691685.png",
      },
    ],
    TopVoices: [
      {
        titolo: "Simon Sinek",
        follower: 7092457,
        img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      },
    ],
  };

  if (numberToDisplay > DEFAULTNUMBER) columWeight = 12;
  else columWeight = 6;

  return (
    <Container className="allCards ">
      <h5>Interessi</h5>
      <ul className="d-flex">
        {Object.keys(dataInteressi).map((element) => {
          if (selected === element)
            return (
              <li className="greenLink " onClick={() => setSelected(element)}>
                {element}
              </li>
            );
          else
            return (
              <li
                className=""
                onClick={() => {
                  setSelected(element);
                  setNumberToDisplay(DEFAULTNUMBER);
                }}
              >
                {element}
              </li>
            );
        })}
      </ul>
      <Container className="division">
        <Row className="division">
          {dataInteressi[selected].map((element, index, arr) => {
            if (index < numberToDisplay)
              return (
                <Col xs={12} lg={columWeight} className="division">
                  <Row>
                    <Col xs={3}>
                      <img
                        src={element.img}
                        alt={element.titolo + " immagine"}
                      />
                    </Col>
                    <Col xs={6}>
                      <a href="">
                        <h6>{element.titolo}</h6>
                      </a>
                      <p>{element.follower} followers</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={3}></Col>
                    <Col xs={6}>
                      <Button className="cta">
                        {" "}
                        <AiOutlinePlus />
                        Segui
                      </Button>
                    </Col>
                  </Row>
                </Col>
              );
          })}
        </Row>
        {numberToDisplay <= DEFAULTNUMBER ? (
          <Row
            onClick={() => {
              setNumberToDisplay(MAXIMUM);
            }}
          >
            <Col className="d-flex justify-content-center align-items-center">
              {dataInteressi[selected].length > DEFAULTNUMBER ? (
                <p>
                  Mostra tutte le aziende({dataInteressi[selected].length}){" "}
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
    </Container>
  );
};

export default Interessi;
