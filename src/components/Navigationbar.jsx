import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../store/ContextProvider';
import { Badge } from 'react-bootstrap';
import './Navigationbar.css';
import { Link, NavLink } from 'react-router-dom';

export default function Navigationbar(props) {
  const { cartListContext } = useContext(CartContext);
  const [TotalItemCount, setTotalItemCount] = useState(0);

  useEffect(() => {
    const NumberOfItems = cartListContext.reduce((total, item) => {
      total += item.quantity;
      return total;
    }, 0);
    setTotalItemCount(NumberOfItems);
  }, [cartListContext]);
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-black fixed-top ">
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
      </nav>
    </>
  );
}
