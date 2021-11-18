import Table from "react-bootstrap/Table";
import React from "react";
import { IoRemoveCircleOutline } from "react-icons/io5";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button} from "react-bootstrap";
import {Course, Semester } from "../interfaces/courses";
//import { countReset } from "console";
import {SemesterControl} from "./SemesterControl";
//import COURSES from "../assets/courses.json";


export function Tab({/**setCourse,course,schedule,setSchedule,*/ semesters, setSemesters}:
    {/**setCourse:(c:Course)=>void, schedule:Course[], setSchedule:(s:Course[])=>void, course:Course,*/
    semesters: Semester[], setSemesters: (s : Semester[])=>void
    }): JSX.Element {

    
    function removeSemester(semesternum: number){
        setSemesters(semesters.filter((oldSemester: Semester): boolean => {
            return semesternum !== oldSemester.semesternumber;
        }));
    }

    // function removeCourse(senumber: number, coursename: string){
    //     setSemesters(semester.map((semester: Semester)=>{
    //         semester.courses.filter((oldSemester: Semester): boolean => {
    //         return coursename !== oldSemester.courses.Name;
    //     }));
    // }
    function removeCourse(senumber: number, coursename: string){
        setSemesters(semesters.map((semester: Semester)=>{
            if (senumber !== semester.semesternumber){
                return semester;
            }else{
                return {...semester, courses: semester.courses.filter((oldCourse: Course): boolean=>{
                    return coursename !== oldCourse.Name;
                })};
            }
        }));
    }


    
    return <div className = "classtable">
        <SemesterControl semesters={semesters} setSemesters= {setSemesters}/>
        {semesters.map((semester: Semester) =>{ 
            return <Table striped bordered hover size="sm" key = {semester.semesternumber}>
                <thead> 
                    <tr>
                        <td>Semester {semester.semesternumber} <Button>Clear</Button><IoRemoveCircleOutline onClick= {()=>{
                            removeSemester(semester.semesternumber);
                        }}/></td>;
                    </tr>
                </thead> 
                <tbody>
                    <tr>
                        {semester.courses.map((course: Course, index: number) =>{
                            return <td key = {index}>{course.Name} <IoRemoveCircleOutline onClick= {()=>{
                                removeCourse(semester.semesternumber, course.Name);
                            }}/></td>;
                        })};

                    </tr>
                </tbody>
            </Table>;
        })};
    </div>;
}

export default Tab;
    
/**function deleteButton(): void{
        setSemesters(semesters.filter((oldSemester: Semester): boolean => {
            return semesters.courses !== oldSemester.courses;
        }));
    }*/

/*return <Col className="pool">
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
    </Col>;*/
    



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
