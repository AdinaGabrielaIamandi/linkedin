import { Card, Image, Button, Modal, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./firstCard.scss";
import { HiOutlinePencil } from "react-icons/hi";
import Cover from "../../images/cover-foto.png";
import { useState } from "react";
import Modale from "./Modale";
import { useSelector, useDispatch } from "react-redux";
import { addFriend } from "../../redux/action";
import { removeFriend } from "./../../redux/action/index";
import { useParams } from "react-router-dom";

export const FirstCard = (props) => {
  const [show1, setShow1] = useState(false);
  const handleShow1 = () => setShow1(true);
  const handleClose1 = () => setShow1(false);
  const allfriends = useSelector((state) => state.linkedin.allfriends);
  const params = useParams();

  const friend = allfriends.includes(props.id);

  const dispatch = useDispatch();

  return (
    <Card className="allCards mb-2">
      {params.id === "me" ? (
        <Card.Img
          variant="top"
          src="https://w-content.meteosuper.it/2022/11/resize_istock_funghi_allucinogeni.jpg"
          style={{
            width: "100%",
            height: "180px",
            aspectRatio: "1/1",
            objectFit: "cover"
          }}
          className="m-0 p-0"
        />
      ) : (
        <Card.Img
          variant="top"
          src={Cover}
          style={{
            width: "100%",
            height: "180px",
            aspectRatio: "1/1",
            objectFit: "cover"
          }}
          className="m-0 p-0"
        />
      )}

      <Card.Body>
        <Image
          src={props.image}
          className="rounded-circle border border-4 border-white foto-profile-first"
          style={{ width: "150px", height: "150px" }}
        />
        <Card.Text className="mt-3 ps-3">
          <div className="d-flex justify-content-end">
            <div className="d-flex justify-content-center rounded-circle pencil-add align-items-center">
              {params.id === "me" ? <HiOutlinePencil style={{ fontSize: "23px" }} onClick={handleShow1} /> : <></>}
            </div>
          </div>
          <Modal size="lg" show={show1} onHide={handleClose1} aria-labelledby="example-modal-sizes-title-lg">
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
              <Link to="/" className="text-primary fw-bold text-decoration-none link">
                Informazioni di contatto
              </Link>
            </span>
          </p>
          <p>
            {params.id === "me" ? (
              <Link to="/" className="text-primary fw-bold text-decoration-none link mb-2">
                {allfriends.length} collegamenti
              </Link>
            ) : (
              <></>
            )}
          </p>
        </Card.Text>
        <div className="d-flex mb-3 ps-3">
          {params.id !== "me" ? (
            friend ? (
              <Button className="cta2 cta3 fw-bold me-2 " onClick={() => dispatch(removeFriend(props.id))}>
                Elimina dagli amici
              </Button>
            ) : (
              <Button className="cta2 cta3 fw-bold me-2 " onClick={() => dispatch(addFriend(props.id))}>
                Aggiungi agli amici
              </Button>
            )
          ) : (
            <>
              <Button className="cta2 fw-bold me-2 ">Disponibile per</Button>
              <Button className="cta2 cta3 fw-bold me-2 ">Aggiungi sezione del profilo</Button>
            </>
          )}
          <Button className="cta fw-bold">Altro</Button>
        </div>
      </Card.Body>
    </Card>
  );
};
