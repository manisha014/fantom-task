import React from 'react';
import Container from 'react-bootstrap/Container';
import Feature from './Feature/Feature';
import classes from './features.module.scss';
const features = () => {
    return(
        <Container>
            <div className={classes.offerDescription}>
                <h2>Built with the future in mind</h2>
                <p>Fantom offers the most powerful foundations for decentralized ledgers.</p>
            </div>
            <div className={classes.features}>
                <Feature
                    title="Scalable"
                    name="scalable"
                    description="Our consensus mechanisms — Lachesis and TxFlow — can scale where others cannot."
                ></Feature>
                <Feature
                    title="Secure"
                    name="secure"
                    description="Asynchronous Byzantine Fault Tolerant consensus mechanisms provide bank-grade security
                     for any distributed ledger application."
                ></Feature>
                <Feature
                    title="Fast"
                    name="fast"
                    description="Fantom consensus is designed to support high throughput, while maintaining security, responsivity,
                    and quick settlements."
                ></Feature>
                <Feature
                    title="Connected"
                    name="connected"
                    description="Products and ledgers using Fantom's SDK can interact with each other through non-custodial bridges and 
                    bonded tokens."
                ></Feature>
                <Feature
                    title="Permissionless"
                    name="permissionless"
                    description="We designed Fantom SDK to be used with networks that are secured through Proof-of-Stake, with on-chain
                    governance for maximum network participation."
                ></Feature>
                <Feature
                    title="Open-source"
                    name="openSource"
                    description="All code, research, and repositories created by the Fantom core development team are available publicly for 
                    peer review and improvements."
                ></Feature>
            </div>
        </Container>
    )
}

export default features;