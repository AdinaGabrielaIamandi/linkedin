import { Form, Button, Modal } from "react-bootstrap";
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
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFotoPost,
  addPostAction,
  getPostAction,
} from "../../../redux/action";

export const ModalInput = (props) => {
  const dispatch = useDispatch();
  const [post, setPost] = useState({});
  const lastPost = useSelector((state) => state.linkedin.lastPost);
  const [fd, setFd] = useState(new FormData());

  const handleFile = (ev) => {
    setFd((prev) => {
      prev.delete("post");
      prev.append("post", ev.target?.files[0]);
      return prev;
    });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    dispatch(addFotoPost(fd, lastPost));
  };

  return (
    <>
      <Modal.Header closeButton onClick={props.handleClose}>
        <Modal.Title>Crea un post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex ms-2">
          <div>
            <img id="portraitInput" src={props.image} alt="" />
          </div>

          <div className="mb-3 ms-2 ">
            <h6 className="fw-bold mb-1">
              {props.name} {props.surname}
            </h6>
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
              onChange={(e) => {
                setPost((prev) => ({ ...prev, text: e.target.value }));
              }}
            />
          </Form.Group>
          <Form.Group onSubmit={handleSubmit}>
            <input
              className="uploadPic"
              type="file"
              onChange={(e) => {
                setPost((prev) => ({ ...prev, image: handleFile(e) }));
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
            <AiOutlineClockCircle className="iconFooterInputModal me-3" />
            <Button
              className="pubblicaCta fw-bold"
              onClick={() => {
                dispatch(addPostAction(post, fd));
                dispatch(getPostAction());
                window.location.reload();
              }}
            >
              Pubblica
            </Button>
          </div>
        </div>
      </Modal.Body>
    </>
  );
};
