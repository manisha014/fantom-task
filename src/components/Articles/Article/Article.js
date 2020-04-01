import React from 'react';
import classes from './article.module.scss';
const article = () => {
    return (
        <div className={classes.article}>
            <a href="https://medium.com/fantomfoundation/fantom-integrates-chainlink-as-its-official-oracle-solution-and-
            price-feed-mechanism-for-the-ftm-10b7a66ea384?source=rss----93054e45d0c1---4">
                <div className="heading">
                    <h4>Fantom Integrates Chainlink as its Official Oracle Solution and Price Feed Mechanism for the FTM…</h4>
                    <p>March 31, 2020</p>
                </div>
                <div className="card-content">
                    <p>Fantom is excited to integrate Chainlink as the official oracle solution recommended for use by all
                         Fantom developers! After extensive research, we’ve...</p>
                </div>
                <div className="read">
                    <span>Read More</span>
                </div>
            </a>
        </div>
    )
}

export default article;