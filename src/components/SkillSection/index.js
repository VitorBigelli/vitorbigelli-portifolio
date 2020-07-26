import React from 'react' 
import { Container, Row, Col } from 'react-bootstrap'
import neo4j_logo from '../../assets/neo4j.png'
import mongo_logo from '../../assets/mongo.png'
import react_logo from '../../assets/react.png'
import docker_logo from '../../assets/docker.png'
import node_logo from '../../assets/node.png'

import './index.css'

const skills = [
  { 
    image: docker_logo, 
    
  }
]

const SkillSection = () => {
    return (
      <section className='section green-bg'>
        <Container> 
          <Row>
            <Col>
              <h1> My Skills </h1> 
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={3} className='subsection'>
                <Row> 
                  <Col>
                    <h3> Front-End </h3>
                  </Col>                 
                </Row>
                <Row> 
                  <Col>
                    <img src={react_logo} className='skill-image' />
                  </Col>                 
                </Row>
            </Col>
            <Col sm={12} md={3}  className='subsection'>
                <Row> 
                  <Col>
                    <h3> Back-End </h3>
                  </Col>                 
                </Row>
                <Row> 
                  <Col>
                    <img src={node_logo} className='skill-image' />
                  </Col>                 
                </Row>
            </Col>
            <Col sm={12} md={3} className='subsection'>
              <Container>
                <Row> 
                  <Col>
                    <h3> Database </h3>
                  </Col>                 
                </Row>
                <Row> 
                  <Col md={12} ls={12}>
                    <img src={mongo_logo} className='skill-image' />
                  </Col>  
                  <Col md={12} ls={12}>
                    <img src={neo4j_logo} className='skill-image' />
                  </Col>                 
                </Row>
              </Container>
            </Col>
            <Col sm={12} md={3} className='subsection'>
                <Row> 
                  <Col>
                    <h3> Deployment </h3>
                  </Col>                 
                </Row>
                <Row> 
                  <Col>
                    <img src={docker_logo} className='skill-image' />
                  </Col>                 
                </Row>
            </Col>
          </Row>
        </Container>
      </section>
    )
}

export default SkillSection