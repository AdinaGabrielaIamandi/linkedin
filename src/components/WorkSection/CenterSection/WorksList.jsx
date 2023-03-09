import { Card, Form } from "react-bootstrap";
import { BsFillBookmarkFill } from "react-icons/bs";
import { BiRadar } from "react-icons/bi";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListWorkAction } from "../../../redux/action";

export const WorksList = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const findJobs = useSelector((state) => state.linkedin.jobs);
  console.log(findJobs);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getListWorkAction(query));
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
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
                      {el?.publication_date} ore fa
                    </p>
                  </div>
                </div>

                <div>
                  <BsFillBookmarkFill
                    style={{ color: "#666666", fontSize: "1.2em" }}
                  />
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
