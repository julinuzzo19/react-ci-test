import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../src/App";

describe("something truthy and falsy", () => {
  it("true to be true", () => {
    expect(true).toBe(true);
  });

  it("render app component contains hello world!", () => {
    render(<App />);

    expect(screen.getByText("Hola Vercel"));
  });
});
