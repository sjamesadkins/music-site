import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import adkinsLogo from "/src/Assets/Images/adkinsLogo.jpg";
import "./Navigator.css";

const Navigator = () => {
  return (
  <>
    <Navbar expand={false} variant="dark">
      <Container fluid className="span" >
        <Navbar.Brand href="#">
          <Image
          src={adkinsLogo}
          roundedCircle
          width="200"
          height="200"
          className="d-inline-block align-top"
          alt="Adkins Music Logo"
        />
        </Navbar.Brand>
        {/* TODO: FIGURE OUT USING CUSTOM FONTS */}
        <Navbar.Text className="font-face-rumor" >Sam Adkins</Navbar.Text>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand`}
          aria-labelledby={`offcanvasNavbarLabel-expand`}
          placement="end"
          style={{ background: "black" }}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title style={{ color: "white" }} id={`offcanvasNavbarLabel-expand`}>
              Discover
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body style={{ background: "#b3cccc" }} >
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1" >About</Nav.Link>
              <Nav.Link href="#action2" >Music</Nav.Link>
              <Nav.Link href="#action2" >Videos</Nav.Link>
              <Nav.Link href="#action2" >Photos</Nav.Link>
              <Nav.Link href="#action2" >Contact</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  </>
  );
};

export default Navigator;
