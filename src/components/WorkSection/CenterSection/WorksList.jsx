import { Card, Form } from "react-bootstrap";
import { BsFillBookmarkFill } from "react-icons/bs";
import { BiRadar } from "react-icons/bi";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addJobs, getListWorkAction, removeJobs } from "../../../redux/action";

export const WorksList = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const findJobs = useSelector((state) => state.linkedin.jobs);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getListWorkAction(query));
  };

  const favJobs = useSelector((state) => state.linkedin.favJobs);
  console.log(favJobs);
  const isFav = favJobs?.includes(findJobs?.data?.company_name);
  console.log(isFav);

  return (
    <>
      <Form className="mt-2" onSubmit={handleSubmit}>
        <Form.Control type="search" value={query} onChange={handleChange} />
      </Form>
      <Card className="mt-2 allCards p-3">
        {findJobs?.data?.map((el) => {
          return (
            <>
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <img
                    style={{ width: "56px", height: "56px" }}
                    src="https://www.linekit.com/wp-content/uploads/2022/08/home_04Ago2022-scaled.jpg"
                    alt=""
                  />
                  <div className="d-flex flex-column ms-3">
                    <p className="mb-0 text-primary fw-bold">{el?.title}</p>
                    <p className="mb-0 text-dark">{el?.company_name}</p>
                    <p style={{ fontSize: "0.9em" }} className="mb-0">
                      {el?.candidate_required_location}
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
                      {el?.publication_date
                        .slice(0, -14)
                        .split("-")
                        .reverse()
                        .join("-")}{" "}
                    </p>
                  </div>
                </div>

                <div>
                  {isFav ? (
                    <BsFillBookmarkFill
                      style={{ color: "gold", fontSize: "1.2em" }}
                      onClick={() => dispatch(removeJobs(el?.company_name))}
                    />
                  ) : (
                    <BsFillBookmarkFill
                      style={{ color: "#666666", fontSize: "1.2em" }}
                      onClick={() => dispatch(addJobs(el?.company_name))}
                    />
                  )}
                </div>
              </div>
              <hr />
            </>
          );
        })}
      </Card>
    </>
  );
};
