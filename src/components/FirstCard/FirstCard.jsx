import { Card, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./app.scss";
import { FaTelegramPlane } from "react-icons/fa";

export const FirstCard = () => {
  return (
    <Card className="mb-2">
      <Card.Img variant="top" src="http://placekitten.com/200/50" style={{ width: "100%" }} />
      <Card.Body>
        <Image
          src="http://placekitten.com/130/130"
          className="rounded-circle border border-4 border-white foto-profile"
        />
        <Card.Text className="mt-5">
          <div className="d-flex align-items-baseline m-0">
            <h4 className="m-0">Nome Cognome</h4>
            <p className="mx-2 m-0"> • 1°</p>
          </div>
          <p className="mb-2">Studente</p>
          <p className="mb-2 text-secondary">
            Indirizzo •
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
        <div className="mb-3">
          <Button className="cta2 fw-bold me-2 ">
            <FaTelegramPlane /> Messaggio
          </Button>
          <Button className="cta fw-bold">Altro</Button>
        </div>
      </Card.Body>
    </Card>
  );
};
