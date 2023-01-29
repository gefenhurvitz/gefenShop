import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDataAsync,
  selectProducts,
  selectLoading,
} from "../slicers/productSlice";

import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import Loader from "../components/Loader";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const products = useSelector(selectProducts);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(getDataAsync());
  }, [dispatch]);

  return (
    <div>

      <h1>loading: {loading}</h1>
      <h1>HomeScreen</h1>
      {loading === 'pending' ? (
        <Loader />

      ) : (
        <Row>
          {products.map((p) => (
            <Col sm={12} md={6} lg={4} xl={3} key={p._id}>
              <Product product={p} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default HomeScreen;
