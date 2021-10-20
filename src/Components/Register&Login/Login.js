import React from 'react';
import loginImag from '../../img/login.jpg';
import { Button,Nav,Navbar,Container,variant,Form,Row,Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {

  const  {signInUsingGoogle,signInUsingGithub,user,handleLogin}  = useAuth();
    return (
        <div>
          

            <div className="row ">
        <div className="col-md-4 p-5 ">
          <h3 className="text-center">Login Now</h3>
          <Form onSubmit ={handleLogin}>
            <Row >
              <Form.Group  controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Row>



            <Form.Group className="mb-3 p-5" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Already Register?" />
            </Form.Group>

            <Button variant="primary " type="submit">
              Login
            </Button>
          </Form>
        </div>
        <div className="col-md-8">
         <img className="p-5" src={loginImag} alt=""/>
        </div>
      </div>
      <p className="text-primary" text-center>------OR-------</p>
      <br/>
      <Button variant="secondary" onClick={ signInUsingGoogle } type="submit">Sign in Google</Button>
   
      <Button variant="dark" onClick={signInUsingGithub} type="submit">Sign in Github</Button>
     
        </div>
    );
};

export default Login;