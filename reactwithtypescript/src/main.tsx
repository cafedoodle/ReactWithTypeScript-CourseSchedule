import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App.tsx";
import {
  AppInsightsContext,
  AppInsightsErrorBoundary,
} from "@microsoft/applicationinsights-react-js";
import { reactPlugin } from "./appInsights";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppInsightsErrorBoundary
      appInsights={reactPlugin}
      onError={() => <h1>Something went wrong. AppInsights ErrorBoundary</h1>}
    >
      <AppInsightsContext.Provider value={reactPlugin}>
        <App />
      </AppInsightsContext.Provider>
    </AppInsightsErrorBoundary>
  </StrictMode>
);
