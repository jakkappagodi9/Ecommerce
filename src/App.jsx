import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/products';
import Title from './components/Title';
import Cart from './components/Cart';
import { useState } from 'react';
import Navigationbar from './components/Navigationbar';
import ContextProvider from './store/ContextProvider';
import Footer from './components/Footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About';

function App() {
  const [show, setShow] = useState(false);
  const cartIconhandler = () => {
    setShow(!show);
  };
  const handleClose = () => setShow(!show);

  // const totalAmount = () => {
  //   cartListContext.reduce((sum, current) => {
  //     sum = sum + current.price;
  //     console.log(current);
  //   }, 0);
  //   console.log(cartListContext);
  // };
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navigationbar cartIconhandler={cartIconhandler} />
          <Title />
          <Cart show={show} handleClose={handleClose} />
          <Products cartIconhandler={cartIconhandler} />
          <Footer></Footer>
        </>
      ),
    },
    {
      path: '/about',
      element: (
        <>
          <Navigationbar cartIconhandler={cartIconhandler} />
          <Title />
          <Cart show={show} handleClose={handleClose} />
          <About />
          <Footer></Footer>
        </>
      ),
    },
  ]);

  return (
    <>
      <ContextProvider>
        <RouterProvider router={router} />
      </ContextProvider>
    </>
  );
}
export default App;
