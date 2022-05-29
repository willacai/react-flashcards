import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Papa from 'papaparse';
import Deck from './Deck';

function App() {
  const [activeDeck, setActiveDeck] = useState(null);
  const [allDecks, setAllDecks] = useState(new Array());
  
  React.useEffect(() => {

    async function getData() {
      const response = await fetch('data/russian-alphabet.csv');
      const reader = response.body.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder('utf-8');
      const csv = decoder.decode(result.value);
      const results = Papa.parse(csv, { header: false });
      const data = results.data; // array of objects
      createDeck(data, "Russian Alphabet");
    }

    getData();
  }, [])

  const createDeck = (cardData, title) => {
    allDecks.push(
      <Deck 
        cardData={cardData} 
        title={title} 
        key={(allDecks.length-1) + "-" + title}/>);
  }

  return (
    <div className="App">
      <h1>React Flashcards</h1>
      <h2>Test deck</h2>
      {allDecks}
    </div>
  );
}

export default App;
