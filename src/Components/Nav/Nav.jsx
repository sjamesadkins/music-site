import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import About from "../About/About.jsx";
import Media from "../Media/Media.jsx";
import Contact from "../Contact/Contact.jsx";
import skull from "/src/Assets/Images/silver_skull.png";

import "./Nav.css";

const Navi = () => {

      const pages = { 
        "about": <About />,
        "media": <Media />, 
        "contact": <Contact />,
    };

    const [view, setView] = useState(<About />);

    const handleClick = (page) => {
        setView(pages[page])
    };

  return (
    <>
        <Navbar>
            <Navbar.Brand>
                <Image
                src={skull}
                roundedCircle
                alt="The Silvertones logo"
                style={{ height: "clamp(120px, 25vw, 250px)", width: "auto" }}
                />
            </Navbar.Brand>
        </Navbar>
        <Navbar>
          <Navbar.Text className="font-face-rumor-lg silver-gradient">
            The<br className="mobile-only-break" /> Silvertones
          </Navbar.Text>
        </Navbar>
        <Navbar>
          <Nav>
            {Object.entries(pages).map(([k], index) => (
              <div key={index} className="nav-link-wrapper">
                <Nav.Link
                  href={`#${k}`}
                  className="font-face-rumor-sm-nav"
                  onClick={() => handleClick(k)}
                >{k}</Nav.Link>
              </div>
            ))}
          </Nav>
        </Navbar>
      <div>{view}</div>
    </>
  );
};

export default Navi;
