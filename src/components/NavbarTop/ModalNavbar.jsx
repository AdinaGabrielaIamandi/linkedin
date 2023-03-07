import { Dropdown, Modal } from "react-bootstrap";
import { useState } from "react";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ModalNavbar = (props) => {
  const handleClose = () => {
    props.setShowFunction(false);
  };
  const navigate = useNavigate();
  return (
    <>
      <Modal show={props.showModal} onHide={handleClose}>
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic"></Dropdown.Toggle>
          <Dropdown.Menu className="p-3">
            {props.profilesSearched?.map((elemento) => (
              <Dropdown.Item>{elemento._id}</Dropdown.Item>
            ))}
            {console.log(
              "PROFILES SEARCHED MODAL NAVBAR",
              props.profilesSearched
            )}
          </Dropdown.Menu>
        </Dropdown>

        {props.profilesSearched?.map((elemento) => (
          <>
            <Link to={"/profile/" + elemento._id} onClick={() => {}}>
              <div className="d-flex justify-content-between">
                <p>
                  <strong>
                    {elemento.name} {elemento.surname}
                  </strong>{" "}
                  {elemento.email}
                </p>
                <img
                  src={elemento.image}
                  alt="immagine non disponibile"
                  width="50"
                  height="50"
                ></img>
              </div>
            </Link>
          </>
        ))}
      </Modal>
    </>
  );
};
export default ModalNavbar;
