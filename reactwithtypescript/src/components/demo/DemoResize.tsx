import { useState } from "react";
import { useEventListener } from "../../hooks/useEventListener";

export const DemoResize: React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  useEventListener("resize", () => {
    setWidth(window.innerWidth);
  });
  useEventListener("resize", () => {
    setHeight(window.innerHeight);
  });
  return (
    <div>
      <h2>Window Resize Demo with useEventListener</h2>
      <p>Current width: {width}px</p>
      <p>Current height: {height}px</p>
    </div>
  );
};
