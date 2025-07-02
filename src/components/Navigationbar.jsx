import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../store/ContextProvider';
import { Badge } from 'react-bootstrap';
import './Navigationbar.css';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../store/authContext';

export default function Navigationbar(props) {
  const { cartListContext } = useContext(CartContext);
  const [TotalItemCount, setTotalItemCount] = useState(0);
  const { isLoggedIn, Logout } = useContext(AuthContext);

  useEffect(() => {
    const NumberOfItems = cartListContext.reduce((total, item) => {
      total += item.quantity;
      return total;
    }, 0);
    setTotalItemCount(NumberOfItems);
  }, [cartListContext]);

  const logoutHandler = () => {
    Logout();
  };
  return (
    <>
      {/* <nav className="navbar navbar-expand navbar-dark bg-black fixed-top ">
        <div className="container d-flex justify-content-center">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/home" className={' nav-link text-white'}>
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" className={'nav-link text-white'}>
                STORE
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className={'nav-link text-white'}>
                ABOUT
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/contactUS" className={'nav-link text-white'}>
                CONTACT US
              </NavLink>
            </li>
            <li className="ms-auto">
              <NavLink to="/Authentication" className={'nav-link text-white'}>
                Login
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="position-absolute top-0 end-0">
          <button
            type="button"
            className="btn btn-outline-info text-white mt-2"
            onClick={props.cartIconhandler}
          >
            cart
          </button>
          <Badge bg="" className="badgeCustom ">
            {TotalItemCount}
          </Badge>
        </div>
      </nav> */}
      <nav className="navbar navbar-expand navbar-dark bg-black fixed-top">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* Center Nav Links */}
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink to="/home" className="nav-link text-white">
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/product" className="nav-link text-white">
                STORE
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link text-white">
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contactUS" className="nav-link text-white">
                CONTACT US
              </NavLink>
            </li>
          </ul>

          {/* Right - Login and Cart */}
          <div
            className="d-flex align-items-center"
            style={{ minWidth: '200px', justifyContent: 'flex-end' }}
          >
            {isLoggedIn ? (
              <NavLink
                to="/"
                className="nav-link text-white me-3"
                onClick={logoutHandler}
              >
                Logout
              </NavLink>
            ) : (
              <NavLink to="/" className="nav-link text-white me-3">
                Login
              </NavLink>
            )}
            <button
              type="button"
              className="btn btn-outline-info text-white"
              onClick={props.cartIconhandler}
            >
              cart
            </button>
            <Badge bg="" className="badgeCustom ms-1">
              {TotalItemCount}
            </Badge>
          </div>
        </div>
      </nav>
    </>
  );
}
