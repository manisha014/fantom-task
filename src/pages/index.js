import React from "react";
import Header from '../components/Header/Header';
import MainHeading from '../components/MainHeading/MainHeading';
import Subtitle from '../components/SubtitleSection/Subtitle';
import Features from '../components/Features/Features';
import Footer from '../components/Footer/Footer';
import './index.scss';
export default () => {
    return(
        <div>
            <Header></Header>
            <main>
                <MainHeading></MainHeading>
                <Subtitle></Subtitle>
                <Features></Features>
            </main>
            <Footer></Footer>
        </div>
    )
} 
