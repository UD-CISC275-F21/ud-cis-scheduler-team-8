import React from "react";
import "../App.css";

import "bootstrap/dist/css/bootstrap.min.css";

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

export default Course_pull;
