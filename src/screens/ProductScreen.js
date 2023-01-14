import React from "react";
// import {  Button, Card } from "react-bootstrap";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/Rating";
import products from "../products";

const ProductScreen = () => {
  let { id } = useParams();
  const product = products.find((p) => p._id === id);

  return (
    <div>
      <Link to={"/"} className="btn btn-danger my-3">
        go back
      </Link>
      <Row>
        {/* col 1 --> Image */}
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        {/* col 2 --> details */}
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews `}
                color={"#f8e825"}
              />
            </ListGroup.Item>

            <ListGroup.Item>
              <h3>{product.price}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <h3>{product.description}</h3>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        {/* col 3 --> price and status and Button */}
        <Col md={3}>
          <Card>
            <ListGroup>
              <ListGroup.Item>
                <Row>
                  <Col>Price: </Col>
                  <Col>
                    <strong>$ {product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status: </Col>
                  <Col>
                    {product.countInStock > 0 ? 'in stock' : 'out of stuck'}
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                  <Button className="btn btn-block" disabled={product.countInStock === 0} type="button">Add to Cart</Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductScreen;
