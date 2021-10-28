import Table from "react-bootstrap/Table";
import React, { useState } from "react";
import "./Table.css";
import { IoRemoveCircleOutline } from "react-icons/io5";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import {Course} from "../interfaces/courses";
import COURSES from "../assets/coursedata.json";

function Popup({showCourse,show,setShow}: 
    {showCourse: (c:Course) => void, show: boolean,
    setShow:(b: boolean)=>void}):JSX.Element {
    // const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [CourseID, setCourseID]= useState<string>("CourseID");
    const [Name, setName]= useState<string>("CourseName");
    const [Kind, setKind]= useState<string>("CourseKind");
    const [Description, setDescription]= useState<string>("CourseDescription");
    const [Prerequisite, setPrerequisite]= useState<string>("CoursePrerequisite");

    function saveCourse () {
        showCourse({
            CourseID,
            Name,
            Kind,
            Description,
            Prerequisite
        });
        setShow(false);
    }
    

  
    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
          Launch demo modal
            </Button> */}
  
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title><strong>Course: </strong> 
                        {CourseID} 
                        <br></br>
                        {Name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body><strong>Course Description: </strong> 
                    {Description}
                    <strong>Pre-requirement：</strong> 
                    {Prerequisite}.
                    <strong>CISC-Requirement: </strong>
                    {Kind}.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
              Close
                    </Button>
                    <Button variant="primary" onClick={saveCourse}>
              Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


function Tab({currentCourse, setCurrentCourse, deck}: 
    {currentCourse: Course, setCurrentCourse: (c:Course)=>void, deck: Course[]}): JSX.Element {
 
    const [show, setShow] = useState(false);

    return <div className="classtable">
        <Popup show={show} setShow={setShow} showCourse={setCurrentCourse}/>

        <Table responsive="sm">
            <thead>
                <tr>
                    <th className="year">FRESHMAN</th>
                   
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Fall</td>
                    <td>Spring</td>
                    
                </tr>
                <tr>

                    <td className="click" onClick={()=> {
                        setCurrentCourse(COURSES[0]); setShow(true);
                    }}>CISC108 <button><IoRemoveCircleOutline /></button></td>
                    <td className="click" onClick={()=> {
                        setCurrentCourse(COURSES[1]); setShow(true); 
                    }}>CISC181 <button><IoRemoveCircleOutline /></button></td>
                </tr>
                <tr>
                    <td>MATH241 <button><IoRemoveCircleOutline /></button></td>
                    <td>MATH242 <button><IoRemoveCircleOutline /></button></td>
                </tr>
                <tr>
                    <td>ENGL110</td>
                    <td className="click" onClick={()=> {
                        setCurrentCourse(COURSES[2]); setShow(true);
                    }}>CISC210</td>
                </tr>
            </tbody>
        </Table>
        <Table responsive="md">
            <thead>
                <tr>
                    <th>SOPHOMORE</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Fall</td>
                    <td>Spring</td>
                </tr>
                <tr>
                    <td className="click" onClick={()=> {
                        setCurrentCourse(COURSES[3]); setShow(true); 
                    }}>CISC220 <button>delete</button></td>
                    <td className="click" onClick={()=> {
                        setCurrentCourse(COURSES[4]); setShow(true); 
                    }}>CISC275 <button>delete</button></td>

                </tr>
                <tr>
                    <td className="click" onClick={()=> {
                        setCurrentCourse(COURSES[5]); setShow(true); 
                    }}>CISC260</td>
                    <td className="click" onClick={()=> {
                        setCurrentCourse(COURSES[6]); setShow(true); 
                    }}>CISC355</td>
                </tr>
                <tr>
                    <td>MATH210</td>
                    <td></td>
                    
                </tr>
            </tbody>
        </Table>
        <Table responsive="lg">
            <thead>
                <tr>
                    <th>JUNIOR</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Fall</td>
                    <td>Spring</td>
                </tr>
                <tr>
                    <td className="click" onClick={()=> {
                        setCurrentCourse(COURSES[0]); setShow(true);
                    }}>CISC108 <button>delete</button></td>
                    <td className="click" onClick={()=> {
                        setCurrentCourse(COURSES[1]); setShow(true); 
                    }}>CISC181 <button>delete</button></td>
                </tr>
                <tr>
                    <td>MATH241</td>
                    <td>MATH242</td>
                </tr>
                <tr>
                    <td>ENGL110</td>
                    <td className="click" onClick={()=> {
                        setCurrentCourse(COURSES[2]); setShow(true);
                    }}>CISC210</td>
                </tr>
            </tbody>
        </Table>
        <Table responsive="xl">
            <thead>
                <tr>
                    <th>SENIOR</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Fall</td>
                    <td>Spring</td>
                </tr>
                <tr>

                    <td className="click" onClick={()=> {
                        setCurrentCourse(COURSES[0]); setShow(true);
                    }}>CISC108 <button>delete</button></td>
                    <td className="click" onClick={()=> {
                        setCurrentCourse(COURSES[1]); setShow(true); 
                    }}>CISC181 <button>delete</button></td>
                </tr>
                <tr>
                    <td>MATH241</td>
                    <td>MATH242</td>
                </tr>
                <tr>
                    <td>ENGL110</td>
                    <td className="click" onClick={()=> {
                        setCurrentCourse(COURSES[2]); setShow(true);
                    }}>CISC210</td>
                </tr>
            </tbody>
        </Table>

       
    </div>;

   

}





export default Tab;

