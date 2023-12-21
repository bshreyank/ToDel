import axios from 'axios'
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Cards from './Cards'

import Cart from './Cart'

const Products = () => {
  const [products, setProducts] = useState([])
  
  const [cart, setCart] = useState([]);
  
  

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((result) => setProducts(result.data))
      .catch((error) => console.log(error))
  }, [])

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  //console.log(products)
  return (
    <Container style={{ width: 'auto' }}>
    <h1 style={{textAlign:"center"}}>Shopping Product</h1>
      <Row>
        {
          products.map((p) => (
          <Col key={p.id} xs={4} >
            <Cards
              title={p.title}
              price={p.price}
              image={p.image}
              description={p.description}
              addToCart={() => addToCart(p)}
            />
          </Col>
          )
          )
        }
      </Row>
      <hr />
      <Cart cart={cart} />
    </Container>
  )
}

export default Products
