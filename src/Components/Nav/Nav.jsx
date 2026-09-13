import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import About from "../About/About.jsx";
import Media from "../Media/Media.jsx";
import Contact from "../Contact/Contact.jsx";
import silvertonesLogo from "/src/Assets/Images/silvertones-logo.webp";

import "./Nav.css";

const Navi = () => {

      const pages = { 
        "about": <About />,
        "media": <Media />, 
        "contact": <Contact />,
    };

    const [currentPage, setCurrentPage] = useState("about");

  return (
    <>
        <Navbar>
            <Navbar.Brand>
              <div className="brand-logo-frame">
                <Image
                src={silvertonesLogo}
                alt="The Silvertones logo"
                className="brand-logo"
                />
              </div>
            </Navbar.Brand>
        </Navbar>
        <Navbar>
          <Navbar.Text className="font-face-rumor-lg silver-gradient">
            The<br className="mobile-only-break" /> Silvertones
          </Navbar.Text>
        </Navbar>
        <Navbar>
          <Nav>
            {Object.keys(pages).map((k, index) => (
              <div key={index} className="nav-link-wrapper">
                <Nav.Link
                  href={`#${k}`}
                  className="font-face-rumor-sm-nav"
                  active={currentPage === k}
                  onClick={() => setCurrentPage(k)}
                >{k}</Nav.Link>
              </div>
            ))}
          </Nav>
        </Navbar>
      <div>{pages[currentPage]}</div>
    </>
  );
};

export default Navi;
