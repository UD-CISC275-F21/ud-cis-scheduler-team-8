import React, { useState } from "react";
import "./App.css";
import Tab from "./Component/Table";
import Header from "./Header";
import Course_pull from "./Component/Course_pool";
import "bootstrap/dist/css/bootstrap.min.css";
import { Course } from "./interfaces/courses";
import COURSES from "./assets/coursedata.json";



function App(): JSX.Element {

    const [currentCourse, setCurrentCourse] = useState<Course>(COURSES[0] as Course);
    const [deck, setDeck] = useState<Course[]>(COURSES);

    const [received, setReceived] = useState([] as number[]);

    function getData(id: number) {
        setReceived(received.concat(id));
    }

    return (
        <div>
            <Header />
            <Course_pull clickHandler={getData} />
            

            <Tab
                currentCourse={currentCourse}
                setCurrentCourse={setCurrentCourse}
                deck={deck}
            />
        </div>

    );
}

export default App;
