import "./Header.css";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";
import { Container, Row } from "reactstrap";
import { useSelector } from "react-redux";
import { FC } from "react";
import { cartState } from "../../components/types";

const nav_Links = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];
const Header: FC = () => {
  const totalQuantity = useSelector(
    (state: { cart: cartState }) => state.cart.totalQuantity
  );
  // console.log(totalQuantity);
  const navigate = useNavigate();

  const navigateToCart = () => {
    navigate("/login");
  };
  return (
    <div className="header">
      <Container>
        <Row>
          <div className="nav_wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>DigiStore</h1>
              </div>
            </div>
            <div className="navigation">
              <ul className="menu">
                {nav_Links.map((item, index) => (
                  <li className="nav_item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav_active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav_icons">
              <span className="fav_icon">
                <i className="ri-heart-line"></i>
                <span className="badge">0</span>
              </span>

              <span className="cart_icon" onClick={navigateToCart}>
                <i className="ri-shopping-bag-line"></i>
                <span className="badge">{totalQuantity}</span>
              </span>

              <span>
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={userIcon}
                  alt=""
                ></motion.img>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
