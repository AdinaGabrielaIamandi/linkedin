import "./sectionRight.scss";
import { Card } from "react-bootstrap";
import { BsFillInfoSquareFill } from "react-icons/bs";

export const SectionRight = () => {
  return (
    <>
      <Card className="py-4 px-3 d-none d-md-block">
        <div className="d-flex justify-content-between align-items-center">
          <h6 className="fw-bold text-black mb-0">Linkedin Notizie</h6>
          <BsFillInfoSquareFill style={{ width: "0.7em" }} />
        </div>
        <div className="mt-2">
          <ul className="ps-3">
            <div>
              <li className="fw-bold text-dark">
                Meno negozi, più ristoranti e B&B
              </li>
              <p className="mb-2">18 ore fa</p>
            </div>
            <div>
              <li className="fw-bold text-dark">
                Oltre il nuovo logo di Nokia
              </li>
              <p className="mb-2">14 ore fa</p>
            </div>
            <div>
              <li className="fw-bold text-dark">
                Viva il dissenso costruttivo
              </li>
              <p className="mb-2">6 ore fa</p>
            </div>
            <div>
              <li className="fw-bold text-dark">
                Cosa cambia della giustizia civile
              </li>
              <p className="mb-2">1 ore fa</p>
            </div>
            <div>
              <li className="fw-bold text-dark">Un'azienda scomoda sul CV</li>
              <p className="mb-2">19 ore fa</p>
            </div>
          </ul>
        </div>
      </Card>
      <Card className="mt-2 d-none d-lg-block">
        <img
          src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
          alt=""
        />
      </Card>
    </>
  );
};
