import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/products';
import Title from './components/Title';
import Cart from './components/Cart';
import { useContext, useState } from 'react';
import Navigationbar from './components/Navigationbar';
import ContextProvider from './store/ContextProvider';
import Footer from './components/Footer';

function App() {
  const [show, setShow] = useState(false);

  // const totalAmount = () => {
  //   cartListContext.reduce((sum, current) => {
  //     sum = sum + current.price;
  //     console.log(current);
  //   }, 0);
  //   console.log(cartListContext);
  // };

  const cartIconhandler = () => {
    setShow(!show);
  };
  const handleClose = () => setShow(!show);

  return (
    <>
      <ContextProvider>
        <Navigationbar cartIconhandler={cartIconhandler} />
        <Title />
        <Products cartIconhandler={cartIconhandler} />
        <Cart show={show} handleClose={handleClose} />
        <Footer></Footer>
      </ContextProvider>
    </>
  );
}
export default App;
