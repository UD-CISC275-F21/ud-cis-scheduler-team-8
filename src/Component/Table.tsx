import Table from "react-bootstrap/Table";
import React from "react";
import { IoRemoveCircleOutline } from "react-icons/io5";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button, Col} from "react-bootstrap";
import {Course} from "../interfaces/courses";
import COURSES from "../assets/courses.json";

export function Tab({setCourse,}:{setCourse:(c:Course)=>void,course:Course}): JSX.Element {
    return <Col className="planner">
        <h2>CISC PLANNER</h2>
        <Table className="freshman">
            <thead>
                <tr>
                    <th>FRESHMAN</th>
                    <th> </th></tr>
            </thead>
            <tbody>
                <tr>
                    <td>Fall</td>
                    <td>Spring</td></tr>
                <tr>
                    <td>CISC{COURSES[0].ID} <Button variant="transparent" onClick={()=>setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td> 
                    <td>CISC{COURSES[1].ID} <Button variant="transparent" onClick={()=>setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td> 
                </tr>
                <tr>
                    <td>MATH{COURSES[6].ID} <Button variant="transparent" onClick={()=>setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td> 
                    <td>MATH{COURSES[7].ID} <Button variant="transparent" onClick={()=>setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td> 
                </tr>
                <tr>
                    <td>ENGL110 <Button variant="transparent" onClick={()=>setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
                    <td>CISC{COURSES[2].ID} <Button variant="transparent" onClick={()=>setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
                </tr>
            </tbody>
        </Table>
        <Table className="sophomore">
            <thead>
                <tr>
                    <th>SOPHOMORE</th>
                    <th> </th></tr>
            </thead>
            <tbody>
                <tr>
                    <td>Fall</td>
                    <td>Spring</td></tr>
                <tr>
                    <td>CISC{COURSES[3].ID} <Button variant="transparent" onClick={()=>setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td> 
                    <td>CISC{COURSES[5].ID} <Button variant="transparent" onClick={()=>setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td> 
                </tr>
                <tr>
                    <td>CISC{COURSES[4].ID} <Button variant="transparent" onClick={()=>setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td> 
                    <td>CISC{COURSES[8].ID} <Button variant="transparent" onClick={()=>setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td> 
                </tr>
                <tr>
                    <td> <Button variant="transparent" onClick={()=>setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
                    <td>CISC{COURSES[9].ID} <Button variant="transparent" onClick={()=>setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
                </tr>
            </tbody>
        </Table>
        <Table className="junior">
            <thead>
                <tr>
                    <th>JUNIOR</th>
                    <th> </th></tr>
            </thead>
            <tbody>
                <tr>
                    <td>Fall</td>
                    <td>Spring</td></tr>
                <tr>
                    <td>CISC{COURSES[10].ID} <Button variant="transparent" onClick={()=>setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td> 
                    <td>CISC{COURSES[11].ID} <Button variant="transparent" onClick={()=>setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td> 
                </tr>
                <tr>
                    <td>CISC{COURSES[12].ID} <Button variant="transparent" onClick={()=>setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td> 
                    <td> <Button variant="transparent" onClick={()=>setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td> 
                </tr>
                <tr>
                    <td> <Button variant="transparent" onClick={()=>setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
                    <td> <Button variant="transparent" onClick={()=>setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
                </tr>
            </tbody>
        </Table>
        <Table className="senior">
            <thead>
                <tr>
                    <th>SENIOR</th>
                    <th> </th></tr>
            </thead>
            <tbody>
                <tr>
                    <td>Fall</td>
                    <td>Spring</td></tr>
                <tr>
                    <td>CISC{COURSES[0].ID} <Button variant="transparent" onClick={()=>setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td> 
                    <td>CISC{COURSES[1].ID} <Button variant="transparent" onClick={()=>setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td> 
                </tr>
                <tr>
                    <td>MATH{COURSES[6].ID} <Button variant="transparent" onClick={()=>setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td> 
                    <td>MATH{COURSES[7].ID} <Button variant="transparent" onClick={()=>setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td> 
                </tr>
                <tr>
                    <td>ENGL110 <Button variant="transparent" onClick={()=>setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
                    <td>CISC{COURSES[2].ID} <Button variant="transparent" onClick={()=>setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
                </tr>
            </tbody>
        </Table>
    </Col>;


} 


export default Tab;

