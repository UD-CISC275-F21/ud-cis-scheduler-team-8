import Table from "react-bootstrap/Table";
import React from "react";
import { IoRemoveCircleOutline } from "react-icons/io5";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button, Col} from "react-bootstrap";
import {Course} from "../interfaces/courses";
import COURSES from "../assets/courses.json";

export function Tab({setCourse,course}:{setCourse:(c:Course)=>void,course:Course}): JSX.Element {
    return <Col className="planner">
        <h2>CISC PLANNER</h2>
        <Table responsive="sm">
            <thead>
                <tr>
                    <th className="year">FRESHMAN</th>
                    <th> </th></tr>
            </thead>
            <tbody>
                <tr>
                    <td>Fall</td>
                    <td>Spring</td></tr>
                <tr>
                    <td>CISC{course.ID} <Button variant="transparent" onClick={()=>setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td> 
                    <td>CISC{course.ID} <Button variant="transparent" onClick={()=>setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td> 
                </tr>
                <tr>
                    <td>CISC{course.ID} <Button variant="transparent" onClick={()=>setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td> 
                    <td>CISC{course.ID} <Button variant="transparent" onClick={()=>setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td> 
                </tr>
                <tr>
                    <td>ENGL110</td>
                    <td>CISC210</td>
                </tr>
            </tbody>
        </Table>
    </Col>;

    /*<Table responsive="sm">
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
                </tr>
                <tr>
                    <td>MATH241 <button><IoRemoveCircleOutline /></button></td>
                    <td>MATH242 <button><IoRemoveCircleOutline /></button></td>
                </tr>
                <tr>
                    <td>ENGL110 <button><IoRemoveCircleOutline /></button></td>
                    <td className="click" onClick={()=> {
                        setCurrentCourse(COURSES[2]); setShow(true);
                    }}>CISC210 <button><IoRemoveCircleOutline /></button></td>
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
                    }}>CISC220 <button><IoRemoveCircleOutline /></button></td>
                    <td className="click" onClick={()=> {
                        setCurrentCourse(COURSES[4]); setShow(true); 
                    }}>CISC275 <button><IoRemoveCircleOutline /></button></td>

                </tr>
                <tr>
                    <td className="click" onClick={()=> {
                        setCurrentCourse(COURSES[5]); setShow(true); 
                    }}>CISC260 <button><IoRemoveCircleOutline /></button></td>
                    <td className="click" onClick={()=> {
                        setCurrentCourse(COURSES[6]); setShow(true); 
                    }}>CISC355 <button><IoRemoveCircleOutline /></button></td>
                </tr>
                <tr>
                    <td>MATH210 <button><IoRemoveCircleOutline /></button></td>
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
                    <td>ENGL110 <button><IoRemoveCircleOutline /></button></td>
                    <td className="click" onClick={()=> {
                        setCurrentCourse(COURSES[2]); setShow(true);
                    }}>CISC210 <button><IoRemoveCircleOutline /></button></td>
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
                    <td>ENGL110 <button><IoRemoveCircleOutline /></button></td>
                    <td className="click" onClick={()=> {
                        setCurrentCourse(COURSES[2]); setShow(true);
                    }}>CISC210 <button><IoRemoveCircleOutline /></button></td>
                </tr>
            </tbody>
        </Table>

       
    </Col>;*/



} 





export default Tab;

