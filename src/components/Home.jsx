import React from 'react';
import { Button } from 'react-bootstrap';

export default function Home() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-lg-8">
          <h2 className="fw-bold text-center mb-5">TOURS</h2>
          <table className="table">
            <tbody>
              <tr>
                <td>JUNE 16</td>
                <td>DETROIT, MI</td>
                <td>DTE ENERGY MUSIC THEATRE</td>
                <td>
                  <Button variant="info">Buy Ticket</Button>
                </td>
              </tr>
              <tr>
                <td>JULY19</td>
                <td>TORONTO,ON</td>
                <td>BUDWEISER STAGE</td>
                <td>
                  <Button variant="info">Buy Ticket</Button>
                </td>
              </tr>
              <tr>
                <td>JUL19</td>
                <td>DETROIT, MI</td>
                <td>DTE ENERGY MUSIC THEATRE</td>
                <td>
                  <Button variant="info">Buy Ticket</Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
