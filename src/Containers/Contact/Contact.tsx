import React from 'react';
// TODO : Add your code here

const Contact = () => {
  return (
    <div
      style={{
        display: 'block',
        padding: '20px',
        backgroundColor: 'lightblue',
      }}
    >
      <h1>Contact Page</h1>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
