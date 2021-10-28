import React from "react";
import "./App.css";
import Tab from "./Component/Table";
import Header from "./Header";
import Course_pull from "./Component/Course_pool";
import "bootstrap/dist/css/bootstrap.min.css";



function App(): JSX.Element {

    return (
        <div> 
            <Header/>
            <Course_pull/>
            
            <Tab />
        </div>

    );
}

export default App;
