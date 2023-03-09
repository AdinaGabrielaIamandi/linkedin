import { Form, Button } from "react-bootstrap";
import { postCommentAction, getCommentAction } from "../../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export const InputComment = (props) => {
  const dispatch = useDispatch();
  const commentsObj = { comment: "", rate: 1, elementId: props.id };
  const [comment, setComment] = useState(commentsObj);
  const pictureProfile = useSelector((state) => state.linkedin.profile);
  console.log("IMMAGINI", pictureProfile);

  return (
    <div className="d-flex align-items-center">
      <img className="rounded-circle ms-2" src={pictureProfile.image} alt="" />
      <Form.Control
        style={{ borderRadius: "30px" }}
        type="text"
        className="p-1 m-2"
        placeholder="Aggiungi un commento... "
        onChange={(e) => {
          setComment((prev) => ({ ...prev, comment: e.target.value }));
        }}
      />
      <Button
        style={{ borderRadius: "30px" }}
        className="me-2"
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
