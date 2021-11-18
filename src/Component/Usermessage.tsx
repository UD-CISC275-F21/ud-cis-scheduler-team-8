import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export function Popup() :JSX.Element{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="secondary" onClick={handleShow}>
                Help
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Welcome to UD CISC Scheduler</Modal.Title>
                </Modal.Header>
                <Modal.Body><p>Set up your semester plan by adding semesters and courses you need from the course pool.</p>
                    Check out <a href="https://www1.udel.edu/registrar/">Office of the Registrar</a> for more details.
                    <p><b>Questions?</b>
                    Contact the Registrar`s Office - Registrar@udel.edu or 302-831-2131.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    
                </Modal.Footer>
            </Modal>
        </>
    );
}