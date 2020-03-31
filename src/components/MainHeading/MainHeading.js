import React from 'react';
import classes from './mainHeading.module.scss';
import Container from 'react-bootstrap/Container';
const mainHeading=()=>{
    return (
        <div className={classes.mainSection}>
            <Container>
                <h1>The core of the new internet</h1>
            </Container>
        </div>
    )
}

export default mainHeading;