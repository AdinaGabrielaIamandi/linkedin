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
  );
};
