import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getDataAsync , selectProducts} from '../slicers/productSlice'

import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";


const HomeScreen = () => {
  const dispatch = useDispatch();

  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(getDataAsync())
  }, [dispatch])

  return (
    <div>
      <h1>HomeScreen</h1>

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
