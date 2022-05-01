import React from 'react';
import Banner from './Banner';
import Card from './Card';

import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <Banner />

            <div className="home__section">
                <Card
                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/00/b1/ae/the-enchanted.jpg?w=900&h=-1&s=1"
                    title="Online Experiences"
                    description="Unique activities we can do together, led by a world of hotst."
                />
                <Card
                    src="https://content.r9cdn.net/himg/9e/e9/db/arbisoftimages-154293-super-deluxe-twin-01-image.jpg"
                    title="Unique stays"
                    description="Spaces that are more than just a place to sleep."
                />
                <Card
                    src="https://media-cdn.tripadvisor.com/media/photo-s/15/3b/47/0d/executive-1-bedroom-queen.jpg"
                    title="Entire homes"
                    description="Comfortable private places,with room for friends or family"
                />
            </div>
            <div className="home__section">
                <Card
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzREKuwTm4q03x_ZGFjPTCHfQj-Hr5j4tSNt4XX7g8r5lwyRkREjXAm7Eq-Pewa9a4lDc&usqp=CAU"
                    title="Unique stays"
                    description="Spaces that are more than just a place to sleep."
                    price="$10.34"
                />
                <Card
                    src="https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/00/b5/96/the-enchanted.jpg"
                    title="Unique stays"
                    description="Spaces that are more than just a place to sleep."
                    price="$10.34"
                />
                <Card
                    src="https://georgianhousehotel.co.uk/wp-content/uploads/2020/03/Enchanted-Chambers-588x363.jpg"
                    title="Unique stays"
                    description="Spaces that are more than just a place to sleep."
                    price="$10.34"
                />
            </div>

        </div>
    );
};

export default Home;