import React from "react";
import { useLocation } from "react-router-dom";

const Card = (props) => {
  const { pathname } = useLocation();
  return (
    <div
      className={`bg-[#263237] rounded-3xl shadow-lg ${
        pathname !== "/login" || pathname !== "/signup"
          ? "transform transition-transform duration-200 hover:scale-105"
          : null
      } ${props.css} z-99`}
    >
      {props.children}
    </div>
  );
};

export default Card;
