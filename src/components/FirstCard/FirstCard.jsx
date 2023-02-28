import { Card, Image, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./firstCard.scss";
import { FaTelegramPlane } from "react-icons/fa";
import { HiOutlinePencil } from "react-icons/hi";
import { useState } from "react";
import Cover from "../../images/cover-foto.png";

export const FirstCard = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Card className="mb-2">
      <Card.Img variant="top" src={Cover} style={{ width: "100%", height: "180px" }} />
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
            <h4 className="m-0 text-black">
              {props.name} {props.surname}
            </h4>
          </div>
          <p className="mb-2 text-black work">{props.work}</p>
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
              12 collegamenti
            </Link>
          </p>
        </Card.Text>
        <div className="d-flex mb-3">
          <Button className="cta2 fw-bold me-2 ">Disponibile per</Button>
          <Button className="cta fw-bold">Altro</Button>
        </div>
      </Card.Body>
    </Card>
  );
};
