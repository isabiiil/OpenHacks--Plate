import React, { Component } from "react";
import { Link } from 'react-router-dom';

import 'antd/dist/antd.css';
import './App.css';

import HomeImage from './res/comp.svg';
import LogoIcon from './res/dinner.svg';
import Blob from './res/blob.svg';

import { Button } from 'antd';

class Home extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return(
            <div className = "homepage">
                <div className = "header">
                    <Link to = "/">
                        <img className = "Logo" src = {LogoIcon} alt = "Logo" />
                        <h6>Plate.</h6>
                    </Link>
                </div>
                <img className = "HomeImage" src = {HomeImage} alt = "Man next to project folders with check marks" />
                <img className = "Blob" src = {Blob} alt = "Blob background" />
                <div className = "description">
                    <h1>How much do you have on your PLATE?</h1>
                    <p>Keep track of all your tasks and responsibilities. Reprioritize based on time consumption and focus on efficiency instead. Get it done with Plate!</p>
                    <Link to = "/login">
                        <Button type="primary" shape="round">
                            Log In
                        </Button>
                    </Link>
                    <Link to = "/register">
                        <Button type="primary" shape="round">
                            Sign Up
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Home;