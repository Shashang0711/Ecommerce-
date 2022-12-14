import "./Footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col lg="4">
            <div className="logo">
              <div>
                <h1 className="text-white">DigiStore</h1>
              </div>
            </div>
            <p className="footer_text mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              quaerat labore unde aspernatur quis asperiores quibusdam,
              explicabo reprehenderit totam impedit, iusto facilis? Voluptas
              voluptatem ea reiciendis laudantium nostrum sapiente cum!
            </p>
          </Col>
          <Col lg="3">
            <div className="footer_quick-link">
              <h4 className="quick_links-title">Top Categories</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Mobile Phone</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Modern Sofa</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Arm Chair</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Smart Watch</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="2">
            <div className="footer_quick-link">
              <h4 className="quick_links-title">Useful Link</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">Cart</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">Login</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="3">
            <div className="footer_quick-link">
              <h4 className="quick_links-title">Contact</h4>
              <ListGroup className="footer_contact">
                <ListGroupItem
                  className="ps-0 border-0 d-flex
                       align-item-center gap-2"
                >
                  <span>
                    <i className="ri-map-pin-line"></i>
                  </span>
                  <p>123, ChotaBazar,Adajan,Surat</p>
                </ListGroupItem>

                <ListGroupItem
                  className="ps-0 border-0 d-flex
                       align-item-center gap-2"
                >
                  <span>
                    <i className="ri-phone-line"></i>
                  </span>
                  <p>+91 3232323232</p>
                </ListGroupItem>

                <ListGroupItem
                  className="ps-0 border-0 d-flex
                       align-item-center gap-2"
                >
                  <span>
                    <i className="ri-mail-line"></i>
                  </span>
                  <p>example123@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="12">
            <p className="footer_copyright">
              Copyright {year} developed by Netizens Technology
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
