import React, { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  function Capitalize(text) {
    let textToLowerCase = text.toLowerCase();

    return (
      textToLowerCase.charAt(0).toUpperCase() +
      textToLowerCase.slice(1).toLowerCase()
    );
  }
  const handleIdentification = (inp) => {
    const arr = ["Hello", "Hi", "What's up"];
    const arrOff = [];
    arr.map((item) => {
      arrOff.push(item.toLowerCase());
      arrOff.push(item.toUpperCase());
      arrOff.push(Capitalize(item));
    });
    if (arrOff.includes(inp)) {
      alert("equal");
    } else {
      alert("not equal");
    }
    console.log(arrOff);
  };
  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <br />
      <br />
      <button onClick={() => handleIdentification(input)}>Submit</button>
    </>
  );
}
