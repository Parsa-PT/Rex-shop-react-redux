import {  useEffect } from 'react'
import { useParams ,   Link  , useNavigate } from 'react-router-dom'
import { Row , Col , Image , ListGroup , Button } from 'react-bootstrap'
import { useDispatch , useSelector } from 'react-redux'
import { productPageAction } from '../action/productPageAction'




const ProductPage = () => {

  const navigator = useNavigate()
  
  const params = useParams()

  const dispatch = useDispatch()

  const productdata = useSelector((state)=>(
    state.productsPageList
  ))

  const {loading , selectPro } = productdata

   useEffect(()=>{
    dispatch(productPageAction(params))
      
   } ,[dispatch , params])



   const CartHandle = ()=>{
      navigator(`/cart/${params.id}`)
   }
   
  return (
    <div>
      {loading ? <h2>Loading...</h2> : <>
      <Link to='/'> Back to home </Link>

<Row>
  <Col md={6}>
      <Image src={selectPro.image} fluid />
  </Col>
  <Col md={3}>
      <ListGroup>
          <ListGroup.Item>
              <h2>{selectPro.name}</h2>
          </ListGroup.Item>
          <ListGroup.Item>
              {selectPro.description}
          </ListGroup.Item>
          <ListGroup.Item>
              {selectPro.price} $
          </ListGroup.Item>
      </ListGroup>
  </Col>
  <Col md={3}>
      <Button onClick={CartHandle}>
         Add to cart
      </Button>
  </Col>
</Row>
      
      </>}

    </div>
  )
}

export default ProductPage
