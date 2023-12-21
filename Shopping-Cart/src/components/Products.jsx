import axios from 'axios'
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Cards from './Cards'

// import ShoppingCart from './ShoppingCart'

const Products = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((result) => setProducts(result.data))
      .catch((error) => console.log(error))
  }, [])

  //console.log(products)

  return (
    <Container style={{ width: 'auto' }}>
      <Row>
        {
          products.map((p) => (
          <Col key={p.id} xs={4} >
            <Cards
              title={p.title}
              price={p.price}
              image={p.image}
              description={p.description}
            />
          </Col>
          )
          )
        }
      </Row>
      {/* <hr /> */}
      {/* <ShoppingCart/> */}
    </Container>

    
  )
}

export default Products
