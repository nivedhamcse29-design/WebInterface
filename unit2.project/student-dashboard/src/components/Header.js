import React from "react";
import "./Header.css";

function Header({ collegeName }) {
  return (
    <header className="letterhead">
      <div className="letterhead__crest" aria-hidden="true">
        <svg viewBox="0 0 60 60" width="46" height="46">
          <circle cx="30" cy="30" r="28" fill="none" stroke="#e4c876" strokeWidth="2" />
          <circle cx="30" cy="30" r="22" fill="none" stroke="#e4c876" strokeWidth="1" />
          <text
            x="30"
            y="39"
            textAnchor="middle"
            fontFamily="Playfair Display, serif"
            fontSize="24"
            fontWeight="700"
            fill="#e4c876"
          >
          </text>
        </svg>
      </div>
      <div className="letterhead__text">
        <p className="letterhead__college">{collegeName}</p>
        <h1 className="letterhead__title">Student Dashboard</h1>
      </div>
    </header>
  );
}
export default Header;
