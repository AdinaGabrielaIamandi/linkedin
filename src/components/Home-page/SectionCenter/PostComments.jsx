import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteCommentAction, getCommentAction } from "../../../redux/action";
import { MdDelete } from "react-icons/md";

import { ModalEditComment } from "./ModalEditComment";

export const PostComments = (props) => {
  const [comment, setComment] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchComments();
  }, [props.id]);

  const fetchComments = async () => {
    try {
      let res = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.id, {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDA1YjBkZTAyY2FjZDAwMTMyZjE5OTMiLCJpYXQiOjE2NzgwOTQ1NTgsImV4cCI6MTY3OTMwNDE1OH0.3JzuoAwpie8rPAglhCDeNuAHhZY01BetkUJHZldeBOw"
        }
      });
      if (res.ok) {
        const comment = await res.json();
        console.log(props.id, comment);
        setComment(comment);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ListGroup>
      {comment.map((el) => {
        return (
          <div className="d-flex justify-content-between align-items-center border border-top-0 border-end-0 border-start-0">
            <ListGroup.Item style={{ width: "90%" }} className="border border-0 pe-0" key={el._id}>
              <small className="fw-bold">{el.author}:</small>

              <div className="d-flex justify-content-between">
                <small>{el.comment}</small>
              </div>
            </ListGroup.Item>
            <div className="d-flex w-25 justify-content-end">
              <MdDelete
                onClick={() => {
                  dispatch(deleteCommentAction(el._id));
                  dispatch(getCommentAction());
                  window.location.reload();
                }}
                className="text-danger me-2"
              />
              <ModalEditComment text={el} />
            </div>
          </div>
        );
      })}
    </ListGroup>
  );
};
