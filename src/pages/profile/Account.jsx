import axios from 'axios'


import './acc.css'
import { ListGroup , Col } from 'react-bootstrap';
import { useState ,useEffect } from 'react';


const Account = () => {

  const [info , setInfo ] = useState([])



  useEffect(()=>{
    axios.get('http://localhost:9000/profile')
      .then(re => {
        setInfo(re.data)
      })
    },[])


  return (
    <div>
      <h2>Profile</h2>
    <Col>

      <ListGroup>
        <ListGroup.Item>
          Username :  {info.name}
        </ListGroup.Item>
        <ListGroup.Item>
          Email :  {info.email}
        </ListGroup.Item>

      </ListGroup>

    </Col>

    </div>
  )
}

export default Account
