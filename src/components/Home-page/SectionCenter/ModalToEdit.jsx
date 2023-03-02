import { Form, Button, Modal, Dropdown } from "react-bootstrap";
import { BiWorld } from "react-icons/bi";
import { RxTriangleDown } from "react-icons/rx";
import { FaRegSmile } from "react-icons/fa";
import { AiFillPicture } from "react-icons/ai";
import { BsFillPlayBtnFill } from "react-icons/bs";
import { HiDocumentText } from "react-icons/hi";
import { SlOptions } from "react-icons/sl";
import { AiFillMessage } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import "./PostInput.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePostAction, putPostEditedAction } from "../../../redux/action";
import { addPostAction, getPostAction } from "../../../redux/action";
import { ImPencil } from "react-icons/im";
import { BsFillTrashFill } from "react-icons/bs";

export const ModalToEdit = (props) => {
  const dispatch = useDispatch();
  const allPost = useSelector((state) => state.allPost);
  const [postToEdit, setPostToEdit] = useState(allPost);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const myPost = allPost.filter((el) => {
      return el._id === props.idPost;
    });
    setPostToEdit(myPost[0]);
  }, []);

  return (
    <>
      {props.idUser === "63fcc323f193e60013807f6a" ? (
        <Dropdown>
          <Dropdown.Toggle className="p-0" id="dropdown-basic">
            <SlOptions id="iconDropDownOption" />
          </Dropdown.Toggle>

          <Dropdown.Menu className="p-3">
            <Dropdown.Item
              className="fw-bold"
              href="#/action-2"
              onClick={handleShow}
            >
              <ImPencil className="me-2" /> Modifica post
            </Dropdown.Item>
            <Dropdown.Item
              className="fw-bold mt-2"
              href="#/action-3"
              onClick={() => {
                dispatch(deletePostAction(props.idPost));
                dispatch(getPostAction());
                console.log("JJOKDDK", props.idPost);
              }}
            >
              <BsFillTrashFill className="me-2 " />
              Elimina post
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ) : (
        <Dropdown>
          <Dropdown.Toggle className="p-0" id="dropdown-basic">
            <SlOptions id="iconDropDownOption" />
          </Dropdown.Toggle>

          <Dropdown.Menu className="p-3">
            <Dropdown.Item className="fw-bold" href="#/action-2">
              <ImPencil className="me-2" /> Salva post
            </Dropdown.Item>
            <Dropdown.Item className="fw-bold mt-2" href="#/action-3">
              <BsFillTrashFill className="me-2 " /> Segnala post
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton onClick={props.handleClose}>
          <Modal.Title>Modifica post</Modal.Title>
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
                className="border-0"
                as="textarea"
                rows={3}
                value={props.text}
                onChange={(e) => {
                  setPostToEdit((prev) => ({ ...prev, text: e.target.value }));
                }}
              />
            </Form.Group>
          </Form>
          <div>
            <FaRegSmile style={{ width: "1.8em" }} />
          </div>
          <div className="d-flex justify-content-between mt-3">
            <div className="d-flex align-items-center">
              <AiFillPicture className="iconFooterInputModal me-3" />
              <BsFillPlayBtnFill className="iconFooterInputModal me-3" />
              <HiDocumentText className="iconFooterInputModal me-3" />
              <SlOptions className="me-3" style={{ color: "#666666" }} />
              <div className="d-flex borderToDiv">
                <AiFillMessage className="iconFooterInputModal ms-3 me-1" />
                <p className="mb-0 all fw-bold">tutti</p>
              </div>
            </div>
            <div>
              <Button
                onClick={() => {
                  dispatch(putPostEditedAction(postToEdit, props.idPost));
                  dispatch(getPostAction());
                }}
                className="pubblicaCta fw-bold"
              >
                Salva
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
