import React from "react";
import Header from '../components/Header/Header';
import MainHeading from '../components/MainHeading/MainHeading';
import Footer from '../components/Footer/Footer';
import './index.scss';
export default () => {
    return(
        <div>
            <Header></Header>
            <main>
                <MainHeading></MainHeading>
            </main>
            <Footer></Footer>
        </div>
    )
} 
