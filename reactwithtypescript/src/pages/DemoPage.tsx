import React from "react";
import DemoCookie from "../components/demo/DemoCookie";
import DemoLocalStorage from "../components/demo/DemoLocalStorage";
import DemoSessionStorage from "../components/demo/DemoSessionStorage";
import { DemoResize } from "../components/demo/DemoResize";
import { DemoKeyPress } from "../components/demo/DemoKeyPress";
import { DemoMousePosition } from "../components/demo/DemoMousePosition";
import useWindowSize from "../hooks/useWindowSize";

const DemoPage: React.FC = () => {
  const windowSize = useWindowSize();
  return (
    <>
      <div>
        <h2>JavaScript & React Demos</h2>
        <DemoCookie />
        <DemoLocalStorage />
        <DemoSessionStorage />
        <hr />
        <DemoResize />
        <hr />
        <DemoKeyPress />
        <hr />
        <DemoMousePosition />
        <hr />
      </div>
      <div>
        <h2>Window Resize Demo with useWindowSize</h2>
        <p>
          Window Size: {windowSize.width} x {windowSize.height}
        </p>
      </div>
    </>
  );
};

export default DemoPage;
