import { Card, InputGroup, Form } from "react-bootstrap";
import "./PostInput.scss";
import { AiFillPicture } from "react-icons/ai";
import { BsFillPlayBtnFill } from "react-icons/bs";
import { BsCalendar2Date } from "react-icons/bs";
import { RiArticleFill } from "react-icons/ri";

export const PostInput = () => {
  return (
    <Card className="p-3">
      <div className="d-flex ">
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Mona_Lisa-restored.jpg/1200px-Mona_Lisa-restored.jpg"
            alt=""
          />
        </div>

        <InputGroup className="mb-3 ms-3 ">
          <Form.Control
            className="fw-bold"
            id="inputPost"
            placeholder="Avvia un post"
          />
        </InputGroup>
      </div>

      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <AiFillPicture className="iconFields" />
          <p className="ms-3 fw-bold textIcon mb-0">Foto</p>
        </div>
        <div className="d-flex">
          <BsFillPlayBtnFill className="iconFields green" />
          <p className="ms-3 fw-bold textIcon mb-0">Video</p>
        </div>
        <div className="d-flex">
          <BsCalendar2Date className="iconFields orange" />
          <p className="ms-3 fw-bold textIcon mb-0">Evento</p>
        </div>
        <div className="d-flex">
          <RiArticleFill className="iconFields red" />
          <p className="ms-3 fw-bold textIcon mb-0">Scrivi un articolo</p>
        </div>
      </div>
    </Card>
  );
};
