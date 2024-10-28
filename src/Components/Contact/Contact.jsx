import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Contact.css";
import { ModalBody } from "react-bootstrap";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import * as formik from "formik";
import * as yup from "yup";

const Contact = () => {
  const { Formik } = formik;

  const [show, setShow] = useState(false);
  const [validation, setValidation] = useState(false);

  const form = useRef();

  const handleClick = () => setShow(true);
  const handleClose = () => setShow(false);

  const sendEmail = (e) => {
    console.log(e)
    e.preventDefault();
      emailjs
      // .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
      .sendForm('fiction_service', 'contact_form', form.current, {
        publicKey: 'MIMdJYunxMPNG7bsq',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  }

  const schema = yup.object().shape({
    hand: yup.string().required(),
    email: yup.string().required(),
    message: yup.string().required(),
  });

    return (
      <div className="page">

        <script type="text/javascript"
                src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js">
        </script>
        <script type="text/javascript">
          (function(){
              emailjs.init({
                publicKey: "MIMdJYunxMPNG7bsq",
              })
          })();
        </script>

        <Formik
          validationSchema={schema}
          onSubmit={console.log}
          initialValues={{
            hand: '',
            email: '',
            message: '',
          }}
        >

          <Modal show={show} onHide={handleClose}>
            <Modal.Dialog>
              <Modal.Header closeButton>
                <Modal.Title>Message Sent!</Modal.Title>
              </Modal.Header>
              <ModalBody>
                <p>Thank you for reaching out!</p>
              </ModalBody>
            </Modal.Dialog>
          </Modal>

          <h3 className="font-face-rumor-sm header">Contact</h3>
          <Form ref={form} id="contact_form" onSubmit={sendEmail}>
            <Form.Group
              className="form"
              style={{ paddingTop: "3%" }}
              controlId="exampleForm.ControlInput1"
            >
              {/* <Form.Control type="hidden" name="contact_number" value="1" ></Form.Control> */}
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="user_name" placeholder="Your name here" required/>
              <Form.Control.Feedback type="invalid" />
            </Form.Group>
            <Form.Group className="form" controlId="exampleForm.ControlInput2">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="user_email" placeholder="name@example.com" required/>
            </Form.Group>
            <Form.Group className="form" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Gimme the Deets</Form.Label>
              <Form.Control as="textarea" name="message" placeholder="Write something good... " rows={5} required/>
            </Form.Group>
            <Button
              className="btn"
              onClick={handleClick}
              type="submit"
              size="lg"
              variant="outline"
              value="Send"
            >
              Hit Me!
            </Button>
          </Form>
        </Formik>
      </div>
    );
};

export default Contact;
