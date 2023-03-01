import { Card } from "react-bootstrap";
import { BsFillInfoSquareFill } from "react-icons/bs";

export const SectionRight = () => {
  return (
    <Card className="px-2 py-3">
      <div className="d-flex justify-content-between align-items-center">
        <h6 className="fw-bold text-black mb-0">Linkedin Notizie</h6>
        <BsFillInfoSquareFill style={{ width: "0.7em" }} />
      </div>
    </Card>
  );
};
