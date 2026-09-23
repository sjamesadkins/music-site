import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useEffect, useState } from "react";
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

    const getPageFromHash = () => {
      const page = window.location.hash.slice(1).toLowerCase();
      return Object.hasOwn(pages, page) ? page : "about";
    };

    const [currentPage, setCurrentPage] = useState(getPageFromHash);

    useEffect(() => {
      const updatePageFromHash = () => setCurrentPage(getPageFromHash());
      window.addEventListener("hashchange", updatePageFromHash);
      return () => window.removeEventListener("hashchange", updatePageFromHash);
    }, []);

  return (
    <>
        <Navbar className="site-header">
          <Navbar.Brand className="brand-lockup">
            <div className="brand-logo-frame">
              <Image
                src={silvertonesLogo}
                alt="The Silvertones logo"
                className="brand-logo"
              />
            </div>
            <Navbar.Text className="font-face-rumor-lg silver-gradient">
              The Silvertones
            </Navbar.Text>
          </Navbar.Brand>
        </Navbar>
        <Navbar>
          <Nav>
            {Object.keys(pages).map((k, index) => (
              <div key={index} className="nav-link-wrapper">
                <Nav.Link
                  href={`#${k}`}
                  className="font-face-rumor-sm-nav"
                  active={currentPage === k}
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
