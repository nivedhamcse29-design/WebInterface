import React from "react";
import "./Footer.css";

function Footer({ collegeName }) {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <p>
        &copy; {year} {collegeName} &middot; Student Dashboard
      </p>
    </footer>
  );
}

export default Footer;