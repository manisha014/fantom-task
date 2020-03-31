import React from 'react';
import Container from 'react-bootstrap/Container';
import logo from '../../images/homePage/menu-icon/fantom_logo_white_new.svg';
import classes from './header.module.scss';
const header=()=>{
    return(
        <header className={classes.header}>
            <Container className={classes.navigation}>
                <h1 className={classes.logo}><span><img src={logo} alt="fantom logo"></img></span></h1>
                <nav>
                    <ul className={classes.mainNavigation}>
                        <li><a href="/">Explorer</a></li>
                        <li><a href="/">Wallet</a></li>
                        <li><a href="/">What is Fantom?</a></li>
                        <li><a href="/">Developers</a></li>
                        <li><a href="/">Articles</a></li>
                        <li><a href="/">Foundation</a></li>
                        <li><a href="/">English</a></li>
                    </ul>
                </nav>
            </Container>
        </header>
    )
}

export default header;