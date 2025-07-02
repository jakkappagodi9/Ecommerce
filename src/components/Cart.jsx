import React, { useContext, useEffect, useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { CartContext } from '../store/ContextProvider';
import AuthContext from '../store/authContext';

function Cart(props) {
  const { cartListContext, setcartListContext } = useContext(CartContext);
  const [totalAmount, setTotalAmount] = useState(0);
  const { email } = useContext(AuthContext);

  // Automatically calculate Total Amount
  useEffect(() => {
    const total = cartListContext.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalAmount(total);
  }, [cartListContext]);

  const removeItem = (id) => {
    const safeEmail = email.replace(/[^a-zA-Z0-9]/g, '');
    const url = `https://crudcrud.com/api/d52d1e2605cb49c9bb6191910e5ccad2/${safeEmail}/${id}`;
    console.log(email);
    fetch(url, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to delete item from backend');
        }
        // Remove from local context
        setcartListContext((prev) => prev.filter((item) => item._id !== id));
        // toast.success('Item removed from cart');
      })
      .catch((error) => {
        console.error('DELETE error:', error);
      });
  };

  const purchaseBtnHandler = () => {
    cartListContext.length > 0
      ? alert('Thanks for the purchase!')
      : alert('You have Nothing in Cart, Please add some product to purchase!');
    setcartListContext([]);
  };

  const cartsElements = cartListContext.map((item, index) => {
    return (
      <div className="container container-fluid" key={index}>
        <div className="row justify-content-between border-bottom">
          <div className="col-2 mt-3 mb-2">
            <span className="font-weight-bold">
              <img src={item.imageUrl} alt="image" className="img-fluid" />
            </span>
            <p style={{ fontSize: '12px' }}>{item.heading}</p>
          </div>
          <div className="col-2 d-flex align-items-center">
            <span className="font-weight-bold ">{item.price}</span>
            {}
          </div>
          <div className="col-5 d-flex align-items-center">
            <input
              type="text"
              className="font-weight-bold form-control border-info ms-2"
              value={item.quantity}
              readOnly
            />
            <button
              className="btn btn-danger ms-4"
              onClick={() => {
                removeItem(item._id);
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
                    Total $<span className="fw-normal">{totalAmount}</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-auto">
                <button
                  className="btn btn-info text-white"
                  onClick={purchaseBtnHandler}
                >
                  Purchase
                </button>
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
