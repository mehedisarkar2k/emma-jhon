import { faBars, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-sm navbar-success bg-light">
        <div className="container">
          <a className="navbar-brand text-success" href="/?home">
            <img className="me-2" src="./favicon.ico" width="30px" alt="" />
            Emma John
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon
              className="navbar-toggler-icon text-success"
              icon={faBars}
            />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-success fw-bold"
                  aria-current="page"
                  href="?/home"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-success" href="/?item">
                  Items
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-success" href="/?contact">
                  Contact
                </a>
              </li>
              <li className="nav-item ms-5 text-success fs-4">
                <FontAwesomeIcon icon={faShoppingCart} />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
