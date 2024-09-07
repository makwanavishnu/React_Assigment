import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap"; // Import React Bootstrap components

export default function UserForm() {
  const [newdata, setNewdata] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setNewdata(prev => ({
      ...prev,
      [name]: value
    }));
  }

  const navigate = useNavigate();

  function saveData(e) {
    e.preventDefault();
    axios.post("http://localhost:4000/user", newdata)
      .then(res => {
        console.log(res.data);
        navigate("/");
      });
  }

  return (
    <Container className="mt-4">
      <h2>Add User</h2>
      <Form onSubmit={saveData}>
        <Form.Group controlId="firstName">
          <Form.Label>First Name:</Form.Label>
          <Form.Control 
            type="text" 
            name="firstName" 
            placeholder="Enter first name" 
            onChange={handleInputChange} 
            value={newdata.firstName}
          />
        </Form.Group>

        <Form.Group controlId="lastName" className="mt-3">
          <Form.Label>Last Name:</Form.Label>
          <Form.Control 
            type="text" 
            name="lastName" 
            placeholder="Enter last name" 
            onChange={handleInputChange} 
            value={newdata.lastName}
          />
        </Form.Group>

        <Form.Group controlId="email" className="mt-3">
          <Form.Label>Email:</Form.Label>
          <Form.Control 
            type="email" 
            name="email" 
            placeholder="Enter email" 
            onChange={handleInputChange} 
            value={newdata.email}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
