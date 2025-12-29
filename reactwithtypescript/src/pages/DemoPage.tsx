import React from "react";
import DemoCookie from "../components/demo/DemoCookie";
import DemoLocalStorage from "../components/demo/DemoLocalStorage";
import DemoSessionStorage from "../components/demo/DemoSessionStorage";
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
      </div>
      <div>
        <p>
          Window Size: {windowSize.width} x {windowSize.height}
        </p>
      </div>
    </>
  );
};

export default DemoPage;
