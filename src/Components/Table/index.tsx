import React, { Dispatch, SetStateAction, useState } from "react";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



import {DataStructure} from "../Hooks/UseAllAlerts";
import Row from "./Row";
import './index.css';
import useSorting,{options} from "../Hooks/UseSorting";
import SortingToggleBar from "./SortingToggleBar";
import { Button } from "@mui/material";

type TableProps = {
    rows:DataStructure[]
    setAlerts:Dispatch<SetStateAction<DataStructure[]>>
}

const Table = ({rows,setAlerts}: TableProps) => {


    const [toggle,setToggle] = useState<Boolean>(true);//false by default

    return (
        <>
        <Button id="ToggleButton" onClick={() => setToggle(!toggle)}>{toggle? "Hide Options" :"Show Options"}</Button>
        <TableContainer component={Paper}>
            <table>
                
                <TableHead>
                <SortingToggleBar 
                    toggle={toggle}
                    rows={rows}
                    setAlerts={setAlerts}
                    
                />
                    <TableRow id="Titles">
                        <TableCell align="center">Alert Headline</TableCell>
                        <TableCell align="center">Event Name</TableCell>
                        <TableCell align="center">Alert Authority</TableCell>
                        <TableCell align="center">Instructions</TableCell>
                        <TableCell align="center">Alert Type</TableCell>
                        <TableCell align="center" >Currrent Response</TableCell>
                        <TableCell align="center" >Current Urgency</TableCell>
                        <TableCell align="center" >Alert Severity</TableCell>
                    </TableRow>
                </TableHead>
            <TableBody>
                {rows.map((row) => (
                    <Row key={row.id} row={row}/>
                ))}
            </TableBody>
        </table>
        </TableContainer>
        </>
    );
}

export default Table;


/*
Filter by Alert Type
Filter by Current Response
Filter by Current Urgency
Sort by Alert Severity (Severe, Moderate, Minor)
*/