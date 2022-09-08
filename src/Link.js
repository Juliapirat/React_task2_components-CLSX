import React from "react";
import clsx from "clsx";

export default function Link(props) {
  const className = clsx({ "ui-link": true });
  const { children, href } = props;
  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
}
