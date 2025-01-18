import React, { useState } from 'react';
import { Offcanvas, Button } from 'react-bootstrap';

function Cart(props) {
  const [cartElementslist, setcartElementslist] = useState([
    {
      title: 'Colors',
      price: 100,
      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      quantity: 2,
    },
    {
      title: 'Black and white Colors',
      price: 50,
      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      quantity: 3,
    },
    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      quantity: 1,
    },
  ]);

  const removeItem = (index) => {
    setcartElementslist(cartElementslist.filter((ele, i) => i != index));
  };

  const cartsElements = cartElementslist.map((item, index) => {
    return (
      // <li className="col-2" key={index}>
      //   <img
      //     src={item.imageUrl}
      //     alt="productImage"
      //     className="img-fluid mt-3"
      //   />
      //   <span className="ms-4">{item.price}</span>
      //   <span className="ms-5">{item.quantity}</span>
      // </li>
      <div className="container container-fluid" key={index}>
        <div className="row justify-content-between border-bottom">
          <div className="col-2 mt-3 mb-2">
            <span className="font-weight-bold">
              <img src={item.imageUrl} alt="image" className="img-fluid" />
            </span>
          </div>
          <div className="col-2 d-flex align-items-center">
            <span className="font-weight-bold ">{item.price}</span>
          </div>
          <div className="col-5 d-flex align-items-center">
            {/* <span className="">{item.quantity}</span> */}
            <input
              type="text"
              className="font-weight-bold form-control border-info ms-2"
              value={item.quantity}
            />
            <button
              className="btn btn-danger ms-4"
              onClick={() => {
                removeItem(index);
              }}
            >
              remove
            </button>
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      <Offcanvas
        show={props.show}
        onHide={props.handleClose}
        placement="end"
        className="mt-5"
        style={{ width: '500px' }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className=" w-100 text-center">
            <span>CARTS</span>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="container">
            <div className="row justify-content-between border-bottom">
              <div className="col-2">
                <span className="font-weight-bold">ITEM</span>
              </div>
              <div className="col-2">
                <span className="font-weight-bold">PRICE</span>
              </div>
              <div className="col-5">
                <span className="font-weight-bold text-center">QUANTITY</span>
              </div>
            </div>
            {cartsElements}
            <div className="container">
              <div className="row">
                <div className="col-12 text-end my-3">
                  <h4>
                    Total <span className="fw-normal">$100</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-auto">
                <button className="btn btn-info text-white">Purchase</button>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      {/* <ispurchased && modal> */}
    </>
  );
}

export default Cart;
