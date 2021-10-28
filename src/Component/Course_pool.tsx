import React from "react";
import "../App.css";

import "bootstrap/dist/css/bootstrap.min.css";

/*function Course_pull(): JSX.Element {
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
}*/


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
            <div key={i} className="item">
                <li >Course ID:_ </li>
                <div>{List_of_Classes[i][0]}</div>
                {/*List_of_Classes[i]*/}
                <li>Title_</li>
                <div> {List_of_Classes[i][1]}</div>
            </div>;
        list[i] = box;
    }
    return <div className="course_Pool"> {list}</div>;
}


export default Course_pull;
