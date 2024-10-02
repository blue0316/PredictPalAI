import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import SidebarTwo from "@layout/SideBarTwo";
import { Helmet } from "react-helmet";
import { gsap } from "gsap";
import GooeyNavigation from "@layout/GooeyNavigation";

const LandingLayout = ({ title, children }) => {
  const [isClicking, setIsClicking] = useState(false);

  const move = (e) => {
    console.log(e);
    const x = e.clientX - document.body.clientWidth / 2;
    const y = e.clientY - document.body.clientHeight / 2;

    // Set the cursor position using GSAP
    gsap.to("#cursor", {
      x: x,
      y: y,
      duration: 0.1,
      ease: "power3.out",
    });

    // Animate the cursor border like a bouncing ball using GSAP Physics2DPlugin
    gsap.to("#cursor-border", {
      x: x,
      y: y,
      duration: 0.2,
      ease: "power3.out",
      physics2D: {
        velocity: 200,
        angle: Math.random() * 360,
        friction: 0.1,
      },
    });
  };

  const handleMouseDown = () => {
    setIsClicking(true);
  };

  const handleMouseUp = () => {
    setIsClicking(false);
  };

  useEffect(() => {
    document.addEventListener("mousemove", move);
    document.addEventListener("touchmove", move);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("touchmove", move);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  useEffect(() => {
    gsap.set("#cursor", { xPercent: 0, yPercent: 0 });
    gsap.set("#cursor-border", { xPercent: 0, yPercent: 0 });
  }, []);

  return (
    <>
      <Helmet>
        <title>{title} | Soccer AI Game</title>
      </Helmet>
      <style>
        {`
        #cursor {
          position: absolute;
          height: 12px;
          width: 12px;
          border-radius: 50%;
          border: 3px solid crimson;
          pointer-events: none;
          transition: background-color 0.2s ease;
          z-index: 9999;

          @media (max-width: 1023px) {
            & {
              display: none;
            }
          }
        }

        #cursor-border {
          position: absolute;
          width: 32px;
          height: 32px;
          background-color: transparent;
          border-radius: 50%;
          pointer-events: none;
          transition: all 0.2s ease-out;
          z-index: 9999;

          @media (max-width: 1023px) {
            & {
              display: none;
            }
          }
        }
      `}
      </style>
      <div className={styles.backgroundContainer}>
        <SidebarTwo />

        <div className={styles.mainWrapper}>
          <div
            className={`${styles.decorationBarWrapper} ${styles.wrapperPosOne}`}
          >
            <div className={styles.decorationBar} />
            <div className={styles.decorationBar} />
            <div className={styles.decorationBar} />
          </div>
          <div
            className={`${styles.decorationBarWrapper} ${styles.wrapperPosTwo}`}
          >
            <div className={styles.decorationBar} />
            <div className={styles.decorationBar} />
            <div className={styles.decorationBar} />
          </div>

          {children}
        </div>

        <GooeyNavigation />

        <div id="cursor"></div>
        <div id="cursor-border">
          <svg
            height="32px"
            width="32px"
            version="1.1"
            id="Capa_1"
            viewBox="0 0 420 420"
            className={isClicking ? "" : styles.ball}
          >
            <g>
              <path
                fill="#FFFFFF"
                d="M295.529,77.523c-9.295,17.844-19.983,37.536-32.508,59.89c9.271,15.888,18.678,31.843,27.804,47.32
        c3.011,5.107,6.012,10.196,8.999,15.267h72.841c8.404-13.483,15.459-24.919,21.84-35.4c-7.583-30.808-22.695-58.684-43.275-81.554
        C332.659,80.757,313.972,78.903,295.529,77.523z"
              />
              <path
                fill="#FFFFFF"
                d="M129.185,235.282c-3.017-5.118-6.012-10.201-9.005-15.282H47.337
        c-8.418,13.506-15.474,24.942-21.841,35.401c7.582,30.807,22.693,58.682,43.271,81.552c18.577,2.29,37.266,4.145,55.704,5.524
        c9.295-17.844,19.983-37.536,32.505-59.885C147.708,266.707,138.309,250.757,129.185,235.282z"
              />
              <path
                fill="#FFFFFF"
                d="M47.337,200h72.84c2.989-5.076,5.994-10.171,9.007-15.282c9.123-15.473,18.527-31.422,27.795-47.305
        c-12.52-22.346-23.21-42.04-32.508-59.89c-18.444,1.38-37.132,3.235-55.703,5.524c-20.578,22.87-35.689,50.745-43.272,81.553
        C31.876,175.079,38.932,186.515,47.337,200z"
              />
              <path
                fill="#FFFFFF"
                d="M278.248,352.594c-9.272-17.829-19.971-37.553-32.551-60.009c-23.715,0.336-47.676,0.336-71.393,0
        c-12.575,22.448-23.275,42.175-32.551,60.009c8.79,14.805,16.87,28.735,24.552,42.325c14.033,3.315,28.659,5.078,43.69,5.078
        c15.036,0,29.666-1.764,43.702-5.08C261.384,381.318,269.463,367.389,278.248,352.594z"
              />
              <path
                fill="#FFFFFF"
                d="M372.663,220H299.82c-2.99,5.076-5.981,10.154-8.996,15.267
        c-9.127,15.48-18.529,31.434-27.801,47.325c12.526,22.356,23.214,42.048,32.505,59.886c18.448-1.381,37.135-3.236,55.701-5.524
        c20.58-22.87,35.691-50.745,43.274-81.553C388.126,244.924,381.07,233.488,372.663,220z"
              />
              <path
                fill="#FFFFFF"
                d="M166.304,25.081c-7.682,13.591-15.762,27.521-24.552,42.325
        c9.281,17.844,19.984,37.577,32.561,60.027c23.717-0.336,47.656-0.336,71.373,0c12.58-22.457,23.284-42.189,32.561-60.027
        c-8.79-14.805-16.87-28.734-24.551-42.323c-14.037-3.317-28.667-5.08-43.702-5.08C194.963,20.003,180.337,21.766,166.304,25.081z"
              />
              <path
                fill="#6ECCAE"
                d="M174.282,147.435c-9.301,15.941-18.723,31.929-27.869,47.441c-2.986,5.065-5.95,10.095-8.912,15.124
        c2.962,5.03,5.925,10.06,8.912,15.124c9.146,15.512,18.568,31.5,27.869,47.441c23.737,0.339,47.7,0.339,71.435,0
        c9.305-15.946,18.73-31.939,27.878-47.456c2.983-5.06,5.943-10.085,8.902-15.109c-2.959-5.024-5.919-10.049-8.902-15.109
        c-9.149-15.517-18.574-31.51-27.878-47.456C221.981,147.096,198.019,147.096,174.282,147.435z"
              />
              <path
                fill="#6ECCAE"
                d="M138.073,34.155c-16.157,6.633-31.207,15.423-44.783,26.022c10.405-1.044,20.795-1.949,31.106-2.708
        C129.15,49.464,133.691,41.723,138.073,34.155z"
              />
              <path
                fill="#6ECCAE"
                d="M399.396,194.86c-2.951,4.774-6.068,9.794-9.399,15.14c3.331,5.346,6.448,10.367,9.399,15.14
        c0.396-4.995,0.603-10.042,0.603-15.137C400,204.906,399.792,199.857,399.396,194.86z"
              />
              <path
                fill="#6ECCAE"
                d="M281.929,385.842c16.155-6.632,31.203-15.421,44.778-26.019
        c-10.403,1.043-20.791,1.949-31.103,2.707C290.853,370.533,286.312,378.272,281.929,385.842z"
              />
              <path
                fill="#6ECCAE"
                d="M295.604,57.469c10.309,0.759,20.697,1.664,31.101,2.708
        c-13.574-10.597-28.622-19.386-44.776-26.018C286.311,41.725,290.851,49.465,295.604,57.469z"
              />
              <path
                fill="#6ECCAE"
                d="M20.603,225.141c2.95-4.771,6.067-9.792,9.4-15.141c-3.331-5.346-6.448-10.367-9.399-15.14
        C20.208,199.857,20,204.906,20,210.002C20,215.098,20.208,220.145,20.603,225.141z"
              />
              <path
                fill="#6ECCAE"
                d="M124.396,362.532c-10.31-0.759-20.7-1.665-31.107-2.709c13.577,10.6,28.627,19.39,44.785,26.023
        C133.691,378.278,129.15,370.537,124.396,362.532z"
              />
              <path
                d="M415.042,164.6c-0.053-0.31-0.12-0.617-0.201-0.921c-8.236-36.438-25.973-69.31-50.461-95.875
		c-0.513-0.722-1.119-1.375-1.806-1.94c-26.54-28.077-60.721-48.855-99.182-58.973c-0.391-0.129-0.788-0.238-1.192-0.317
		c-16.697-4.287-34.189-6.57-52.205-6.57c-17.992,0-35.461,2.278-52.138,6.554c-0.426,0.082-0.844,0.197-1.256,0.333
		c-38.46,10.119-72.64,30.897-99.179,58.975c-0.687,0.565-1.292,1.216-1.805,1.938C31.13,94.369,13.393,127.242,5.158,163.682
		c-0.08,0.299-0.146,0.601-0.198,0.906C1.722,179.219,0,194.412,0,210.002c0,15.591,1.722,30.784,4.961,45.415
		c0.052,0.303,0.117,0.604,0.197,0.901c8.235,36.441,25.972,69.315,50.461,95.881c0.512,0.72,1.116,1.371,1.801,1.935
		c26.577,28.119,60.816,48.918,99.344,59.021c0.251,0.078,0.504,0.148,0.761,0.206c16.777,4.331,34.359,6.637,52.47,6.637
		c18.116,0,35.703-2.306,52.484-6.64c0.255-0.058,0.507-0.127,0.757-0.205c38.527-10.104,72.765-30.901,99.342-59.018
		c0.685-0.564,1.289-1.215,1.801-1.935c24.49-26.566,42.228-59.44,50.464-95.881c0.08-0.3,0.146-0.602,0.198-0.908
		c3.238-14.629,4.96-29.82,4.96-45.409C420,194.416,418.279,179.227,415.042,164.6z M281.929,385.842
		c4.383-7.57,8.923-15.31,13.675-23.311c10.311-0.758,20.7-1.664,31.103-2.707C313.132,370.421,298.084,379.21,281.929,385.842z
		 M295.529,342.478c-9.292-17.838-19.979-37.53-32.505-59.886c9.273-15.89,18.674-31.845,27.801-47.325
		c3.015-5.113,6.006-10.191,8.996-15.267h72.843c8.407,13.488,15.462,24.924,21.841,35.401
		c-7.583,30.808-22.695,58.683-43.274,81.553C332.664,339.242,313.977,341.097,295.529,342.478z M124.396,362.532
		c4.754,8.005,9.296,15.746,13.677,23.314c-16.157-6.633-31.208-15.423-44.785-26.023
		C103.696,360.867,114.086,361.773,124.396,362.532z M124.472,342.477c-18.439-1.379-37.127-3.234-55.704-5.524
		c-20.578-22.869-35.689-50.744-43.271-81.552c6.368-10.459,13.423-21.895,21.841-35.401h72.843
		c2.993,5.081,5.988,10.165,9.005,15.282c9.124,15.475,18.523,31.424,27.792,47.309
		C144.455,304.941,133.767,324.633,124.472,342.477z M138.073,34.155c-4.382,7.568-8.923,15.309-13.677,23.314
		c-10.311,0.759-20.7,1.664-31.106,2.708C106.866,49.578,121.916,40.788,138.073,34.155z M124.471,77.523
		c9.298,17.85,19.988,37.544,32.508,59.89c-9.268,15.883-18.672,31.831-27.795,47.305c-3.014,5.111-6.018,10.206-9.007,15.282
		h-72.84c-8.405-13.485-15.461-24.921-21.841-35.4c7.583-30.808,22.694-58.683,43.272-81.553
		C87.34,80.758,106.027,78.903,124.471,77.523z M282.499,210c-2.959,5.024-5.919,10.05-8.902,15.109
		c-9.149,15.516-18.574,31.51-27.878,47.456c-23.736,0.339-47.698,0.339-71.435,0c-9.301-15.94-18.723-31.929-27.869-47.441
		c-2.986-5.065-5.95-10.095-8.912-15.124c2.962-5.03,5.925-10.06,8.912-15.124c9.146-15.512,18.568-31.5,27.869-47.441
		c23.736-0.339,47.699-0.339,71.435,0c9.305,15.946,18.73,31.939,27.878,47.456C276.579,199.951,279.539,204.976,282.499,210z
		 M30.003,210c-3.333,5.349-6.45,10.37-9.4,15.141C20.208,220.145,20,215.098,20,210.002c0-5.097,0.208-10.145,0.604-15.142
		C23.555,199.633,26.672,204.654,30.003,210z M389.998,210c3.331-5.345,6.448-10.366,9.399-15.14
		c0.396,4.997,0.604,10.045,0.604,15.142c0,5.095-0.208,10.142-0.603,15.137C396.446,220.367,393.329,215.346,389.998,210z
		 M372.664,200h-72.841c-2.986-5.071-5.988-10.161-8.999-15.267c-9.125-15.477-18.533-31.432-27.804-47.32
		c12.525-22.353,23.213-42.046,32.508-59.89c18.443,1.38,37.13,3.234,55.7,5.523c20.58,22.87,35.692,50.746,43.275,81.554
		C388.122,175.081,381.067,186.517,372.664,200z M295.604,57.469c-4.753-8.004-9.294-15.744-13.675-23.31
		c16.154,6.632,31.202,15.421,44.776,26.018C316.302,59.133,305.914,58.227,295.604,57.469z M278.248,67.406
		c-9.277,17.838-19.981,37.57-32.561,60.027c-23.717-0.336-47.656-0.336-71.373,0c-12.577-22.45-23.28-42.183-32.561-60.027
		c8.79-14.804,16.87-28.734,24.552-42.325c14.033-3.315,28.659-5.078,43.691-5.078c15.036,0,29.666,1.764,43.702,5.08
		C261.378,38.672,269.458,52.601,278.248,67.406z M166.304,394.919c-7.682-13.59-15.762-27.52-24.552-42.325
		c9.276-17.835,19.976-37.561,32.551-60.009c23.717,0.336,47.678,0.336,71.393,0c12.58,22.456,23.279,42.181,32.551,60.009
		c-8.784,14.795-16.864,28.724-24.551,42.323c-14.037,3.317-28.667,5.08-43.702,5.08
		C194.963,399.997,180.337,398.234,166.304,394.919z"
              />
            </g>
          </svg>
        </div>
      </div>
    </>
  );
};

export default LandingLayout;
