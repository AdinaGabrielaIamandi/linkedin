import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ImPencil } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { editCommentAction, getCommentAction } from "../../../redux/action";

export const ModalEditComment = (props) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const comments = useSelector((state) => state.allComments);
  const [editedComment, setEditedComment] = useState(props.text);
  const dispatch = useDispatch();

  return (
    <>
      <ImPencil
        className="me-3 text-primary"
        style={{ width: "0.8em", height: "0.8em" }}
        onClick={handleShow}
      />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control
              type="text"
              onChange={(e) => {
                setEditedComment((prev) => ({
                  ...prev,
                  comment: e.target.value,
                }));
              }}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(editCommentAction(editedComment, editedComment._id));
              dispatch(getCommentAction());
              window.location.reload();
            }}
          >
            Salva modifiche
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
