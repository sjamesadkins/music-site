import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import About from "../About/About.jsx";
import Media from "../Media/Media.jsx";
import Contact from "../Contact/Contact.jsx";
import laurels from "/src/Assets/Images/laurels.jpg";

import "./Nav.css";

const Navi = () => {

        const views = {
        "about": <About />, 
        "media": <Media />, 
        "contact": <Contact />,
    };

    const [view, setView] = useState(views["about"]);

    const handleClick = (page) => {
        setView(views[page])
    };

  return (
    <>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container fluid className="span">
            <Navbar.Brand href="#">
                <Image
                src={laurels}
                roundedCircle
                width="auto"
                height="200"
                className="d-inline-block align-top"
                alt="Adkins Music Logo"
                onClick={() => handleClick("about")}
                />
            </Navbar.Brand>
            <Nav>
                {Object.entries(views).map(([k], index) => {
                    return (<div key={index}>
                    <Nav.Link 
                        href={`#${k}`}
                        className="font-face-rumor-sm-nav"
                        onClick={() => handleClick(k)}
                        >{k}
                    </Nav.Link>
                    &nsbp&nsbp&nsbp&nsbp
                    </div>
                    )})}
            </Nav>
            <Navbar.Text className="font-face-rumor-lg">Laurels</Navbar.Text>
            </Container>
        </Navbar>
      <div>{view}</div>
    </>
  );
};

export default Navi;
