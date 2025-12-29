import React, { useState } from "react";

const STORAGE_KEY = "mySessionStorageValue";

const DemoSessionStorage: React.FC = () => {
  // Initialize state from sessionStorage
  const [value, setValue] = useState<string>(
    () => sessionStorage.getItem(STORAGE_KEY) || ""
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setValue(val);
    sessionStorage.setItem(STORAGE_KEY, val);
  };

  const clearStorage = () => {
    sessionStorage.removeItem(STORAGE_KEY);
    setValue("");
  };

  return (
    <div style={{ marginBottom: 24 }}>
      <h3>Session Storage Demo</h3>
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

export default DemoSessionStorage;
