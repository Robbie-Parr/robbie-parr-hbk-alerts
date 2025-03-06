import React from "react";

import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import {DataStructure} from "../Hooks/UseAllAlerts";

type RowProps = {
    row: DataStructure
}

const Row = ({row}:RowProps) => {
    return (
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">{row.headline}</TableCell>
            <TableCell >{row.event} </TableCell>
            <TableCell >{row.senderName} </TableCell>
            <TableCell >{row.instruction}</TableCell>
            <TableCell >{row.messageType}</TableCell>
            <TableCell >{row.response}</TableCell>
            <TableCell >{row.urgency}</TableCell>
            <TableCell >{row.severity}</TableCell>
        </TableRow>
    )
}

export default Row;