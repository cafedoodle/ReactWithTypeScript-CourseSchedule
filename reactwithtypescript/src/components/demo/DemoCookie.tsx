import React, { useState } from "react";

const COOKIE_NAME = "myCookie";

function setCookie(name: string, value: string, days: number) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(
    value
  )}; expires=${expires}; path=/`;
}

function getCookie(name: string): string | undefined {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [key, val] = cookie.split("=");
    if (key === name) return decodeURIComponent(val);
  }
  return undefined;
}

function deleteCookie(name: string) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}

const DemoCookie: React.FC = () => {
  const [cookieValue, setCookieValue] = useState<string | undefined>(
    getCookie(COOKIE_NAME)
  );

  const handleSetCookie = () => {
    setCookie(COOKIE_NAME, "Hello from Cookie!", 7);
    setCookieValue(getCookie(COOKIE_NAME));
  };

  const handleReadCookie = () => {
    setCookieValue(getCookie(COOKIE_NAME));
  };

  const handleDeleteCookie = () => {
    deleteCookie(COOKIE_NAME);
    setCookieValue(undefined);
  };

  return (
    <div style={{ marginBottom: 24 }}>
      <h3>Cookie Demo</h3>
      <p>Cookie Value: {cookieValue || "(No cookie set)"}</p>
      <button onClick={handleSetCookie}>Set Cookie</button>
      <button onClick={handleReadCookie}>Read Cookie</button>
      <button onClick={handleDeleteCookie}>Delete Cookie</button>
    </div>
  );
};

export default DemoCookie;
