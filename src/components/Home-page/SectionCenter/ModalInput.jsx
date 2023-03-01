import { Form, Button, Modal } from "react-bootstrap";
import { BiWorld } from "react-icons/bi";
import { RxTriangleDown } from "react-icons/rx";
import "./PostInput.scss";

export const ModalInput = () => {
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Crea un post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex ms-2">
          <div>
            <img
              id="portraitInput"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Mona_Lisa-restored.jpg/1200px-Mona_Lisa-restored.jpg"
              alt=""
            />
          </div>

          <div className="mb-3 ms-2 ">
            <h6 className="fw-bold mb-1">Mona Lisa</h6>
            <Button className="ctaInput py-1 px-3 d-flex align-items-center fw-bold">
              <BiWorld className="me-1 buttonIcon" /> Chiunque{" "}
              <RxTriangleDown className="ms-1 buttonIcon" />
            </Button>
          </div>
        </div>
        <Form>
          <Form.Group
            className="mb-3 mt-3"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Control
              placeholder="Di cosa vorresti parlare?"
              className="border-0"
              as="textarea"
              rows={3}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
    </>
  );
};
