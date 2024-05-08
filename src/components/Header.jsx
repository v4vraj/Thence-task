import React from "react";
import logo from "../assets/logo.png";
import { Button } from "./Button";
import { useNavigate, useLocation } from "react-router-dom";
import close from "../assets/close.svg";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isRegistration = localStorage.getItem("isRegistration");
  const handleGetProjects = () => {
    navigate("/register");
    localStorage.setItem("isRegistration", true);
  };

  const handleCloseClick = () => {
    navigate("/home"); // Navigate to the home page
    localStorage.removeItem("isRegistration"); // Optionally clear the registration flag
  };
  const showNormalHeader = location.pathname !== "/success";
  return (
    <nav className="navbar navbar-expand-lg px-1 header-navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Company Logo" />
        </a>
        {isRegistration && showNormalHeader ? (
          <img
            src={close}
            alt="Close Icon"
            onClick={handleCloseClick}
            style={{ cursor: "pointer" }}
          />
        ) : showNormalHeader ? (
          <div className="collapse navbar-collapse">
            <div className="ms-auto d-flex">
              <Button label={"Get Projects"} onClick={handleGetProjects} />
              <Button label={"Onboard Talent"} />
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
};
