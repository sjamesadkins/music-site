import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";

import About from "../About/About.jsx";
import Music from "../Music/Music.jsx";
import Videos from "../Videos/Videos.jsx";
import Photos from "../Photos/Photos.jsx";
import Contact from "../Contact/Contact.jsx";

import logo from "/src/Assets/Images/logo.jpg";
import "./Navigator.css";

const Navigator = () => {

  // attempt to make page state remain -- does not work
  let initialView = <About />;

  const [view, setView] = useState(initialView);

  const views = {
    "about": <About />, 
    "music": <Music />, 
    "videos": <Videos />, 
    "photos": <Photos />, 
    "contact": <Contact />,
  }

  const handleClick = (view) => {
    setView(views[view])
    // attempt to make page state remain -- does not work
    initialView = views[view];
  }

  return (
    <>
      <Navbar expand={false} variant="dark" collapseOnSelect>
        <Container fluid className="span">
          <Navbar.Brand href="#">
            <Image
              src={logo}
              roundedCircle
              width="200"
              height="200"
              className="d-inline-block align-top"
              alt="Adkins Music Logo"
              onClick={() => handleClick("about")}
            />
          </Navbar.Brand>
          <Navbar.Text className="font-face-rumor-lg">Sam Adkins</Navbar.Text>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand`}
            aria-labelledby={`offcanvasNavbarLabel-expand`}
            placement="end"
            style={{ background: "black", width: "300px" }}
          >
            <Offcanvas.Header closeButton closeVariant="white" >
              <Offcanvas.Title
                className="font-face-rumor-lg"
                style={{ fontSize: "200%" }}
                id={`offcanvasNavbarLabel-expand`}
              >
                Discover
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body style={{ background: "#b3cccc" }}>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link
                  className="font-face-rumor-sm"
                  href="#about"
                  id="about"
                  onClick={() => handleClick("about")}
                >
                  About
                </Nav.Link>
                <Nav.Link 
                  className="font-face-rumor-sm"
                  href="#music"
                  id="music"
                  onClick={() => handleClick("music")}
                >
                  Music
                </Nav.Link>
                <Nav.Link
                  className="font-face-rumor-sm"
                  href="#videos"
                  id="videos"
                  onClick={() => handleClick("videos")}
                >
                  Videos
                </Nav.Link>
                <Nav.Link
                  className="font-face-rumor-sm"
                  href="#photos"
                  id="photos"
                  onClick={() => handleClick("photos")}
                >
                  Photos
                </Nav.Link>
                <Nav.Link
                  className="font-face-rumor-sm"
                  href="#contact"
                  id="contact"
                  onClick={() => handleClick("contact")}
                >
                  Contact
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <div>{view}</div>
    </>
  );
};

export default Navigator;
