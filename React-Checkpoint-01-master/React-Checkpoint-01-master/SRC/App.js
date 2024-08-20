// src/App.js
import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Name from 'Television';
import Price from '$100.99';
import Description from 'Television is means by which information is passed on.';
import Image from 'https://example.com/Television.jpg';

// Define first name
const firstName = "John"; // Change to "" if no name is provided

function App() {
  return (
    <div className="App" style={{ padding: '20px' }}>
      <Card style={{ width: '18rem', margin: 'auto' }}>
        <Card.Body>
          <Card.Title>Product Information</Card.Title>
          <Name />
          <Price />
          <Description />
          <Image />
        </Card.Body>
      </Card>

      {/* Display greeting message */}
      <p style={{ textAlign: 'center', marginTop: '20px' }}>
        Hello, {firstName ? firstName : 'there'}!
      </p>

      {/* Display image if first name is provided */}
      {firstName && (
        <div style={{ textAlign: 'center' }}>
          <img src={product.image} alt="Product" style={{ maxWidth: '100%' }} />
        </div>
      )}
    </div>
  );
}

export default App;
