import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function CartGPT() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    // Fetch products from the fake store API using Axios
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('Error fetching products:', error))
  }, [])

  const addToCart = (product) => {
    setCart([
      ...cart,
      { id: product.id, title: product.title, price: product.price },
    ])
  }

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0).toFixed(2)
  }

  return (
    <div className="App">
      <h1>Product Listing</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <h3>{product.title}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <h1>Shopping Cart</h1>
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
      </div>
    </div>
  )
}

export default CartGPT
