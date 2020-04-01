import React from 'react';
import Container from 'react-bootstrap/Container';
import classes from './subtitle.module.scss';
const subtitle = () => {
    return (
        <Container className={classes.subtitleSection}>
            <h2>The most advanced, fast, and secure consensus for distributed networks.</h2>
            <p>Whether you’re issuing a stablecoin, creating a new smart economy, or powering a smart city, Fantom’s
               modular approach lets you focus on building the perfect decentralized application, or mainnet — as we call it.
            </p>
        </Container>
    )
}

export default subtitle;