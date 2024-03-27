import { useState, useEffect } from "react";

export default function Varia() {
  class Alive {
    constructor(kind, name, sound) {
      this.kind = kind;
      this.name = name;
      this.sound = sound;
    }
    sound1() {
      console.log(this.sound);
    }
  }
  const dog = new Alive("개", "복실이", "멍멍");
  function clickHandler() {
    dog.sound1();
    console.log("Director...........");
    fikeyword = keyword;
  }
  const [count, setCount] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [fikeyword, setifKeyword] = useState("");

  useEffect(() => {
    const textInput = document.getElementById('textInput');
    textInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        console.log('Enter key pressed!');
        // Perform desired actions here
      }
    })
    console.log("Use Effect Run...........");
  });

  return (
    <div className="container-fluid">
      <div className="mb-2">
        Variable afadsfasdfasfdadfasdfaadfasdfa: {dog.kind} {count}
      </div>
      <form action="">
        <input
          type="text"
          value={keyword}
          id="textInput"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <p>Result : {fikeyword}</p>
        <button onClick={clickHandler}>Click</button>
      </form>

      <div className="row">
        <div className="col-6">Column</div>
        <div className="col-3">Column</div>
        <div className="col-3">Column</div>
      </div>
    </div>
  );
}
