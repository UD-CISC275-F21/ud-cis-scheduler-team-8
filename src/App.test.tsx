import React from "react";
import { cleanup, getByTestId, render, screen } from "@testing-library/react";
import COURSES from "./assets/courses.json";
import App from "./App";
import CoursePool from "./App"
//import Col from "../src/Component/SemesterControl"

afterEach(() => {
    cleanup()
})

test("renders UD CISC Scheduler text", () => {
    render(<App />);
    const linkElement = screen.getByText(/UD CISC Scheduler/i);
    expect(linkElement).toBeInTheDocument();
});

test("test CoursePool title",()=>{
render(<CoursePool/>);
const linkElement = screen.getByText(/Course Pool/i);
expect(linkElement).toBeInTheDocument();
});

test("if Subtitle Semester Control is rendered",()=>{
    render(<App/>);
    const linkElements = screen.getByText(/Semester Control/i);
});



for(let i=0;i<COURSES.length;i++){
    const name = COURSES[i].Name.toUpperCase().trim();
    test("test if " + name +" is showen",()=>{
        render(<CoursePool/>);
        const linkElements = screen.getAllByText(name);
        expect(linkElements.length).toBeGreaterThan(0)
       
    }) 
};

