import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import logo from './../images/privacy.png';


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="FoodDelivery Logo" className="logo" />
        FoodDelivery App
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <form className="form-inline my-2 my-lg-0">
  <div className="input-group">
    <input
      className="form-control mr-sm-2"
      type="search"
      placeholder="Search for restaurants, cuisines, or dishes"
      aria-label="Search"
    />
    <div className="input-group-append">
      <button className="btn btn-outline-success ml-2" type="submit">
        Search
      </button>
    </div>
  </div>
</form>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/restaurants">
              Restaurants
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/orders">
              My Orders
            </Link>
          </li>
        </ul>

		



        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} /> Cart
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              <FontAwesomeIcon icon={faUser} /> Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
