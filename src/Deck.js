import { useEffect, useState } from 'react';

function Deck(props) {
    const {
        cardData,
        title
    } = props;

    const [currCard, setCurrCard] = useState(null);
    const [allCards, setAllCards] = useState(new Array());

    const addCards = (names) => {
    }
    
    const deleteCards = (names) => {
        
    }

    return(
        <div>
            Coming soon!
        </div>);
}

export default Deck;