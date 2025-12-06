import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import { useState, useContext, lazy, Suspense } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';

import Navigationbar from './components/Navigationbar';
import Products from './components/products';
import Title from './components/Title';
// import Cart from './components/Cart';
// import About from './components/About';
// import Home from './components/Home';
// import ContactUS from './components/ContactUS';
import AuthPage from './components/AuthPage';
import Footer from './components/Footer';
import ContextProvider from './store/ContextProvider';
import AuthContext from './store/authContext';

// Implementing lazy loading
const Cart = lazy(() => import('./components/Cart'));
const About = lazy(() => import('./components/About'));
const Home = lazy(() => import('./components/Home'));
const ContactUS = lazy(() => import('./components/ContactUS'));

function App() {
  const [show, setShow] = useState(false);
  const cartIconhandler = () => setShow(!show);
  const handleClose = () => setShow(false);

  const { isLoggedIn } = useContext(AuthContext);
  // const isLoggedIn = authCtx.isLoggedIn;

  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/product"
            element={
              isLoggedIn ? (
                <>
                  <Navigationbar cartIconhandler={cartIconhandler} />
                  <Title />
                  <Suspense fallback={<p>Loading...</p>}>
                    <Cart show={show} handleClose={handleClose} />
                  </Suspense>
                  <Products cartIconhandler={cartIconhandler} />
                </>
              ) : (
                <Navigate to="/" replace />
              )
            }
          />

          <Route
            path="/about"
            element={
              isLoggedIn ? (
                <>
                  <Navigationbar cartIconhandler={cartIconhandler} />
                  <Title />
                  <Suspense fallback={<p>Loading...</p>}>
                    <Cart show={show} handleClose={handleClose} />
                  </Suspense>
                  <Suspense fallback={<p>Loading....</p>}>
                    <About />
                  </Suspense>
                  <Footer />
                </>
              ) : (
                <Navigate to="/" />
              )
            }
          />

          <Route
            path="/home"
            element={
              isLoggedIn ? (
                <>
                  <Navigationbar cartIconhandler={cartIconhandler} />
                  <Title />
                  <Suspense fallback={<p>Loading...</p>}>
                    <Cart show={show} handleClose={handleClose} />
                  </Suspense>
                  <Suspense fallback={<p>Loading...</p>}>
                    <Home />
                  </Suspense>
                  <Footer />
                </>
              ) : (
                <Navigate to="/" />
              )
            }
          />

          <Route
            path="/contactUS"
            element={
              isLoggedIn ? (
                <>
                  <Navigationbar cartIconhandler={cartIconhandler} />
                  <Suspense fallback={<p>Loading...</p>}>
                    <ContactUS />
                  </Suspense>
                  <Footer />
                </>
              ) : (
                <Navigate to="/" />
              )
            }
          />

          <Route
            path="/"
            element={
              <>
                <Navigationbar cartIconhandler={cartIconhandler} />
                <AuthPage />
                <Footer />
              </>
            }
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
