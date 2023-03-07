import { Card, Image, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./firstCard.scss";
import { HiOutlinePencil } from "react-icons/hi";
import Cover from "../../images/cover-foto.png";
import { useState } from "react";
import Modale from "./Modale";
import { useSelector, useDispatch } from "react-redux";
import { ADD_TO_FRIENDS, REMOVE_FROM_FRIENDS } from "../../redux/action";

export const FirstCard = (props) => {
  const [show1, setShow1] = useState(false);
  const handleShow1 = () => setShow1(true);
  const handleClose1 = () => setShow1(false);
  const [myfriend, setMyfriend] = useState(false);
  const allfriends = useSelector((state) => state.linkedin.allfriends);

  const dispatch = useDispatch();
  const friendsButton = () => {
    isAlreadyMyfriend();
    if (myfriend === false) {
      dispatch({
        type: ADD_TO_FRIENDS,
        payload: props,
      });
      setMyfriend(true);
    } else {
      dispatch({
        type: REMOVE_FROM_FRIENDS,
        payload: props,
      });
      setMyfriend(false);
    }
  };

  const isAlreadyMyfriend = () => {
    allfriends.map((obj) => {
      if (obj.id === props.id) setMyfriend(true);
    });
  };

  return (
    <Card className="mb-2">
      <Card.Img
        variant="top"
        src={Cover}
        style={{ width: "100%", height: "180px" }}
      />
      <Card.Body>
        <Image
          src={props.image}
          className="rounded-circle border border-4 border-white foto-profile-first"
          style={{ width: "150px", height: "150px" }}
        />
        <Card.Text className="mt-3">
          <div className="d-flex justify-content-end">
            <div className="d-flex justify-content-center rounded-circle pencil-add align-items-center">
              <HiOutlinePencil
                style={{ fontSize: "23px" }}
                onClick={handleShow1}
              />
            </div>
          </div>
          <Modal
            size="lg"
            show={show1}
            onHide={handleClose1}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modale id={props.id} chiudi={handleClose1} />
          </Modal>
          <div className="d-flex align-items-baseline mt-3">
            <h4 className="m-0 text-black">
              {props.name} {props.surname}
            </h4>
          </div>
          <p className="mb-2 text-black work">{props.work}</p>
          <p className="mb-2 text-secondary">
            {props.town} •
            <span>
              <Link
                to="/"
                className="text-primary fw-bold text-decoration-none link"
              >
                Informazioni di contatto
              </Link>
            </span>
          </p>
          <p>
            <Link
              to="/"
              className="text-primary fw-bold text-decoration-none link mb-2"
            >
              {allfriends.length} collegamenti
            </Link>
          </p>
        </Card.Text>
        <div className="d-flex mb-3">
          <Button className="cta2 fw-bold me-2 ">Disponibile per</Button>
          <Button
            className="cta2 cta3 fw-bold me-2 "
            onClick={() => friendsButton()}
          >
            {myfriend ? "Elimina dagli Amici" : "Aggiungi Agli Amici"}
          </Button>
          <Button className="cta fw-bold">Altro</Button>
        </div>
      </Card.Body>
    </Card>
  );
};
