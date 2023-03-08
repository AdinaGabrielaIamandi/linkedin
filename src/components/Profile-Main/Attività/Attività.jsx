import "./Attività.scss";
import { Container, Row, Button, Col, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Attività = () => {
  const params = useParams();
  const post = useSelector((state) => state.linkedin.allPost);
  const follower = useSelector((state) => state.linkedin.allfriends);

  return (
    <>
      {params.id === "me" ? (
        <Container className="allCards mt-2 ">
          <Row className=" textAttività mt-4 ms-1">
            <Col className="ButtonFlex">
              <h5 className="">Attività</h5>
              <Button variant="outline-primary ButtonAttività">Avvia un post</Button>
            </Col>
            <p className="text-primary fw-bold mb-2">{follower.length} follower</p>
            {post
              .filter((singlePost) => {
                return singlePost.user?._id === "63fcc323f193e60013807f6a";
              })
              .slice(-4)
              .map((el) => (
                <>
                  <p className="nameAttivitap">
                    <span className="fw-bold">
                      {el.user?.name} {el.user?.surname}{" "}
                    </span>
                    ha diffuso questo post • {el?.createdAt?.slice(0, -14)} {el?.createdAt?.slice(11, 16)}
                  </p>
                  <div>
                    {el?.image ? (
                      <>
                        <p className="mb-0">{el?.text}</p>
                        <Image src={el?.image} style={{ width: "100%", aspectRatio: "1/1", objectFit: "contain" }} />
                      </>
                    ) : (
                      <>
                        <p className="mb-0">{el?.text}</p>
                        <Image src={el?.image} className="d-none" />
                      </>
                    )}
                  </div>
                  <Col className="LikeCommenti border-bottom mb-4 mt-3">
                    <p>{Math.floor(Math.random() * 100)} like</p>
                    <p>{Math.floor(Math.random() * 100)} commenti</p>
                  </Col>
                </>
              ))}

            <button className="ButtonMostraRisorse py-2">Mostra tutte le risorse</button>
          </Row>
        </Container>
      ) : (
        <Container className="allCards mt-2">
          <Row className=" textAttività mt-4">
            <Col className="ButtonFlex">
              <h5>Attività</h5>
              <Button variant="outline-primary ButtonAttività">Avvia un post</Button>
            </Col>
            <p className="text-primary fw-bold mb-0">{Math.floor(Math.random() * 100)} follower</p>
            {post
              .filter((singlePost) => {
                return singlePost.user?._id === params.id;
              })
              .slice(-4)
              .map((el) => (
                <>
                  <p className="nameAttivitap">
                    <span className="fw-bold">
                      {el.user?.name} {el.user?.surname}{" "}
                    </span>
                    ha diffuso questo post • {el?.createdAt?.slice(0, -14)} {el?.createdAt?.slice(11, 16)}
                  </p>
                  <div>
                    {el?.image ? (
                      <>
                        <p>{el?.text}</p>
                        <Image src={el?.image} style={{ width: "100%", aspectRatio: "1/1", objectFit: "contain" }} />
                      </>
                    ) : (
                      <>
                        <p>{el?.text}</p>
                        <Image src={el?.image} className="d-none" />
                      </>
                    )}
                  </div>
                  <Col className="LikeCommenti border-bottom my-4">
                    <p>{Math.floor(Math.random() * 100)} like</p>
                    <p>{Math.floor(Math.random() * 100)} commenti</p>
                  </Col>
                </>
              ))}

            <button className="ButtonMostraRisorse py-2">Mostra tutte le risorse</button>
          </Row>
        </Container>
      )}
    </>
  );
};
export default Attività;
