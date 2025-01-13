import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Button, Badge } from 'react-bootstrap';
import Products from './components/products';

function App() {
  return (
    <>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container>
          <Navbar.Brand href="/">Ecommerce</Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#features">STORE</Nav.Link>
            <Nav.Link href="#pricing">ABOUT</Nav.Link>
          </Nav>
          <Button variant="outline-info">cart</Button>
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
      </Navbar>
      <Products />
    </>
  );
}

export default App;
