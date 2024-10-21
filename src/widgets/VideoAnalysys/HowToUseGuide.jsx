import React from "react";

const HowToUseGuide = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        <h2 className="py-2 text-2xl">Main Application Functionalities:</h2>
        <hr className="border-b-2 border-accent" />
        <ol className="list-decimal pt-4">
          <li className="ml-6 pl-1 py-1.5">
            Football players, referee, and ball detection.
          </li>
          <li className="ml-6 pl-1 py-1.5">Players team prediction.</li>
          <li className="ml-6 pl-1 py-1.5">
            Estimation of players and ball positions on a tactical map.
          </li>
          <li className="ml-6 pl-1 py-1.5">Ball Tracking.</li>
        </ol>
      </div>
      <div className="flex flex-col">
        <h2 className="py-2 text-2xl">How to use?</h2>
        <hr className="border-b-2 border-accent" />
        <p className="pt-4 font-bold">
          There are two demo videos that are automatically loaded when you start
          the app, alongside the recommended settings and hyperparameters
        </p>
        <ol className="list-decimal pt-4">
          <li className="ml-6 pl-1 py-1.5">
            Enter the team names that correspond to the uploaded video in the
            text fields in the sidebar menu.
          </li>
          <li className="ml-6 pl-1 py-1.5">
            Access the "Team colors" tab in the main page.
          </li>
          <li className="ml-6 pl-1 py-1.5">
            Select a frame where players and goalkeepers from both teams can be
            detected.
          </li>
          <li className="ml-6 pl-1 py-1.5">
            Follow the instructions on the page to pick each team color.
          </li>
          <li className="ml-6 pl-1 py-1.5">
            Go to the "Model Hyperparameters & Detection" tab, adjust
            hyperparameters and select the annotation options. (Default
            hyperparameters are recommended)
          </li>
          <li className="ml-6 pl-1 py-1.5">Run Detection!</li>
          <li className="ml-6 pl-1 py-1.5">
            If "save outputs" option was selected, you can get the downloadable
            link of the saved video.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default HowToUseGuide;
