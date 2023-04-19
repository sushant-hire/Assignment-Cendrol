import React, { useState } from "react";
import Style from "./Component.module.css";

function Component({ cendol }) {
  const [data, setData] = useState(cendol); // State for holding data
  const [button, setButton] = useState(true); // State for holding boolean value
  const [color, setColor] = useState("rgba(46,223,192,255)"); // State for holding color
  const [bgColor, setBgColor] = useState("rgba(252, 194, 0, 255)"); // State for holding background color

  // Function for increasing counter
  function handleCounter() {
    setData(+data + 10);
  }

  // Function for changing color
  function handleColor() {
    setBgColor("rgba(46,223,192,255)");
    if (button === true) {
      setColor("red");
      setButton(false);
    } else {
      setColor("blue");
      setButton(true);
    }
  }

  // JSX for the component
  return (
    <div className={Style.wrapper}>
      <div className={Style.main}>
        <div className={Style.content} style={{ backgroundColor: bgColor }}>
          <h1>{data}</h1>
          <p onClick={handleCounter}>Click to increase counter</p>
        </div>
      </div>
      <button
        style={{ backgroundColor: color }}
        className={Style.button}
        onClick={handleColor}
      >
        Change Color
      </button>
    </div>
  );
}

export default Component;
