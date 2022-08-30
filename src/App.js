import React, { useState } from "react";
import "./App.css";
import Card from "./Card";
const arr = [
  { userName: "Frank Stone", number: "5312561816", email: "fstone@omail" },
  { userName: "Tim Ramirez", number: "6723434552", email: "tram@kmail" },
];
function App() {
  // const cards = arr.map(val => )
  const inputStyles = {
    margin: "4px",
    backgroundColor: "white",
    borderRadius: "4px",
    outline: "none",
    padding: "4px 6px",
    fontSize: "16px",
  };
  const emptyCard = { userName: "", email: "", number: "" };
  const [cards, setCards] = useState(arr);
  const [card, setCard] = useState(emptyCard);
  const [showError, setShowError] = useState(false);
  function createCard() {
    if (card.userName) {
      setCards([...cards, card]);
      setCard(emptyCard);
      setShowError(false);
    } else {
      setShowError(true);
    }
  }
  return (
    <div className="container">
      <h1>Card</h1>
      <div style={{ display: "flex" }}>
        <input
          value={card.userName}
          style={{...inputStyles, border: showError && !card.userName ? '1px solid red' : '1px solid green'}}
          name="userName"
          onChange={(e) => setCard({ ...card, userName: e.target.value })}
          placeholder="Username"
        />
        <input
          value={card.email}
          style={{...inputStyles, border: showError && !card.email ? '1px solid red' : '1px solid green'}}
          onChange={(e) => setCard({ ...card, email: e.target.value })}
          placeholder="email"
        />
        <input
          value={card.number}
          style={{...inputStyles, border: showError && !card.number ? '1px solid red' : '1px solid green'}}
          onChange={(e) => setCard({ ...card, number: e.target.value })}
          placeholder="number"
        />
      </div>
      <button onClick={createCard}>Create</button>
      {cards.map(({ userName, email, number }) => (
        <Card
          key={userName + email + number}
          userName={userName}
          number={number}
          image={`https://picsum.photos/200/300?random=${number}`}
          email={email}
        />
      ))}
    </div>
  );
}

export default App;
