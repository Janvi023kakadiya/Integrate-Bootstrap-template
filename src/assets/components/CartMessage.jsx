import React from 'react';
import { Alert } from 'react-bootstrap';

function CartMessage({ message }) {
  return (
    <Alert variant="success" className="text-center">
      {message}
    </Alert>
  );
}

export default CartMessage;
