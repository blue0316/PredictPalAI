import React from "react";
import Spring from "@components/Spring";
import Progress from "@ui/Progress";
import { useThemeProvider } from "@contexts/themeContext";

const TeamLineUp = ({ title, info }) => {
  const { theme } = useThemeProvider();

  return (
    <Spring className="relative card flex flex-col gap-6 card-padded !rounded-lg px-6 py-8">
      <h6 className="text-base font-medium text-center">{title}</h6>
      <div className="flex flex-col gap-4">
        <div>
          <p className="text-center">Like / Dislike</p>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col gap-1.5">
              <p>542</p>
              <Progress
                value={70}
                barColor="neon-green"
                trackColor={theme === "light" ? "body" : "border"}
                from="right"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <p className="text-end">542</p>
              <Progress
                value={60}
                barColor="accent"
                trackColor={theme === "light" ? "body" : "border"}
              />
            </div>
          </div>
        </div>
        <div>
          <p className="text-center">Like / Dislike</p>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col gap-1.5">
              <p>542</p>
              <Progress
                value={70}
                barColor="neon-green"
                trackColor={theme === "light" ? "body" : "border"}
                from="right"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <p className="text-end">542</p>
              <Progress
                value={60}
                barColor="accent"
                trackColor={theme === "light" ? "body" : "border"}
              />
            </div>
          </div>
        </div>
        <div>
          <p className="text-center">Like / Dislike</p>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col gap-1.5">
              <p>542</p>
              <Progress
                value={70}
                barColor="neon-green"
                trackColor={theme === "light" ? "body" : "border"}
                from="right"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <p className="text-end">542</p>
              <Progress
                value={60}
                barColor="accent"
                trackColor={theme === "light" ? "body" : "border"}
              />
            </div>
          </div>
        </div>
      </div>
    </Spring>
  );
};

export default TeamLineUp;
