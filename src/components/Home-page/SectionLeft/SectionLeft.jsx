import { Card, Button, Image } from "react-bootstrap";
import "./sectionLeft.scss";

export const SectionLeft = () => {
  return (
    <Card>
      <Card.Img variant="top" src="http://placekitten.com/g/48/12" />
      <Image
        src="http://placekitten.com/g/65/65"
        className="rounded-circle border border-2 border-white foto-profile-first"
      />
      <Card.Body className=" m-0 mt-4 text-center">
        <Card.Title className="m-0">User Name</Card.Title>
        <small className="border-bottom-5">Posizione lavorativa</small>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
