import { Card, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaTelegramPlane } from "react-icons/fa";

export const SecondCard = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Text>
          <h5>Punti chiave</h5>
          <div className="d-flex mt-3">
            <div>
              <Image src="http://placekitten.com/50/50" className="rounded-circle" />
            </div>

            <div className="ms-2">
              <h6 className="mb-0">
                <Link to="/" className="text-dark text-decoration-none link2 mb-0">
                  Entrambi avete studiato presso EPICODE
                </Link>
              </h6>
              <p className="text mb-1">Entrambi avete studiato presso EPICODE: 2022 - 2023</p>
              <Button className="cta fw-bold">
                <FaTelegramPlane /> Messaggio
              </Button>
            </div>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
