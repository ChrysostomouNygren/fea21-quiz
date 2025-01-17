import { React, useState } from "react";

// Gör så att "times" börjar på 0 och ökar med 1 varje gång du trycker på den.

const One = () => {
  // Ta inte bort data-testid
  const [times, setTimes] = useState(0)

  const count = () => {
    setTimes(times + 1)
  }

  return (
    <div>
      <p data-testid="one-text">Has been clicked {times} times.</p>
      <button data-testid="one-button" onClick={count}>Click me</button>
    </div>
  );
};

export default One;
