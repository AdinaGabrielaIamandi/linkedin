import { Card, InputGroup, Form } from "react-bootstrap";
import "./PostInput.scss";

export const PostInput = () => {
  return (
    <Card className="p-3">
      <div className="d-flex">
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
    </Card>
  );
};
