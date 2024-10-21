import React from "react";

const rgbToHex = (rgb) => {
  if (!Array.isArray(rgb) || rgb.length !== 3) {
    throw new Error("Input must be an array of three integers.");
  }

  const [r, g, b] = rgb;
  return `#${((1 << 24) + (r << 16) + (g << 8) + b)
    .toString(16)
    .slice(1)
    .toUpperCase()}`;
};

const DetectedPlayerList = ({ data, selectedTeamColor, setColors }) => {
  return (
    <>
      {data ? (
        <div className="group grid grid-cols-10 gap-0">
          {data.map((item, index) => (
            <div
              className="group/wrapper relative cursor-pointer hover:scale-105 transition-all"
              onClick={() => {
                const [team, position] = selectedTeamColor.split("_");
                setColors((prev) =>
                  prev.map((temp) =>
                    temp.team === team && temp.pos === position
                      ? {
                          ...temp,
                          color: rgbToHex(item.dominant_color),
                        }
                      : temp
                  )
                );
              }}
            >
              <img
                key={`detected-player-${index}`}
                src={`data:image/png;base64,${item.image}`}
                alt="Detected Player"
                className="max-w-full h-20 object-fill group-hover:blur-sm group-hover/wrapper:!filter-none transition-all"
              />
              <div
                className="absolute w-4 h-4 top-1 right-1 rounded-full border border-white"
                style={{
                  backgroundColor: `rgb(${item.dominant_color[0]} ${item.dominant_color[1]} ${item.dominant_color[2]})`,
                }}
              />
            </div>
          ))}
        </div>
      ) : (
        <p>No image data available.</p>
      )}
    </>
  );
};

export default DetectedPlayerList;
