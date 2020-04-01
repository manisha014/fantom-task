import React from 'react';
import Container from 'react-bootstrap/Container';
import Slider from "react-slick";
import Article from '../Article/Article';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slick=()=>{
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
    return(
        <Container>
            <Slider {...settings}>
                <Article
                    
                ></Article>
            </Slider>
        </Container>
    )
}

export default slick;