import Table from "react-bootstrap/Table";
import React from "react";
import { IoRemoveCircleOutline } from "react-icons/io5";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col } from "react-bootstrap";
import { Course } from "../interfaces/courses";
import COURSES from "../assets/courses.json";

export function Tab({ setCourse, schedule, setSchedule }:
    { setCourse: (c: Course) => void, schedule: Course[], setSchedule: (s: Course[]) => void, course: Course }): JSX.Element {


    function PigionHoleCourses(schedule: Course[]): JSX.Element {
        const stuff: (JSX.Element)[] = [];
        for (let i = 0; i < (schedule.length/2)-1; i+=2) {
            console.log(schedule[i].Name);
            const x = <tr>

                <td>{schedule[i].Name} <Button variant="transparent" onClick={() => setCourse(COURSES[1] as Course)}
                ><IoRemoveCircleOutline onClick={() => setSchedule([])} /></Button></td>

                <td>{schedule[i + 1].Name} <Button variant="transparent" onClick={() => setCourse(COURSES[1] as Course)}
                ><IoRemoveCircleOutline onClick={() => setSchedule([])} /></Button></td>

            </tr>;
            stuff[i] = x;
        }


        return <>{stuff}</>;
    }


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
                    <td>Fall <Button onClick={() => setSchedule([])}>Clear</Button></td>
                    <td>Spring <Button>Clear</Button></td></tr>
                {PigionHoleCourses(schedule)}
                <tr>
                    <td>{schedule[6].Name} <Button variant="transparent" onClick={() => setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
                    <td>{schedule[7].Name} <Button variant="transparent" onClick={() => setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
                </tr>
                <tr>
                    <td>{schedule[13].Name}<Button variant="transparent" onClick={() => setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
                    <td>{schedule[2].Name} <Button variant="transparent" onClick={() => setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
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
                    <td>{schedule[3].Name} <Button variant="transparent" onClick={() => setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
                    <td>{schedule[5].Name} <Button variant="transparent" onClick={() => setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
                </tr>
                <tr>
                    <td>{schedule[4].Name} <Button variant="transparent" onClick={() => setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
                    <td>{schedule[8].Name} <Button variant="transparent" onClick={() => setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
                </tr>
                <tr>
                    <td> <Button variant="transparent" onClick={() => setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
                    <td>{schedule[9].Name} <Button variant="transparent" onClick={() => setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
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
                    <td>{schedule[10].Name} <Button variant="transparent" onClick={() => setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
                    <td>{schedule[11].Name} <Button variant="transparent" onClick={() => setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
                </tr>
                <tr>
                    <td>{schedule[12].Name} <Button variant="transparent" onClick={() => setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
                    <td> <Button variant="transparent" onClick={() => setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
                </tr>
                <tr>
                    <td> <Button variant="transparent" onClick={() => setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
                    <td> <Button variant="transparent" onClick={() => setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
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
                    <td>{schedule[0].Name} <Button variant="transparent" onClick={() => setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
                    <td>{schedule[1].Name} <Button variant="transparent" onClick={() => setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
                </tr>
                <tr>
                    <td>{schedule[6].Name} <Button variant="transparent" onClick={() => setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
                    <td>{schedule[7].Name} <Button variant="transparent" onClick={() => setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
                </tr>
                <tr>
                    <td>{schedule[13].Name} <Button variant="transparent" onClick={() => setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
                    <td>{schedule[2].Name} <Button variant="transparent" onClick={() => setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
                </tr>
            </tbody>
        </Table>
    </Col>;


}
/*<Col className="planner">
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
                    
                    <td>{schedule[schedule.length-1].Name} <Button variant="transparent" onClick={() => setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline onClick={() => setSchedule([])} /></Button></td>
                    <td>{schedule[1].Name} <Button variant="transparent" onClick={() => setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
                </tr>
                <tr>
                    <td>{schedule[6].Name} <Button variant="transparent" onClick={() => setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
                    <td>{schedule[7].Name} <Button variant="transparent" onClick={() => setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
                </tr>
                <tr>
                    <td>{schedule[13].Name}<Button variant="transparent" onClick={() => setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
                    <td>{schedule[2].Name} <Button variant="transparent" onClick={() => setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
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
                    <td>{schedule[3].Name} <Button variant="transparent" onClick={() => setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
                    <td>{schedule[5].Name} <Button variant="transparent" onClick={() => setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
                </tr>
                <tr>
                    <td>{schedule[4].Name} <Button variant="transparent" onClick={() => setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
                    <td>{schedule[8].Name} <Button variant="transparent" onClick={() => setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
                </tr>
                <tr>
                    <td> <Button variant="transparent" onClick={() => setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
                    <td>{schedule[9].Name} <Button variant="transparent" onClick={() => setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
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
                    <td>{schedule[10].Name} <Button variant="transparent" onClick={() => setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
                    <td>{schedule[11].Name} <Button variant="transparent" onClick={() => setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
                </tr>
                <tr>
                    <td>{schedule[12].Name} <Button variant="transparent" onClick={() => setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
                    <td> <Button variant="transparent" onClick={() => setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
                </tr>
                <tr>
                    <td> <Button variant="transparent" onClick={() => setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
                    <td> <Button variant="transparent" onClick={() => setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
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
                    <td>{schedule[0].Name} <Button variant="transparent" onClick={() => setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
                    <td>{schedule[1].Name} <Button variant="transparent" onClick={() => setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
                </tr>
                <tr>
                    <td>{schedule[6].Name} <Button variant="transparent" onClick={() => setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
                    <td>{schedule[7].Name} <Button variant="transparent" onClick={() => setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
                </tr>
                <tr>
                    <td>{schedule[13].Name} <Button variant="transparent" onClick={() => setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
                    <td>{schedule[2].Name} <Button variant="transparent" onClick={() => setCourse(COURSES[1] as Course)}><IoRemoveCircleOutline /></Button></td>
                </tr>
            </tbody>
        </Table>
    </Col>; */

export default Tab;

