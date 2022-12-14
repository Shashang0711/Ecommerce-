import React from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/Checkout.css";
import { useSelector } from "react-redux";
import { cartState } from "../components/types";
import { Link } from "react-router-dom";

const Checkout = () => {

  const totalQuantity=useSelector( 
    (state: { cart: cartState }) => state.cart.totalQuantity)
    const totalAmount=useSelector( 
      (state: { cart: cartState }) => state.cart.totalAmount)
  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8"></Col>
            <h6 className="mb-4 fw-bold">Billing Information</h6>
            <Form className="billing_form">
              <FormGroup className="form_group">
                <input type="text" placeholder="Enter Your Name" />
              </FormGroup>

              <FormGroup className="form_group">
                <input type="email" placeholder="Enter Your Email" />
              </FormGroup>

              <FormGroup className="form_group">
                <input type="number" placeholder="Enter Mobile Number " />
              </FormGroup>

              <FormGroup className="form_group">
                <input type="text" placeholder="Address" />
              </FormGroup>

              <FormGroup className="form_group">
                <input type="text" placeholder="City" />
              </FormGroup>

              <FormGroup className="form_group">
                <input type="text" placeholder="Postal code" />
              </FormGroup>

              <FormGroup className="form_group">
                <input type="text" placeholder="Country" />
              </FormGroup>
            </Form>

            <Col lg="4">
              <div className="checkout_cart">
                <h6>
                  Total Qty:<span>{totalQuantity} Items</span>
                </h6>
                <h6>
                  Subtotal:<span>${totalAmount}</span>
                </h6>
                <h6>
                  <span>
                    Shipping:
                    <br />
                    Free Shipping
                  </span>
                  <span>$0</span>
                </h6>
                <h4>
                  Total Cost:<span>${totalAmount}</span>
                </h4>
                <button className="buy_btn auth_btn w-100">
                  <Link to="/login">Place Order</Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
