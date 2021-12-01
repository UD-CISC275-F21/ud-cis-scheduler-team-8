import React, { useState } from "react";
import "./App.css";
import Tab from "./Component/Table";
import CoursePool from "./Component/CoursePool";
import Header from "./Header";
import COURSES from "./assets/courses.json";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import { Course} from "./interfaces/courses";
import { Semester } from "./interfaces/semester";
import { Popup } from "./Component/Usermessage";
import {getLocalStorageUsers} from  "./Component/SemesterControl";

function App(): JSX.Element {

    const [pool, setPool] = useState<Course[]>(COURSES);
    //const [schedule,setSchedule] = useState <Course[]>(COURSES);
    //const [ActiveCourse, SetActiveCourse] = useState<Course>(COURSES[0]);
    const [semesters, setSemesters] = useState<Semester[]>(getLocalStorageUsers());
    const [selectedSemester,setselectedSemester] =useState(0);

   
    return (
        <Container className="App">
            <Row>
                <Header />
                <Popup />
            </Row>
            <Row>
                <Tab
                    /**schedule={schedule}
                    setSchedule={setSchedule}
                    course={ActiveCourse}
                    setCourse={SetActiveCourse}
                    */
                   
                    setselectedSemester={setselectedSemester}
                    semesters={semesters}
                    setSemesters={setSemesters}></Tab>
                <CoursePool pool={pool} setPool={setPool} semesters={semesters} setSemesters={setSemesters} selectedSemester={selectedSemester}   ></CoursePool>
            </Row>

        </Container>

    );
}

export default App;
