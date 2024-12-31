import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import About from "../About/About.jsx";
import Media from "../Media/Media.jsx";
import Contact from "../Contact/Contact.jsx";
import skull from "/src/Assets/Images/skull.jpg";

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
                width="auto"
                height="250"
                style={{marginRight: "0", marginTop: "30%" }}
                alt="Laurels Logo"
                />
            </Navbar.Brand>
        </Navbar>
        <Navbar>
          <Navbar.Text className="font-face-rumor-lg">Laurels</Navbar.Text>
        </Navbar>
        <Navbar>
          <Nav>
            {Object.entries(pages).map(([k], index) => {
                return (
                <div>
                <Nav.Link 
                    key={index}
                    href={`#${k}`}
                    className={"font-face-rumor-sm-nav"}
                    onClick={() => handleClick(k)}
                    >{k}
                </Nav.Link>
                &nsbp$nsbp&nsbp
                </div>                    
                )})}
          </Nav>
        </Navbar>
      <div>{view}</div>
    </>
  );
};

export default Navi;
