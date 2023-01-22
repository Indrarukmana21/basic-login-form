import { Button, FloatingLabel, Form } from "react-bootstrap"
import { Link } from "react-router-dom"
import Header from "./Header"
import React, { useState } from 'react';
import { useEffect } from 'react';

function LoginForm() {
  const [error, setError] = useState('');
  const [blocked, setBlocked] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [captcha, setCaptcha] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (captcha) {
      // handle login logic
    } else {
      setError('Please complete the captcha');
    }
  }

  function handleCaptcha(value) {
    setCaptcha(value);
  }

  useEffect(() => {
    if (attempts >= 3) {
      setBlocked(true);
      setTimeout(() => setBlocked(false), 30000);
    }
  }, [attempts]);

  return (
    <>
      <Header />
      <main className="form-container">
        <Form className="form-box w-100 m-auto">
          <h1 className="h3 mb-3 fw-normal">Login</h1>
          <p>Belum Registrasi? <Link to="/register">Register</Link></p>
          <FloatingLabel label="User ID" controlId="formUserID">
            <Form.Control className="atas" placeholder="jhondoe"></Form.Control>
          </FloatingLabel>
          <FloatingLabel label="Password" controlId="formPassword">
            <Form.Control className="bawah" placeholder="pasword"></Form.Control>
          </FloatingLabel>
          <Button className="w-100 mt-3">Login</Button>
        </Form>
      </main>
    </>
  )
}


export default LoginForm