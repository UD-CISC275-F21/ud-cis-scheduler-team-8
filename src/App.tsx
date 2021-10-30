import React, { useState } from "react";
import "./App.css";
import Tab from "./Component/Table";
import CoursePool from "./Component/CoursePool";
import Header from "./Header";
import COURSES from "./assets/courses.json";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container,Row,Col} from "react-bootstrap";
import {Course} from "./interfaces/courses";





function App(): JSX.Element {
    const [ActiveCourse, SetActiveCourse] = useState<Course>(COURSES[0]);


    return (
        <Container className="App"> 
            <Row>
                <Header/>
            </Row>
            <Row>
                <Tab setCourse={SetActiveCourse}></Tab>
                <CoursePool course={ActiveCourse}></CoursePool>
            </Row>
            
        </Container>

    );
}

export default App;
