/* eslint-disable no-unused-vars */

import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const Cart = ({ cart }) => {
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    
    <Card style={{ width: '18rem', marginTop: '20px' }}>
      <Card.Body>
        <Card.Title>Shopping Cart</Card.Title>
        <ListGroup>
          {cart.map((item, index) => (
            <ListGroup.Item key={index}>
              {item.title} - ${item.price}
            </ListGroup.Item>
          ))}
        </ListGroup>
        <Card.Text>Total Price: ${totalPrice.toFixed(2)}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Cart;
