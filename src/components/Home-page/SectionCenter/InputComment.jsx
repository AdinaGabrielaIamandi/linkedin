import { Form, Button } from "react-bootstrap";
import { postCommentAction, getCommentAction } from "../../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export const InputComment = (props) => {
  const dispatch = useDispatch();
  const commentsObj = { comment: "", rate: 1, elementId: props.id };
  const [comment, setComment] = useState(commentsObj);

  return (
    <div className="d-flex">
      <Form.Control
        type="text"
        placeholder="Aggiungi un commento... "
        onChange={(e) => {
          setComment((prev) => ({ ...prev, comment: e.target.value }));
        }}
      />
      <Button
        onClick={() => {
          dispatch(postCommentAction(comment));
          dispatch(getCommentAction());
          window.location.reload();
        }}
      >
        Invia
      </Button>
    </div>
  );
};
