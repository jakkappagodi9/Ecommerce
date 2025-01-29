import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../store/ContextProvider';
import { Badge } from 'react-bootstrap';
import './Navigationbar.css';
import { Link, NavLink } from 'react-router-dom';

export default function Navigationbar(props) {
  const [isCollapsed, setisCollapsed] = useState(false);
  const { cartListContext } = useContext(CartContext);
  const [TotalItemCount, setTotalItemCount] = useState(0);

  const isCollapsedHandler = () => {
    setisCollapsed(!isCollapsed);
  };

  useEffect(() => {
    const NumberOfItems = cartListContext.reduce((total, item) => {
      total += item.quantity;
      return total;
    }, 0);
    setTotalItemCount(NumberOfItems);
  }, [cartListContext]);
  return (
    <>
      {/* <Navbar bg="dark" expand="md" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#features">STORE</Nav.Link>
            <Nav.Link href="#pricing">ABOUT</Nav.Link>
          </Nav>
          <Button onClick={props.cartIconhandler} variant="outline-info">
            cart
          </Button>
          <Badge
            bg="info"
            style={{
              position: 'relative',
              top: '-15px',
              right: '10px',
            }}
          >
            1
          </Badge>
        </Container>
      </Navbar> */}
      <nav className="navbar navbar-expand-md navbar-dark bg-black fixed-top">
        <div className="container">
          <a href="#" className="navbar-brand">
            <span>E-Commerce</span>
          </a>
          {/* Toggle Button  */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded={isCollapsed}
            aria-label="Toggle navigation"
            onClick={isCollapsedHandler}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse justify-content-center ${
              isCollapsed ? 'show' : ''
            }`}
            id="navbarContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="#home" className="nav-link text-white">
                  HOME
                </a>
              </li>
              <li className="nav-item me-4">
                {/* <a href="#store" className="">
                  STORE
                </a> */}

                <NavLink to="/" className={'nav-link text-white'}>
                  STORE
                </NavLink>
              </li>
              <li className="nav-item">
                {/* <a href="#about" className="nav-link text-white">
                  ABOUT
                </a> */}
                <NavLink to="/about" className={'nav-link text-white'}>
                  ABOUT
                </NavLink>
              </li>
            </ul>
          </div>
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
