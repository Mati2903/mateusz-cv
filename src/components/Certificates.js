import React from "react";
import {Container} from "react-bootstrap";

function Certificates () {
    return (
        <div style={{position: "relative"}}>
        <Container fluid id="certificates" style={{minHeight: "100vh", position: "center"}}>
            <h1 className="text-light display-4 font-weight-bold" style={{textAlign: "center", paddingTop: "13vh", paddingBottom: "3%", fontSize: "10vw"}}>Certyfikaty i uprawnienia</h1>
            
            <ul className="text-light h3" style={{listStyle: "none"}}>
                <li style={{paddingBottom: "2%"}}><img src="/images/plugin.svg" style={{width: "3rem", marginRight: "0.7rem"}} alt="Ikona pioruna"/> Uprawnienia elektryczne SEP D+E</li>
                <li style={{paddingBottom: "2%"}}><img src="/images/check.svg" style={{width: "3rem", marginRight: "0.7rem"}} alt="Ikona checklisty z autem"/> Uprawnienia diagnosty samochodowego</li>
                <li style={{paddingBottom: "2%"}}><img src="/images/online-course.svg" style={{width: "3rem", marginRight: "0.7rem"}} alt="Ikona kursu online"/> Certyfikat ukończenia kursu „The Complete 2021 Web Development Bootcamp” na platformie Udemy</li>
                <li style={{paddingBottom: "2%"}}><img src="/images/driver-license.svg" style={{width: "3rem", marginRight: "0.7rem"}} alt="Ikona prawa jazdy"/> Prawo jazdy kat. B</li>
                <li style={{paddingBottom: "2%"}}><img src="/images/globe.svg" style={{width: "3rem", marginRight: "0.7rem"}} alt="Ikona języków"/> Język angielski - poziom B2</li>
            </ul>
        </Container>
        <hr style={{position: "absolute", top: "100%", bottom: "0", width: "100%", height: "1px", backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))" }}/>
        </div>
    );
}

export default Certificates;