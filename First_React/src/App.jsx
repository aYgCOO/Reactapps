/* eslint-disable react/jsx-no-undef */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Stack from "./Stack"; //Import the component from Stack.jsx

function App() {
  var [a, b] = useState(969696);
  return (
    <div className="bg-zinc-800 h-screen text-slate-300 p-5">
      <div>Hola!</div>
      <h2>My name is Ayanabha</h2>
      <div>
        <h4>{a}</h4>
        <button
          onClick={() => b(a + 10)}
          className="p-5 px-3 py-1 bg-blue-600 rounded-md"
        >
          Click
        </button>
      </div>
      <h1 className="text-green-500">GHhs</h1>
      <Stack value="Agnik is my friend" data={{ name: "Shivam", age: 19 }} />
    </div>
  );
}

export default App;
