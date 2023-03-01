import { Card, Image, Button } from "react-bootstrap";
import "./postget.scss";
import { BiWorld } from "react-icons/bi";
import { SlLike } from "react-icons/sl";
import { FaRegCommentDots } from "react-icons/fa";
import { BsArrowRepeat } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";

export const PostGet = () => {
  //const data= fetch api post get

  return (
    <Card>
      <Card.Body className="bordo p-0 m-3 mb-0 border-bottom pb-1">
        <div className="d-flex mb-2 header-post">
          {/* src={data.user.image} */}
          <Image src="http://placekitten.com/g/48/48" className="rounded-circle me-2" />
          <div>
            <div>
              <Card.Title className="nome-utente mb-0">data.username</Card.Title>
              <Card.Text className="text-secondary lavoro-utente mb-0">data.user.title</Card.Text>
              <Card.Text className="text-secondary data-post d-flex align-items-center">
                data.createdAt • <BiWorld className="ms-1 icon-world" />
              </Card.Text>
            </div>
          </div>
        </div>
        <Card.Text>data.text</Card.Text>
        <div className="d-flex justify-content-between">
          <span className="d-flex align-items-center likes">
            <SlLike className="me-1 text-primary" />
            <small className="num-like text-secondary">135</small>
          </span>
          <small className="likes num-like text-secondary">2 diffusioni post</small>
        </div>
      </Card.Body>
      <Card.Body className="d-flex justify-content-between p-0 me-3 ms-3">
        <Button className="text-secondary bg-transparent border-0 d-flex align-items-center mt-1 mb-1 bottone-hover">
          <SlLike className="me-1 fw-bold" />
          <p className="d-none d-md-flex align-items-center m-0">Consiglia</p>
        </Button>
        <Button className="text-secondary bg-transparent border-0 d-flex align-items-center mt-1 mb-1 bottone-hover">
          <FaRegCommentDots className="me-1 fw-bold" />
          <p className="d-none d-md-flex align-items-center m-0">Commenta</p>
        </Button>
        <Button className="text-secondary bg-transparent border-0 d-flex align-items-center mt-1 mb-1 bottone-hover">
          <BsArrowRepeat className="me-1 fw-bold" />
          <p className="d-none d-md-flex align-items-center m-0">Diffondi il post</p>
        </Button>
        <Button className="text-secondary bg-transparent border-0 d-flex align-items-center mt-1 mb-1 bottone-hover">
          <RiSendPlaneFill className="me-1 fw-bold" />
          <p className="d-none d-md-flex align-items-center m-0">Invia</p>
        </Button>
      </Card.Body>
    </Card>
  );
};
