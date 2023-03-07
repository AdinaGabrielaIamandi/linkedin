import { Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const MyFriends = () => {
  const allFriends = useSelector((state) => state.linkedin.allfriends);

  return (
    <Container fluid className="allCards companies p-4 mt-3">
      <h5>I tuoi amici {allFriends ? allFriends.length : 0}</h5>
      {allFriends?.map((obj) => (
        <>
          <div className="d-flex align-items-center mt-4">
            <div>
              <img className="portrait" src={obj.image} alt="" />
            </div>
            <div className="ms-3">
              <h6 className="fw-bold mb-0">
                {obj.name} {obj.surname}
              </h6>
              <p className="job mb-0">{obj.work}</p>
            </div>
          </div>

          <hr className="line mt-4" />
        </>
      ))}
    </Container>
  );
};
export default MyFriends;
