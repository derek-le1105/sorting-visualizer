import { useState } from 'react';

const Slider = (props) => {
  const [size, setSize] = useState(props.defaultValue);

  const changeSize = (e) => {
    setSize(e.target.value);
    props.onSlide(parseInt(e.target.value));
    document.getElementById(props.id).innerHTML = this.value;
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <span style={{ color: 'white' }}>{props.text}: </span>
      <input
        type="range"
        disabled={props.isRunning}
        onChange={changeSize}
        min={props.min}
        max={props.max}
        defaultValue={props.defaultValue}
        value={size}
      ></input>
      <label style={{ color: 'white' }}>{size}</label>
    </div>
  );
};

export default Slider;
