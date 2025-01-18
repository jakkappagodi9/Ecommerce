import { Button, Col, Container, Row } from 'react-bootstrap';
// import './Product.css';

export default function Products() {
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

  const productList = productsArr.map((product, index) => {
    return (
      <Col
        key={index}
        xs={12}
        md={6}
        className=" d-flex justify-content-center"
      >
        <div>
          <h3 style={{ margin: '25px', textAlign: 'center' }}>{`Album ${
            index + 1
          }`}</h3>
          <img
            src={product.imageUrl}
            alt={product.title}
            className="zoom-image"
          />
          <p className="m-5">
            {` $ ${product.price}`}{' '}
            <Button variant="info" style={{ marginLeft: '100px' }}>
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
