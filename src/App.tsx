import React from "react";
import "./App.css";
import Tab from "./Component/Table";
import "bootstrap/dist/css/bootstrap.min.css";

function App(): JSX.Element {
    return (
        <div> 
            <p className="Title"> UD CISC SCHEDULER </p>
            <Tab />
        </div>

    );
}

export default App;
