import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <div className="header">
      <Link className="link" to="/">
        <span className="nombre">sauliyo</span>
        <span className="numero">15</span>
      </Link>
    </div>
  );
}
