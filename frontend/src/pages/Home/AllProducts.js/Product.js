import React from "react";
import { Button, Card, CardBody, CardText, CardTitle } from "reactstrap";

const Product = ({ item }) => {
  return (
    <>
      <Card
        style={{
          width: "18rem",
        }}
        className="my-3"
      >
        <img alt="Card" src="https://picsum.photos/300/200" />
        <CardBody>
          <CardTitle tag="h5">{item.name}</CardTitle>
          <CardText>{item.quantity}</CardText>
          <div className="d-flex justify-content-between align-items-center">
            <Button color="primary" className="btn-sm">
              Add to Cart
            </Button>
            <CardText>{item.price}</CardText>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default Product;
