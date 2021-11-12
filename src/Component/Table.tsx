import Table from "react-bootstrap/Table";
import React from "react";
import { IoRemoveCircleOutline } from "react-icons/io5";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button, Col} from "react-bootstrap";
import {/**Course,*/ Semester} from "../interfaces/courses";
//import COURSES from "../assets/courses.json";

export function Tab({/**setCourse,course,schedule,setSchedule,*/semesters/**,setSemesters*/}:
    {/**setCourse:(c:Course)=>void, schedule:Course[], setSchedule:(s:Course[])=>void, course:Course,*/
    semesters:Semester[]/**,setSemesters:(se:Semester[])=>void */}): JSX.Element {



    const semesterItems = semesters.map(function (semester: Semester): JSX.Element {
        let courseid= semester.courses[0].ID;
        let coursename= semester.courses[0].Name;
        for (let i = 0; i < 14; i++) {
            courseid = semester.courses[i].ID;
            console.log(courseid);
            coursename= semester.courses[i].Name;
            console.log(coursename);
        }
        return <div key={courseid}>
            <div>
                <Table className="freshman">
                    <tr>
                        <td>{coursename.toUpperCase()}
                            <IoRemoveCircleOutline onClick = {()=>{
                                //deleteButton();
                            }}/></td>
                        <td>{coursename.toUpperCase()}
                            <IoRemoveCircleOutline onClick = {()=>{
                                //deleteButton();
                            }}/></td>
                    </tr>
                </Table>
            </div>
        </div>;
    });

    /**function deleteButton(): void{
        setSemesters(semesters.filter((oldSemester: Semester): boolean => {
            return semesters.courses !== oldSemester.courses;
        }));
    }*/

    return <Col className="pool">
        <h2>Schedule</h2>
        <thead>
            <tr>
                <th>FRESHMAN</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Fall<Button>Clear</Button></td>
                <td>Spring <Button>Clear</Button></td>
            </tr>
            {semesterItems}
        </tbody>
    </Col>;


    
    /**return <Col className="planner">
        <h2>CISC PLANNER</h2>
        <Table className="freshman">
            <thead>
                <tr>
                    <th>FRESHMAN</th>
                    <th> </th></tr>
            </thead>
            <tbody>
                <tr>
                    <td>Fall <Button onClick={() => setSchedule([])}>Clear</Button></td>
                    <td>Spring <Button>Clear</Button></td></tr>
                <tr>
                    <td>{schedule[0].Name} <Button variant="transparent" onClick={()=>setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline onClick={() => setSchedule([])}/></Button></td> 
                    <td>{schedule[1].Name} <Button variant="transparent" onClick={()=>setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td> 
                </tr>
                <tr>
                    <td>{schedule[6].Name} <Button variant="transparent" onClick={()=>setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td> 
                    <td>{schedule[7].Name} <Button variant="transparent" onClick={()=>setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td> 
                </tr>
                <tr>
                    <td>{schedule[13].Name}<Button variant="transparent" onClick={()=>setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
                    <td>{schedule[2].Name} <Button variant="transparent" onClick={()=>setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
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
                    <td>{schedule[3].Name} <Button variant="transparent" onClick={()=>setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td> 
                    <td>{schedule[5].Name} <Button variant="transparent" onClick={()=>setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td> 
                </tr>
                <tr>
                    <td>{schedule[4].Name} <Button variant="transparent" onClick={()=>setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td> 
                    <td>{schedule[8].Name} <Button variant="transparent" onClick={()=>setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td> 
                </tr>
                <tr>
                    <td> <Button variant="transparent" onClick={()=>setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
                    <td>{schedule[9].Name} <Button variant="transparent" onClick={()=>setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
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
                    <td>{schedule[10].Name} <Button variant="transparent" onClick={()=>setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td> 
                    <td>{schedule[11].Name} <Button variant="transparent" onClick={()=>setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td> 
                </tr>
                <tr>
                    <td>{schedule[12].Name} <Button variant="transparent" onClick={()=>setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td> 
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
                    <td>{schedule[0].Name} <Button variant="transparent" onClick={()=>setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td> 
                    <td>{schedule[1].Name} <Button variant="transparent" onClick={()=>setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td> 
                </tr>
                <tr>
                    <td>{schedule[6].Name} <Button variant="transparent" onClick={()=>setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td> 
                    <td>{schedule[7].Name} <Button variant="transparent" onClick={()=>setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td> 
                </tr>
                <tr>
                    <td>{schedule[13].Name} <Button variant="transparent" onClick={()=>setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
                    <td>{schedule[2].Name} <Button variant="transparent" onClick={()=>setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
                </tr>
            </tbody>
        </Table>
    </Col>;
    */


} 


export default Tab;