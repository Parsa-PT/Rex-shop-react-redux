import {  useEffect } from 'react'
import { Row , Col } from 'react-bootstrap'
import Product from '../components/Product/Product'
import { useDispatch , useSelector } from 'react-redux'
import { productActionsList } from '../action/productAction'


const Home = () => {


  const dispatch = useDispatch()
  const productlist = useSelector((state)=>(
    state.productsList
  ))

  const { loading , products} = productlist

  useEffect(()=>{
    dispatch(productActionsList())
  } , [dispatch])

  return (
    <div>
      {loading ? <h2>Loading...</h2> : <Row>
            <h3>product</h3>
            
            {products.map((item) =>{
                return(
                
                <Col key={item._id} sm={12} md={6} lg={4}>
                    <Product product={item} />
                </Col>
                ) 
            })}
        </Row>}
        
    </div>
  )
}

export default Home
