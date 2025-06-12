import { createRoot } from 'react-dom/client';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import './index.css';
import App from './App.jsx';
import AuthContextProvider from './store/AuthContextProvider.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <>
    <AuthContextProvider>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
      <App />
    </AuthContextProvider>
  </>
);
