import { useState, useEffect } from "react";

export const DemoErrorHandling = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState<string | null>(null); // Accepts string or null

  useEffect(() => {
    const fetchData = async () => {
      try {
        //const response = await fetch("https://fakestoreapi.com/products"); //Regular working version
        //const response = await fetch("https://fakestoreapi.com/products/1"); //Regular working version
        const response = await fetch("https://fakestoreapi.com/products1"); //Sample error by url typo products1
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message); // Safe to access message property
        } else {
          setError("An unknown error occurred"); // Fallback for non-Error instances
        }
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <div>{data ? JSON.stringify(data) : "Loading..."}</div>;
};
