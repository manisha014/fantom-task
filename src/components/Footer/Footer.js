import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from './footer.module.scss';
import logo from '../../images/homePage/menu-icon/fantom_logo_white_new.svg';
import twitter from '../../images/homePage/footer/twitter.svg';
import telegram from '../../images/homePage/footer/telegram.svg';
import github from '../../images/homePage/footer/github.svg';
import reddit from '../../images/homePage/footer/reddit.svg';
import linkedin from '../../images/homePage/footer/linkedin.svg';
import medium from '../../images/homePage/footer/medium.svg';
const footer=()=>{
    return(
        <div className={classes.footer}>
            <Container>
                <Row className={`${classes.footerContainer}`}>
                    <Col xs={5}>
                        <div className={classes.logo}>
                            <a href="/"><img src={logo} alt="logo"></img></a>
                        </div>
                        <div className={classes.icons}>
                            <a href="/"><img src={twitter} alt="twitter"></img></a>
                            <a href="/"><img src={telegram} alt="telegram"></img></a>
                            <a href="/"><img src={github} alt="github"></img></a>
                            <a href="/"><img src={reddit} alt="redit"></img></a>
                            <a href="/"><img src={linkedin} alt="linkedin"></img></a>
                            <a href="/"><img src={medium} alt="medium"></img></a>
                        </div>
                        <div className={classes.copyrightText}>
                            <p>&nbsp;&nbsp;&nbsp;&copy;2020 Fantom Foundation</p>
                        </div>
                    </Col>
                    <Col className={`${classes.links} ${classes.secondCol}`}>
                        <a href="/">What is Fantom?</a>
                        <a href="/">Developers</a>
                        <a href="/">Articles</a>
                    </Col>
                    <Col className={`${classes.links} ${classes.thirdCol}`}>
                        <a href="/">Foundation</a>
                        <a href="/">White Paper</a>
                        <a href="/">Roadmap</a>
                        <a href="/" className={classes.privacyLink}>Privacy Policy</a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default footer;