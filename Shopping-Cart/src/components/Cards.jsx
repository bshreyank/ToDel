// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'

// eslint-disable-next-line react/prop-types
const Cards = ({ title, price, image, description }) => {
  return (
    <Row>
      <Col xs={6}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>
              <h1> {price}</h1>
            </Card.Text>
            <Button variant="primary">addToCart</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default Cards
