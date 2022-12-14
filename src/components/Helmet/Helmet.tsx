import React from "react";

const Helmet = (props) => {
  document.title = "Digistore -" + props.title;
  return <div className="Wish">{props.children}</div>;
};

export default Helmet;
