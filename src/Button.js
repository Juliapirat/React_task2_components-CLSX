import React from "react";
import clsx from "clsx";

export default function Button(props) {
  const { children, type, disabled } = props;
  const className = clsx(
    { "ui-red-button": props.onclassName },
    { "new-propperty": props.onclassName },
    { "new-2-propperty": props.onclassName }
  );

  return (
    <button className={className} type={type} disabled={disabled}>
      {children}
    </button>
  );
}
