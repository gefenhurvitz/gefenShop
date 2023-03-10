import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} />
        <Card.Title as="div">
          <strong>{product.name}</strong>
        </Card.Title>
      </Link>

      <Card.Text as="div">
        {/* <strong>{product.rating} From {product.numReviews} reviews </strong> */}
        <Rating
          value={product.rating}
          text={`${product.numReviews} reviews `}
          color={"#f8e825"}
        />
      </Card.Text>

      <Card.Text as="h3">$ {product.price}</Card.Text>
    </Card>
  );
};

export default Product;
