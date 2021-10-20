import React, { useState } from 'react';
import registerImg from '../../img/register.jpg';
import { Button, Nav, Navbar, Container, variant, Form, Row, Col } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const Register = () => {
  const { handleRegister,email,setEmail,password,setPassword,error } = useAuth();
  const [toggle,setToggle] = useState(false);

  const handleEmailChange = (e) =>{

    setEmail(e.target.value);
  }
  const handlePasswordChange = (e) =>{

    setPassword(e.target.value);
  }
  return (
    <div>
      <div className="row ">
        <div className="col-md-4 p-5 ">
          <h3 className="text-center">Register Now</h3>
          <Form onSubmit ={handleRegister}>
            <Row >
              <Form.Group  controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required="" />
              </Form.Group>

              <Form.Group controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control  onBlur={handlePasswordChange} type="password" placeholder="Password"  required=""/>
              </Form.Group>
            </Row>



            <Form.Group className="mb-3 p-5" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Already Register?" />
            </Form.Group>
            <p className="text-warning"> {error}</p>

            <Button variant="primary " type="submit">
              Register
            </Button>
          </Form>
        </div>
        <div className="col-md-8">
         <img className="p-5" src={registerImg} alt=""/>
        </div>
      </div>


    </div>
  );
};

export default Register;