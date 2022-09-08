import React from "react";
import clsx from "clsx";

export default function Container(props) {
  return (
    <div className={clsx("add_more", props.className)}>{props.children}</div>
  );
}
