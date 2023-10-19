import React from "react";

const Button = (props) => {
  return (
    <button style={{ height: "40px", width: "90px" }}>{props.title}</button>
  );
};

export default Button;
