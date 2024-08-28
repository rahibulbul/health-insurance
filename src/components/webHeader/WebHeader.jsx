import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderLogo from "../../assets/img/protection.png";
import "./style.css";

const WebHeader = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (header) {
        header.classList.toggle("sticky", window.scrollY > 0);
      } else {
        console.error("Header element not found");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header className="web-header">
        <div className="header-logo">
          <img src={HeaderLogo} alt="header-logo" />
          <span className="title">
            Health<span className="title-red">Care</span>
          </span>
        </div>
        <ul>
          <li>
            <Link to="/" className="header-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="#" className="header-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="#" className="header-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="#" className="header-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/login" className="header-link">
              Login
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default WebHeader;
