import React from "react";
import { Semester } from "../interfaces/semester";
import { Button, Col } from "react-bootstrap";
import {INITIAL_SCHEDULE, LOCAL_STORAGE_SCHEDULE} from "../interfaces/initial_schedule";
import {CSVLink} from "react-csv";


export function getLocalStorageUsers(): Semester[] {
    const rawSchedule: string | null = localStorage.getItem(LOCAL_STORAGE_SCHEDULE);
    if (rawSchedule === null) {
        return [...INITIAL_SCHEDULE];
    } else {
        return JSON.parse(rawSchedule);
    }
}


export function SemesterControl ({semesters, setSemesters,setselectedSemester, semenumber, setSemenumber}: 
    {semesters: Semester[], setSemesters: (s : Semester[])=>void, 
    semenumber: number, setSemenumber: (n: number)=>void,
    setselectedSemester:(selected:number)=>void }): JSX.Element{


    function save(){
        localStorage.setItem(LOCAL_STORAGE_SCHEDULE, JSON.stringify(semesters));
    }
    
    function addSemester(){
        setSemesters([...semesters, {courses:[], full:false, id: (semesters.length/2)+2021, season:"Spring", semesternumber: semenumber+1}]);
        setSemenumber(semenumber+1);
    }

    
    function resetAllSemester(){
        setSemesters([]);
    }
    
    
    return <Col>
        <h1>Semester Control</h1>

        <Button onClick= {()=>{
            addSemester();
            setselectedSemester(semesters.length);
        }}>Add Semester</Button>

        <Button onClick= {()=>{
            save();
        }}>Save</Button>

        <Button onClick= {()=>{
            resetAllSemester();
        }}>Reset All Semester</Button>

        <Button variant = 'light'>
            <CSVLink data = {JSON.stringify(semesters,null,5)}>Download</CSVLink>
        </Button>
    </Col>;
}