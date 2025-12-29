// src/pages/InfoPage.tsx
import React from "react";
import useWindowSize from "../hooks/useWindowSize";

const InfoPage: React.FC = () => {
  const windowSize = useWindowSize();
  return (
    <div>
      <h2>Info Page</h2>
      <p>
        Window Size: {windowSize.width} x {windowSize.height}
      </p>
    </div>
  );
};

export default InfoPage;
