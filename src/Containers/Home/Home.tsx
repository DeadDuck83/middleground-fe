import React, { Component } from 'react';

export class Home extends Component {
  render() {
    return (
      <div
        style={{
          display: 'block',
          padding: '20px',
          backgroundColor: '#ededed',
        }}
      >
        <h1>Home Page</h1>
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

export default Home;
