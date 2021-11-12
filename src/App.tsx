import React, { useState } from "react";
import "./App.css";
import Tab from "./Component/Table";
import CoursePool from "./Component/CoursePool";
import Header from "./Header";
import COURSES from "./assets/courses.json";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import { Course, Semester } from "./interfaces/courses";

function App(): JSX.Element {

    const [pool, setPool]=useState <Course[]>(COURSES); 
    const [schedule,setSchedule] = useState <Course[]>(COURSES);
    const [ActiveCourse, SetActiveCourse] = useState<Course>(COURSES[0]);
    const [semesters, setSemesters] = useState<Semester[]>([]);

    return (
        <Container className="App">
            <Row>
                <Header />
            </Row>
            <Row>
                <Tab
                    /**schedule={schedule}
                    setSchedule={setSchedule}
                    setCourse={SetActiveCourse}
                    course={ActiveCourse}*/
                    semesters={semesters}
                    /**setSemesters={setSemesters}*/></Tab>
                <CoursePool pool={pool} setPool={setPool}></CoursePool>
            </Row>

        </Container>

    );
}

export default App;
