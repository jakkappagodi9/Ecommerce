import { Alert, Button, Col, Container, Modal, Row } from 'react-bootstrap';
import { CartContext } from '../store/ContextProvider';
import { useContext, useState } from 'react';

export default function Products() {
  const { cartListContext, setcartListContext } = useContext(CartContext);
  const productsArr = [
    {
      title: 'Colors',
      price: 100,
      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
      title: 'Black and white Colors',
      price: 50,
      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
      title: 'Blue Color',
      price: 100,
      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    },
  ];

  const addToCartHandler = (index) => {
    const heading = `Album ${index + 1}`;

    const existingItem = cartListContext.find(
      (item) => item.heading === heading
    );
    if (existingItem) {
      // If item exists, increment its quantity
      const updateItem = cartListContext.map((item) =>
        item.heading === heading
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      alert('This item is already present in the cart');
      setcartListContext(updateItem);
    } else {
      const newItem = {
        heading: heading,
        ...productsArr[index],
        quantity: 1,
      };
      setcartListContext((previous) => [...previous, newItem]);
    }
  };

  const productList = productsArr.map((product, index) => {
    return (
      <Col
        key={index}
        xs={12}
        md={6}
        className=" d-flex justify-content-center"
      >
        <div>
          <h3
            style={{ margin: '25px', textAlign: 'center' }}
            id={`Album ${index + 1}`}
          >{`Album ${index + 1}`}</h3>
          <img
            src={product.imageUrl}
            alt={product.title}
            className="zoom-image"
          />
          <p className="m-5">
            {` $ ${product.price}`}{' '}
            <Button
              variant="info"
              style={{ marginLeft: '100px' }}
              onClick={() => {
                addToCartHandler(index);
              }}
            >
              ADD TO CART
            </Button>
          </p>
        </div>
      </Col>
    );
  });

  return (
    <>
      <Container>
        <h1
          style={{
            fontFamily: 'cursive',
            textAlign: 'center',
            padding: '10px',
            fontSize: '30px',
            fontWeight: 'bold',
          }}
        >
          Music
        </h1>
        <Row>{productList}</Row>
      </Container>
    </>
  );
}
