import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../store/authContext';
import { useContext } from 'react';

export default function AuthPage() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const AuthCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    const url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCg-1sIWheF-aCY5g6mcDDWnw5-kYo-oWQ';

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: false,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Failed to login try again');
        }
      })
      .then((data) => {
        AuthCtx.Login(data.idToken, data.email);
        navigate('/product');
        // console.log(data.email);
        // AuthCtx.email(data.email);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="container p-4 rounded shadow bg-white"
        style={{ maxWidth: '400px', width: '100%' }}
      >
        <h2 className="text-center text-primary mb-4">Login</h2>
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              ref={emailRef}
              required
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              ref={passwordRef}
              required
              className="form-control"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
