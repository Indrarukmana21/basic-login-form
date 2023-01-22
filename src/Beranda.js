import { Container, Row, Col } from "react-bootstrap"
import Header from "./Header"

const Beranda = () => {

  return (
    <>
      <Header />
      <Container className="py-5">
        <Row className="py-lg-5">
          <Col>
            <h2>Andi Indra Rukmana Journey</h2>
            <h6>I'm Andi Indra Rukmana, a growth networker and passionate on datacenter. I have more than 8 years of experience in the field of IT Infrastructure and Networking. My expertise lies in datacenter design, implementation, and maintenance. I also have extensive knowledge on virtualization, storage, and security solutions.

I'm currently working as a Network Administrator at PT. ABC, where I'm responsible for managing the datacenter and ensuring the network is running efficiently. I'm also responsible for the development and implementation of new technologies and solutions to improve the overall performance of the datacenter.

I'm passionate about learning new technologies and solutions, and I'm always on the lookout for new challenges that can help me grow professionally. I'm also a member of the Indonesian Networking Association and the Indonesian Data Center Association.</h6>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Beranda