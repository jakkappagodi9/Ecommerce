import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/products';
import Title from './components/Title';
import Cart from './components/Cart';
import { useState } from 'react';
import Navigationbar from './components/Navigationbar';

import Footer from './components/Footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import ContactUS from './components/ContactUS';
import AuthPage from './components/AuthPage';
import './index.css';
import ContextProvider from './store/ContextProvider';
function App() {
  const [show, setShow] = useState(false);
  const cartIconhandler = () => {
    setShow(!show);
  };
  const handleClose = () => setShow(!show);
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navigationbar cartIconhandler={cartIconhandler} />
          <Title />
          <Cart show={show} handleClose={handleClose} />
          <Products cartIconhandler={cartIconhandler} />
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
    {
      path: '/home',
      element: (
        <>
          <Navigationbar cartIconhandler={cartIconhandler} />
          <Title />
          <Cart show={show} handleClose={handleClose} />
          <Home />
          <Footer></Footer>
        </>
      ),
    },
    {
      path: '/contactUS',
      element: (
        <>
          <Navigationbar cartIconhandler={cartIconhandler} />
          <ContactUS></ContactUS>
          <Footer></Footer>
        </>
      ),
    },
    {
      path: '/authPage',
      element: (
        <>
          <Navigationbar cartIconhandler={cartIconhandler} />
          <AuthPage></AuthPage>
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
