import React from "react";
import {Container, Carousel} from "react-bootstrap";

function Hobby () {

    return (
        <div style={{position: "relative"}}>
          <Container id="hobby" style={{minHeight: "100vh", position: "center"}}>
          <h1 className="text-light display-4 font-weight-bold" style={{textAlign: "center", paddingTop: "13vh", paddingBottom: "1%"}}>Zainteresowania</h1>
        
            <Carousel variant="dark">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="./images/PCBdesign.jpg"
                  alt="Slajd przedstawiający obwód drukowany"/>
                <Carousel.Caption><h3>Projektowanie układów elektronicznych</h3></Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="./images/Naprawa.jpg"
                  alt="Slajd przedstawiający lutowanie elektroniki"/>
                <Carousel.Caption><h3>Diagnostyka i naprawa elektroniki</h3></Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="./images/Program.jpg"
                  alt="Slajd przedstawiający kod na ekranie laptopa"/>
                <Carousel.Caption><h3>Tworzenie oprogramowania</h3></Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="./images/Movie.jpg"
                  alt="Slajd przedstawiający rzutnik"/>
                <Carousel.Caption><h3>Oglądanie filmów</h3></Carousel.Caption>
              </Carousel.Item>
            </Carousel>

          </Container>
          <hr style={{position: "absolute", top: "100%", bottom: "0", width: "100%", height: "1px", backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))" }}/>
        </div>
    );
}

export default Hobby;





