import { Button, Col, Container, Row } from 'react-bootstrap';
import { CartContext } from '../store/ContextProvider';
import { useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import './Product.css';
import StoreFooter from './StoreFooter';
import AuthContext from '../store/authContext';

export default function Products(props) {
  const { cartListContext, setcartListContext } = useContext(CartContext);
  const { email } = useContext(AuthContext);
  const safeEmail = email.replace(/[^a-zA-Z0-9]/g, '');
  const url = `https://crudcrud.com/api/d52d1e2605cb49c9bb6191910e5ccad2/${safeEmail}`;
  console.log(safeEmail);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch cart items');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Fetched cart items:', data);
        setcartListContext(data); // Load cartItems  into context
      })
      .catch((error) => {
        console.error('GET error:', error);
      });
  }, []);

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
      toast.success(`Your Product : ${heading} is added to the cart`);

      // Send only the new item to crudcrud
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to POST item');
          }
          return response.json();
        })
        .then((data) => {
          console.log('Item saved to crudcrud:', data);
        })
        .catch((error) => {
          console.log(error);
        });
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
            className="zoomImage"
          />
          <p className="m-3">
            {` $ ${product.price}`}{' '}
            <Button
              variant="info"
              style={{ marginLeft: '120px' }}
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
      <Container className="product">
        <h1 className="subTitle">Music</h1>
        <Row>{productList}</Row>
        <div className="container d-flex justify-content-center m-4">
          <Button
            variant="secondary"
            className="text-info"
            onClick={props.cartIconhandler}
          >
            See The cart
          </Button>
        </div>
      </Container>
      <StoreFooter />
    </>
  );
}
