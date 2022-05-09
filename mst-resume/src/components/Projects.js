import React, { Component } from 'react'
import {
    Container,
    Row,
    Col,
    Modal,
    Button
} from 'react-bootstrap'
import './Resume.css'
import './Experience.css'
import AMBBrandBook from '../asset/AMBUSH-Brand-Book-Final-Cover.png'
import AMBLookBook from '../asset/AMBUSH-Lookbook-Final-Cover.png'
import v1 from '../asset/v1.png'
import v2 from '../asset/v2.png'
import v3 from '../asset/v3.png'



export default class Projects extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ShowModal: false,
            DisplayContent: null
        }


    }

    componentDidMount = () => {

    }

    RenderDocs = (src) => {
        return (<iframe src={"https://docs.google.com/viewer?url=" + src + "&embedded=true"} title="file" width="100%" height="500"  />)
    }

    ToggleModal = (show) => { 
        this.setState({ShowModal: show})
    }


    Display = (content) => {
        this.setState({DisplayContent: content})
        this.ToggleModal(true)
    }

    render() {
        return (
            <Container style={{ marginTop: "20px" }}>
                <Row>
                    <Col sm={12} md={12} lg={12} style={{ display: "flex" }}>
                        <h2 style={{ margin: "auto", marginBottom: "20px" }}>Personal Projects</h2>
                    </Col>
                </Row>
                <Row id="custom-row">
                    <Col id="project-row" sm={12} md={12} lg={12}>
                        <h2>AMBUSH Brand Book Final</h2>
                        <img id="project-img" src={AMBBrandBook} alt="AMBUSH Brand Book Final" />
                        <hr />
                        <Button variant="success">Show Full PDF Book</Button>
                    </Col>
                </Row>
                <Row id="custom-row">
                    <Col id="project-row" sm={12} md={12} lg={12}>
                        <h2>AMBUSH Look Book Final</h2>
                        <img id="project-img" src={AMBLookBook} alt="AMBUSH Look Book Final" />
                        <hr />
                        <Button variant="success">Show Full PDF Book</Button>
                    </Col>
                </Row>
                <Row id="custom-row">
                    <Col id="project-row" sm={12} md={12} lg={12}>
                        <h2>ROBERTO CAVALLI VOLUME I - PAST</h2>
                        <img id="project-img" src={v1} alt="AMBUSH Brand Book Final"/>
                        <hr />
                        <Button variant="success">Show Full PDF Book</Button>
                    </Col>
                </Row>
                <Row id="custom-row">
                    <Col id="project-row" sm={12} md={12} lg={12}>
                        <h2>ROBERTO CAVALLI VOLUME II - PRESENT</h2>
                        <img id="project-img" src={v2} alt="AMBUSH Brand Book Final"/>
                        <hr />
                        <Button variant="success">Show Full PDF Book</Button>
                    </Col>
                </Row>
                <Row id="custom-row">
                    <Col id="project-row" sm={12} md={12} lg={12}>
                        <h2>ROBERTO CAVALLI VOLUME III - FUTURE</h2>
                        <img id="project-img" src={v3} alt="AMBUSH Brand Book Final"/>
                        <hr />
                        <Button variant="success">Show Full PDF Book</Button>
                    </Col>
                </Row>
                <Modal show={this.state.ShowModal} onHide={()=>{this.ToggleModal(false)}} backdrop="static" keyboard={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.state.DisplayContent == null ? null : this.RenderDocs(this.state.DisplayContent)}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={()=>{this.ToggleModal(false)}}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        )
    }
}
