import React from 'react';
import './card.css';


const Card = (props) => {
    // ES6
    const { name , username , email } = props.robot;
    
    return (
        <div className='robo-container bg-light-green br3 pa3 ma2 grow bw2 shadow-4 flex-display'>
            <img src={`https://robohash.org/${username}?200x200`} alt='Robo'/>
            <div className='robo-information-container'>
                <h2>
                    {name}
                </h2>
                <p>
                    {email}
                </p>
            </div>
        </div>
    );
}


export default Card;