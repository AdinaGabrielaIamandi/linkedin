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
            <Link
              key={elemento._id}
              to={"/profile/" + elemento._id}
              onClick={() => {}}
            >
              <div className="d-flex px-3 py-2 align-items-center">
                <img
                  src={elemento.image}
                  alt="immagine non disponibile"
                  style={{ width: "50px", height: "50px" }}
                  className="rounded-circle"
                ></img>
                <div className="d-flex">
                  <p className="ms-3 mb-0 fw-bold">
                    {elemento.name} {elemento.surname}
                  </p>
                </div>
                <div style={{ width: "190px" }}>
                  <p className="text-truncate mb-0 ms-4">{elemento.title}</p>
                </div>
              </div>
            </Link>
          </>
        ))}
      </Modal>
    </>
  );
};
export default ModalNavbar;
