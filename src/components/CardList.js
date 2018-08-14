import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    //build an array of Cards
    const cardComponents = robots.map((user, i) => {
        return (
            <Card 
                key={i}
                id={robots[i].id} 
                name={robots[i].name} 
                email={robots[i].email} 
            /> 
        );
    });

    // if(true) {
    //     //Error will be thrown and caught in the ErrorBoundry, when the app is not in PROD
    //     throw new Error('noooo');
    // }

    //return a div with the array of cards
    return (
        <div>
            {cardComponents}    
        </div>
    );
}

export default CardList;