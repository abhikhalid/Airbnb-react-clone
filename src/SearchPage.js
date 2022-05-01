import { Button } from '@mui/material';
import React from 'react';

import './SearchPage.css';
import SearchResult from './SearchResult';

const SearchPage = () => {
    return (
        <div className="searchPage">

            <div className="searchPage__info">
                <p>62 stays . 26 guest to 30 guest . 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>

            <SearchResult
                img="https://q-xx.bstatic.com/xdata/images/hotel/max1000/288044697.jpg?k=8e5e7c24287d291b52c7de19d916b27db533bbae6681b1333b6fc549484b154a"
                location="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi .Kitchen . Free Parking . Washing Machine"
                star="$30 / night"
                total="$117 total"
            />
            <SearchResult
                img="https://q-xx.bstatic.com/xdata/images/hotel/max1000/288044697.jpg?k=8e5e7c24287d291b52c7de19d916b27db533bbae6681b1333b6fc549484b154a"
                location="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi .Kitchen . Free Parking . Washing Machine"
                star="$30 / night"
                total="$117 total"
            />
            <SearchResult
                img="https://q-xx.bstatic.com/xdata/images/hotel/max1000/288044697.jpg?k=8e5e7c24287d291b52c7de19d916b27db533bbae6681b1333b6fc549484b154a"
                location="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi .Kitchen . Free Parking . Washing Machine"
                star="$30 / night"
                total="$117 total"
            />




        </div>
    );
};

export default SearchPage;