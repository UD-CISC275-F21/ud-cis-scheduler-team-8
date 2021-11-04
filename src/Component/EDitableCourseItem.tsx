import React, {useState} from "react";
import { Course } from "../interfaces/courses";
import { ToggleButton, ButtonGroup } from "react-bootstrap";

export function EditableCourseItem ({course}: {course: Course}) {
    const [editing, setEditing] = useState<boolean>(false);

    return editing ?
        <div>
            <div>{course.ID}</div>
            <div>{course.Kind}</div>
            <div>{course.Name}</div>
            <div>{course.Description}</div>
            <div>{course.Prereq}</div>
            <ButtonGroup>
                <ToggleButton variant= "warning" checked = {editing} value = "1"
                    id={`toggle-editing-${course.ID}`}
                    type = "checkbox"
                    onChange = {(event) => setEditing(event.currentTarget.checked)}>
                    Cancle
                </ToggleButton>
            </ButtonGroup>
        </div> :
        <div>
            {/*course.ID*/} {/*course.Name*/}

            <ButtonGroup>
                <ToggleButton variant= "primary" checked = {editing} value = "1"
                    id={`toggle-editing-${course.ID}`}
                    type = "checkbox"
                    onChange = {(event) => setEditing(event.currentTarget.checked)}>
                    Edit
                </ToggleButton>
            </ButtonGroup>
        </div>;
}