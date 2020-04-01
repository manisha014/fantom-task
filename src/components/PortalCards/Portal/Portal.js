import React from 'react';
import classes from './portal.module.scss';
const portal = (props) => {
    let imgClass=props.name==="developer"? classes.developer : classes.foundation;
    return (
        <div className={classes.card}>
            <div className={`${classes.img} ${imgClass}`}></div>
            <h3>{props.heading}</h3>
            <p>{props.description}</p>
            <div className={classes.btn}>Learn More</div>
        </div>
    )
}

export default portal;