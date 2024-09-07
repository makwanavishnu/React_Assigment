import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Table, Button, Container } from "react-bootstrap"; // Import React Bootstrap components

export default function View() {
  const [data, setData] = useState({});
  let { id } = useParams();

  const disp = () => {
    axios.get("http://localhost:4000/user/" + id)
      .then(res => setData(res.data));
  };

  useEffect(() => {
    disp();
  }, [id]);

  return (
    <Container className="mt-4">
      <h2>View User Details</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.firstName}</td>
            <td>{data.lastName}</td>
            <td>{data.email}</td>
            <td>
              <Button as={Link} to="/" variant="primary">
                Back
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
