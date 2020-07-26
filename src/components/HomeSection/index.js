import React from 'react' 
import { Container, Row, Col } from 'react-bootstrap'
import './index.css'
import react from '../../assets/react.png'
const HomeSection = () => {

    return (
      <section className='section red-bg'>
        <Container>
          <Row>
            <Col>
              <div class="typewriter">
                <h1> Vitor Bigelli </h1>
              </div>
              <div id="shape" class="cube backfaces">
                <div class="plane">
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    )
}

export default HomeSection
