import { useState } from "react";

function CheckboxFunctionality() {
  const [buttonColor, setButtonColor] = useState("red");
  const [disabled, setdisabled] = useState(false);
  const [prevColor, setPrevColor] = useState();

  var newButtonColor = buttonColor === "red" ? "blue" : "red";
  if(buttonColor === "grey"){
    newButtonColor = prevColor === "red" ? "blue" : "red";
  }

  const disableButton = (e) => {
    setdisabled(e.target.checked);
    console.log(e.target.checked)
    if(e.target.checked){
      setPrevColor(buttonColor);
      setButtonColor("grey");
    }
    else{
      setButtonColor(prevColor);
    }
    console.log(prevColor)
  }

  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor, color: "white" }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <br />
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={disabled}
        onChange={(e) => disableButton(e)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default CheckboxFunctionality;