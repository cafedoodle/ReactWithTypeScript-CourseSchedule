// src/config.ts
// Reads from .env but doesn't contain secrets
export const config = {
  appInsightsConnectionString: import.meta.env
    .VITE_APPINSIGHTS_CONNECTION_STRING,
};
//Vite automatically loads .env.[mode] based on vite.config.ts mode or CLI (vite --mode production).
