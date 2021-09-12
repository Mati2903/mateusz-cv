import React from "react";
import {Container, Row, Col} from "react-bootstrap";


function About () {
    return (
        <div style={{position: "relative"}}>
        <Container fluid style={{minHeight: "100vh", position: "center"}}>
            <h1 className="text-light display-4 font-weight-bold" style={{textAlign: "center", paddingTop: "13vh"}}>O mnie</h1>
            <Row>
                <Col className="justify text-center">
                    <img src="images/person.svg" alt="Moje zdjęcie" style={{width: "12.5rem", marginTop: "13vh", marginBottom: "15%"}}/>
                </Col>
                <Col md={8}>
                    <p className="justify text-left h4 text-light" style={{margin: "8% 15% 10% 3%"}}>
                        Jestem absolwentem Politechniki Lubelskiej na kierunku Elektrotechnika. Obecnie pracuję jako inżynier serwisu aparatury medycznej. <p></p>
                        Staram się łączyć pracę ze swoimi zainteresowaniami - elektroniką i programowaniem. Chętnie uczę się nowych rzeczy i nie lubię stagnacji zawodowej. <p></p>
                        Interesuje mnie tworzenie aplikacji internetowych oraz projektowanie i programowanie urządzeń elektronicznych. Lubię też motoryzację.
                    </p>
                </Col>
            </Row>
            
        </Container>
        <hr style={{position: "absolute",top: "100%", bottom: "0", width: "100%", height: "1px", backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))" }}/>
        </div>
     
    );
}

export default About;

