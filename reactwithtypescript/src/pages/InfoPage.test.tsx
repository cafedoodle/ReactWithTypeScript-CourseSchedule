// src/pages/InfoPage.test.tsx
import { render, screen } from "@testing-library/react";
import InfoPage from "./InfoPage";

describe("InfoPage", () => {
  it("renders the heading", () => {
    render(<InfoPage />);
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Info Page"
    );
  });
});
