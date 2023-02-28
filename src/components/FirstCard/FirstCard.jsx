import { Card, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./app.scss";
import { FaTelegramPlane } from "react-icons/fa";
import { HiOutlinePencil } from "react-icons/hi";

export const FirstCard = (props) => {
  return (
    <Card className="mb-2">
      <Card.Img variant="top" src="http://placekitten.com/200/150" style={{ width: "100%", height: "180px" }} />
      <Card.Body>
        <Image
          src={props.image}
          className="rounded-circle border border-4 border-white foto-profile-first"
          style={{ width: "150px", height: "150px" }}
        />
        <Card.Text className="mt-5">
          <div className="d-flex align-items-baseline m-0">
            <div className="d-block">
              <HiOutlinePencil />
            </div>
            <h4 className="m-0">
              {props.name} {props.surname}
            </h4>
            <p className="mx-2 m-0"> • 1°</p>
          </div>
          <p className="mb-2">{props.work}</p>
          <p className="mb-2 text-secondary">
            {props.town} •
            <span>
              <Link to="/" className="text-primary fw-bold text-decoration-none link">
                Informazioni di contatto
              </Link>
            </span>
          </p>
          <p>
            <Link to="/" className="text-primary fw-bold text-decoration-none link mb-2">
              Num collegamenti
            </Link>
          </p>
          <p>
            <Link to="/" className="text-secondary text-decoration-none link2 mb-2">
              img col. <span className="fw-bold">nome cognome</span>,<span className="fw-bold"> nome cognome</span> e
              altri 2 collegamenti in comune
            </Link>
          </p>
        </Card.Text>
        <div className="d-flex mb-3">
          <Button className="cta2 fw-bold me-2 ">
            <FaTelegramPlane /> Messaggio
          </Button>
          <Button className="cta fw-bold">Altro</Button>
        </div>
      </Card.Body>
    </Card>
  );
};
