import { Nav, Navbar, NavDropdown, Form, Image } from "react-bootstrap";
import "./navbar.scss";
import {
  FaSearch,
  FaHome,
  FaUserFriends,
  FaBell,
  FaUserAlt,
} from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { RiMessage3Fill } from "react-icons/ri";
import { CgMenuGridR } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllProfilesAction } from "../../redux/action";
import Logo from "../../images/logo.png";
import { useEffect } from "react";

export const NavbarTop = () => {
  const dispatch = useDispatch();
  const allUsersList = useSelector((state) => state.allProfiles);

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(getAllProfilesAction());

    await getIDByName(event.target.firstName.value);
  };

  const getIDByName = (input) => {
    let internalStateProva;
    console.log("allUsersLists", allUsersList);
    console.log("input", input);
    allUsersList.map((user, index, arr) => {
      if (input.toString().toUpperCase() === user.name.toString().toUpperCase())
        console.log(input, "===", user.name, "ID===", user._id);
      internalStateProva = user._id;
    });
  };

  useEffect(() => {
    // Update the document title using the browser API
    dispatch(getAllProfilesAction());
  }, []);

  return (
    <Navbar
      bg="white"
      expand="lg"
      className="d-flex justify-content-center p-0 mb-4"
    >
      <div className="d-flex justify-content-start">
        <Image src={Logo} className="logoNav" alt="linkedin logo" />
        <Form
          className="ms-2 search d-flex d-md-none d-lg-flex"
          onSubmit={handleSubmit}
        >
          <Form.Control
            type="search"
            placeholder={`🔍 Cerca`}
            className="me-5"
            aria-label="Search"
            id="firstName"
            name="firstName"
          />
        </Form>
      </div>

      <Nav
        className="d-flex flex-row justify-content-between align-items-center"
        style={{ maxHeight: "100px" }}
      >
        <div className="d-none d-md-flex flex-column d-lg-none align-items-center justify-content-center">
          <FaSearch className="icons-navbar" />
          <Nav.Link className="d-none d-lg-block text-icons">Cerca</Nav.Link>
        </div>
        <div className="d-none d-md-flex flex-column align-items-center justify-content-center text-secondary mx-2">
          <FaHome className="icons-navbar" />
          <Nav.Link href="#action1" className="d-none d-lg-block text-icons">
            Home
          </Nav.Link>
        </div>
        <div className="d-none d-md-flex flex-column align-items-center justify-content-center text-secondary mx-2">
          <FaUserFriends className="icons-navbar" />
          <Nav.Link href="#action2" className="d-none d-lg-block text-icons">
            Rete
          </Nav.Link>
        </div>
        <div className="d-none d-md-flex flex-column align-items-center justify-content-center text-secondary mx-2">
          <MdWork className="icons-navbar" />
          <Nav.Link href="#action2" className="d-none d-lg-block text-icons">
            Lavoro
          </Nav.Link>
        </div>
        <div className="d-none d-md-flex flex-column align-items-center justify-content-center text-secondary mx-2">
          <RiMessage3Fill className="icons-navbar" />
          <Nav.Link href="#action2" className="d-none d-lg-block text-icons">
            Messaggistica
          </Nav.Link>
        </div>
        <div className="d-none d-md-flex flex-column align-items-center justify-content-center text-secondary mx-2">
          <FaBell className="icons-navbar" />
          <Nav.Link href="#action2" className="d-none d-lg-block text-icons">
            Notifiche
          </Nav.Link>
        </div>
        <div className="d-none d-md-flex flex-column align-items-center justify-content-center border-end text-secondary px-2">
          <FaUserAlt className="icons-navbar" />
          <NavDropdown
            title="Tu"
            id="navbarScrollingDropdown"
            className="text-icons m-0 p-0"
          >
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
        </div>
        <div className="d-none d-md-flex flex-column align-items-center justify-content-center text-secondary mx-2">
          <CgMenuGridR className="icons-navbar" />
          <NavDropdown
            title="Lavoro"
            id="navbarScrollingDropdown"
            className="text-icons"
          >
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
        </div>
        <Link to="/" className="premium">
          Prova Premium gratis
        </Link>
      </Nav>
    </Navbar>
  );
};
