import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders UD CISC Scheduler text", () => {
    render(<App />);
    const linkElement = screen.getByText(/UD CISC Scheduler/i);
    expect(linkElement).toBeInTheDocument();
});
