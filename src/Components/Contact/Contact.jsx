import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ModalBody } from "react-bootstrap";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import * as formik from "formik";
import * as yup from "yup";
import "./Contact.css";

const Contact = () => {
  const { Formik } = formik;

  const [successOpen, setSuccessOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const form = useRef();

  const schema = yup.object().shape({
    user_name: yup.string().required("Name is required"),
    user_email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is required"),
    message: yup.string().required("Message is required"),
  });

  const sendEmail = (values, { resetForm }) => {
    emailjs
      .sendForm("fiction_service", "contact_form", form.current, {
        publicKey: "MIMdJYunxMPNG7bsq",
      })
      .then(
        () => {
          setSuccessOpen(true);
          resetForm();
        },
        (error) => {
          console.error("EmailJS failed:", error);
          setErrorMsg(error?.text || "Something went wrong. Please try again.");
          setErrorOpen(true);
        }
      );
  };

  return (
    <div className="page">
      <p className="contact-intro">
        The Silvertones would love to play your club, party, event, private island... whatever. Please send them a message below and they will arrange a show for you.
      </p>

      <Modal show={successOpen} onHide={() => setSuccessOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Message Sent!</Modal.Title>
        </Modal.Header>
        <ModalBody>
          <p>Thank you for reaching out!</p>
        </ModalBody>
      </Modal>

      <Modal show={errorOpen} onHide={() => setErrorOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Something Went Wrong</Modal.Title>
        </Modal.Header>
        <ModalBody>
          <p>{errorMsg}</p>
        </ModalBody>
      </Modal>

      <Formik
        validationSchema={schema}
        onSubmit={sendEmail}
        initialValues={{ user_name: "", user_email: "", message: "" }}
      >
        {({ handleSubmit, handleChange, values, errors, touched }) => (
          <Form
            ref={form}
            id="contact_form"
            noValidate
            onSubmit={handleSubmit}
          >
            <Form.Group className="form" style={{ paddingTop: "3%" }}>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="user_name"
                placeholder="Your name here"
                value={values.user_name}
                onChange={handleChange}
                isInvalid={touched.user_name && !!errors.user_name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.user_name}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="form">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="user_email"
                placeholder="name@example.com"
                value={values.user_email}
                onChange={handleChange}
                isInvalid={touched.user_email && !!errors.user_email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.user_email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="form">
              <Form.Label>Share the Deets</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                placeholder="Write something good..."
                rows={5}
                value={values.message}
                onChange={handleChange}
                isInvalid={touched.message && !!errors.message}
              />
              <Form.Control.Feedback type="invalid">
                {errors.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Button
              className="btn"
              type="submit"
              size="lg"
              variant="outline"
            >
              Hit Me!
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Contact;
