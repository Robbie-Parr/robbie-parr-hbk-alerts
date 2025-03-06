import React from "react";
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

type TableProps = {
    rows:DataStructure[]
}

const Table = ({rows}: TableProps) => {
    const {data,
        sortingOptions,
        SortBySeverity,
        SortByUrgency,
        SortByResponse,
        SortByType,
        SortByEventName
    } = useSorting(rows);

    return (
        <TableContainer component={Paper}>
            <table>
                
                <TableHead>
                <SortingToggleBar 
                    sortingOptions={sortingOptions}
                    SortBySeverity={SortBySeverity}
                    SortByUrgency={SortByUrgency}
                    SortByResponse={SortByResponse}
                    SortByType={SortByType}
                    SortByEventName={SortByEventName}
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
                {data.map((row) => (
                    <Row key={row.id} row={row}/>
                ))}
            </TableBody>
        </table>
        </TableContainer>
    );
}

export default Table;


/*
Filter by Alert Type
Filter by Current Response
Filter by Current Urgency
Sort by Alert Severity (Severe, Moderate, Minor)
*/