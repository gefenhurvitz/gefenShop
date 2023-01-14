import React, { useEffect, useState } from "react";
// import products from "../products";

import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";

import axios from "axios";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("http://127.0.0.1:8000/products");
      setProducts(data)
    };
    fetchProducts()
  }, []);

  return (
    <div>
      <h1>hello</h1>

      <Row>
        {products.map((p) => (
          <Col sm={12} md={6} lg={4} xl={3} key={p._id}>
            <Product product={p} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeScreen;
