import React from 'react'
import { Card } from 'react-bootstrap'
import './product.css'
import { Link } from 'react-router-dom'

const Product = ({product}) => {
  return (
    <Card className='card  my-3 p-3'>
        <Link to={`/product/${product.name}`}>
            <Card.Img src={product.image} variant='top' />
        </Link>
        <Card.Body>
            <Link to={`/product/${product.name}`}>
                <Card.Title as='div'>{product.name}</Card.Title>
            </Link>

            <Card.Text as='h2'>
                {product.price} $
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Product
