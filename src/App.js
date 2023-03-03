import { useState } from "react";

function App() {
  const [likes, setLikes] = useState(0);
  const [val, setVal] = useState("ljlkjdflkslk");

  function inc() {
    setLikes(likes + 1);
  }

  function dec() {
    setLikes(likes - 1);
  }

  return (
    <div className="App">
      <h1>{likes}</h1>
      <h1>{val}</h1>
      <input type="text" value={val} onChange={event => setVal(event.target.value)}/>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </div>
  );
}

export default App;
