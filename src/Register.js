import { Button, FloatingLabel, Form } from "react-bootstrap"
import { Link } from "react-router-dom"
import Header from "./Header"

const Register = () => {

  return (
    <>
    <Header />
    <main className="form-container">
      <Form className="form-box w-100 m-auto">
        <h1 className="h3 mb-3 fw-normal">Register</h1>
        <p>Sudah Registrasi? <Link to="/login">Login</Link></p>
        <FloatingLabel label="Nama" controlId="formNama">
          <Form.Control className="atas" placeholder="jhondoe"></Form.Control>
        </FloatingLabel>
        <FloatingLabel label="User ID" controlId="formUserID">
          <Form.Control className="tengah" placeholder="jhondoe"></Form.Control>
        </FloatingLabel>
        <FloatingLabel label="Password" controlId="formPassword">
          <Form.Control className="tengah" placeholder="pasword"></Form.Control>
        </FloatingLabel>
        <FloatingLabel label="Verifikasi Password" controlId="formUlangiPassword">
          <Form.Control className="bawah" placeholder="pasword"></Form.Control>
        </FloatingLabel>
        <Button className="w-100 mt-3">Registrasi</Button>
      </Form>
    </main>
    </>
  )
}

export default Register