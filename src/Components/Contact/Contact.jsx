import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import "./Contact.css";

const Contact = () => {
  return (
    <div className="page">
    <h3 className="font-face-rumor-sm header">Contact</h3>
    <Form>
      <Form.Group className="form" style={{ paddingTop: "3%" }} controlId="exampleForm.ControlInput1">
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
      <Button className="btn" size="lg" variant="outline" >Hit Me!</Button>
    </Form>
    </div>
  );
};

export default Contact;
