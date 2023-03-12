import { useEffect} from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { AddtoCart } from '../action/cartAction'
import {Row , Col , Button , ListGroup , Image , Card} from 'react-bootstrap'
import { RemoveCart } from '../action/cartAction'

const Cart = () => {
    const params = useParams()
    const dispatch = useDispatch()

    const {cartItem} = useSelector((state)=>(
        state.cart
    ))
    

    useEffect(()=>{
        if(params){
            dispatch(AddtoCart(params))
        }
    },[dispatch , params])



    const cartRemoveHandler = (id)=>{
        dispatch(RemoveCart(id))
    }


  return (
    <div>
      <Row>
        <Col md={8}>
            {cartItem.length === 0 ? <h2>Cart is empty</h2> : (  <ListGroup  variant='flush'>
            {cartItem.map((item)=>{
                return (
                    <ListGroup.Item key={item.product} >
                        <Row>
                            <Col md={2}>
                                <Image src={item.image} alt={item.name} fluid />
                            </Col>

                            <Col md={3}>
                                {item.name}
                            </Col>

                            <Col md={2}>
                                {item.price}
                            </Col>
                             <Col md={2}>
                                <Button onClick={() => cartRemoveHandler(item.product)}>Remove</Button>
                            </Col> 
                            
                        </Row>
                    </ListGroup.Item>
                )
            })}
            </ListGroup>)}

        </Col>
        <Col md={4}>
            <Card>
                <ListGroup>
                    <ListGroup.Item>
                     Total price :  {cartItem.reduce((acc, item) => acc + item.price, 0)}
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Cart
