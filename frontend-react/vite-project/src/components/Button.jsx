import React from "react";

const Button = (props) => {
  return (
    <button
      className={` p-1 text-lg rounded-md hover:underline ${
        props.type === "primary" ? `  text-[#1db8cd]` : `text-white`
      }`}
    >
      {props.name}
    </button>
  );
};

export default Button;
