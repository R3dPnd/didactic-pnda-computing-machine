import { useState } from 'react';
import './App.css';

const redStyle = {backgroundColor: 'red'};
const redLabel = "Change to blue";
const blueStlye = {backgroundColor: 'blue'};
const blueLabel = "Change to red";

function App() {
  const [style, setStyle] = useState(redStyle);
  const [text, setText] = useState(redLabel);
  
  function swapColors() {
   setStyle(style == blueStlye? redStyle: blueStlye); 
   setText(text == blueLabel? redLabel: blueLabel); 
  }
  return (
    <div className="App">
      <button style={style} onClick={swapColors}>{text}</button>
      <input type="checkbox"/>
    </div>
  );
}

export default App;
