import "./Learning.css";
import { Container } from "react-bootstrap";

export const Learning = () => {
  return (
    <Container fluid className="allCards mt-2 py-4 px-3">
      <div className="d-flex">
        <img
          id="linkedinImg"
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt=""
        />
        <p className="learning ms-2 mb-2">LEARNING</p>
      </div>
      <div>
        <p className="competenze">
          Aggiungi nuove competenze con questi corsi, gratuiti per 24 ore
        </p>
      </div>
      <div className="d-flex align-items-center">
        <img
          className="videoImg"
          src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/RE2wSVH_RE4dchU:VP1-539x349?resMode=sharp2&op_usm=1.5,0.65,15,0&qlt=75"
          alt=""
        />
        <p className="text-video text-truncate ms-2 fw-bold">
          Come fissare gli <br /> obbiettivi quando tutto sembra una...
        </p>
      </div>
      <hr className="line" />
      <div className="d-flex align-items-center mt-3">
        <img
          className="videoImg"
          src="https://nonsolopedagogia.it/wp-content/uploads/2019/04/comunicazione-funzionale.jpg"
          alt=""
        />
        <p className="text-video text-truncate ms-2 fw-bold">
          Comunica con carisma
        </p>
      </div>
      <hr className="line" />
      <div className="d-flex align-items-center mt-3">
        <img
          className="videoImg"
          src="https://www.bitmat.it/wp-content/uploads/2022/06/manager.jpg"
          alt=""
        />
        <p className="text-video text-truncate ms-2 fw-bold">
          Essere il manager <br /> che le persone non vorranno avere
        </p>
      </div>
    </Container>
  );
};
