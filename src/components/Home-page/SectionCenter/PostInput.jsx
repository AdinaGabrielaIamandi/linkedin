import { Card, InputGroup, Form, Modal, Button } from "react-bootstrap";
import "./PostInput.scss";
import { AiFillPicture } from "react-icons/ai";
import { BsFillPlayBtnFill } from "react-icons/bs";
import { BsCalendar2Date } from "react-icons/bs";
import { RiArticleFill } from "react-icons/ri";
import { ModalInput } from "./ModalInput";
import { useState } from "react";

export const PostInput = (props) => {
  console.log("props", props);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <ModalInput name={props.name} surname={props.surname} image={props.image} />
      </Modal>
      <Card className="p-3">
        <div className="d-flex ">
          <div>
            <img id="portraitInput" src={props.image} alt="" />
          </div>

          <InputGroup className="mb-3 ms-3 ">
            <Form.Control className="fw-bold" id="inputPost" placeholder="Avvia un post" onClick={handleShow} />
          </InputGroup>
        </div>

        <div className="d-flex justify-content-center justify-content-lg-between iconsUnderInput flex-wrap">
          <div className="d-flex me-4 me-lg-0">
            <AiFillPicture className="iconFields" />
            <p className="ms-3 fw-bold textIcon mb-0">Foto</p>
          </div>
          <div className="d-flex me-4 me-lg-0">
            <BsFillPlayBtnFill className="iconFields green" />
            <p className="ms-3 fw-bold textIcon mb-0">Video</p>
          </div>
          <div className="d-flex me-4 me-lg-0">
            <BsCalendar2Date className="iconFields orange" />
            <p className="ms-3 fw-bold textIcon mb-0">Evento</p>
          </div>
          <div className="d-flex mt-3 mt-lg-0">
            <RiArticleFill className="iconFields red" />
            <p className="ms-3 fw-bold textIcon mb-0">Scrivi un articolo</p>
          </div>
        </div>
      </Card>
    </>
  );
};
