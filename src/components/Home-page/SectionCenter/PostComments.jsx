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
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + props.id,
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDA1YjBkZTAyY2FjZDAwMTMyZjE5OTMiLCJpYXQiOjE2NzgwOTQ1NTgsImV4cCI6MTY3OTMwNDE1OH0.3JzuoAwpie8rPAglhCDeNuAHhZY01BetkUJHZldeBOw",
          },
        }
      );
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
          <div className="d-flex justify-content-between align-items-center">
            <ListGroup.Item
              style={{ width: "90%" }}
              className="border-0 border-none "
              key={el._id}
            >
              {el.comment}
            </ListGroup.Item>

            <MdDelete
              onClick={() => {
                dispatch(deleteCommentAction(el._id));
                dispatch(getCommentAction());
                window.location.reload();
              }}
              className="text-danger me-3"
            />

            <ModalEditComment text={el} />
          </div>
        );
      })}
    </ListGroup>
  );
};
