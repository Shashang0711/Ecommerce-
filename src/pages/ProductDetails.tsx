import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import "../styles/productDetails.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import CommonSection from "../components/UI/CommonSection";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: product?.id,
        productName: product?.productName,
        price: product?.price,
        imgUrl: product?.imgUrl,
      })
    );
    toast.success("product added Successfully");
  };

  return (
    <Helmet title={product?.productName}>
      <CommonSection title={product?.productName} />

      <section className="pet">
        <Container>
          <Row>
            <Col lg="6">
              <img src={product?.imgUrl} alt="" />
            </Col>

            <Col lg="6">
              <div className="product_details">
                <h2>{product?.productName}</h2>
                <div className="product_rating">
                  <div>
                    <span>
                      <i className="ri-star-s-fill"></i>
                      <span>
                        <i className="ri-star-s-fill"></i>
                      </span>
                      <span>
                        <i className="ri-star-s-fill"></i>
                      </span>
                      <span>
                        <i className="ri-star-s-fill"></i>
                      </span>
                      <span>
                        <i className="ri-star-s-fill"></i>
                      </span>
                    </span>
                  </div>
                  <p>
                    (<span className="bag">{product?.avgRating}</span>rating)
                  </p>
                </div>

                <span className="wolf">${product?.price}</span>
                <p className="punch">{product?.shortDesc}</p>
                <motion.button className="buys_btn" onClick={addToCart}>
                  Add Cart
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
