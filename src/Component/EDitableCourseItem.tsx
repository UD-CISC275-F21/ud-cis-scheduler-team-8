import React, {useState} from "react";
import { Course } from "../interfaces/courses";
import { ToggleButton, ButtonGroup, Form, Button } from "react-bootstrap";

export function EditableCourseItem ({course, pool, setPool}: 
    {course: Course, pool: Course[], setPool: (pool: Course[])=>void}) {
    const [editing, setEditing] = useState<boolean>(false);
    const [newDescription, setNewDescription] = useState<string>(course.Description);
    // onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setQuestion(ev.target.value)}
    // onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setAnswer(ev.target.value)}

    //change the descriprion function
     
    function updatePool (): void {
        setPool(pool.map((oldCourse: Course): Course => {
            return course.ID === oldCourse.ID ?
                {...oldCourse, Description: newDescription 
                /** you can add more here ie.(ID: newID) if you make new const before */}:
                oldCourse;
        }));
    }

    function resetEditableReigon(): void{
        setNewDescription(course.Description);
        /** similarly, you can add more pool elements here if you put more
         * const before, (ie. setNewID(course.ID);)
        */
    }

    function deleteButton(): void{
        setPool(pool.filter((oldCourse: Course): boolean => {
            return course.ID !== oldCourse.ID;
        }));
    }

    return editing ?
        <div>
            
            <Form>
                <Form.Group className="mb-3" controlId="addCardForm.answerTextArea">
                    <Form.Label>Course Description</Form.Label>
                    <Form.Control as="textarea" rows={3} 
                        value={newDescription}
                        // onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(ev.target.value)}
                        onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setNewDescription(ev.target.value)}/>
                </Form.Group>
            </Form>


            <Button variant= "success" onClick = {()=>{
                updatePool();
                setEditing(false);
            }}>Save</Button>
            
            <Button variant= "warning" onClick = {()=>{
                resetEditableReigon();
                setEditing(false);
            }}>Cancle</Button>

            <Button variant= "danger" onClick = {()=>{
                deleteButton();
            }}>Delete</Button>

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