import React, { Component } from 'react';

export class About extends Component {
  render() {
    return (
      <div
        style={{
          display: 'block',
          padding: '20px',
          backgroundColor: 'lightpink',
        }}
      >
        <h1>About Page</h1>
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
  }
}

export default About;
