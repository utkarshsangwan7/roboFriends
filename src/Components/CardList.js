import React from 'react';
import Card from './Card';

const CardList = ({robots})=>{
    const cardComponent = robots.map((robo,i)=>{
        return <Card key={i} id = {robo.id} name={robo.name} email={robo.email}/>;
    });
    return (
        <div>
            {cardComponent}
        </div>
    );
}

export default CardList;