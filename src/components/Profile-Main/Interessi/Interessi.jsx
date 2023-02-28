import { useState } from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { AiOutlinePlus, AiOutlineArrowLeft } from "react-icons/ai";
import "../../../App.css";
import "./app.scss";

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
        img: "https://cdn-icons-png.flaticon.com/512/732/732221.png"
      },
      {
        titolo: "Amazon ads",
        follower: 170234,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2048px-Amazon_icon.svg.png"
      },
      {
        titolo: "Forbes",
        follower: 500000,
        img: "https://logos-world.net/wp-content/uploads/2021/08/Forbes-Symbol.png"
      },
      {
        titolo: "Google.com",
        follower: 150000000,
        img: "https://pixlok.com/wp-content/uploads/2021/04/Google-Icon-PNG-768x768.jpg"
      },
      {
        titolo: "Stack OverFlow",
        follower: 3785223,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/768px-Stack_Overflow_icon.svg.png"
      }
    ],
    Gruppi: [
      {
        titolo: "JavaScript Web Gruop",
        follower: 24324323,
        img: "https://miro.medium.com/max/512/1*YWazhGyGmNs6K3HZE7lS7Q.png"
      },
      {
        titolo: "Cyber Security Hacking Game",
        follower: 500000,
        img: "https://cdn-icons-png.flaticon.com/512/1691/1691685.png"
      },
      {
        titolo: "Angular Developers",
        follower: 987634,
        img: "data:image/png;base64,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"
      }
    ],
    TopVoices: [
      {
        titolo: "Simon Sinek",
        follower: 7092457,
        img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
      }
    ]
  };

  if (numberToDisplay > DEFAULTNUMBER) columWeight = 12;
  else columWeight = 6;

  return (
    <Container className="allCards p-4">
      <Row>
        <Col className="d-flex align-items-center">
          {numberToDisplay > DEFAULTNUMBER ? (
            <AiOutlineArrowLeft className="iconTitle" onClick={(e) => setNumberToDisplay(DEFAULTNUMBER)} />
          ) : (
            <></>
          )}
          <h5>Interessi</h5>
        </Col>
      </Row>
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
                }}
              >
                {element}
              </li>
            );
        })}
      </ul>
      <Container>
        <Row>
          {dataInteressi[selected].map((element, index, arr) => {
            if (index < numberToDisplay)
              return (
                <Col xs={12} lg={columWeight} className="division">
                  <Row>
                    <Col xs={3}>
                      <img src={element.img} alt={element.titolo + " immagine"} />
                    </Col>
                    <Col xs={6}>
                      <a href="">
                        <h6>{element.titolo}</h6>
                      </a>
                      <p className="follower">
                        {element.follower.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + " "}
                        followers
                      </p>
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
            className="changeHoverColor"
            onClick={() => {
              setNumberToDisplay(MAXIMUM);
            }}
          >
            <Col className="d-flex justify-content-center align-items-center">
              {dataInteressi[selected].length > DEFAULTNUMBER ? (
                <p>
                  Mostra tutte le aziende({dataInteressi[selected].length}) <BsFillArrowRightCircleFill />
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
