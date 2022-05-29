import React, { useEffect, useState } from 'react';
import Card from './Card';

function Deck(props) {
    const {
        cardData,
        title
    } = props;

    const [currCard, setCurrCard] = useState(null);
    const [allCards, setAllCards] = useState(new Array());

    const createCards = (data) => {
        data.forEach(row => {
            allCards.push(<Card front={row[0]} back={[row[1], row[2]]} key={(allCards.length-1) + "-" + title + "-card"}></Card>)
        });
    }
    
    const deleteCards = (names) => {
        console.log("delete cards from Deck coming soon")
    }

    React.useEffect((cardData, opType) => {
        window.alert("useEffect called~")
        switch(opType){
            case 'create': createCards(cardData); break;
            case 'delete': deleteCards(cardData); break;
            default: console.log("invalid Deck op");
        }
        
    }, []);

    createCards(cardData);

    return(
        <div id={title + "-deck"}>
           Displaying all cards:
           {allCards}
        </div>);
}

export default Deck;