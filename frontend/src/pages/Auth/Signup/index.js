import React, { useState } from "react";
import axios from 'axios';
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

const Signup = () => {
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({
    username: "",
    age: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (ev) => {
    setCredentials((prevCred) => ({
      ...prevCred,
      [ev.target.name]: ev.target.value,
    }));
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try{
      await axios.post('http://localhost:5000/api/users/registerUser', {...credentials})
    }
    catch(err){
      console.log("error", err)
    }
    // navigate('auth/login')
    console.log("Submitted Values", credentials);
  };

  return (
    <Container className="my-3" >
      <Row xs="2" style={{height:'85vh'}}>
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
              <h2 className="text-center p-2">Register</h2>
              <CardBody>
                <Form onSubmit={handleSubmit}>
                  <FormGroup className="pb-2 mr-sm-2 mb-sm-0">
                    {/* <Label for="exampleEmail" className="mr-sm-2">
                      User Name
                    </Label> */}
                    <Input
                      type="text"
                      name="username"
                      placeholder="Enter you username"
                      value={credentials.username}
                      onChange={(ev) => handleChange(ev)}
                    />
                  </FormGroup>
                  <FormGroup className="pb-2 mr-sm-2 mb-sm-0">
                    {/* <Label for="examplePassword" className="mr-sm-2">
                      Age
                    </Label> */}
                    <Input
                      type="text"
                      name="age"
                      placeholder="Enter you age"
                      value={credentials.age}
                      onChange={(ev) => handleChange(ev)}
                    />
                  </FormGroup>
                  <FormGroup className="pb-2 mr-sm-2 mb-sm-0">
                    {/* <Label for="exampleEmail" className="mr-sm-2">
                      Email
                    </Label> */}
                    <Input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                      value={credentials.email}
                      onChange={(ev) => handleChange(ev)}
                    />
                  </FormGroup>
                  <FormGroup className="pb-2 mr-sm-2 mb-sm-0">
                    {/* <Label for="examplePassword" className="mr-sm-2">
                      Password
                    </Label> */}
                    <Input
                      type="password"
                      name="password"
                      placeholder="Enter a password"
                      value={credentials.password}
                      onChange={(ev) => handleChange(ev)}
                    />
                  </FormGroup>
                  <FormGroup className="pb-2 mr-sm-2 mb-sm-0">
                    {/* <Label for="examplePassword" className="mr-sm-2">
                      Confirm Password
                    </Label> */}
                    <Input
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      value={credentials.confirmPassword}
                      onChange={(ev) => handleChange(ev)}
                    />
                  </FormGroup>
                  <Button type="submit" color="primary" className="px-4">
                    Register
                  </Button>
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
