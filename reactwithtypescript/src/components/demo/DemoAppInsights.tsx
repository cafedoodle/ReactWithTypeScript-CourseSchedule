import React, { useState } from "react";
import {
  useAppInsightsContext,
  useTrackEvent,
} from "@microsoft/applicationinsights-react-js";

export const DemoAppInsights: React.FC = () => {
  const appInsights = useAppInsightsContext();
  const trackDemoClick = useTrackEvent(
    appInsights,
    "DemoButtonClick",
    {},
    true
  );

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    trackDemoClick({ location: "DemoAppInsights", action: "clicked" });

    // Reset visual feedback after 1 second
    setTimeout(() => setClicked(false), 1000);
  };

  return (
    <div>
      <h2>App Insights Demo</h2>
      <button
        onClick={handleClick}
        style={{
          padding: "0.5rem 1rem",
          borderRadius: 4,
          border: "1px solid #0d6efd",
          backgroundColor: clicked ? "#0d6efd" : "white",
          color: clicked ? "white" : "#0d6efd",
          transition: "all 0.2s ease",
          cursor: "pointer",
          fontWeight: clicked ? "bold" : "normal",
        }}
      >
        {clicked ? "✓ Clicked!" : "Click me (tracked - useTrackEvent)"}
      </button>
    </div>
  );
};
