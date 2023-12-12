import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate} from 'react-router-dom'
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { addProduct } from "../../../redux/actions/product.action";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    quantity: "",
  });

  const router = useNavigate()
  console.log('router', router)
  

  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted values", product);
    dispatch(addProduct(product));
    router("/")
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col className="bg-light border py-5">
          <h2 className="text-center">Add Product Form</h2>
          <Form className="p-2" onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Product Name</Label>
              <Input
                type="text"
                name="name"
                value={product.name}
                placeholder="Enter Product Name"
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Price</Label>
              <Input
                type="number"
                name="price"
                value={product.price}
                placeholder="Enter Product Price"
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Product Quantity</Label>
              <Input
                type="number"
                name="quantity"
                value={product.quantity}
                placeholder="Enter Quantity"
                onChange={handleInputChange}
              />
            </FormGroup>
            <Button color="primary" type="submit">
              Add Product
            </Button>
            <Button color="danger">Reset</Button>
          </Form>
        </Col>
        {/* <Col className="bg-light border py-5">
          <ReduxProducts  />
          </Col> */}
      </Row>
    </Container>
  );
};

export default AddProduct;
