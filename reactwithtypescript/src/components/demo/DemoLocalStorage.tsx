import React, { useState } from "react";

const STORAGE_KEY = "myLocalStorageValue";

const DemoLocalStorage: React.FC = () => {
  // Initialize state from localStorage
  const [value, setValue] = useState<string>(
    () => localStorage.getItem(STORAGE_KEY) || ""
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setValue(val);
    localStorage.setItem(STORAGE_KEY, val);
  };

  const clearStorage = () => {
    localStorage.removeItem(STORAGE_KEY);
    setValue("");
  };

  return (
    <div style={{ marginBottom: 24 }}>
      <h3>Local Storage Demo</h3>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <button onClick={clearStorage}>Clear Storage</button>
      <p>Stored Value: {value}</p>
    </div>
  );
};

export default DemoLocalStorage;
