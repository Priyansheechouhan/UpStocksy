import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    // fixed-top bg-white px-5 border-bottom
    <nav class="navbar navbar-expand-lg border-bottom fixed-top bg-white">
      <div className="container px-5">
        <div className="px-5 mx-3">
          <Link class="navbar-brand" to="/">
            <img src="images/logo.svg" alt="" style={{ width: "7.5rem" }} />
          </Link>
        </div>
        {/* <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button> */}
        <div
          class="collapse navbar-collapse justify-content-end me-5"
          id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 fw-semibold">
              <li class="nav-item py-2 px-3">
                <Link class="nav-link" to="/signup">
                  Signup
                </Link>
              </li>
              <li class="nav-item py-2 px-3">
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item py-2 px-3">
                <Link class="nav-link" to="/products">Products</Link>
              </li>
              <li class="nav-item py-2 px-3">
                <Link class="nav-link" to="/pricing">Pricing</Link>
              </li>
              <li class="nav-item py-2 px-3">
                <Link class="nav-link" to="/support">Support</Link>
              </li>

              <li class="nav-item dropdown py-2 px-3 align-items-center" style={{ top: "9px"}}>
                <i class="fa-solid fa-bars" data-bs-toggle="dropdown"></i>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
