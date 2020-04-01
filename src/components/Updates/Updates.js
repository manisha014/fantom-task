import React from 'react';
import Container from 'react-bootstrap/Container';
import Portals from '../PortalCards/Portals';
import classes from './update.module.scss';
const updates = () => {
    return(
        <div className={classes.outer}>
            <Container>
                <Portals></Portals>
                <div className={classes.updateForm}>
                    <h3>Get the latest updates</h3>
                    <div className={classes.emailInput}>
                        <input type="email" required placeholder="Enter your email address"></input>
                        <button>Sign Up</button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default updates;