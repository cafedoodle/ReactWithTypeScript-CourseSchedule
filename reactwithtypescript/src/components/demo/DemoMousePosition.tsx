//DemoMousePosition.tsx
import { useState } from "react";
import { useEventListener } from "../../hooks/useEventListener";

export function DemoMousePosition() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEventListener("mousemove", (e) => {
    setPos({ x: e.clientX, y: e.clientY });
  });

  return (
    <div>
      <h2>Mouse Position Demo</h2>
      <p>
        X: {pos.x}, Y: {pos.y}
      </p>
    </div>
  );
}
