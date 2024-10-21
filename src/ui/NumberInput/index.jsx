import React from "react";

const NumberInput = ({
  min = 0,
  max,
  onChange,
  step = 1,
  style = { wrapper: {}, input: {}, button: {} },
  value,
}) => {
  const handleDecrement = () => {
    if (value > min) {
      onChange(value - step);
    }
  };

  const handleIncrement = () => {
    if (max === undefined || value < max) {
      onChange(value + step);
    }
  };

  return (
    <div
      className="flex w-full border border-border h-10 rounded-lg bg-black bg-opacity-25"
      style={style.wrapper}
    >
      <input
        type="number"
        className="flex-1 px-2"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={style.input}
      />
      <button
        onClick={handleDecrement}
        className={`w-8 font-bold text-lg hover:bg-accent transition ${
          value <= min ? "pointer-events-none opacity-35" : ""
        }`}
        style={style.button}
        disabled={value <= min}
      >
        -
      </button>
      <button
        onClick={handleIncrement}
        className={`w-8 font-bold text-lg hover:bg-accent rounded-r-lg transition ${
          value >= max ? "pointer-events-none opacity-35" : ""
        }`}
        style={style.button}
        disabled={max !== undefined && value >= max}
      >
        +
      </button>
    </div>
  );
};

export default NumberInput;
