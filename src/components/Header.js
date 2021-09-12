import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import {Link} from "react-scroll";

function Header() { 

    return (
      
        <Navbar collapseOnSelect fixed="top" expand="xl" bg="dark" variant="dark" >
          <Navbar.Brand href="#">
                <img 
                  src="images/CVlogo.png"
                  alt="Logo CV"
                  width="50"
                  height="50"
                  className="d-inline-block align-center ml-3"
                />{" "}
                <h4 style={{display: "inline"}} className="font-weight-bold ml-2">Mateusz Mazurek</h4>
            </Navbar.Brand>

            <Navbar.Toggle className="custom-menu" aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto font-weight-bold">
                <Link to="education" smooth={true} duration={500}>
                  <Nav.Link href="#education" className="ml-3 active link" >Wykształcenie</Nav.Link>
                </Link>
                <Link to="experience" smooth={true} duration= {500}>
                  <Nav.Link href="#experience" className="ml-3 active link">Doświadczenie</Nav.Link>
                </Link>
                <Link to="skills" smooth={true} duration= {500}>
                  <Nav.Link href="#skills" className="ml-3 active link">Umiejętności</Nav.Link>
                </Link>
                <Link to="certificates" smooth={true} duration= {500}>
                  <Nav.Link href="#certificates" className="ml-3 active link">Certyfikaty i uprawnienia</Nav.Link>
                </Link>
                  <Link to="hobby" smooth={true} duration= {500}>
                  <Nav.Link href="#hobby" className="ml-3 active link">Zainteresowania</Nav.Link>
                </Link>
                <Link to="contact" smooth={true} duration= {500}>
                  <Nav.Link href="#contact" className="ml-3 active link">Kontakt</Nav.Link>
                </Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
      
    );
}

export default Header;