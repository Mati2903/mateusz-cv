import React from "react";
import {Navbar, Nav} from "react-bootstrap";

const year = new Date().getFullYear();

function Footer () {
    return (
        
        <Navbar  bg="dark" expand="lg">
            <Nav  className=" text-light mx-auto pt-2 font-weight-light" >Copyright © {year} Mateusz Mazurek</Nav>
        </Navbar>

    );
}

export default Footer;