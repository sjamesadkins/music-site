import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import About from "../About/About.jsx";
import Media from "../Media/Media.jsx";
import Contact from "../Contact/Contact.jsx";
import sWaves from "/src/Assets/Images/sWaves.jpg";
import "./Nav.css";

const Navi = () => {

  // attempt to make page state remain -- does not work
//   let initialView = <About />;

    // const views = [
    //     {"about": <About />}, 
    //     {"media": <Media />}, 
    //     {"contact": <Contact />},
    // ];

        const views = {
        "about": <About />, 
        "media": <Media />, 
        "contact": <Contact />,
    };

    const [view, setView] = useState(views["about"]);

    const handleClick = (page) => {
        setView(views[page])
        // attempt to make page state remain -- does not work
    };

  return (
    <>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container fluid className="span">
            <Navbar.Brand href="#">
                <Image
                src={sWaves}
                roundedCircle
                width="auto"
                height="200"
                className="d-inline-block align-top"
                alt="Adkins Music Logo"
                onClick={() => handleClick("about")}
                />
            </Navbar.Brand>
            <Nav>
                {Object.entries(views).map(([k, v]) => {
                    return (<>
                    <Nav.Link 
                        key={k}
                        href={`#${v}`}
                        className="font-face-rumor-sm-nav"
                        id={`${k}`}
                        onClick={() => handleClick(k)}
                        >{k}
                    </Nav.Link>
                    &nsbp&nsbp
                    </>
                    )})}
            </Nav>
            <Navbar.Text className="font-face-rumor-lg">Fiction</Navbar.Text>
            </Container>
        </Navbar>
      <div>{view}</div>
    </>
  );
};

export default Navi;
