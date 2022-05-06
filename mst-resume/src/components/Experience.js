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




export default class Experience extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }


    render() {
        return (
            <Container style={{ marginTop: "20px" }}>
                <Row>
                    <Col sm={12} md={12} lg={12} style={{ display: "flex"}}>
                        <h2 style={{margin: "auto", marginBottom: "20px"}}>Work Experience</h2>
                    </Col>
                </Row>

                <Row id="custom-row">
                    <Col sm={4} md={4} lg={4}>
                        <h5>October 2021 - April 2022</h5>
                        <p>Xariss Luxury Experience</p>
                        <p>Florence, Italy</p>
                    </Col>
                    <Col sm={8} md={8} lg={8}>
                        <h2>Social Media Marketing Intern</h2>
                        <hr />
                        <ul>
                            <li>
                                Strategic program development and implementation of Chinese Market using
                                social media Little Red Book (Xiaohongshu), including created content,
                                promoted campaigns, negotiated with KOC and interacted with audiences.
                            </li>
                            <li>
                                Directed and assisted live broadcasts with partner brands on official Instagram
                                for reaching out audiences and increasing followers.
                            </li>
                            <li>
                                Collected and researched data of Italian luxury brands and Italian multibrand stores to compile into
                                analytical reports in order to take the next step in
                                brand awareness for the client.
                            </li>
                            <li>
                                Participated in event planning and successfully held two online events in Italy.
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row id="custom-row">
                    <Col sm={4} md={4} lg={4}>
                        <h5>March 2020 - May 2021</h5>
                        <p>Chinese Universe Co.,Ltd</p>
                        <p>Beijing, China</p>
                    </Col>
                    <Col sm={8} md={8} lg={8}>
                        <h2>Co-Founder & Operating Director</h2>
                        <hr/>
                        <ul>
                            <li>
                                Operated Chinese social platforms (WeChat, Douyin, Weibo) and acquired 100k
                                followers on official WeChat account in 6 months.
                            </li>
                            <li>
                                Cooperated with Chinese emerging brands and heritage brands, assisted them
                                in getting more public popularity.
                            </li>
                            <li>
                                Cooperated with People's Daily and planned an offline forum event of
                                combining contemporary aesthetics with Chinese culture, and successfully
                                obtained investment from Chinese government.
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row id="custom-row">
                    <Col sm={4} md={4} lg={4}>
                        <h5>December 2018 - September 2019</h5>
                        <p>Breitling Flagship Boutique</p>
                        <p>Beijing, China</p>
                    </Col>
                    <Col sm={8} md={8} lg={8}>
                        <h2>Flagship Senior Sales</h2>
                        <hr />
                        <ul>
                            <li>
                                Provided excellent customer service and helped customers to purchase
                                products, ensuring that their needs and preference were fully met.
                            </li>
                            <li>
                                Emphasized produce features based on analysis of customers needs.
                            </li>
                            <li>
                                Provided efficient after-sales service and tailor-made experiences, exceeded
                                targeted sales goals by 23% monthly.
                            </li>
                            <li>
                                Improved customer satisfaction and provide personalized services based on
                                information in Salesforce CRM.
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row id="custom-row">
                    <Col sm={4} md={4} lg={4}>
                        <h5>June 2015 - September 2018</h5>
                        <p>Yiqin Trading Co.,Ltd</p>
                        <p>Shenzhen, China</p>
                    </Col>
                    <Col sm={8} md={8} lg={8}>
                        <h2>Founder/Manager of E-Sales, Marketing and Customer Service</h2>
                        <hr />
                        <ul>
                            <li>
                                Conceived and developed an e-commerce resale wall decor store.
                            </li>
                            <li>
                                Implemented marketing strategy and analyzed trends to define and estblish saled objectives.
                            </li>
                            <li>
                                Monitored trends and implemented adoption of social media tools to result in
                                significant increase traffic and sales
                            </li>
                            <li>
                                Managed and evolved entire customer service, and cooperated with SF Express
                                to provide customers with high-quality transportation guarantee.
                            </li>
                            <li>
                                Developed agency branches to expand sales coverage.
                            </li>
                            <li>
                                Developed new promotional campaign by bundling products together for
                                online business, increasing sales revenue by 54%.
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        )
    }
}
