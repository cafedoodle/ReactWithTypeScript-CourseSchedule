//import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { DemoBuggyComponent } from "./DemoBuggyComponent";

describe("DemoBuggyComponent", () => {
  it("always throws error because hasError is hardcoded to true", () => {
    expect(() => render(<DemoBuggyComponent />)).toThrow(
      "DemoBuggyComponent crashed!"
    );
  });

  it("never renders success content", () => {
    expect(() => render(<DemoBuggyComponent />)).toThrow();
  });
});
