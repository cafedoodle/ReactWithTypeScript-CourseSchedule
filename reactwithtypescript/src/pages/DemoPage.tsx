import React from "react";
import DemoCookie from "../components/demo/DemoCookie";
import DemoLocalStorage from "../components/demo/DemoLocalStorage";
import DemoSessionStorage from "../components/demo/DemoSessionStorage";

const DemoPage: React.FC = () => {
  return (
    <>
      <div>
        <h2>JavaScript & React Demos</h2>
        <DemoCookie />
        <DemoLocalStorage />
        <DemoSessionStorage />
      </div>
    </>
  );
};

export default DemoPage;
