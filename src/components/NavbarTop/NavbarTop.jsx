import { Nav, Navbar, NavDropdown, Form, Image, Button } from "react-bootstrap";
import "./navbar.scss";
import { FaSearch, FaHome, FaUserFriends, FaBell } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { RiMessage3Fill } from "react-icons/ri";
import { CgMenuGridR } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllProfilesAction } from "../../redux/action";
import Logo from "../../images/logo.png";
import { useEffect, useState } from "react";
import ModalNavbar from "./ModalNavbar";
import { getMyProfileAction } from "./../../redux/action/index";

export const NavbarTop = () => {
  const dispatch = useDispatch();
  const goHome = useNavigate();
  const allUsersList = useSelector((state) => state.linkedin.allProfiles);
  const myProfile = useSelector((state) => state.linkedin.myProfile);
  const [profilesSearched, setProfilesSearched] = useState();
  const [showModal, setShowModal] = useState(false);
  const setShowFunction = (el) => {
    setShowModal(el);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(getAllProfilesAction());
    await getIDByName(event.target.firstName.value);
  };

  const getIDByName = (input) => {
    setProfilesSearched(
      allUsersList
        .filter((user) => input.toString().toUpperCase() === user.name.toString().toUpperCase())
        .map((elemento) => elemento)
    );

    setShowModal(true);
  };

  useEffect(() => {
    // Update the document title using the browser API
    dispatch(getAllProfilesAction());
    dispatch(getMyProfileAction());
  }, []);

  return (
    <>
      <Navbar bg="white" expand="lg" className="d-flex justify-content-center p-0 mb-4 flex-sm-nowrap">
        <div className="d-flex justify-content-start align-items-center me-lg-5">
          <AiOutlineArrowLeft className="icons-navbar d-flex d-md-none" onClick={() => goHome("/")} />
          <Image
            onClick={() => {
              goHome("/");
            }}
            src={Logo}
            style={{ cursor: "pointer" }}
            className="logoNav d-none d-md-flex"
            alt="linkedin logo"
          />
          <Form className="ms-1 search d-flex d-md-none d-lg-flex" onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              placeholder="Cerca"
              className="me-lg-5"
              aria-label="Search"
              id="firstName"
              name="firstName"
            />
          </Form>
        </div>
        <Nav
          className="d-flex flex-row justify-content-between align-items-center ms-md-5 me-md-4"
          style={{ maxHeight: "100px" }}
        >
          <div className="d-none d-md-flex flex-column d-lg-none align-items-center justify-content-center">
            <FaSearch className="icons-navbar me-4" />
            <Nav.Link className="d-none d-lg-block text-icons">Cerca</Nav.Link>
          </div>
          <div
            onClick={() => {
              goHome("/");
            }}
            className="d-none d-md-flex flex-column align-items-center justify-content-center text-secondary me-4"
          >
            <FaHome className="icons-navbar" />
            <Nav.Link className="d-none d-lg-block text-icons">Home</Nav.Link>
          </div>
          <div className="d-none d-md-flex flex-column align-items-center justify-content-center text-secondary me-4">
            <FaUserFriends className="icons-navbar" />
            <Nav.Link className="d-none d-lg-block text-icons">Rete</Nav.Link>
          </div>
          <div
            className="d-none d-md-flex flex-column align-items-center justify-content-center text-secondary me-4"
            onClick={() => {
              goHome("/work");
            }}
          >
            <MdWork className="icons-navbar" />
            <Nav.Link className="d-none d-lg-block text-icons">Lavoro</Nav.Link>
          </div>
          <div className="d-none d-md-flex flex-column align-items-center justify-content-center text-secondary me-4">
            <RiMessage3Fill className="icons-navbar" />
            <Nav.Link className="d-none d-lg-block text-icons">Messaggistica</Nav.Link>
          </div>
          <div className="d-none d-md-flex flex-column align-items-center justify-content-center text-secondary me-4">
            <FaBell className="icons-navbar" />
            <Nav.Link className="d-none d-lg-block text-icons">Notifiche</Nav.Link>
          </div>
          <div className="d-none d-md-flex flex-column align-items-center justify-content-center border-end text-secondary me-4 pe-4">
            <Image src={myProfile?.image} className="rounded-circle" style={{ width: "25px", height: "25px" }} />
            <NavDropdown title="Tu" id="navbarScrollingDropdown" className="text-icons m-0 p-0">
              <div className="d-flex ms-3 mt-1 align-items-center">
                <Image src={myProfile?.image} className="rounded-circle" style={{ width: "50px", height: "50px" }} />
                <div>
                  <NavDropdown.Item className="text-decoration-none bg-transparent">
                    {myProfile?.name} {myProfile?.surname}
                  </NavDropdown.Item>
                  <NavDropdown.Item className="text-decoration-none bg-transparent">
                    <div style={{ width: "200px" }}>
                      <p className="text-truncate">{myProfile?.title}</p>
                    </div>
                  </NavDropdown.Item>
                </div>
              </div>
              <NavDropdown.Item className="text-decoration-none bg-transparent">
                <Link to="/profile/me" className="btn btn-primary cta2 cta3 fw-bold w-100">
                  Visualizza profilo
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <p className="fw-bold text-black ms-3 mb-0 titolo-nav">Account</p>
              <NavDropdown.Item className="text-decoration-none link3 fw-bold sottotitoli-nav bg-transparent">
                Prova Premium gratis
              </NavDropdown.Item>
              <NavDropdown.Item className="sottotitoli-nav bg-transparent">Impostazioni e privacy</NavDropdown.Item>
              <NavDropdown.Item className="sottotitoli-nav bg-transparent">Guida</NavDropdown.Item>
              <NavDropdown.Item className="sottotitoli-nav bg-transparent">Lingua</NavDropdown.Item>
              <NavDropdown.Divider />
              <p className="fw-bold text-black ms-3 mb-0 titolo-nav">Gestisci</p>
              <NavDropdown.Item className="sottotitoli-nav bg-transparent">Post e attivit??</NavDropdown.Item>
              <NavDropdown.Item className="sottotitoli-nav bg-transparent">Account per la pubbli...</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="sottotitoli-nav bg-transparent">Esci</NavDropdown.Item>
            </NavDropdown>
          </div>
          <div className="d-none d-md-flex flex-column align-items-center justify-content-center text-secondary me-4">
            <CgMenuGridR className="icons-navbar" />
            <NavDropdown title="Lavoro" id="navbarScrollingDropdown" className="text-icons m-0 p-0"></NavDropdown>
          </div>
          <Link to="/" className="premium text-decoration-underline d-none d-md-flex">
            Prova Premium gratis
          </Link>
          <Nav.Link className="d-flex d-md-none m-0">
            <IoMdSettings className="icons-navbar" />
          </Nav.Link>
        </Nav>
      </Navbar>
      <ModalNavbar setShowFunction={setShowFunction} showModal={showModal} profilesSearched={profilesSearched} />
    </>
  );
};
