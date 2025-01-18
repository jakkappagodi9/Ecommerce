import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/products';
import Title from './components/Title';
import Cart from './components/Cart';
import { useState } from 'react';
import Navigationbar from './components/Navigationbar';

function App() {
  const [show, setShow] = useState(false);

  const cartIconhandler = () => {
    setShow(!show);
  };
  const handleClose = () => setShow(!show);

  return (
    <>
      <Navigationbar cartIconhandler={cartIconhandler} />
      <Title />
      <Products />
      <Cart show={show} handleClose={handleClose} />
    </>
  );
}

export default App;
