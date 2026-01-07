import { useState, useEffect } from "react";
import { useAppInsightsContext } from "@microsoft/applicationinsights-react-js";

export const DemoErrorHandling = () => {
  const appInsights = useAppInsightsContext();
  const [data, setData] = useState(null);
  const [error, setError] = useState<string | null>(null); // Accepts string or null
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchDataWithRetry = async (url: string, retries: number = 3) => {
      console.log("Inside fetchDataWithRetry...");
      for (let attempt = 0; attempt < retries; attempt++) {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const result = await response.json();
          return result; // Return the result if successful
        } catch (err) {
          // track each failed attempt
          if (appInsights) {
            appInsights.trackException(
              { exception: err as Error },
              {
                component: "DemoErrorHandling",
                url,
                attempt: attempt + 1,
                maxRetries: retries,
              }
            );
          }

          if (attempt === retries - 1) {
            console.error(`Max retry attempts reached for URL: ${url}.`);
            throw err; // Rethrow error if the last attempt fails
          }
          console.warn(`Attempt ${attempt + 1} failed. Retrying...`);
        }
      }
    };

    const fetchData = async () => {
      setLoading(true);
      setError(null); // Reset error state before fetching
      const url = "https://fakestoreapi.com/products1";
      //https://fakestoreapi.com/products"); //Regular working version
      //https://fakestoreapi.com/products/1"); //Regular working version
      //https://fakestoreapi.com/products1 //Sample error by url typo products1
      try {
        console.log("Calling fetchDataWithRetry...");
        const result = await fetchDataWithRetry(url);

        setData(result);
        appInsights?.trackEvent(
          { name: "DemoFetch_Success" },
          {
            component: "DemoErrorHandling",
            url,
          }
        );
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message); // Safe to access message property
        } else {
          setError("An unknown error occurred"); // Fallback for non-Error instances
        }

        appInsights?.trackEvent(
          { name: "DemoFetch_Failed" },
          {
            component: "DemoErrorHandling",
            url,
          }
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [appInsights]);

  if (loading) return <div>Loading...</div>;
  const content = error ? (
    <div>Error: {error}</div>
  ) : (
    <div>{data ? JSON.stringify(data) : "No data available"}</div>
  );

  return (
    <div>
      <h2>Error Handling Demo</h2>
      {content}
    </div>
  );
};
