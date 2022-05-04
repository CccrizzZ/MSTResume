import React, { Component } from 'react'

export default class SkillsHobbies extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (



            <div class="container" id="resume-cards" style={{ marginTop: "40px" }}>
                <div class="row" style={{ marginBottom: "20px" }}>
                    <div class="col-4" style={{ paddingLeft: "40px" }}>

                    </div>
                    <div class="col-8">

                    </div>
                </div>

                <div class="row" style={{ marginBottom: "20px" }}>
                    <div class="col-4" style={{ paddingLeft: "40px" }}>
                    </div>
                    <div class="col-8">

                    </div>
                </div>

                <div class="row" style={{ marginBottom: "20px" }}>
                    <div class="col-3" style={{ margin: "auto" }}>
                        <h5>Hard Skills</h5>
                        <ul>
                            <li>Social Media Marketing</li>
                            <li>Microsoft Office Suite</li>
                            <li>Adobe Photoshop</li>
                            <li>Cloth 3D/Marvelous</li>
                            <li>Procreate/Nomad</li>
                        </ul>
                    </div>

                    <div class="col-3" style={{ margin: "auto" }}>
                        <h5>Soft Skills</h5>
                        <ul>
                            <li>Fast Learning</li>
                            <li>Problem Solving</li>
                            <li>Critical Thinking</li>
                            <li>Communication Skills</li>
                            <li>Customers Service</li>
                        </ul>
                    </div>

                    <div class="col-3" style={{ margin: "auto" }}>
                        <h5>Hobbies</h5>
                        <ul>
                            <li>Painting</li>
                            <li>Dance</li>
                            <li>Flute</li>
                            <li>Travel</li>
                            <li>NFT Design</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
