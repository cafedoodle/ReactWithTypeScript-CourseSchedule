import { ApplicationInsights } from "@microsoft/applicationinsights-web";
import { ReactPlugin } from "@microsoft/applicationinsights-react-js";
import { config } from "./config";

const reactPlugin = new ReactPlugin();

const appInsights = new ApplicationInsights({
  config: {
    connectionString: config.appInsightsConnectionString!, // Non-null assertion since Vite requires VITE_ vars
    extensions: [reactPlugin], // REQUIRED (React hooks + boundaries)
    enableAutoRouteTracking: true, // RECOMMENDED (auto page tracking)
  },
});

appInsights.loadAppInsights();
appInsights.trackPageView();

export { appInsights, reactPlugin };
