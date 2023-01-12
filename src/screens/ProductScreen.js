import React from "react";
import { Row, Col, Image, Button, Card, ListGroup } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { Rating } from "../components/Rating";
import products from "../products";


// import ListGroup from 'react-bootstrap/ListGroup';



const ProductScreen = () => {
  let { id } = useParams();
  const product = products.find((p) => p._id === id);

  return (
    <div>
      <Link to={"/"} className="btn btn-danger my-3">
        go back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}></Col>
      </Row>
    </div>
  );
};

export default ProductScreen;
