import "./App.css";
import React, { useState } from "react";

import { list } from "./birthday-list";
import Birthdays from "./list";

const App = () => {
  const [people, setPeople] = useState(list);
  console.log(useState());
  const handleClick = () => {
    setPeople([]);
    return <h1>No one</h1>;
  };
  return (
    <div className="App">
      <div className="app-wrapper">
        <h2>{people.length} birthdays today</h2>
        <section className="birthday-list">
          {people.map((person) => {
            return <Birthdays {...person} key={person.id}></Birthdays>;
          })}
        </section>
        <button type="button" onClick={handleClick}>
          clear
        </button>
      </div>
    </div>
  );
};

export default App;
