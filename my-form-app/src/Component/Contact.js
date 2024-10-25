import React, { useState } from 'react';
import axios from 'axios';
import './Style.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    try {
      const response = await axios.post('http://localhost:5000/submit', formData);
      if (response.status === 200) {
        setStatus('Form submitted successfully');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus(`Error submitting form: ${error.message}`);
    }
  };

  return (
    <div className='bg'>
      <h1>Contact Page</h1>
      <div className='Con'>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Message:
            <textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
          <button className='abc' type='submit'>Submit</button>
        </form>
        {status && <p>{status}</p>}
      </div>
    </div>
  );
};

export default Contact;
