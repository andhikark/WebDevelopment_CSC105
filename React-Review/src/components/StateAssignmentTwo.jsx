import React, { useState } from 'react';

const StateAssignmentTwo = () => {
  const [numbers, setNumbers] = useState([]);

  const handleOnClick = () => {
    const randomNum = Math.floor(Math.random() * 10);
    setNumbers([...numbers, randomNum]);
  }

  return (
    <section className="state-assignment-two">
      <button onClick={handleOnClick}>Click me!</button>
      <ul style={{ listStyle: 'none' }}>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </section>
  );
}

export default StateAssignmentTwo;
