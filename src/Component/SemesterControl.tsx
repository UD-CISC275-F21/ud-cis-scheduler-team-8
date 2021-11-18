import React from "react";
import {Semester } from "../interfaces/courses";
import { Button, Col } from "react-bootstrap";

export const LOCAL_STORAGE_SCHEDULE = "UD-CIS-SCHEDULER-TEAM-8-SCHEDULE";

export const INITIAL_SCHEDULE: Semester[] = [
    { semesternumber: 2021, courses: [{
        "ID": 108,
        "Name": "CISC108: INTRO TO COMPUTER SCIENCE I",
        "Kind": "Required",
        "Prereq": "None",
        "Description": "Computing and principles of programming with an emphasis on systematic program design. Topics include functional programming, data abstraction, procedural abstraction, use of control and state, recursion, testing, and object-oriented programming concepts. Requires no prior programming experience, open to any major, but intended primarily for majors and minors in computer science or mathematics."
    }] },
    { semesternumber: 2022, courses: [{
        "ID": 108,
        "Name": "CISC108: INTRO TO COMPUTER SCIENCE I",
        "Kind": "Required",
        "Prereq": "None",
        "Description": "Computing and principles of programming with an emphasis on systematic program design. Topics include functional programming, data abstraction, procedural abstraction, use of control and state, recursion, testing, and object-oriented programming concepts. Requires no prior programming experience, open to any major, but intended primarily for majors and minors in computer science or mathematics."
    }] },
    { semesternumber: 2023, courses: [{
        "ID": 108,
        "Name": "CISC108: INTRO TO COMPUTER SCIENCE I",
        "Kind": "Required",
        "Prereq": "None",
        "Description": "Computing and principles of programming with an emphasis on systematic program design. Topics include functional programming, data abstraction, procedural abstraction, use of control and state, recursion, testing, and object-oriented programming concepts. Requires no prior programming experience, open to any major, but intended primarily for majors and minors in computer science or mathematics."
    }] },
    { semesternumber: 2024, courses: [{
        "ID": 108,
        "Name": "CISC108: INTRO TO COMPUTER SCIENCE I",
        "Kind": "Required",
        "Prereq": "None",
        "Description": "Computing and principles of programming with an emphasis on systematic program design. Topics include functional programming, data abstraction, procedural abstraction, use of control and state, recursion, testing, and object-oriented programming concepts. Requires no prior programming experience, open to any major, but intended primarily for majors and minors in computer science or mathematics."
    }] },
];

export function getLocalStorageUsers(): Semester[] {
    const rawSchedule: string | null = localStorage.getItem(LOCAL_STORAGE_SCHEDULE);
    if (rawSchedule === null) {
        return [...INITIAL_SCHEDULE];
    } else {
        return JSON.parse(rawSchedule);
    }
}


export function SemesterControl ({semesters, setSemesters}: 
    {semesters: Semester[], setSemesters: (s : Semester[])=>void}): JSX.Element{


    function save(){
        localStorage.setItem(LOCAL_STORAGE_SCHEDULE, JSON.stringify(semesters));
    }
    
    function addSemester(){
        setSemesters([...semesters, {courses:[], semesternumber: semesters.length+1}]);
    }

    
    function resetAllSemester(){
        setSemesters([]);
    }
    
    
    return <Col>
        <h1>Semester Control</h1>

        <Button onClick= {()=>{
            addSemester();
        }}>Add Semester</Button>

        <Button onClick= {()=>{
            save();
        }}>Save</Button>

        {<Button onClick= {()=>{
            resetAllSemester();
        }}>Reset All Semester</Button>}
    </Col>;
}