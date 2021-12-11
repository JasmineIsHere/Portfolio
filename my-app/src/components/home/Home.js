import React, { Component } from 'react'
import './Home.css'
import {Button} from 'react-bootstrap';

import '../../image/portfolio_home.png';

export default class Home extends Component {
    render() {
        return (
            <div className = "Home">
                <div className="left-text">
                    <p className="title">​OMG HI THERE!</p>
                    <p className="subtitle">This is JASMINE.</p>
                    <p className="text">Welcome to my portfolio. From experimental passion projects to commissioned work for clients, I’ve had the opportunity to dabble in many areas - software development, marketing and design. I thrive on creative challenges and enjoy building strong relationships along the way. Explore my work below, and contact me directly to learn more.</p>
                    <div className="button-group">
                        <Button className="button" variant="outline-dark">My Work</Button>
                        <Button className="button" variant="light">Get in Touch</Button>
                    </div>
                </div>
                <div className = "right-pic">
                    <img src = "portfolio_home.png" alt="not found"/>
                </div>
            </div>
        )
    }
}
