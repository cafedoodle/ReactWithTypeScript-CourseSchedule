// src/App.test.tsx
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
  });

  it("renders the layout component", () => {
    render(<App />);
    expect(screen.getByText(/2025 Course Scheduler/i)).toBeInTheDocument();
  });
});
