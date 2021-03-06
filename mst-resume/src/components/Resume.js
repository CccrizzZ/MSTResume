import React, { Component } from 'react'
import avatar from '../asset/avatar.jpg'
import './Resume.css'
import {
    Container,
    Row,
    Col,
    Navbar,
    Nav,
    NavDropdown
} from 'react-bootstrap'
import { 
    Linkedin,
    TelephoneFill,
    EnvelopeFill
} from 'react-bootstrap-icons';
import Experience from './Experience'
import Education from './Education'
import Projects from './Projects';


export default class Resume extends Component {

    constructor(props) {
        super(props)

        this.state = {
            active: "home",

        }
    }


    // set current page to page
    GotoPage = (page) => {
        this.setState({active: page})
        window.scrollTo(0, 0)
    }


    // redner the app
    RenderApp = () => {
        switch (this.state.active) {
            case "home":
                console.log("home")
                return (this.RenderHome())
            case "projects":
                return(<Projects/>)
            case "websites":
                break;
                
            case "experience":
                return(<Experience/>)
            case "education":
                return(<Education/>)
            default:
                break;
        }
    }


    // render home
    RenderHome = () => {
        return (
            <Container style={{ marginTop: "20px" }}>
                <Row>
                    <Col sm={4} md={4} lg={4}>
                        <img alt="avatar" id="avatar" src={avatar} />


                    </Col>
                    <Col sm={8} md={8} lg={8}>
                        <h1 style={{ marginTop: "20px" }}>MENG SITONG</h1>
                        <hr style={{ width: "62%" }} />

                        <p id="resume_italic"><TelephoneFill/> (+39) 348-382-7352</p>
                        <p id="resume_italic"><EnvelopeFill/> mengsitong4@gmail.com</p>
                        <Linkedin/> <a style={{ color: "#fff", fontSize: "12px" }} href="http://linkedin.com/in/sitong-meng-3aa332207">http://linkedin.com/in/sitong-meng-3aa332207</a>
                        
                        
                        <hr />
                        <br />

                        {/* personal summary */}
                        <h2>About Me</h2>
                        <p>
                            Experienced 5+ years in digital marketing, branding, and new
                            business strategy across social media. Skilled in evaluating
                            needs, analyzing customer trends and implementing strategies
                            and new digital marketing campaigns to drive revenue and
                            brand awareness.
                        </p>
                        <hr style={{ margin: "auto" }} />

                    </Col>
                </Row>

                <Row style={{ marginTop: "40px", paddingLeft: "0px" }} >
                    <Col sm={4} md={4} lg={4}>

                    </Col>
                    <Col sm={8} md={8} lg={8}>
                        <h2>Language</h2>
                        <div>
                            <p id="resume_italic">
                                - English (Advanced)
                                <br/>
                                - Chinese (Native)
                                <br/>
                                - Cantonese (Native)
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }




    render() {
        return (
            <>
                <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container className="nav-container">
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav style={{ margin: "auto" }} className="me-auto">
                                <Nav.Link onClick={()=>{this.GotoPage("home")}}>Home</Nav.Link>
                                <Nav.Link onClick={()=>{this.GotoPage("projects")}}>Projects</Nav.Link>
                                <NavDropdown title="Personal Bio" id="collasible-nav-dropdown" menuVariant="dark">
                                    <NavDropdown.Item onClick={()=>{this.GotoPage("experience")}}>Work Experience</NavDropdown.Item>
                                    <NavDropdown.Item onClick={()=>{this.GotoPage("education")}}>Education</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item >Others</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>


                <div id="resume" className="backglow" style={{ marginTop: "12vh" }}>
                    {this.RenderApp()}
                </div>

            </>
        )
    }
}
