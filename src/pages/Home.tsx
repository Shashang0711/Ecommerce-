import { Col, Container, Row } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import "../styles/home.css";
import { Link } from "react-router-dom";
import products from "../assets/data/products";
import Services from "../services/Services";
import ProductList from "../components/UI/ProductList";
import Helmet from "../components/Helmet/Helmet";
import { useState, useEffect } from "react";
import counterImg from "../assets/images/counter-timer-img.png";
import Clock from "../components/UI/Clock";
import { motion } from "framer-motion";
import { auth, db } from "../firebaseConfig/firebaseconfig";
import { collection, getDocs, query, where } from "firebase/firestore";

interface name {
  id: string;
  productName: string;
  imgUrl: string;
  category: string;
  price: number;
  shortDesc: string;
  description: string;
  reviews: {
    rating: number;
    text: string;
  }[];
  avgRating: number;
}

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState<name[]>([]);
  const [bestSalesProducts, setBestSalesProducts] = useState<name[]>([]);
  const [mobileProducts, setMobileProducts] = useState<name[]>([]);
  const [wirelessProducts, setWirelessProducts] = useState<name[]>([]);
  const [popularProducts, setPopularProducts] = useState<name[]>([]);

  const year = new Date().getFullYear();
  function GetCurrentUser() {
    const [user, setUser] = useState("");
    //  const userCollectionRef=collection(db,"users" )

    useEffect(() => {
      auth.onAuthStateChanged((userlogged) => {
        if (userlogged) {
          const getUsers = async () => {
            const q = query(
              collection(db, "users"),
              where("uid", "==", userlogged.uid)
            );
            // console.log(q);
            const data = await getDocs(q);
            //  setUser(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
          };
          getUsers();
        } else {
          setUser("");
        }
      });
    }, []);
    return user;
  }
  const loggeduser = GetCurrentUser;
  //  console.log(loggeduser);

  useEffect(() => {
    const FilterTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );
    const FilterBestSalesProducts = products.filter(
      (item) => item.category === "sofa"
    );
    const FilterMobileProducts = products.filter(
      (item) => item.category === "mobile"
    );
    const FilterWirelessProducts = products.filter(
      (item) => item.category === "wireless"
    );
    const FilterPopularProducts = products.filter(
      (item) => item.category === "watch"
    );

    setTrendingProducts(FilterTrendingProducts);
    setBestSalesProducts(FilterBestSalesProducts);
    setMobileProducts(FilterMobileProducts);
    setWirelessProducts(FilterWirelessProducts);
    setPopularProducts(FilterPopularProducts);
  }, []);
  return (
    <Helmet title={"Home"}>
      <section className="hero_section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero_content">
                <h5 className="hero_subtitle">trending product in {year}</h5>
                <h2>Make Your Interior More Attractive & Modern </h2>
                <h6>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Illum, nihil enim temporibus facere quae recusandae voluptates
                  numquam porro labore rerum maiores eum similique sed,
                  repellendus nesciunt maxime at, iure rem!
                </h6>
                <button className="buy_btn">
                  <Link to="/shop">
                    <span>SHOP NOW</span>
                  </Link>
                </button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero_img">
                <img src={heroImg} alt=" " />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className="trending_product">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Trending Products</h2>
            </Col>
            <ProductList data={trendingProducts} />
          </Row>
        </Container>
      </section>
      <section className="best_sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Best Sales</h2>
            </Col>
            <ProductList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>
      <section className="timer_count">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="clock_top-contest">
                <h4 className="text-white fs-6 mb-2 " >Limited Offers</h4>
                <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
              </div>
              <Clock />
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="buy_btn store_btn "
              >
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </Col>

            <Col lg="6" md="6" className="text_end">
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="new_arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-6">
              <h2 className="section_title">New Arrivals</h2>
            </Col>
            <ProductList data={mobileProducts} />
            <ProductList data={wirelessProducts} />
          </Row>
        </Container>
      </section>
      <section className="popular_category mb-6">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Popular Category</h2>
            </Col>
            <ProductList data={popularProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};
export default Home;
