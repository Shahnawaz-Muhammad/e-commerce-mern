import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Col,
  Container,
  Row,
} from "reactstrap";
import { getProducts } from "../../../redux/actions/product.action";
import Product from "./Product";

const AllProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  console.log(products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      <Container  className="w-100 py-5">
        <Row >
          {products.map((item) => (
            <Col xs="4">
              <Product item={item}/>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default AllProducts;
