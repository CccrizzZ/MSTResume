import React, { Component } from 'react'

export default class Experience extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    
    render() {
        return (
            <div className="container" id="resume-cards" style={{ marginTop: "40px" }}>
                <h2>Work Experience</h2>

                <div className="row" style={{ marginBottom: "40px" }}>
                    <div className="col-4" style={{ paddingLeft: "40px" }}>
                        <h5>October 2021 - April 2022</h5>
                        <h6>Xariss Luxury Experience</h6>
                        <h6>Florence, Italy</h6>
                    </div>
                    <div className="col-8">
                        <h2>Social Media Marketing Intern</h2>
                        <hr style={{ width: "80%" }} />
                        <ul>
                            <li>
                                Strategic program development and implementation of Chinese Market using
                                social media Little Red Book(Xiaohongshu), including created content,
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
                    </div>
                </div>

                <div className="row" style={{ marginBottom: "20px" }}>
                    <div className="col-4" style={{ paddingLeft: "40px" }}>
                        <h5>March 2020 - May 2021</h5>
                        <h6>Chinese Universe Co.,Ltd</h6>
                        <h6>Beijing, China</h6>
                    </div>
                    <div className="col-8">
                        <h2>Co-Founder & Operating Director</h2>
                        <hr style={{ width: "80%" }} />
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
                    </div>
                </div>

                <div className="row" style={{ marginBottom: "20px" }}>
                    <div className="col-4" style={{ paddingLeft: "40px" }}>
                        <h5>December 2018 - September 2019</h5>
                        <h6>Breitling Flagship Boutique</h6>
                        <h6>Beijing, China</h6>
                    </div>
                    <div className="col-8">
                        <h2>Flagship Senior Sales</h2>
                        <hr style={{ width: "80%" }} />
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
                    </div>
                </div>

                <div className="row" style={{ marginBottom: "20px" }}>
                    <div className="col-4" style={{ paddingLeft: "40px" }}>
                        <h5>June 2015 - September 2018</h5>
                        <h6>Yiqin Trading Co.,Ltd</h6>
                        <h6>Shenzhen, China</h6>
                    </div>
                    <div className="col-8">
                        <h2>Founder/Manager of E-Sales, Marketing and Customer Service</h2>
                        <hr style={{ width: "80%" }} />
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
                    </div>
                </div>
            </div>
        )
    }
}
