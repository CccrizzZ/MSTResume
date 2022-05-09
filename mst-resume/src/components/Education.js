import React, { Component } from 'react'
import {
    Container,
    Row,
    Col,
    ListGroup
} from 'react-bootstrap'
import './Resume.css'
import './Experience.css'




export default class Education extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <Container style={{ marginTop: "20px" }}>
                <Row>
                    <Col sm={12} md={12} lg={12} style={{ display: "flex" }}>
                        <h2 style={{ margin: "auto", marginBottom: "20px" }}>Education</h2>
                    </Col>
                </Row>

                <Row id="custom-row">
                    <Col sm={4} md={4} lg={4}>
                        <h5>September 2020 - August 2021</h5>
                        <h6>Polimoda</h6>
                        <h6>Florence, Italy</h6>
                    </Col>
                    <Col sm={8} md={8} lg={8}>
                        <h2>Master in Fashion Brand Management</h2>
                    </Col>
                </Row>
                <Row id="custom-row">
                    <Col sm={4} md={4} lg={4}>
                        <h5>September 2013 - May 2018</h5>
                        <h6>Xi’An University Of Technology</h6>
                        <h6>Xi’An, China</h6>
                    </Col>
                    <Col sm={8} md={8} lg={8}>
                        <h2>Bachelor of Arts in Visual Communication Design</h2>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col sm={12} md={12} lg={12} style={{ display: "flex" }}>
                        <h2 style={{ margin: "auto", marginBottom: "20px" }}>Certicate</h2>
                    </Col>
                </Row>
                <Row id="custom-row">
                    <Col sm={4} md={4} lg={4}>
                        <h5>2022</h5>
                        <h6>Google Digital Garage</h6>
                    </Col>
                    <Col sm={8} md={8} lg={8}>
                        <h2>Cetificated in Fundamentals of Digital Marketing</h2>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col sm={12} md={12} lg={12} style={{ display: "flex" }}>
                        <h2 style={{ margin: "auto", marginBottom: "20px" }}>Skill Sets</h2>
                    </Col>
                </Row>
                <Row id="custom-row">
                    <Col style={{ margin: "auto"}} sm={4} md={4} lg={4}>
                        <h5>Hard Skills</h5>
                        <ListGroup>
                            <ListGroup.Item variant="success">Microsoft Office</ListGroup.Item>
                            <ListGroup.Item variant="success">Adobe Photoshop</ListGroup.Item>
                            <ListGroup.Item variant="success">Cloth 3D / Marvelous</ListGroup.Item>
                            <ListGroup.Item variant="success">Procreate / Nomad</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col style={{ margin: "auto"}} sm={4} md={4} lg={4}>
                        <h5>Soft Skills</h5>
                        <ListGroup>
                            <ListGroup.Item variant="success">Fast Learning</ListGroup.Item>
                            <ListGroup.Item variant="success">Problem Solving</ListGroup.Item>
                            <ListGroup.Item variant="success">Critical Thinking</ListGroup.Item>
                            <ListGroup.Item variant="success">Communication Skills</ListGroup.Item>
                            <ListGroup.Item variant="success">Customers Service</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col style={{ margin: "auto"}} sm={4} md={4} lg={4}>
                        <h5>Hobbies</h5>
                        <ListGroup>
                            <ListGroup.Item variant="success">Painting</ListGroup.Item>
                            <ListGroup.Item variant="success">Dance</ListGroup.Item>
                            <ListGroup.Item variant="success">Flute</ListGroup.Item>
                            <ListGroup.Item variant="success">Travel</ListGroup.Item>
                            <ListGroup.Item variant="success">NFT Design</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>

            </Container>
        )
    }
}
