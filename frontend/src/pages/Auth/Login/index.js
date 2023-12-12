import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
// import {ReactLogo} from 'images/graphic1.png';

const Signup = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/users/loginUser", {
        ...credentials,
      });
      localStorage.setItem("auth_token", res.data.token)
      navigate("/");
    } catch (err) {
      console.log("error", err);
      alert(err.response.data.message)
    }
    console.log("Submitted Values", credentials);
  };
  return (
    <Container className="my-3">
      <Row xs="2" style={{ height: "85vh" }}>
        <Col
          xs="6"
          className="d-flex justify-content-center align-items-center"
        >
          <img src="/images/graphic1.svg" alt="" style={{ width: "60%" }} />
        </Col>
        <Col
          xs="6"
          className="d-flex justify-content-center align-items-center"
        >
          <Container>
            <Card className="px-5 py-4">
              <h2 className="text-center p-2">Login</h2>
              <CardBody>
                <Form onSubmit={handleSubmit}>
                  <FormGroup className="pb-2 mr-sm-2 mb-sm-0">
                    <Label for="email" className="mr-sm-2">
                      Email
                    </Label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your Email"
                      value={credentials.email}
                      onChange={(ev) => handleChange(ev)}
                    />
                  </FormGroup>
                  <FormGroup className="pb-2 mr-sm-2 mb-sm-0">
                    <Label for="password" className="mr-sm-2">
                      Password
                    </Label>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter Password"
                      value={credentials.password}
                      onChange={(ev) => handleChange(ev)}
                    />
                  </FormGroup>
                  <Button type="submit" color="primary">
                    Login
                  </Button>
                  <p>Already Login?</p>
                </Form>
              </CardBody>
            </Card>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
