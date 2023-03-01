import { Card, Image } from "react-bootstrap";
import "./sectionLeft.scss";

export const SectionLeft = () => {
  return (
    <Card>
      <Card.Img variant="top" src="http://placekitten.com/g/48/12" />
      <Image
        src="http://placekitten.com/g/65/65"
        className="rounded-circle border border-2 border-white foto-profile-first"
      />
      <Card.Body className="mt-4">
        <div className="border-bottom pb-3 text-center">
          <Card.Title className="mb-1 userName">User Name</Card.Title>
          <small className="m-1 userLavoro text-secondary">Posizione lavorativa</small>
        </div>
        <div className="mt-3 classHover d-flex justify-content-between">
          <div className="collegamenti">
            <p className="m-0 fw-bold">Collegamenti</p>
            <br />
            <p className="m-0 fw-bold text-secondary">Espandi la tua rete</p>
          </div>
          <p className="fw-bold text-primary">13</p>
        </div>
      </Card.Body>
    </Card>
  );
};
