import React, { useState } from "react";
import "../App.css";
import { Course } from "../interfaces/courses";
import "bootstrap/dist/css/bootstrap.min.css";

//import { propTypes } from "react-bootstrap/esm/Image";

import { Button, Col, Modal } from "react-bootstrap";
import { IoIosMore, IoIosAddCircleOutline } from "react-icons/io";


export function CoursePool({ pool }: { pool: Course[] }): JSX.Element {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //const [ActiveCourse, SetActiveCourse] = useState();


    const courseItems = pool.map(function (course: Course): JSX.Element {
        return <div key={course.ID}>
            <div><Button variant="tansparant" onClick={handleShow}><IoIosAddCircleOutline /></Button>
                CISC{course.ID}: {course.Name.toUpperCase()}
                <Button variant="tansparant" onClick={handleShow}><IoIosMore /></Button>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <strong>CISC{course.ID}: {course.Name}</strong>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {course.Description}
                </Modal.Body>
            </Modal>


        </div>;

    });







    return <Col className="pool">
        <h2>Course Pool</h2>
        {courseItems}






    </Col>;
}


/*

 <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <strong>CISC{pool[0].ID}: {pool[0].Name}</strong>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {pool[0].Description}
            </Modal.Body>
        </Modal>



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