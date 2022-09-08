import React from "react";
import clsx from "clsx";

export default function Input(props) {
  const className = clsx({ "ui-button": true });
  const { type = "text", placeholder, name } = props;
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      name={name}
    />
  );
}
