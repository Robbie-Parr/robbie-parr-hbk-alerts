import React from "react";

import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';


import './index.css';
import {options,Bools} from "../../Hooks/UseSorting";

type SortingToggleBarProps ={
    sortingOptions:Bools,
    SortBySeverity:()=>void,
    SortByUrgency:()=>void,
    SortByResponse:()=>void,
    SortByType:()=>void,
    SortByEventName:()=>void
}

const SortingToggleBar = ({
    sortingOptions,
        SortBySeverity,
        SortByUrgency,
        SortByResponse,
        SortByType,
        SortByEventName
        }:SortingToggleBarProps) => {
    
    return(
        <>
            {/*<TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">{row.headline}</TableCell>
            <TableCell >{row.event} </TableCell>
            <TableCell >{row.senderName} </TableCell>
            <TableCell >{row.instruction}</TableCell>
            <TableCell >{row.messageType}</TableCell>
            <TableCell >{row.response}</TableCell>
            <TableCell >{row.urgency}</TableCell>
            <TableCell >{row.severity}</TableCell>
        </TableRow> */}

           <TableRow id="Ordering">
                <TableCell align="center">No Ordering on Headlines</TableCell>
                        <TableCell align="center" onClick={SortByEventName}> 
                            {sortingOptions.eventName===options.HighFirst? "^\n" : 
                                (sortingOptions.eventName===options.LowFirst? "⌄\n" :"") }
                                </TableCell>
                        <TableCell align="center">No Ordering on Authority</TableCell>
                        <TableCell align="center">No Ordering on Instructions</TableCell>
                        <TableCell align="center" onClick={SortByType}>
                        {sortingOptions.type===options.HighFirst? "^\n" : 
                                (sortingOptions.type===options.LowFirst? "⌄\n" :"") }
                            </TableCell>
                        <TableCell align="center" onClick={SortByResponse}>
                        {sortingOptions.response===options.HighFirst? "^\n" : 
                                (sortingOptions.response===options.LowFirst? "⌄\n" :"") }
                            </TableCell>
                        <TableCell align="center" onClick={SortByUrgency}>
                        {sortingOptions.urgency===options.HighFirst? "^\n" : 
                                (sortingOptions.urgency===options.LowFirst? "⌄\n" :"") }
                            </TableCell>
                        <TableCell align="center" onClick={SortBySeverity}>
                        {sortingOptions.severity===options.HighFirst? "^\n" : 
                                (sortingOptions.severity===options.LowFirst? "⌄\n" :"") }
                            </TableCell>
                    </TableRow>
        
        </>
    )
}

export default SortingToggleBar;