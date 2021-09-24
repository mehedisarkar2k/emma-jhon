import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-sm navbar-success bg-light">
        <div className="container">
          <a className="navbar-brand text-success" href="/?home">
            Navbar
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="d-flex align-item-center justify-content-center collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
