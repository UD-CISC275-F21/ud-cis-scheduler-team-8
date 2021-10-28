import Table from "react-bootstrap/Table";
import React from "react";
import "./Table.css";
import { IoRemoveCircleOutline } from "react-icons/io5";



function Tab(): JSX.Element {

    return <div className="classtable">
        
        <Table responsive="sm">
            <thead>
                <tr>
                    <th className="year">FRESHMAN</th>
                   
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Fall</td>
                    <td>Spring</td>
                    
                </tr>
                <tr>
                    <td>CISC108 <button><IoRemoveCircleOutline /></button></td> 
                    <td>CISC181 <button><IoRemoveCircleOutline /></button></td>
                </tr>
                <tr>
                    <td>MATH241 <button><IoRemoveCircleOutline /></button></td>
                    <td>MATH242 <button><IoRemoveCircleOutline /></button></td>
                </tr>
                <tr>
                    <td>ENGL110</td>
                    <td>CISC210</td>
                </tr>
            </tbody>
        </Table>
        <Table responsive="md">
            <thead>
                <tr>
                    <th>SOPHOMORE</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Fall</td>
                    <td>Spring</td>
                </tr>
                <tr>
                    <td>CISC220 <button>delete</button></td>
                    <td>CISC275 <button>delete</button></td>
                </tr>
                <tr>
                    <td>CISC260</td>
                    <td>CISC355</td>
                </tr>
                <tr>
                    <td>MATH210</td>
                    <td></td>
                    
                </tr>
            </tbody>
        </Table>
        <Table responsive="lg">
            <thead>
                <tr>
                    <th>JUNIOR</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Fall</td>
                    <td>Spring</td>
                </tr>
                <tr>
                    <td>CISC108 <button>delete</button></td>
                    <td>CISC181 <button>delete</button></td>
                </tr>
                <tr>
                    <td>MATH241</td>
                    <td>MATH242</td>
                </tr>
                <tr>
                    <td>ENGL110</td>
                    <td>CISC210</td>
                </tr>
            </tbody>
        </Table>
        <Table responsive="xl">
            <thead>
                <tr>
                    <th>SENIOR</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Fall</td>
                    <td>Spring</td>
                </tr>
                <tr>
                    <td>CISC108 <button>delete</button></td>
                    <td>CISC181 <button>delete</button></td>
                </tr>
                <tr>
                    <td>MATH241</td>
                    <td>MATH242</td>
                </tr>
                <tr>
                    <td>ENGL110</td>
                    <td>CISC210</td>
                </tr>
            </tbody>
        </Table>

       
    </div>;

   

}






export default Tab;

