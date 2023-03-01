import { Card, Image } from "react-bootstrap";
import { BsFillBookmarkFill } from "react-icons/bs";
import { HiOutlinePlus } from "react-icons/hi";
import "./sectionLeft.scss";

export const SectionLeft = () => {
  return (
    <>
      <Card className="mb-2">
        <Card.Img variant="top" src="http://placekitten.com/g/48/12" />
        <Image
          src="http://placekitten.com/g/65/65"
          className="rounded-circle border border-2 border-white foto-profile-first"
        />
        <Card.Body className="p-0 mt-5">
          <div className="border-bottom pb-3 text-center">
            <Card.Title className="mb-1 userName">User Name</Card.Title>
            <small className="m-1 userLavoro text-secondary">Posizione lavorativa</small>
          </div>
          <div className="border-bottom">
            <div className="mt-3 mb-3 classHover d-flex justify-content-between collegamenti ">
              <div className="ps-2">
                <p className="m-0 fw-bold p-0 text-secondary">Collegamenti</p>
                <p className="m-0 fw-bold">Espandi la tua rete</p>
              </div>
              <p className="fw-bold text-primary pe-2">13</p>
            </div>
          </div>
          <div className="border-bottom collegamenti">
            <div className="pt-3 mb-3 classHover d-flex justify-content-between">
              <div className="ps-2">
                <p className="m-0 p-0 text-secondary">Accedi a strumenti e informazioni in esclusiva</p>
                <p className="m-0 fw-bold premiumHome text-decoration-underline">Prova Premium gratis</p>
              </div>
            </div>
          </div>
          <div className="pt-1 pb-1 classHover d-flex justify-content-between collegamenti ">
            <div className="ps-2 text-secondary">
              <BsFillBookmarkFill />
              <span className="ms-2 fw-bold">I miei elementi</span>
            </div>
          </div>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body className="p-0">
          <div className="border-bottom">
            <Card.Text className="card2 text-primary fw-bold me-2 ms-2 mt-2">Gruppi</Card.Text>
            <div className="d-flex justify-content-between me-2 ms-2 mt-2">
              <Card.Text className="card2 text-primary fw-bold">Eventi</Card.Text>
              <HiOutlinePlus />
            </div>
            <Card.Text className="card2 me-2 ms-2 text-primary fw-bold pb-2">Hastag seguiti</Card.Text>
          </div>
          <div className="collegamenti d-flex align-items-center justify-content-center pb-2 pt-2 fw-bold text-secondary">
            Scopri di più
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
