import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";
import "../../styles/product-card.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";
import { toast } from "react-toastify";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        image: item.imgUrl,
      })
    );
    toast.success("product added Successfully");
  };

  return (
    <Col lg="3" md="4" className="mb-2">
      <div className="product_item">
        <div className="product_img">
          <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt="" />
        </div>
        <div className="product_info">
          <motion.h3 whileHover={{ scale: 1.1 }} className="product_name ">
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>
          </motion.h3>
          <h5>{item.category}</h5>
        </div>
        <div className="product_card-bottom d-flex align-item-center justify-content-center p-2 ">
          <h5 className="price">
            ${item.price}
            <span>
              <motion.button whileTap={{ scale: 1.1 }} onClick={addToCart}>
                <i className="ri-add-line"></i>
              </motion.button>
            </span>
          </h5>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
