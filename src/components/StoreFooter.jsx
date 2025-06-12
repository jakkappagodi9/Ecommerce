import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './StoreFooter.css';

export default function StoreFooter() {
  return (
    <>
      <footer className="bg-info text-light py-3 styles">
        <div className="container">
          <div className="row">
            <div className="col text-center text-md-start">
              <p className="mb-0 display-5" style={{ fontWeight: 'bolder' }}>
                The Generics
              </p>
            </div>
            <div className="col text-center">
              <a
                href="https://www.youtube.com"
                className="text-decoration-none mx-3"
              >
                <i
                  className="bi bi-youtube"
                  style={{ fontSize: '2rem', backgroundColor: 'white' }}
                ></i>
              </a>
              <a
                href="https://www.facebook.com"
                className="text-decoration-none mx-3"
              >
                <i
                  className="bi bi-facebook"
                  style={{ fontSize: '2rem', backgroundColor: 'white' }}
                ></i>
              </a>
              <a
                href="https://open.spotify.com"
                className="text-decoration-none mx-3"
              >
                <i
                  className="bi bi-spotify"
                  style={{ fontSize: '2rem', backgroundColor: 'white' }}
                ></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
