import React, { useState } from "react";
import "../App.css";
import { Course } from "../interfaces/courses";
import { Semester } from "../interfaces/semester";
import "bootstrap/dist/css/bootstrap.min.css";

//import { propTypes } from "react-bootstrap/esm/Image";

import { Button, Col, Modal } from "react-bootstrap";
import { IoIosMore, IoIosAddCircleOutline } from "react-icons/io";
import { EditableCourseItem } from "./EDitableCourseItem";


export function CoursePool({ pool, setPool, semesters, setSemesters, selectedSemester }: {
    pool: Course[], setPool: (newpool: Course[]) => void,
    selectedSemester: number,
    semesters: Semester[], setSemesters: (schedule: Semester[]) => void
}): JSX.Element {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [ModalCourseID,setModalCourseID]=useState<number>();
    const [ModalCourseName,setModalCourseName]=useState<string>();
    const [ModalCourseDescription,setModalCourseDescription]=useState<string>();
    

    


    function PushCourseToSchedule(course: Course) {
        if (semesters.length === 0) {
            const newSemester: Semester = {
                semesternumber: 1,
                id: 2020,
                full: false,
                courses: [course],
                season: "Fall"
            };
            const modifiedList = [...semesters];

            modifiedList[0] = newSemester;
            setSemesters(modifiedList);
            //setSemesters([newSemester]);
            console.log(semesters);
            //const modifiedList = semesters.map((semester, index,) => index === 0 ? newSemester : semester)
            //setSemesters([semesters[0],newSemester]);
        } else if (semesters[selectedSemester].courses.length <= 5) {
            const Semesterindex = selectedSemester;
            //const Semesterindex = semesters.length - 1;
            //console.log(Semesterindex);
            const oldSemesterID = semesters[selectedSemester].id;
            let oldSemesterFull = semesters[selectedSemester].full;
            const oldSemesterSeason = semesters[selectedSemester].season;
            const courses = [...semesters[selectedSemester].courses];
            if (semesters[Semesterindex].courses.length === 5) {
                oldSemesterFull = true;
            }

            courses.push(course);
            const newSemester: Semester = {
                semesternumber: semesters[selectedSemester].semesternumber,
                id: oldSemesterID,
                full: oldSemesterFull,
                courses: courses,
                season: oldSemesterSeason
            };
            //console.log("else");
            //const modifiedList = semesters.map((item, index) => index === 0 ? newSemester : item);
            const modifiedList = [...semesters];
            console.log("the semester index is " + Semesterindex);
            modifiedList[Semesterindex] = newSemester;

            setSemesters(modifiedList);

            //console.log(semesters);

        } else {
            alert("You may only add six classes to a semester. Please select or add another semester. ");
        }



        //setSchedule([...schedule, course]);
        //console.log(schedule);

    }

    function showIDinModal(course:Course){
        setModalCourseID(course.ID);
        setModalCourseName(course.Name);
        setModalCourseDescription(course.Description);

    }



    


    const courseItems = pool.map(function (course: Course): JSX.Element {
        return <div key={course.ID}>
            <div><Button variant="tansparant" onClick={() => PushCourseToSchedule(course) }><IoIosAddCircleOutline /></Button>
                {course.Name.toUpperCase()}
                <Button variant="tansparant" onClick={()=>{ 
                    handleShow(); 
                    showIDinModal(course);
                } }><IoIosMore /></Button><EditableCourseItem course={course} setPool={setPool} pool={pool} />
            </div>

            


        </div>;

    });

    const ModalBox = <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                <strong>CISC{ModalCourseID}: {ModalCourseName}</strong>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {ModalCourseDescription}
        </Modal.Body>
    </Modal>;




    return <Col className="pool">
        <h2>Course Pool</h2>
        {ModalBox}
        {courseItems}



    </Col>;
}


/*

 
 


function Course_pull(): JSX.Element {
    return (

        <div>


            <table className="course_Pool">
                
                <thead>
                    <tr>
                        <th scope="col"># course ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Prerequisite</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">CISC108</th>
                        <td>Introduction to Computer Science I</td>
                        <td>Required</td>
                        <td>N/A</td>
                    </tr>
                    <tr>
                        <th scope="row">CISC181</th>
                        <td>Introduction to Computer Science II</td>
                        <td>Required</td>
                        <td>CISC108 OR CISC106</td>
                    </tr>
                    <tr>
                        <th scope="row">CISC210</th>
                        <td>Introduction to Systems Programming</td>
                        <td>Required</td>
                        <td>CISC108 OR CISC106</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}


function Course_pull(): JSX.Element {
    
    const List_of_Classes: (string | number)[][] = [];
    List_of_Classes[0] = [108, " Introduction to computer Science 1"];
    List_of_Classes[1] = [181, " Introduction to computer Science 2"];
    List_of_Classes[2] = [210, " Introduction to computer Programming"];
    List_of_Classes[3] = [220, " Data Structures"];
    List_of_Classes[4] = [241, " Calculus 1"];
    List_of_Classes[5] = [275, " Introduction to Software Engineering"];
    List_of_Classes[6] = [355, " Computers, Ethics and Society"];
    List_of_Classes[7] = [110, " Seminar in Composition"];
    List_of_Classes[8] = [242, " Calculus 2"];
    const list: JSX.Element[] = [];





    for (let i = 0; i < 9; i++) {
        const box =
            <div key={i} className="item" onClick={() => Fire_item(i)}>
                <li >Course ID:_ </li>
                <div>{List_of_Classes[i][0]}</div>
                {/*List_of_Classes[i]}
                <li>Title_</li>
                <div> {List_of_Classes[i][1]}</div>
            </div>;
        list[i] = box;
    }


    function Fire_item(id: number) {
        props.clickHandler(id);




    }


    return <div className="course_Pool"> {list}</div>;
}
*/



export default CoursePool;
