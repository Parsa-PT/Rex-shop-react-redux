import React, { useState ,useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './header.css'
import { LinkContainer } from 'react-router-bootstrap';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';



const Header = ({signupBtn}) => {
  let [pannel , setPannel] = useState(false)
  

  const accClick = ()=>{

  
      setPannel(pannel = !pannel)
    
    
  }

  return (
    <header>
       <Navbar className='navbar' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <LinkContainer to='/' >
          <Navbar.Brand className='mt-sm-2' href="#home">REX</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle className='toggle' aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto mt-sm-2">
            <LinkContainer to='/'>
                <Nav.Link className='navL' href="#features">Product</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/news'>
               <Nav.Link className='navL' href="#pricing">News</Nav.Link> 
           </LinkContainer>
           <LinkContainer to='/about'>
                <Nav.Link className='navL' href="#tricing">About</Nav.Link>
            </LinkContainer>
          </Nav>
  
          
          <LinkContainer to='/cart'>
            <div className='cart'>
                <AiOutlineShoppingCart size={24} style={{color : 'white'}} />
            </div>
          </LinkContainer>
          <LinkContainer to='/pro'>
            <div className='pro'>
                <CgProfile size={24} onClick={accClick} style={{color : 'white'}} />
            </div>
            </LinkContainer>
          {signupBtn ? <Button  variant="outline-warning" ><Link className='btn' to='/signup' >Sign up</Link></Button> : null}
           
              
          

          
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </header>
  )
}

export default Header
