import React from 'react';
import scalable from '../../../images/homePage/offer-icon/scalable.svg';
import secure from '../../../images/homePage/offer-icon/secure.svg';
import fast from '../../../images/homePage/offer-icon/fast.svg';
import connected from '../../../images/homePage/offer-icon/connected.svg';
import permissionless from '../../../images/homePage/offer-icon/permissionless.svg';
import openSource from '../../../images/homePage/offer-icon/openSource.svg';
import classes from './feature.module.scss';
const feature = (props) => {
    let imgClass=null;
    let iconBgColor=props.name;
    if(props.name==="scalable")
    {
        imgClass=scalable;
        iconBgColor=classes.scalable;
    }
    else if(props.name==="secure")
    {
        imgClass=secure;
        iconBgColor=classes.secure;
    }
    else if(props.name==="fast")
    {
        imgClass=fast;
        iconBgColor=classes.fast;
    }
    else if(props.name==="connected")
    {
        imgClass=connected;
        iconBgColor=classes.connected;
    }
    else if(props.name==="permissionless")
    {
        imgClass=permissionless;
        iconBgColor=classes.permissionless;
    }
    else 
    {
        imgClass=openSource;
        iconBgColor=classes.openSource;
    }
    return(
        <div className={classes.feature}>
            <div className={classes.featureText}>
                <h4>{props.title}</h4>
                <p>{props.description}</p>
            </div>
            <div className={`${iconBgColor} ${classes.featureIcon}`}>
                <img src={imgClass} alt={props.name}></img>
            </div>
        </div>
    )
}

export default feature;