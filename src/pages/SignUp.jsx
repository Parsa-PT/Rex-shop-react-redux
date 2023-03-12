import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import {  useNavigate } from 'react-router-dom'
import axios from "axios";

function SignUp({setSignupBtn}) {

    const {register, handleSubmit , setError , formState: { errors } } = useForm()

    const navigate = useNavigate()

    


    const formHandle = (data)=>{
        
        axios.post('http://localhost:9000/profile' , {
          name : data.username,
          email: data.email,
          pass : data.pass
        })

        // setSignupBtn(false)
        navigate('/')
    }
    


  return (
   <>
    <Form onSubmit={handleSubmit(formHandle)}>
        <Form.Group className="mb-3" controlId="formBasicusername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" {...register('username' , {required: true , minLength: 0 , pattern: /^[A-Za-z]+$/i })} placeholder="Username" />
        {errors.username &&  <label style={{color : 'red'}} >Username invalid</label>}
        
      </Form.Group>
   
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control  type="email" {...register('email', {required: true , minLength: 0 })} placeholder="Enter email" />
        {errors.email && <label style={{color : 'red'}} >Email invalid</label>}
      </Form.Group>
      

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" {...register('pass', {required: true , minLength: 10 })} placeholder="Password" />
        {errors.pass && <label style={{color : 'red'}} >Password to short and invalid</label>}
      </Form.Group>
      <Button  variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    </> 
  );
}

export default SignUp;
