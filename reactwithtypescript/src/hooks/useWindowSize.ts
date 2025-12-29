// src/hooks/useWindowSize.ts
// Custom hook to get the current window size
import { useState, useEffect } from "react";

type WindowSizeType = {
  width: number;
  height: number;
};

function useWindowSize(): WindowSizeType {
  const [windowSize, setWindowSize] = useState<WindowSizeType>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

export default useWindowSize;
