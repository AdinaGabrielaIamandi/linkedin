import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCommentAction } from "../../../redux/action";

export const PostComments = (props) => {
  const [comment, setComment] = useState([]);

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
        return <ListGroup.Item key={el._id}>{el.comment}</ListGroup.Item>;
      })}
    </ListGroup>
  );
};
