import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Contact.css";
import { ModalBody } from "react-bootstrap";

const Contact = () => {
  const [show, setShow] = useState(false);

  const showModal = () => {
    const handleClick = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
      <div>
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
      </div>
    );
  };

  return (
    <div className="page">
      <h3 className="font-face-rumor-sm header">Contact</h3>
      <Form>
        <Form.Group
          className="form"
          style={{ paddingTop: "3%" }}
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Your name here" />
        </Form.Group>
        <Form.Group className="form" controlId="exampleForm.ControlInput2">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="form" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Gimme the Deets</Form.Label>
          <Form.Control as="textarea" placeholder="Talk to me... " rows={5} />
        </Form.Group>
        <Button
          className="btn"
          onClick={handleClick}
          type="submit"
          size="lg"
          variant="outline"
        >
          Hit Me!
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
