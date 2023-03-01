import { Card, Button, Image } from "react-bootstrap";
import "./sectionLeft.scss";

export const SectionLeft = () => {
  return (
    <Card>
      <Card.Img variant="top" src="http://placekitten.com/g/48/24" />
      <Card.Body>
        <Image src="http://placekitten.com/g/65/65" className="rounded-circle" />
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};
