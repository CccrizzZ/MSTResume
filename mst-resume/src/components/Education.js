import React, { Component } from 'react'

export default class Education extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div class="container" id="resume-cards" style={{ marginTop: "40px" }}>
                <div class="row" style={{ marginBottom: "20px" }}>
                    <h2>Education</h2>
                    <div class="col-4" style={{ paddingLeft: "40px" }}>
                        <h5>September 2020 - August 2021</h5>
                        <h6>Polimoda</h6>
                        <h6>Florence, Italy</h6>
                    </div>
                    <div class="col-8">
                        <h2>Master in Fashion Brand Management</h2>
                        <h6>GPA: 3.8</h6>
                    </div>
                </div>
                <div class="row" style={{ marginBottom: "20px" }}>
                    <div class="col-4" style={{ paddingLeft: "40px" }}>
                        <h5>September 2013 - May 2018</h5>
                        <h6>Xi’An University Of Technology</h6>
                        <h6>Xi’An, China</h6>
                    </div>
                    <div class="col-8">
                        <h2>Master in Fashion Brand Management</h2>
                        <h6>GPA: 3.8</h6>
                    </div>
                </div>
            </div>
        )
    }
}
