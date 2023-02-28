import { Modal, Form } from "react-bootstrap";

export const ModalExperience = () => {
  return (
    <Modal.Body className="modale">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Qualifica*</Form.Label>
        <Form.Control type="text" autoFocus />
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
    </Modal.Body>
  );
};
