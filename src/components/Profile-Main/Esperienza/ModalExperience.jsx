import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addExperienceAction } from "../../../redux/action";

export const ModalExperience = (e) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const [exp, setExp] = useState({
    role: "",
    company: "",
    startDate: "",
    description: "",
    area: "",
  });

  return (
    <>
      <Modal.Body className="modale">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Qualifica*</Form.Label>
          <Form.Control
            type="text"
            autoFocus
            onChange={(e) => {
              setExp((exp) => ({ ...exp, role: e.target.value }));
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Tipo di impiego*</Form.Label>
          <Form.Control type="text" autoFocus />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nome azienda*</Form.Label>
          <Form.Control type="text" autoFocus />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Località</Form.Label>
          <Form.Control type="text" autoFocus />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Tipo di località</Form.Label>
          <Form.Control type="text" autoFocus />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Competenze</Form.Label>
          <Form.Control type="text" autoFocus />
        </Form.Group>
        <div className="d-flex justify-content-around">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Data di inizio</Form.Label>
            <Form.Control type="date" autoFocus />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Data fine</Form.Label>
            <Form.Control type="date" autoFocus />
          </Form.Group>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={dispatch(addExperienceAction(exp))}>
          Save Changes
        </Button>
      </Modal.Footer>
    </>
  );
};
