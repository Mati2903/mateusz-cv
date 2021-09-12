import React from "react";
import {Container, Row, Col, Card} from "react-bootstrap";



function Education() {

    return (
        <div style={{position: "relative"}}>
        <Container fluid id="education" style={{minHeight: "100vh", paddingTop: "13vh"}}>
        <h1 className="text-light display-4 font-weight-bold" style={{textAlign: "center"}}>Wykształcenie</h1>
            <Row>
                <Col md>
                    <Card className="mx-auto border-0 h-100 bg-transparent" style={{ width: "100%"}}>
                        <Card.Img className="mx-auto" style={{width: "40%", marginTop: "2rem"}} src="./images/Pollub-logo.png" />
                        <Card.Body style={{textAlign: "center"}} className="text-light">
                            <Card.Title><h3>Politechnika Lubelska</h3></Card.Title>
                            <Card.Text >
                            <h5>Studia na wydziale Elektrotechniki i Informatyki ukończone z tytułem magistra inżyniera elektrotechniki</h5>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md>
                    <Card className="mx-auto border-0 bg-transparent" style={{ width: "100%" }}>
                        <Card.Img className="mx-auto" style={{width: "40%", marginTop: "2rem"}} src="./images/ZSS-logo.png" />
                        <Card.Body style={{textAlign: "center"}} className="text-light">
                            <Card.Title><h3>Zespół Szkół Samochodowych w Lublinie</h3></Card.Title>
                            <Card.Text>
                                <h5>Nauka w technikum samochodowym zakończona uzyskaniem tytułu technika pojazdów samochodowych</h5>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row> 
           
        </Container>
        <hr style={{position: "absolute", top: "100%", bottom: "0", width: "100%", height: "1px", backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))" }}/>
        </div>
    );
}

export default Education;