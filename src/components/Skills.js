import React from "react";
import {Container} from "react-bootstrap";

function Skills () {
    return (
        <div style={{position: "relative"}}>
            <Container fluid id="skills" style={{minHeight: "100vh", position: "center"}}>
                <h1 className="text-light display-4 font-weight-bold" style={{textAlign: "center", paddingTop: "13vh", paddingBottom: "3%"}}>Umiejętności</h1>
                
                <ul className="text-light h3" style={{listStyle: "none"}}>
                    <li style={{paddingBottom: "1.5%"}}><img src="/images/computer.svg" style={{width: "3rem", marginRight: "0.7rem"}} alt="Ikona komputera"/> Obsługa komputera - system Windows/macOS; programy MS Office, Autodesk Eagle, Visual Studio Code</li>
                    <li style={{paddingBottom: "1.5%"}}><img src="/images/coding.svg" style={{width: "3rem", marginRight: "0.7rem"}} alt="Ikona kodu"/> Podstawowa znajomość języków HTML, CSS, JavaScript, C/C++ (Arduino, AVR, ARM)</li>
                    <li style={{paddingBottom: "1.5%"}}><img src="/images/framework.svg" style={{width: "3rem", marginRight: "0.7rem"}} alt="Ikona frameworku"/> Podstawowa znajomość Node.js (w tym express), React.js, mongoDB</li>
                    <li style={{paddingBottom: "1.5%"}}><img src="/images/multimeter.svg" style={{width: "3rem", marginRight: "0.7rem"}} alt="Ikona multimetru"/> Pomiary elektryczne, montaż/demontaż elementów wykonanych w technologii THT oraz SMT (w tym BGA)</li>
                    <li style={{paddingBottom: "1.5%"}}><img src="/images/oscilloscope.svg" style={{width: "3rem", marginRight: "0.7rem"}} alt="Ikona oscyloskopu"/> Diagnostyka i naprawa usterek w układach elektronicznych, obsługa miernika i oscyloskopu</li>
                    <li style={{paddingBottom: "1.5%"}}><img src="/images/circuit.svg" style={{width: "3rem", marginRight: "0.7rem"}} alt="Ikona układu elektronicznego"/> Czytanie schematów elektronicznych</li>
                    <li style={{paddingBottom: "1%"}}><img src="/images/car.svg" style={{width: "3rem", marginRight: "0.7rem"}} alt="Ikona auta"/> Diagnostyka komputerowa usterek w pojazdach, diagnostyka usterek mechanicznych i elektrycznych</li>
                    
                </ul>
            </Container>

            <hr style={{position: "absolute", top: "100%", bottom: "0vh", width: "100%", height: "1px", backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))" }}/>
        </div>
    );
}

export default Skills;