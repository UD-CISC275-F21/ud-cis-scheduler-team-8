import React, { useState } from "react";
import "./App.css";
import Tab from "./Component/Table";
import CoursePool from "./Component/CoursePool";
import Header from "./Header";
import COURSES from "./assets/courses.json";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row } from "react-bootstrap";
import { Course } from "./interfaces/courses";

function App(): JSX.Element {
    

    
    //const [schedule,setSchedule]=useState <Course[]>([]);
    const [pool,SetPool]=useState<Course[]>(COURSES);
    const [ActiveCourse, SetActiveCourse] = useState<Course>(COURSES[0] as Course);
    /*const [currentCourse, setCurrentCourse] = useState<Course>(COURSES[0] as Course);
    const [deck, setDeck] = useState<Course[]>(COURSES);*/
    return (
        <Container className="App">
            <Row>
                <Header />
            </Row>
            <Row>
                <Tab
                    setCourse={SetActiveCourse}
                    course={ActiveCourse}></Tab>
                <CoursePool pool={pool}></CoursePool>
            </Row>

        </Container>

    );
}

export default App;
