import { Card, Image, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./app.scss";
import { FaTelegramPlane } from "react-icons/fa";
import { HiOutlinePencil } from "react-icons/hi";
import { useState } from "react";

export const FirstCard = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Card className="mb-2">
      <Card.Img variant="top" src="http://placekitten.com/200/150" style={{ width: "100%", height: "180px" }} />
      <Card.Body>
        <Image
          src={props.image}
          className="rounded-circle border border-4 border-white foto-profile-first"
          style={{ width: "150px", height: "150px" }}
        />
        <Card.Text className="mt-3">
          <div className="d-flex justify-content-end">
            <div className="d-flex justify-content-center rounded-circle pencil-add align-items-center">
              <HiOutlinePencil style={{ fontSize: "23px" }} onClick={handleShow} />
            </div>
          </div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
          <div className="d-flex align-items-baseline mt-3">
            <h4 className="m-0">
              {props.name} {props.surname}
            </h4>
            <p className="mx-2 m-0"> • 1°</p>
          </div>
          <p className="mb-2">{props.work}</p>
          <p className="mb-2 text-secondary">
            {props.town} •
            <span>
              <Link to="/" className="text-primary fw-bold text-decoration-none link">
                Informazioni di contatto
              </Link>
            </span>
          </p>
          <p>
            <Link to="/" className="text-primary fw-bold text-decoration-none link mb-2">
              Num collegamenti
            </Link>
          </p>
          <p>
            <Link to="/" className="text-secondary text-decoration-none link2 mb-2">
              img col. <span className="fw-bold">nome cognome</span>,<span className="fw-bold"> nome cognome</span> e
              altri 2 collegamenti in comune
            </Link>
          </p>
        </Card.Text>
        <div className="d-flex mb-3">
          <Button className="cta2 fw-bold me-2 ">
            <FaTelegramPlane /> Messaggio
          </Button>
          <Button className="cta fw-bold">Altro</Button>
        </div>
      </Card.Body>
    </Card>
  );
};
