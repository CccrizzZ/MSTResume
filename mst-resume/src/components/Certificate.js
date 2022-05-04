import React, { Component } from 'react'

export default class Certificate extends Component {
    constructor(props) {
        super(props)

        this.state = {


        }
    }

    render() {
        return (
            <div class="container" id="resume-cards" style={{ marginTop: "40px" }}>
                <div class="row" style={{ marginBottom: "20px" }}>
                    <h2>Certicate</h2>
                    <div class="col-4" style={{ paddingLeft: "40px" }}>
                        <h5>2022</h5>
                        <h6>Google Digital Garage</h6>
                    </div>
                    <div class="col-8">
                        <h2>Cetificated in Fundamentals of Digital Marketing</h2>
                    </div>
                </div>
            </div>
        )
    }
}
