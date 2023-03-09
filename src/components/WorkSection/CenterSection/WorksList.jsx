import { Card } from "react-bootstrap";
import { BsFillBookmarkFill } from "react-icons/bs";
import { BiRadar } from "react-icons/bi";

export const WorksList = () => {
  return (
    <Card className="mt-2 allCards p-3">
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <img
            style={{ width: "56px", height: "56px" }}
            src="https://www.linekit.com/wp-content/uploads/2022/08/home_04Ago2022-scaled.jpg"
            alt=""
          />
          <div className="d-flex flex-column ms-3">
            <p className="mb-0 text-primary fw-bold">Nome Lavoro</p>
            <p className="mb-0 text-dark">Società</p>
            <p style={{ fontSize: "0.9em" }} className="mb-0">
              Luogo
            </p>
            <p
              style={{ fontSize: "0.8em" }}
              className="mb-0 mt-1 d-flex align-items-center"
            >
              <BiRadar
                style={{ fontSize: "1.6em" }}
                className="me-1 text-success"
              />
              Selezione attiva
            </p>
            <p
              style={{ fontSize: "0.8em" }}
              className="text-success fw-bold mt-2"
            >
              {Math.floor(Math.random() * 24)} ore fa
            </p>
          </div>
        </div>

        <div>
          <BsFillBookmarkFill style={{ color: "#666666", fontSize: "1.2em" }} />
        </div>
      </div>
      <hr />
    </Card>
  );
};
