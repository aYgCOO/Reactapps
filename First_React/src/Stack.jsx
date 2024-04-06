// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

function stack({ value, data }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [x, y] = useState(true);

  return (
    <div className="text-slate-200">
      This is a example of import JSX file from another JSX file in React.
      <h1>{value}</h1>
      <p>
        My name is {data.name} and I am a Chutiya. My age is {data.age}
      </p>
      <h4 className={`${x === false ? "text-green-600" : "text-red-600"}`}>
        {x === true ? "I am a chutiya!" : "No my friend Agnik is chutiya"}
      </h4>
      <button
        className="p-5 px-3 py-1 bg-blue-600 rounded-md"
        onClick={() => y(!x)}
      >
        Click2
      </button>
      <h1 className="text-blue-500">sakalaka boom! boom</h1>
    </div>
  );
}

export default stack;
