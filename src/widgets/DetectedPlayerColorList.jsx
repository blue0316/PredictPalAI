import React, { useState } from "react";
import { SketchPicker } from "react-color";

const DetectedPlayerColorList = ({ colors, setColors, teamAName, teamBName }) => {
  const [selectedColorIndex, setSelectedColorIndex] = useState(null);
  const [colorPickerVisible, setColorPickerVisible] = useState(false);

  const handleColorChange = (color) => {
    const newColors = [...colors];
    newColors[selectedColorIndex].color = color.hex;
    setColors(newColors);
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      {colors.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <div
            className="w-10 h-10 border-2 border-border-light rounded cursor-pointer"
            style={{ backgroundColor: item.color }}
            onClick={() => {
              setSelectedColorIndex(index);
              setColorPickerVisible(true);
            }}
          />
          <p className="w-4/5 text-sm text-center mt-2">{`${
            item.team === "A" ? teamAName : teamBName
          } ${item.pos} color`}</p>
        </div>
      ))}

      {colorPickerVisible && selectedColorIndex !== null && (
        <div className="absolute left-0 bottom-0" style={{ zIndex: 21 }}>
          <div
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            }}
            onClick={() => setColorPickerVisible(false)}
          />
          <SketchPicker
            color={colors[selectedColorIndex].color}
            onChange={handleColorChange}
          />
        </div>
      )}
    </div>
  );
};

export default DetectedPlayerColorList;
