import { BsFillBookmarkFill } from "react-icons/bs";
import { BiRadar } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { removeJobs, addJobs } from "../../../redux/action";

export const SingleJob = ({ data }) => {
  const dispatch = useDispatch();
  const favJobs = useSelector((state) => state.linkedin.favJobs);
  const isFav = favJobs?.includes(data?.category);
  console.log(isFav);
  console.log(favJobs);

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
            <p className="mb-0 text-primary fw-bold">{data.title}</p>
            <p className="mb-0 text-dark">{data.company_name}</p>
            <p style={{ fontSize: "0.9em" }} className="mb-0">
              {data.candidate_required_location}
            </p>
            <p style={{ fontSize: "0.8em" }} className="mb-0 mt-1 d-flex align-items-center">
              <BiRadar style={{ fontSize: "1.6em" }} className="me-1 text-success" />
              Selezione attiva
            </p>
            <p style={{ fontSize: "0.8em" }} className="text-success fw-bold mt-2">
              {data.publication_date} ore fa
            </p>
          </div>
        </div>

        <div>
          {isFav ? (
            <BsFillBookmarkFill
              style={{ color: "gold", fontSize: "1.2em" }}
              onClick={() => dispatch(removeJobs(data.category))}
            />
          ) : (
            <BsFillBookmarkFill
              style={{ color: "#666666", fontSize: "1.2em" }}
              onClick={() => dispatch(addJobs(data.category))}
            />
          )}
        </div>
      </div>
      <hr />
    </>
  );
};
