import React from "react";


const Item = (props) => {
  return <p data-testid="two-item">{props.text}</p>
}


// Slutför Two så att den skriver ut
// alla items som ges via props till Two.
// Använd komponenten Item för att skriva ut det
// i items.map nedan.

const Two = (props) => {
  // console.log(props.items)
  return (
    <div>
      {
        props.items.map((item) => {
          return <Item text={item}/>
        })
      }
    </div>
  );
};

export default Two;
