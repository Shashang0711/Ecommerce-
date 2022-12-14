import React, { ReactNode } from "react";
// import Routers from "../../routers/Routers";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
      {/* <div>
        <Routers />
      </div> */}

      <Footer />
    </>
  );
};
export default Layout;
