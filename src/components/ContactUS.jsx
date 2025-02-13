import React, { useState } from 'react';

export default function ContactUS() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const handleChange = (event) => {
    setFormData((prevData) => {
      return { ...prevData, [event.target.name]: event.target.value };
    });
  };
  async function formDataHandler(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        'https://ecommerce-27393-default-rtdb.firebaseio.com/Queries.json',
        {
          method: 'POST',
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        console.log('Query Posted In FireBase');
      }
    } catch (error) {
      console.log(error.message);
    }
    setFormData({
      name: '',
      email: '',
      phone: '',
    });
  }
  return (
    <div className="container-lg " style={{ marginTop: '10%' }}>
      <div className="text-center">
        <h4>Query Form</h4>
        <p className="lead"> Have questions to ask ? Please fill the form</p>
      </div>

      <div className="row justify-content-center">
        <div className="col-6">
          <form onSubmit={formDataHandler}>
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <div className="input-group mb-4">
              <span className="input-group-text">
                <i className="bi bi-person"></i>
              </span>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="e.g john"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <label htmlFor="email" className="form-label">
              Email
            </label>
            <div className="input-group mb-4">
              <span className="input-group-text">
                <i className="bi bi-envelope-at"></i>
              </span>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                onChange={handleChange}
                value={formData.email}
                placeholder="e.g john@email.com"
              />
            </div>

            <label htmlFor="phone" className="form-label">
              Phone Number
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-telephone"></i>
              </span>
              <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g 123456677"
              />
            </div>
            <div className="mt-3 text-center">
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
