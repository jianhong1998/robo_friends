import React from 'react';
import Card from './card';

const CardList = ({ robots }) => {
    const cardComponent = robots.map((user , i) => {
        return <Card key = {i} robot = {robots[i]} />;
    });


    return (
        <div className='flex-display justify-center'>
            {cardComponent}
        </div>
    );
}

export default CardList;