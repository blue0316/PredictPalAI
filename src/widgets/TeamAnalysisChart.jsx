// components
import {
  ResponsiveContainer,
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  YAxis,
  XAxis,
} from "recharts";
import ChartTooltip from "@ui/ChartTooltip";

// hooks
import { useWindowSize } from "react-use";
import { useState, useEffect } from "react";
import { useThemeProvider } from "@contexts/themeContext";

// utils
import { generateGridPoints } from "@utils/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

const calculateControlPercentage = (framesLength, data) => {
  const result = [];
  const seconds = Math.ceil(data.length / framesLength);
  let teamA = 0;
  let teamB = 0;

  for (let i = 0; i < seconds; i++) {
    const start = framesLength * i;
    const end = Math.min(framesLength * (i + 1), data.length);

    for (let j = start; j < end; j++) {
      if (data[j] === 1) {
        teamA++;
      } else if (data[j] === 2) {
        teamB++;
      }
    }

    const totalFrames = end;
    result.push({
      a: ((teamA / totalFrames) * 100).toFixed(2),
      b: ((teamB / totalFrames) * 100).toFixed(2),
    });
  }

  console.log(result);
  return result;
};

const TeamAnalysisChart = ({ framesPerSecond, controlData }) => {
  const { direction } = useThemeProvider();
  const { width } = useWindowSize();
  const [points, setPoints] = useState([]);
  const [data, setData] = useState([]);
  const [seconds, setSeconds] = useState([]);
  const isRTL = direction === "rtl";

  useEffect(() => {
    if (framesPerSecond > 0 && controlData.length > 0) {
      setData(calculateControlPercentage(framesPerSecond, controlData));
      setSeconds(controlData.length / framesPerSecond);
    }
  }, [framesPerSecond, controlData]);

  useEffect(() => {
    setPoints(generateGridPoints("trainingShapeChart", 20));
  }, [width]);

  const lineProps = {
    type: "monotone",
    dot: false,
    strokeWidth: 3,
  };

  return (
    <div className="flex flex-col py-4 gap-2.5 border-b border-border border-solid">
      <div className="flex justify-between">
        <h3>Ball Control</h3>
        {/* <button className="flex items-center gap-2 border border-solid border-border-revert px-2 py-1 rounded-md hover:border-accent hover:text-accent transition-all">
          <span>Filter</span>
          <FontAwesomeIcon
            icon={faFilter}
            width={12}
            height={12}
            className="w-3 h-3"
          />
        </button> */}
      </div>
      <div className="h-[260px]">
        <ResponsiveContainer
          className="flex-1 !h-[240px]"
          width="100%"
          height="100%"
          id="trainingShapeChart"
        >
          <AreaChart
            data={data}
            margin={{ top: 4, right: 0, left: 0, bottom: 4 }}
          >
            <defs>
              <linearGradient
                id="gridLine"
                x1="-5.10517e-05"
                y1="0"
                x2="-5.10517e-05"
                y2="169.677"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="var(--border)" stopOpacity="0.2" />
                <stop offset="0.504355" stopColor="var(--border)" />
                <stop
                  offset="0.99905"
                  stopColor="var(--border)"
                  stopOpacity="0.257922"
                />
              </linearGradient>
              <linearGradient
                id="area-neon"
                x1="0"
                y1="0"
                x2="0"
                y2="160"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="var(--neon-green)" />
                <stop
                  offset="1"
                  stopColor="var(--neon-green)"
                  stopOpacity="0.01"
                />
              </linearGradient>
              <linearGradient
                id="area-accent"
                x1="0"
                y1="0"
                x2="0"
                y2="160"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="var(--accent)" />
                <stop offset="1" stopColor="var(--accent)" stopOpacity="0.01" />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="6"
              strokeLinecap="square"
              horizontal={false}
              verticalPoints={points}
              width="100%"
              height="100%"
              stroke="url(#gridLine)"
            />
            <XAxis reversed={isRTL} hide />
            <YAxis orientation={isRTL ? "right" : "left"} hide />
            <Tooltip cursor={false} content={<ChartTooltip multi={true} />} />
            <Area
              dataKey="a"
              stroke="var(--accent)"
              fill="url(#area-accent)"
              activeDot={{
                r: 4,
                fill: "var(--accent)",
                stroke: "var(--widget)",
              }}
              {...lineProps}
            />
            <Area
              dataKey="b"
              stroke="var(--neon-green)"
              fill="url(#area-neon)"
              activeDot={{
                r: 4,
                fill: "var(--neon-green)",
                stroke: "var(--widget)",
              }}
              {...lineProps}
            />
          </AreaChart>
        </ResponsiveContainer>
        <div className="flex justify-between h6 gap-2">
          <span>0s</span>
          <span>{Math.round((seconds / 6) * 1)}s</span>
          <span>{Math.round((seconds / 6) * 2)}s</span>
          <span>{Math.round((seconds / 6) * 3)}s</span>
          <span>{Math.round((seconds / 6) * 4)}s</span>
          <span>{Math.round((seconds / 6) * 5)}s</span>
          <span>{Math.round((seconds / 6) * 6)}s</span>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-accent" />
          <span>Team A</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-neonGreen" />
          <span>Team B</span>
        </div>
      </div>
    </div>
  );
};

export default TeamAnalysisChart;
