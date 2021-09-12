
import React, {useState} from "react";
import {Form, Container, Button} from "react-bootstrap";



function Contact () {

    const [mailerState, setMailerState] = useState({
        name: "",
        subject: "",
        email: "",
        message: "",
      });

    function handleStateChange(e) {
        setMailerState((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      }

    const submitEmail = async (e) => {
        e.preventDefault();
        console.log({ mailerState });
        const response = await fetch("https://mateusz-cv.herokuapp.com/send", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ mailerState }),
        })
          .then((res) => res.json())
          .then(async (res) => {
            const resData = await res;
            console.log(resData);
            if (resData.status === "success") {
              alert("Wiadomość została wysłana");
            } else if (resData.status === "fail") {
              alert("Błąd wysyłania");
            }
          })
          .then(() => {
            setMailerState({
              name: "",
              subject: "",
              email: "",
              message: "",
            });
          });
      };

  return (

      <Container id="contact" className="col-lg-6" style={{minHeight: "93vh", position: "center"}}>
        <h1 className="text-light display-4 font-weight-bold" style={{textAlign: "center", paddingTop: "13vh"}}>Kontakt</h1>
            <Form id="contact-form" onSubmit = {submitEmail}>
                <div className="row">
                    <div className="col">
                        <Form.Group className="mb-3">
                            <Form.Label>Imię i nazwisko</Form.Label>
                            <Form.Control 
                                id="name" 
                                type="text" 
                                placeholder="Podaj imię i nazwisko" 
                                onChange={handleStateChange}
                                value={mailerState.name} 
                                name="name" 
                                required/>
                        </Form.Group>
                    </div>

                    <div className="col">
                        <Form.Group className="mb-3">
                            <Form.Label>Adres e-mail</Form.Label>
                            <Form.Control 
                                id="email" 
                                type="text" 
                                placeholder="Podaj e-mail" 
                                onChange={handleStateChange} 
                                value={mailerState.email} 
                                name="email" 
                                aria-describedby="emailHelp" 
                                required/>
                        </Form.Group>
                    </div>
                </div>

                <Form.Group className="mb-3">
                    <Form.Label>Temat wiadomości</Form.Label>
                    <Form.Control 
                        id="subject" 
                        type="text" 
                        placeholder="Wpisz temat"
                        onChange={handleStateChange} 
                        value={mailerState.subject}
                        name="subject" 
                        required/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Treść wiadomości</Form.Label>
                    <Form.Control 
                        id="message" 
                        as="textarea" 
                        placeholder="Wpisz treść" 
                        onChange={handleStateChange}
                        value={mailerState.message}
                        name="message" 
                        required 
                        style={{minHeight: "10rem"}} />
                </Form.Group>

                <Form.Group className="mb-3" align="center">
                    <Button type="submit" value="submit" variant="dark">Kliknij aby wysłać</Button>
                </Form.Group>
            </Form>
        </Container>
  );
}

export default Contact;