import React from 'react';
import CardItem from './CardItem';
import './Card.css'

function Card() {
    return (
        <div className='cards'>
            <h1>Check out this EPIC destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/img-9.jpg"
                            text="Explore the hidden water fall deep
                            inside the amazon jungle"
                            label="Adventure"
                            path="/services"
                        />
                        <CardItem
                            src="images/img-2.jpg"
                            text="Explore the hidden water fall deep
                            inside the amazon jungle"
                            label="Luxury"
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                    <CardItem
                        src="images/img-5.jpg"
                        text="Explore the hidden water fall deep
                        inside the amazon jungle"
                        label="Future"
                        path="/services"
                    />
                    <CardItem
                        src="images/img-4.jpg"
                        text="Explore the hidden water fall deep
                        inside the amazon jungle"
                        label="Island"
                        path="/services"
                    />
                    <CardItem
                        src="images/img-5.jpg"
                        text="Explore the hidden water fall deep
                        inside the amazon jungle"
                        label="Island"
                        path="/services"
                     />
                </ul>
                </div>
            </div>
        </div>
    )
}

export default Card
