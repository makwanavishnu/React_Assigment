import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap"; // Import React Bootstrap components

export default function Edit() {
  let { id } = useParams();

  const [newdata, setNewdata] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  useEffect(() => {
    axios.get("http://localhost:4000/user/" + id)
      .then(res => setNewdata(res.data));
  }, [id]);

  const navigate = useNavigate();

  function handleUpdate(e) {
    e.preventDefault();
    axios.put("http://localhost:4000/user/" + id, newdata)
      .then(res => {
        console.log(res.data);
        navigate("/");
      });
  }

  return (
    <Container className="mt-4">
      <h2>Edit User</h2>
      <Form onSubmit={handleUpdate}>
        <Form.Group controlId="firstName">
          <Form.Label>First Name:</Form.Label>
          <Form.Control 
            type="text" 
            name="firstName" 
            value={newdata.firstName} 
            onChange={(e) => setNewdata({ ...newdata, firstName: e.target.value })} 
            placeholder="Enter first name"
          />
        </Form.Group>

        <Form.Group controlId="lastName" className="mt-3">
          <Form.Label>Last Name:</Form.Label>
          <Form.Control 
            type="text" 
            name="lastName" 
            value={newdata.lastName} 
            onChange={(e) => setNewdata({ ...newdata, lastName: e.target.value })} 
            placeholder="Enter last name"
          />
        </Form.Group>

        <Form.Group controlId="email" className="mt-3">
          <Form.Label>Email:</Form.Label>
          <Form.Control 
            type="email" 
            name="email" 
            value={newdata.email} 
            onChange={(e) => setNewdata({ ...newdata, email: e.target.value })} 
            placeholder="Enter email"
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Update
        </Button>
      </Form>
    </Container>
  );
}
