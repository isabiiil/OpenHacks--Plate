import React, { Component } from "react";
import './App.css';
import HomeImage from './res/comp.svg';
import LogoIcon from './res/dinner.svg';
import { Link } from 'react-router-dom';

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
                        <p>Plate.</p>
                    </Link>
                </div>
                <img className = "HomeImage" src = {HomeImage} alt = "Man next to project folders with check marks" />
                {/* <h1>How much do you have on your PLATE?</h1>
                <p>Keep track of all your tasks and responsibilities. Reprioritize based on time consumption and focus on efficiency instead. Get it done with Plate!</p> */}
            </div>
        );
    }
}

export default Home;