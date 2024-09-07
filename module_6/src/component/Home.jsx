import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table, Button, Container } from "react-bootstrap";

export default function Home() {
  const [data, setData] = useState([]);

  const disp = () => {
    axios.get("http://localhost:4000/user")
      .then(res => setData(res.data));
  };

  useEffect(() => {
    disp();
  }, []);

  const handleDLt = (id) => {
    axios.delete("http://localhost:4000/user/" + id)
      .then((res) => console.log(res));
  };
disp();
  return (
    <Container className="mt-4">
      <div className="mb-3">
        <Button variant="primary" as={Link} to="/form">
          Add User
        </Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map(i => (
            <tr key={i.id}>
              <td>{i.firstName}</td>
              <td>{i.lastName}</td>
              <td>{i.email}</td>
              <td>
                <Button variant="info" as={Link} to={`/view/${i.id}`} className="me-2">
                  View
                </Button>
                <Button variant="warning" as={Link} to={`/edit/${i.id}`} className="me-2">
                  Edit
                </Button>
                <Button variant="danger" onClick={() => handleDLt(i.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
