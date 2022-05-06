import React, { Component } from 'react'
import {
    Fade,
    Container,
    Row,
    Col,
    Navbar,
    Nav,
    NavDropdown
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
                        <h6>Polimoda</h6>
                        <h5>September 2020 - August 2021</h5>
                        <h6>Florence, Italy</h6>
                    </Col>
                    <Col sm={8} md={8} lg={8}>
                        <h2>Master in Fashion Brand Management</h2>
                        <h6>GPA: 3.8</h6>
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
                        <h6>GPA: 3.32</h6>
                    </Col>
                </Row>
            </Container>
        )
    }
}
