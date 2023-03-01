import { BsFillInfoSquareFill } from "react-icons/bs";
import { HiPlus } from "react-icons/hi";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./firstCard.scss";
import { useDispatch, useSelector } from "react-redux";
import { putFirstPageAction, PUT_PROFILE } from "../../redux/action";
import "./Modale.scss";

const Modale = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);

  const [profileInternal, setProfileInternal] = useState(profile);

  /*   useEffect(() => {
    dispatch(putFirstPageAction(props.id));
  }, []); */

  console.log("edit profile", profile);

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">Modifica introduzione</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modale">
        <p style={{ fontSize: "0.8em" }}>*Indica che è obbligatorio</p>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nome*</Form.Label>
            <Form.Control
              className="ModalFormControl"
              placeholder={profileInternal.name}
              type="text"
              autoFocus
              onChange={(e) => {
                setProfileInternal((prev) => ({ ...prev, name: e.target.value }));
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Cognome*</Form.Label>
            <Form.Control
              className="ModalFormControl"
              type="text"
              autoFocus
              onChange={(e) => {
                setProfileInternal((prev) => ({ ...prev, surname: e.target.value }));
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nome aggiuntivo*</Form.Label>
            <Form.Control className="ModalFormControl" type="text" autoFocus />
          </Form.Group>
          <p style={{ fontSize: "0.8em" }}>Pronuncia del nome</p>
          <p style={{ fontSize: "0.8em", color: "#1f1f1f" }}>
            <BsFillInfoSquareFill /> Può essere aggiunta solo usando la nostra app per dispositivi mobili
          </p>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Inserisci i pronomi personalizzati</Form.Label>
            <Form.Control className="ModalFormControl" type="text" autoFocus />
            <p style={{ fontSize: "0.8em" }}>
              Indica i pronomi di genere che vuoi che gli altri usino per riferirsi a te.
            </p>
          </Form.Group>
          <p>
            Scopri di più sui <span className="ModalSpan">pronomi di genere</span>
          </p>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Sommario*</Form.Label>
            <Form.Control
              className="ModalFormControl"
              type="text"
              autoFocus
              onChange={(e) => {
                setProfileInternal((prev) => ({ ...prev, bio: e.target.value }));
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <p style={{ fontSize: "1.3em", color: "black" }}>Posizione attuale</p>
            <Form.Label style={{ color: "#1f1f1f" }}>Posizione lavorativa*</Form.Label>
            <Form.Select className="ModalFormControl" aria-label="Default select example" type="text" autoFocus>
              <option value="3">Seleziona</option>
            </Form.Select>
          </Form.Group>
          <p>
            <Button className="ModalButton">
              <HiPlus /> Aggiungi una nuova posizione lavorativa
            </Button>
          </p>
          <form className="d-flex align-items-center">
            <input type="checkbox" id="check" hidden />
            <label for="check" className="checkmark"></label>
            <label>Mostra l’azienda attuale nella mia presentazione</label>
          </form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <p>Settore*</p>
            <Form.Control
              className="ModalFormControl"
              type="text"
              autoFocus
              onChange={(e) => {
                setProfileInternal((prev) => ({ ...prev, title: e.target.value }));
              }}
            />
          </Form.Group>
          <p>
            Scopri di più sulle <span className="ModalSpan">opzioni relative al settore</span>
          </p>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <p style={{ fontSize: "1.3em", color: "black" }}>Formazione</p>
            <p>Formazione*</p>

            <Form.Select className="ModalFormControl" aria-label="Default select example" type="text" autoFocus>
              <option value="3">Seleziona</option>
            </Form.Select>
          </Form.Group>
          <p>
            <Button className="ModalButton">
              <HiPlus /> Aggiungi un nuovo grado di formazione
            </Button>
          </p>
          <p>
            <input type="checkbox" /> Mostra la formazione nella mia presentazione
          </p>
          <p style={{ fontSize: "1.3em", color: "black" }}>Località</p>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <p>Paese/Area geografica*</p>
            <Form.Control className="ModalFormControl" type="text" autoFocus />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <p>CAP*</p>
            <Form.Control className="ModalFormControl" type="text" autoFocus />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <p>Città*</p>
            <Form.Control
              className="ModalFormControl"
              type="text"
              autoFocus
              onChange={(e) => {
                setProfileInternal((prev) => ({ ...prev, area: e.target.value }));
              }}
            />
          </Form.Group>
          <p style={{ fontSize: "1.3em", color: "black" }}>Informazioni di contatto</p>
          <p>Aggiungi o modifica il tuo profilo URL, indirizzo email e altro</p>
          <Button className="LastModalButton">Modifica le informazioni di contatto</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          style={{ borderRadius: "5em", width: "5em" }}
          variant="primary"
          onClick={() => {
            /*dispatch({
              type: "PUT_PROFILE",
              payload: profileInternal,
            });*/
            dispatch(putFirstPageAction(profileInternal));
          }}
        >
          Salva
        </Button>
      </Modal.Footer>
    </>
  );
};

export default Modale;
