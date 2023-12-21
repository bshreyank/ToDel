// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

const ShoppingCart = () => {
    const [cart, setCart] = useState([])

    const calculateTotal = () => {
        return cart.reduce((total, product) => total + product.price, 0).toFixed(2)
      }
  return (
    <div><h1>Shopping Cart</h1>
    <div className="cart">
      {cart.map((product) => (
        <div key={product.id} className="cart-item">
          <p>{product.title}</p>
          <p>${product.price.toFixed(2)}</p>
        </div>
      ))}
      {cart.length > 0 && (
        <div className="cart-total">
          <strong>Total:</strong> ${calculateTotal()}
        </div>
      )}
    </div></div>
  )
}

export default ShoppingCart