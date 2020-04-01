import React from 'react';
import classes from './intro.module.scss';
import Container from 'react-bootstrap/Container';
import logo from '../../images/homePage/home/fantom_logo.png';
const introSection = () => {
    return(
        <Container className={classes.intro}>
            <div className={classes.icon}>
                <img src={logo} alt="fantom"></img>
            </div>
            <div className={classes.introText}>
                <h2>Introduction to Fantom</h2>
                <p>The Ecosystem, The Consensus, The Innovation.</p>
                <div className={classes.introBtn}>
                    <button>Learn More</button>
                </div>
            </div>
        </Container>
    )
}

export default introSection;